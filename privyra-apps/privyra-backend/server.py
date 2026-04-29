from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str


class WaitlistCreate(BaseModel):
    name: str = Field(min_length=2, max_length=80)
    email: EmailStr
    phone: str = Field(min_length=8, max_length=20)


class WaitlistEntry(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str
    name: str
    email: EmailStr
    phone: str
    source: str
    status: str
    email_provider: Optional[str] = None
    email_sync_status: str
    created_at: str
    updated_at: str


class WaitlistResponse(BaseModel):
    success: bool
    message: str
    entry: WaitlistEntry


class WaitlistSummary(BaseModel):
    total_signups: int
    pending_email_sync: int
    latest_signup_at: Optional[str] = None

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


@api_router.post("/waitlist", response_model=WaitlistResponse)
async def join_waitlist(input: WaitlistCreate):
    cleaned_phone = input.phone.strip()
    if not all(ch.isdigit() or ch in "+-() " for ch in cleaned_phone):
        raise HTTPException(status_code=400, detail="Please enter a valid phone number.")

    digits_only = "".join(ch for ch in cleaned_phone if ch.isdigit())
    if len(digits_only) < 8 or len(digits_only) > 15:
        raise HTTPException(status_code=400, detail="Please enter a valid phone number.")

    current_time = datetime.now(timezone.utc).isoformat()
    existing_entry = await db.waitlist.find_one({"email": str(input.email)}, {"_id": 0})

    if existing_entry:
        updates = {
            "name": input.name.strip(),
            "phone": cleaned_phone,
            "updated_at": current_time,
        }
        await db.waitlist.update_one({"email": str(input.email)}, {"$set": updates})
        merged_entry = {**existing_entry, **updates}

        return WaitlistResponse(
            success=True,
            message="You are already on the waitlist. We have updated your details.",
            entry=WaitlistEntry(**merged_entry),
        )

    waitlist_entry = {
        "id": str(uuid.uuid4()),
        "name": input.name.strip(),
        "email": str(input.email),
        "phone": cleaned_phone,
        "source": "landing_page",
        "status": "early_access_requested",
        "email_provider": None,
        "email_sync_status": "pending_integration",
        "created_at": current_time,
        "updated_at": current_time,
    }

    await db.waitlist.insert_one(waitlist_entry)

    return WaitlistResponse(
        success=True,
        message="Welcome to Privyra early access. You are on the waitlist.",
        entry=WaitlistEntry(**waitlist_entry),
    )


@api_router.get("/waitlist/summary", response_model=WaitlistSummary)
async def waitlist_summary():
    total_signups = await db.waitlist.count_documents({})
    pending_email_sync = await db.waitlist.count_documents(
        {"email_sync_status": "pending_integration"}
    )
    latest = await db.waitlist.find_one({}, {"_id": 0, "created_at": 1}, sort=[("created_at", -1)])

    return WaitlistSummary(
        total_signups=total_signups,
        pending_email_sync=pending_email_sync,
        latest_signup_at=latest["created_at"] if latest else None,
    )


@api_router.get("/download/privyra-sources")
async def download_privyra_sources():
    zip_path = ROOT_DIR.parent / "Privyra_Sources.zip"
    if not zip_path.exists():
        raise HTTPException(status_code=404, detail="Source zip not found.")

    return FileResponse(
        path=str(zip_path),
        media_type="application/zip",
        filename="Privyra_Sources.zip",
    )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()