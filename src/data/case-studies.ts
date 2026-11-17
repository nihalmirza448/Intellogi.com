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
    title: "Mutual Aid Portal: grant coordination and compliance for Sudan",
    summary:
      "An FCDO-funded portal and database coordinating mutual aid into Sudan, with grant audit, compliance checks and sanctions screening built in.",
    sector: "Humanitarian response · Locally led aid",
    location: "Sudan",
    fundedBy: "UK Foreign, Commonwealth & Development Office (FCDO)",
    partners: [
      { label: "Client", value: "Proximity2Humanity International (P2H)" },
      { label: "Funded by", value: "UK Government — Foreign, Commonwealth & Development Office" },
      { label: "Contracting", value: "Intellogi as technology lead, through Gisa Group" },
    ],
    role: "Technology lead — data and systems",
    status: "Live system in operation",
    constraint:
      "Aid to Sudan moves under emergency pressure, with many actors, funds going to community responders, and no shared picture of who is doing what. Donors need every grant to be traceable and screened; responders need a system they can actually staff.",
    delivered: [
      {
        title: "Coordination portal and database",
        body: "One place for case and aid flows and a shared operational picture across the actors involved.",
      },
      {
        title: "Grant audit and compliance checks",
        body: "Checks on FCDO grant funds disbursed to partners in Sudan, applying donor fiduciary requirements, with every reported figure traceable to its source input.",
      },
      {
        title: "Sanctions screening",
        body: "Screening of recipients against sanctions lists, built into the grant workflow rather than run as a separate manual step.",
      },
    ],
    outcome: [
      "A live system that community operators can staff and run, giving the donor traceable, screened grant flows into a high-risk context.",
    ],
    capabilities: [
      "Grant management systems",
      "Donor compliance and fiduciary controls",
      "Sanctions screening",
      "Case and aid-flow platforms",
    ],
    link: { href: "https://mutual-aid-portal.vercel.app/login", label: "View the live system" },
  },
  {
    slug: "humanitarian-stablecoin-payments-pilot",
    title: "Humanitarian payments pilot: chat platform with stablecoin transfers",
    summary:
      "A pilot chat platform with stablecoin payments, built with Convexity Technologies for the Prosper Global Humanitarian Ventures Lab.",
    sector: "Humanitarian finance · Digital payments",
    location: "Pilot",
    fundedBy: "Prosper Global Humanitarian Ventures Lab",
    partners: [
      { label: "Built with", value: "Convexity Technologies (Nigeria)" },
      { label: "Funded by", value: "Prosper Global Humanitarian Ventures Lab" },
      { label: "Contracting", value: "Intellogi as technology lead, through Gisa Group" },
    ],
    role: "Technology lead",
    status: "Pilot",
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
