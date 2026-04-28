/** Marketing copy sourced from the Privyra / Privacy Shield India preview build. */

export const privyraMeta = {
  name: "Privyra",
  tagline: "Privacy Protection for the Modern Internet",
  description:
    "Privyra finds where your phone number, email, and personal details are exposed across broker sites and marketing databases, then automates deletion requests to cut spam calls, spam SMS, and privacy risk.",
} as const;

export const privyraTrustPills = [
  "Privacy-First",
  "Secure by Design",
  "Built for India",
] as const;

export const privyraHero = {
  badge: "Built for India's Privacy",
  headline: "Erase Your Personal Data From The Internet.",
  subheadline: privyraMeta.description,
} as const;

export const privyraWaitlist = {
  title: "Join Privyra Waitlist",
  subtext: "Be first to get early access and lifetime launch discounts.",
  formNote:
    "Early access is coordinated through Intellogi Technologies — use the button below to reach the team.",
} as const;

/** Shown on /projects/privyra — embeds NEXT_PUBLIC_PRIVYRA_DEMO_URL when set. */
export const privyraHostedDemo = {
  kicker: "Live application",
  title: "Interactive product preview",
  description:
    "Below is the same customer-facing Privyra experience hosted on our infrastructure (React frontend and FastAPI waitlist backend). Use it for vendor due diligence, integration planning, or UX review alongside the marketing sections on this page.",
  iframeTitle: "Privyra web application",
  openNewTabLabel: "Open full application in a new tab",
  embedHint:
    "If the preview stays blank, the demo server may need to allow embedding from this domain (for example Content-Security-Policy frame-ancestors or X-Frame-Options). Use “Open full application” above as a fallback.",
  placeholderTitle: "Live preview for partners",
  placeholderBody:
    "The production Privyra app can be embedded here for vendor and partnership reviews. Set NEXT_PUBLIC_PRIVYRA_DEMO_URL to your deployed frontend URL (for example the site where this React build is hosted). Until then, contact Intellogi for a walkthrough or a temporary demo link.",
  placeholderCta: "Contact Intellogi Technologies",
} as const;

export const privyraProblems = {
  kicker: "The Problem",
  headline: "Your Personal Data Is Being Sold Online.",
  description:
    "Thousands of websites and apps collect phone numbers, email addresses, home details, and behavior data, then pass it to brokers and advertisers. That fuels spam calls, scam SMS, phishing attempts, and identity abuse.",
  items: [
    {
      title: "Spam Calls",
      description:
        "Your number is sold to telemarketers who keep calling from unknown numbers.",
    },
    {
      title: "Marketing Databases",
      description:
        "Apps and websites share contact details into hidden targeting databases.",
    },
    {
      title: "Data Brokers",
      description:
        "Brokers package and resell your personal details without clear consent.",
    },
    {
      title: "Identity Risks",
      description:
        "Leaked personal records increase phishing, fraud, and impersonation risks.",
    },
  ],
} as const;

export const privyraHowItWorks = {
  kicker: "How It Works",
  headline: "Privacy cleanup in 3 simple steps.",
  steps: [
    {
      title: "Scan",
      description:
        "Privyra scans public sources and broker networks for exposed personal data.",
    },
    {
      title: "Identify",
      description:
        "We map which companies are storing or trading your phone, email, and profile data.",
    },
    {
      title: "Delete",
      description:
        "Automated legal deletion requests are sent and tracked until your data is removed.",
    },
  ],
} as const;

export const privyraFeatures = {
  kicker: "Product Features",
  headline: "Built to protect your digital identity every day.",
  items: [
    {
      title: "Automated Data Broker Removal",
      description:
        "Send compliant deletion requests to known data sellers on your behalf.",
    },
    {
      title: "Continuous Privacy Monitoring",
      description:
        "Track new exposures over time with recurring scans and broker checks.",
    },
    {
      title: "Spam Risk Detection",
      description:
        "Identify likely spam vectors linked to your leaked contact information.",
    },
    {
      title: "Exposure Reports",
      description: "Get clear reports showing what data is exposed and where it appears.",
    },
    {
      title: "Deletion Workflow Automation",
      description:
        "From discovery to follow-up notices, Privyra handles the repetitive legal process.",
    },
    {
      title: "Privacy Dashboard",
      description:
        "See removals, pending requests, and your live privacy risk in one place.",
    },
  ],
} as const;

export const privyraIndia = {
  kicker: "Why This Matters in India",
  headline: "Data privacy threats are accelerating across India.",
  description:
    "From telemarketing calls to fraudulent outreach, millions of Indians face constant privacy abuse driven by data sharing and leaks. As regulation evolves, individuals want tools that actively remove exposed data instead of only blocking numbers.",
  stats: [
    { label: "Spam Calls Received Daily", value: "120M+" },
    { label: "Users Impacted by Data Sharing", value: "80%" },
    { label: "Avg. Marketing Messages / Week", value: "25+" },
    { label: "Privacy Awareness Growth", value: "3.2x" },
  ],
} as const;

export const privyraDashboard = {
  title: "Privyra Privacy Dashboard",
  chip: "Live Monitoring",
  rows: [
    ["Data Brokers Detected", "134"],
    ["Removal Requests Sent", "92"],
    ["Data Removed", "58"],
    ["Current Risk Score", "23%"],
  ],
  metrics: [
    { label: "Data Brokers Found", value: 134, suffix: "" },
    { label: "Removal Requests Sent", value: 92, suffix: "" },
    { label: "Data Removed", value: 58, suffix: "" },
    { label: "Privacy Risk Score", value: 23, suffix: "%" },
  ],
} as const;

export const privyraTrust = {
  kicker: "Social Proof",
  headline: "Built by privacy enthusiasts and engineers.",
  featuredLabel: "Featured In",
  logos: ["TechCrunch", "Wired", "Forbes", "YourStory"],
} as const;

export const privyraPricing = {
  kicker: "Pricing Preview",
  headline: "Choose the privacy protection level that fits you.",
  note: "Early users get lifetime discounts.",
  tiers: [
    {
      name: "Basic",
      price: "₹499/mo",
      summary: "Personal privacy protection",
      points: [
        "Core data broker scans",
        "Monthly deletion requests",
        "Exposure summary report",
      ],
    },
    {
      name: "Pro",
      price: "₹999/mo",
      summary: "Advanced monitoring and automation",
      points: [
        "Continuous monitoring",
        "Priority deletions",
        "Detailed spam risk alerts",
      ],
    },
    {
      name: "Family",
      price: "₹1999/mo",
      summary: "Protect multiple family members",
      points: [
        "Up to 5 profiles",
        "Shared family dashboard",
        "Central privacy control",
      ],
    },
  ],
} as const;

export const privyraFaq = {
  kicker: "FAQs",
  headline: "Everything you need to know.",
  items: [
    {
      q: "What is a data broker?",
      a: "A data broker is a company that collects personal details from apps, websites, and public records, then sells or shares that information.",
    },
    {
      q: "How does the platform remove my data?",
      a: "Privyra identifies where your data appears, sends deletion requests under applicable privacy rights, and follows up until a final response is received.",
    },
    {
      q: "Is my information safe?",
      a: "Yes. Privyra is designed with security-first architecture and stores only the minimum information needed to process protection workflows.",
    },
    {
      q: "How long does data removal take?",
      a: "Timelines vary by company. Most removals start showing progress in days, while complete coverage may take a few weeks.",
    },
    {
      q: "Does this stop spam calls?",
      a: "It significantly reduces long-term spam exposure by removing your details from major sources that fuel telemarketing lists.",
    },
    {
      q: "When will the product launch?",
      a: "Early access invitations will roll out in phases. Waitlist users will be notified first with onboarding priority.",
    },
  ],
} as const;

export const privyraFinalCta = {
  headline: "Take Back Control Of Your Personal Data.",
  subtext: "Join the waitlist and be the first to protect your privacy.",
} as const;

export const privyraFooter = {
  description:
    "A privacy protection platform helping people remove personal data from the internet.",
  email: "hello@privyra.com",
} as const;

export const privyraImageUrls = {
  heroBg:
    "https://images.unsplash.com/photo-1768916321622-6418c1af5de5?auto=format&fit=crop&w=2000&q=80",
  indiaBg:
    "https://images.unsplash.com/photo-1762868822096-d1434a812532?auto=format&fit=crop&w=2000&q=80",
} as const;
