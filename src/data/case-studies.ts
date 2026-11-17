/**
 * Programme case studies. Source: Intellogi capability statement (Sept 2026)
 * and the Africa CDC expression of interest (Oct 2026). Contract references,
 * values and referee contacts are deliberately left out — they are shared
 * with partners on request.
 */

export type CaseStudy = {
  slug: string;
  title: string;
  /** Short line used on cards and in meta descriptions (≤155 chars). */
  summary: string;
  sector: string;
  location: string;
  commissionedBy?: string;
  fundedBy?: string;
  partners: { label: string; value: string }[];
  role: string;
  status: string;
  stats?: { value: string; label: string }[];
  /** Shown under the stats, e.g. the date the figures were taken. */
  statsNote?: string;
  constraint: string;
  delivered: { title: string; body: string }[];
  outcome: string[];
  capabilities: string[];
  link?: { href: string; label: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "gedaref-early-warning-system",
    title: "Community early warning system for Gedaref State, Sudan",
    summary:
      "Design, build and handover of a digital early warning platform for the Gedaref State Early Warning Unit, commissioned by IOM with NIDAA.",
    sector: "Disaster risk reduction · Peacebuilding · Climate",
    location: "Eastern and Western Galabat localities, Gedaref State, Sudan",
    commissionedBy: "International Organization for Migration (IOM)",
    partners: [
      { label: "Commissioned by", value: "International Organization for Migration (IOM)" },
      { label: "Implementing partner", value: "NIDAA — Sudanese Development Call Organization" },
      {
        label: "Government counterpart",
        value: "Ministry of Production and Economic Resources, Gedaref State — Early Warning Unit",
      },
      {
        label: "Programme",
        value:
          "Enhancing Peace and Stability through Disaster Risk Reduction and Resilience Building Strategies",
      },
    ],
    role: "Technical partner — design, build and handover of the digital early warning platform",
    status: "Live and in use; transition to state custodianship under way",
    stats: [
      { value: "20", label: "Communities covered" },
      { value: "237", label: "Members engaged in structure and resource mapping" },
      { value: "241", label: "Representatives trained across eight workshops" },
      { value: "45%", label: "Female participation (41% youth)" },
      { value: "20", label: "Local mediation committees supported" },
      { value: "8", label: "Co-design and training workshops" },
      { value: "3", label: "Custodian layers, community to state" },
      { value: "2", label: "Operating languages: English and Arabic" },
    ],
    constraint:
      "Farmer–pastoralist tension in Gedaref is driven by shifting livestock movement, contested corridors and competition for pasture and water. The state needed warning of climate, resource and conflict risk early enough to act — in a conflict-affected area with intermittent power, weak connectivity and Arabic-speaking users — and a system its own teams could run after the programme ends.",
    delivered: [
      {
        title: "A community-led early warning and response system",
        body: "Covering environmental and climate conditions, natural resource pressure, socio-economic stress, and conflict and social cohesion — combining community observation with independent technical data sources.",
      },
      {
        title: "An operational digital platform",
        body: "Automated daily monitoring against agreed risk thresholds, issuing graded alerts to the responsible authority. Built to work on low-specification devices over weak connections.",
      },
      {
        title: "Preventive resource governance in practice",
        body: "Livestock corridor demarcation, joint water-access scheduling and seasonal coordination agreements, developed with farming and pastoralist communities and the Native Administration.",
      },
      {
        title: "Institutional handover architecture",
        body: "A three-layer custodian model linking community reporters, local coordinators and the state Early Warning Unit, with operating procedures in English and Arabic and a documented migration path to state ownership.",
      },
    ],
    outcome: [
      "The platform is live and in use, and the system and its outputs have been publicly acknowledged by the Gedaref State Ministry of Production and Economic Resources.",
      "The same operating chain — community observation, local coordination, a state technical authority receiving alerts in its own language and format — is the basis of the national livestock movement, health and extension programme Intellogi is now developing with NIDAA, taken forward with IOM and FAO in their respective mandates.",
    ],
    capabilities: [
      "Early warning systems",
      "Low-connectivity platform design",
      "Arabic-language operations",
      "Government handover and custodianship",
      "Community data collection",
    ],
  },
  {
    slug: "mutual-aid-portal",
    title: "Mutual Aid Portal: $26.6M of aid to Sudan, tracked end to end",
    summary:
      "An FCDO-funded portal running the whole grant cycle for Sudan's Emergency Response Rooms: $26.6M transferred, 2,634 projects, compliance built in.",
    sector: "Humanitarian response · Locally led aid",
    location: "Sudan — 10 states",
    fundedBy: "UK Foreign, Commonwealth & Development Office (FCDO)",
    partners: [
      { label: "Client", value: "Proximity2Humanity International (P2H)" },
      { label: "Funded by", value: "UK Government — Foreign, Commonwealth & Development Office" },
      { label: "Users and owners", value: "Localization Hub and the Localization Coordination Council (LCC), Sudan" },
      { label: "Contracting", value: "Intellogi as technology lead, through Gisa Group" },
    ],
    role: "Technology lead — data and systems, delivered with a remote team across the UK, Uganda and Sudan",
    status: "Live; run and developed locally by the Localization Hub team",
    // To add once confirmed: OCR extraction accuracy (%) and hours saved per
    // report or per month. Add them as entries below and they will render.
    stats: [
      { value: "$26.6M", label: "Transferred to emergency rooms through the portal" },
      { value: "$17.7M", label: "Planned activity in work plans" },
      { value: "2,634", label: "Projects planned in the portal" },
      { value: "10+", label: "Donors' grants tracked in one system" },
      { value: "429", label: "Emergency Response Rooms covered" },
      { value: "504", label: "Financial reports processed with OCR" },
      { value: "93", label: "Users on role-based access" },
      { value: "100%", label: "Of the F1–F5 grant cycle run in the portal" },
    ],
    statsNote:
      "Transferred, planned, project and donor figures are from the portal dashboard, November 2026. Room, report and user counts are from the Milestone 3 report, March 2026.",
    constraint:
      "Sudan's Emergency Response Rooms are volunteer-run and move aid under emergency pressure. Grant paperwork — work plans, approvals, agreements, financial and programme reports — lived in forms, spreadsheets and WhatsApp, so no one had a single picture of where money went. Donors need every grant traceable and screened; responders need a system volunteers can actually use.",
    delivered: [
      {
        title: "The whole grant cycle in one system",
        body: "Work plans (F1), approvals (F2), agreements (F3), financial reports (F4) and programme reports (F5) are now submitted only through the portal, giving the Localization Hub one source of data for the first time.",
      },
      {
        title: "OCR for receipts and reports",
        body: "Financial and programme reports are read automatically from uploaded documents, with manual entry and an accept/reject review step so a person confirms every figure before it counts.",
      },
      {
        title: "Dashboards and an overdue tracker",
        body: "Real-time views of funding flows, reporting status and projects past their reporting deadline, replacing manual chasing.",
      },
      {
        title: "Role-based access for every level",
        body: "Permissions for base and state emergency rooms and administrators, so each person sees and edits only what their role needs.",
      },
      {
        title: "Compliance and sanctions screening",
        body: "Names on grant applications are checked against sanctions lists, with a match flagged for review — built for the donor's fiduciary requirements on funds sent into a high-risk context.",
      },
      {
        title: "Notifications and surveys in the app",
        body: "Structured coordination and data collection from volunteers, reducing dependence on WhatsApp.",
      },
    ],
    outcome: [
      "The portal is the only route for grant paperwork across the Emergency Response Rooms: $26.6M has been transferred through it across 2,634 planned projects.",
      "Weekly co-development sessions mean the Localization Hub team now maintains and extends the system itself — the handover was designed in, not added at the end.",
    ],
    capabilities: [
      "Grant management systems",
      "OCR and document processing",
      "Donor compliance and sanctions screening",
      "Role-based access control",
      "Local ownership and handover",
    ],
    link: { href: "https://mutual-aid-portal.vercel.app/login", label: "View the live system" },
  },
  {
    slug: "humanitarian-stablecoin-payments-pilot",
    title: "Humanitarian payments pilot: chat platform with stablecoin transfers",
    summary:
      "Stablecoin cash transfers to Sudan's Emergency Response Rooms over chat, delivered with a five-partner consortium and Convexity Technologies.",
    sector: "Humanitarian finance · Digital payments",
    location: "Sudan — Emergency Response Rooms",
    fundedBy: "Prosper Global Humanitarian Ventures Lab",
    partners: [
      { label: "Built with", value: "Convexity Technologies (Nigeria)" },
      { label: "Funded by", value: "Prosper Global Humanitarian Ventures Lab" },
      {
        label: "Consortium",
        value:
          "Proximity2Humanity, Localization Hub, Mercy Corps Ventures, Stellar Development Foundation and Gisa Group",
      },
      { label: "Contracting", value: "Intellogi as technology lead, through Gisa Group" },
    ],
    role: "Technology lead",
    status: "Pilot",
    stats: [
      { value: "5", label: "Partners coordinated in the consortium" },
      { value: "1", label: "Channel for payments and conversation: chat" },
    ],
    constraint:
      "Getting money to people in crisis settings is slow and expensive when banking is disrupted. The pilot tested whether payments could reach recipients through a channel they already use — chat — using stablecoin transfers.",
    delivered: [
      {
        title: "Chat-based payment platform",
        body: "A chat platform with stablecoin payments built in, so transfers and the conversation around them happen in one place.",
      },
    ],
    outcome: [
      "A working pilot for the Humanitarian Ventures Lab, delivered with Convexity Technologies.",
    ],
    capabilities: ["Digital payments", "Stablecoin rails", "Pilot delivery"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
