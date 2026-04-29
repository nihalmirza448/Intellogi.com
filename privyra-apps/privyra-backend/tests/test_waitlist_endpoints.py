import os
import uuid

import pytest
import requests
from dotenv import load_dotenv

# Waitlist API contract tests: submission + summary + validation
load_dotenv("/app/frontend/.env")
BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")


@pytest.fixture(scope="session")
def api_base_url():
    if not BASE_URL:
        pytest.skip("REACT_APP_BACKEND_URL is not configured")
    return BASE_URL.rstrip("/")


@pytest.fixture(scope="session")
def api_client():
    session = requests.Session()
    session.headers.update({"Content-Type": "application/json"})
    return session


def test_waitlist_summary_schema(api_client, api_base_url):
    response = api_client.get(f"{api_base_url}/api/waitlist/summary", timeout=20)
    assert response.status_code == 200

    data = response.json()
    assert isinstance(data.get("total_signups"), int)
    assert isinstance(data.get("pending_email_sync"), int)
    assert "latest_signup_at" in data


def test_waitlist_create_and_verify_summary_increment(api_client, api_base_url):
    before = api_client.get(f"{api_base_url}/api/waitlist/summary", timeout=20)
    assert before.status_code == 200
    before_data = before.json()

    email = f"TEST_privyra_{uuid.uuid4().hex[:10]}@example.com"
    payload = {
        "name": "TEST Waitlist User",
        "email": email,
        "phone": "+91 9876543210",
    }
    create = api_client.post(f"{api_base_url}/api/waitlist", json=payload, timeout=20)
    assert create.status_code == 200

    created = create.json()
    assert created["success"] is True
    assert created["entry"]["email"] == email
    assert created["entry"]["name"] == "TEST Waitlist User"
    assert created["entry"]["status"] == "early_access_requested"

    after = api_client.get(f"{api_base_url}/api/waitlist/summary", timeout=20)
    assert after.status_code == 200
    after_data = after.json()
    assert after_data["total_signups"] == before_data["total_signups"] + 1


def test_waitlist_duplicate_email_updates_not_inserts(api_client, api_base_url):
    email = f"TEST_privyra_dup_{uuid.uuid4().hex[:10]}@example.com"

    first = api_client.post(
        f"{api_base_url}/api/waitlist",
        json={"name": "TEST First", "email": email, "phone": "+91 9000000001"},
        timeout=20,
    )
    assert first.status_code == 200

    before = api_client.get(f"{api_base_url}/api/waitlist/summary", timeout=20)
    assert before.status_code == 200
    before_total = before.json()["total_signups"]

    second = api_client.post(
        f"{api_base_url}/api/waitlist",
        json={"name": "TEST Updated", "email": email, "phone": "+91 9000000002"},
        timeout=20,
    )
    assert second.status_code == 200
    second_data = second.json()
    assert second_data["entry"]["name"] == "TEST Updated"
    assert second_data["entry"]["phone"] == "+91 9000000002"

    after = api_client.get(f"{api_base_url}/api/waitlist/summary", timeout=20)
    assert after.status_code == 200
    after_total = after.json()["total_signups"]
    assert after_total == before_total


def test_waitlist_rejects_invalid_phone_characters(api_client, api_base_url):
    payload = {
        "name": "TEST Invalid Phone",
        "email": f"TEST_bad_phone_{uuid.uuid4().hex[:8]}@example.com",
        "phone": "12345abc",
    }
    response = api_client.post(f"{api_base_url}/api/waitlist", json=payload, timeout=20)
    assert response.status_code == 400

    data = response.json()
    assert data.get("detail") == "Please enter a valid phone number."


def test_waitlist_rejects_symbol_only_phone(api_client, api_base_url):
    payload = {
        "name": "TEST Symbol Phone",
        "email": f"TEST_symbol_phone_{uuid.uuid4().hex[:8]}@example.com",
        "phone": "--------",
    }
    response = api_client.post(f"{api_base_url}/api/waitlist", json=payload, timeout=20)
    assert response.status_code == 400

    data = response.json()
    assert data.get("detail") == "Please enter a valid phone number."


def test_waitlist_rejects_invalid_email_format(api_client, api_base_url):
    payload = {
        "name": "TEST Invalid Email",
        "email": "not-an-email",
        "phone": "+91 9123456789",
    }
    response = api_client.post(f"{api_base_url}/api/waitlist", json=payload, timeout=20)
    assert response.status_code == 422

    data = response.json()
    assert "detail" in data
