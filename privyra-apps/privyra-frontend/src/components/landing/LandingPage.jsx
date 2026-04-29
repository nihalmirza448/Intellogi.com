import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  Building2,
  Database,
  Fingerprint,
  Globe,
  Mail,
  Phone,
  Radar,
  Shield,
  TriangleAlert,
  UserX,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Toaster, toast } from "sonner";

const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;

const trustIndicators = ["Privacy-First", "Secure by Design", "Built for India"];

const problemCards = [
  {
    title: "Spam Calls",
    description: "Your number is sold to telemarketers who keep calling from unknown numbers.",
    icon: Phone,
  },
  {
    title: "Marketing Databases",
    description: "Apps and websites share contact details into hidden targeting databases.",
    icon: Database,
  },
  {
    title: "Data Brokers",
    description: "Brokers package and resell your personal details without clear consent.",
    icon: Building2,
  },
  {
    title: "Identity Risks",
    description: "Leaked personal records increase phishing, fraud, and impersonation risks.",
    icon: TriangleAlert,
  },
];

const steps = [
  {
    title: "Scan",
    description: "Privyra scans public sources and broker networks for exposed personal data.",
    icon: Radar,
  },
  {
    title: "Identify",
    description: "We map which companies are storing or trading your phone, email, and profile data.",
    icon: Globe,
  },
  {
    title: "Delete",
    description: "Automated legal deletion requests are sent and tracked until your data is removed.",
    icon: UserX,
  },
];

const features = [
  {
    title: "Automated Data Broker Removal",
    description: "Send compliant deletion requests to known data sellers on your behalf.",
    icon: Shield,
  },
  {
    title: "Continuous Privacy Monitoring",
    description: "Track new exposures over time with recurring scans and broker checks.",
    icon: Radar,
  },
  {
    title: "Spam Risk Detection",
    description: "Identify likely spam vectors linked to your leaked contact information.",
    icon: BellRing,
  },
  {
    title: "Exposure Reports",
    description: "Get clear reports showing what data is exposed and where it appears.",
    icon: Fingerprint,
  },
  {
    title: "Deletion Workflow Automation",
    description: "From discovery to follow-up notices, Privyra handles the repetitive legal process.",
    icon: Mail,
  },
  {
    title: "Privacy Dashboard",
    description: "See removals, pending requests, and your live privacy risk in one place.",
    icon: BadgeCheck,
  },
];

const indiaStats = [
  { label: "Spam Calls Received Daily", value: "120M+" },
  { label: "Users Impacted by Data Sharing", value: "80%" },
  { label: "Avg. Marketing Messages / Week", value: "25+" },
  { label: "Privacy Awareness Growth", value: "3.2x" },
];

const dashboardMetrics = [
  { label: "Data Brokers Found", value: 134 },
  { label: "Removal Requests Sent", value: 92 },
  { label: "Data Removed", value: 58 },
  { label: "Privacy Risk Score", value: 23, suffix: "%" },
];

const featuredLogos = ["TechCrunch", "Wired", "Forbes", "YourStory"];

const plans = [
  {
    name: "Basic",
    price: "₹499/mo",
    summary: "Personal privacy protection",
    points: ["Core data broker scans", "Monthly deletion requests", "Exposure summary report"],
  },
  {
    name: "Pro",
    price: "₹999/mo",
    summary: "Advanced monitoring and automation",
    points: ["Continuous monitoring", "Priority deletions", "Detailed spam risk alerts"],
  },
  {
    name: "Family",
    price: "₹1999/mo",
    summary: "Protect multiple family members",
    points: ["Up to 5 profiles", "Shared family dashboard", "Central privacy control"],
  },
];

const faqs = [
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
];

const particles = [
  { top: "8%", left: "6%", delay: "0s" },
  { top: "18%", left: "82%", delay: "1.1s" },
  { top: "33%", left: "68%", delay: "0.5s" },
  { top: "46%", left: "16%", delay: "1.7s" },
  { top: "58%", left: "78%", delay: "2.2s" },
  { top: "72%", left: "40%", delay: "0.8s" },
  { top: "84%", left: "88%", delay: "2.8s" },
];

const AnimatedCounter = ({ target, suffix = "", dataTestId }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const intervalMs = 24;
    const step = Math.max(1, Math.ceil(target / (duration / intervalMs)));

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + step;
        if (next >= target) {
          clearInterval(timer);
          return target;
        }
        return next;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="text-2xl font-bold text-white md:text-3xl" data-testid={dataTestId}>
      {count}
      {suffix}
    </span>
  );
};

export default function LandingPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navItems = useMemo(
    () => [
      { label: "Product", id: "how-it-works" },
      { label: "Features", id: "features" },
      { label: "Pricing", id: "pricing" },
      { label: "FAQ", id: "faq" },
    ],
    [],
  );

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
      };

      const { data } = await axios.post(`${API_URL}/waitlist`, payload);
      toast.success(data.message);
      setForm({ name: "", email: "", phone: "" });
    } catch (error) {
      const message = error.response?.data?.detail || "Unable to submit. Please try again.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="app-shell" data-testid="privyra-app-shell">
      <Toaster richColors position="top-right" />
      <div className="noise-overlay" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1117]/80 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-12" data-testid="main-navbar">
          <div className="flex items-center gap-3" data-testid="brand-area">
            <div className="brand-dot" aria-hidden="true" />
            <div>
              <p className="font-heading text-xl font-bold text-white" data-testid="brand-name">
                Privyra
              </p>
              <p className="text-xs text-[#b8bcc8]" data-testid="brand-tagline">
                Privacy Protection for the Modern Internet
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-8 md:flex" data-testid="navbar-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-[#b8bcc8] transition-colors hover:text-[#00f5ff]"
                data-testid={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2" data-testid="navbar-action-buttons">
            <a
              href="/api/download/privyra-sources"
              download="Privyra_Sources.zip"
              className="inline-flex h-9 items-center justify-center rounded-full border border-[#00f5ff]/35 bg-[#00f5ff]/12 px-3 text-xs font-semibold text-[#00f5ff] transition-[transform,background-color,border-color] hover:scale-105 hover:border-[#00f5ff] hover:bg-[#00f5ff]/20 sm:px-4 sm:text-sm"
              data-testid="navbar-download-zip-button"
            >
              Download ZIP
            </a>
            <Button
              type="button"
              onClick={() => scrollToSection("waitlist")}
              className="rounded-full bg-[#00f5ff] px-4 text-xs text-[#0f1117] transition-[transform,box-shadow,background-color] hover:scale-105 hover:bg-[#00d3dc] hover:shadow-[0_0_24px_rgba(0,245,255,0.5)] sm:px-5 sm:text-sm"
              data-testid="navbar-join-early-access-button"
            >
              Join Early Access
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-24" id="hero" data-testid="hero-section">
          <img
            src="https://images.unsplash.com/photo-1768916321622-6418c1af5de5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwyfHxjeWJlcnNlY3VyaXR5JTIwZGlnaXRhbCUyMHNoaWVsZCUyMHJhZGFyJTIwc2Nhbm5pbmclMjBhYnN0cmFjdCUyMGRhdGElMjBibHVlfGVufDB8fHx8MTc3Mjg3NTYwMHww&ixlib=rb-4.1.0&q=85"
            alt="Abstract digital security background"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
            data-testid="hero-background-image"
          />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative z-10" data-testid="hero-content-column">
              <span className="hero-badge" data-testid="hero-india-badge">
                🇮🇳 Built for India’s Privacy
              </span>
              <h1 className="font-heading text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl" data-testid="hero-headline">
                Erase Your Personal Data From The Internet.
              </h1>
              <p className="mt-6 max-w-2xl text-base text-[#b8bcc8] md:text-lg" data-testid="hero-subheadline">
                Privyra finds where your phone number, email, and personal details are exposed across broker sites and marketing databases, then automates deletion requests to cut spam calls, spam SMS, and privacy risk.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4" data-testid="hero-cta-group">
                <Button
                  type="button"
                  onClick={() => scrollToSection("waitlist")}
                  className="rounded-full bg-[#00f5ff] px-7 py-6 text-base font-bold text-[#0f1117] transition-[transform,box-shadow,background-color] hover:scale-[1.03] hover:bg-[#00d3dc] hover:shadow-[0_0_28px_rgba(0,245,255,0.55)]"
                  data-testid="hero-primary-cta"
                >
                  Join Early Access
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => scrollToSection("how-it-works")}
                  className="rounded-full border-[#00f5ff]/40 bg-transparent px-7 py-6 text-base text-[#00f5ff] transition-[border-color,color,background-color] hover:border-[#00f5ff] hover:bg-[#00f5ff]/10 hover:text-white"
                  data-testid="hero-secondary-cta"
                >
                  See How It Works
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-3" data-testid="trust-indicators-group">
                {trustIndicators.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#b8bcc8]"
                    data-testid={`trust-indicator-${tag.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <aside className="relative z-10 flex flex-col gap-6" data-testid="hero-visual-column">
              <div className="radar-card" data-testid="hero-radar-visual">
                <div className="radar-shell" aria-hidden="true">
                  <div className="ring ring-one" />
                  <div className="ring ring-two" />
                  <div className="ring ring-three" />
                  <div className="sweep" />
                </div>
                <p className="mt-6 text-sm text-[#b8bcc8]" data-testid="hero-radar-caption">
                  Live scan simulation: detecting exposed records across data broker domains.
                </p>
              </div>

              <div
                id="waitlist"
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                data-testid="waitlist-form-card"
              >
                <h2 className="font-heading text-2xl font-bold text-white" data-testid="waitlist-form-heading">
                  Join Privyra Waitlist
                </h2>
                <p className="mt-2 text-sm text-[#b8bcc8]" data-testid="waitlist-form-subtext">
                  Be first to get early access and lifetime launch discounts.
                </p>
                <form onSubmit={handleSubmit} className="mt-5 space-y-3" data-testid="waitlist-form">
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="h-11 border-white/15 bg-[#111520] text-white placeholder:text-[#6d7381]"
                    data-testid="waitlist-name-input"
                  />
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="h-11 border-white/15 bg-[#111520] text-white placeholder:text-[#6d7381]"
                    data-testid="waitlist-email-input"
                  />
                  <Input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="h-11 border-white/15 bg-[#111520] text-white placeholder:text-[#6d7381]"
                    data-testid="waitlist-phone-input"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-11 w-full rounded-full bg-[#00f5ff] text-base font-bold text-[#0f1117] transition-[transform,box-shadow,background-color] hover:scale-[1.01] hover:bg-[#00d3dc] hover:shadow-[0_0_22px_rgba(0,245,255,0.5)] disabled:cursor-not-allowed disabled:opacity-70"
                    data-testid="waitlist-submit-button"
                  >
                    {isSubmitting ? "Submitting..." : "Get Early Access"}
                  </Button>
                </form>
              </div>
            </aside>
          </div>
          {particles.map((particle, index) => (
            <span
              key={`particle-${index}`}
              className="particle"
              style={{ top: particle.top, left: particle.left, animationDelay: particle.delay }}
              aria-hidden="true"
            />
          ))}
        </section>

        <section className="section-shell" id="problem" data-testid="problem-section">
          <div className="mx-auto w-full max-w-7xl">
            <p className="section-kicker" data-testid="problem-kicker">
              The Problem
            </p>
            <h2 className="section-title" data-testid="problem-headline">
              Your Personal Data Is Being Sold Online.
            </h2>
            <p className="section-copy" data-testid="problem-description">
              Thousands of websites and apps collect phone numbers, email addresses, home details, and behavior data, then pass it to brokers and advertisers. That fuels spam calls, scam SMS, phishing attempts, and identity abuse.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-testid="problem-card-grid">
              {problemCards.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="glass-card group min-h-52"
                    data-testid={`problem-card-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    <Icon className="h-8 w-8 text-[#00f5ff] transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                    <h3 className="mt-4 font-heading text-xl font-semibold text-white" data-testid={`problem-card-title-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#b8bcc8]" data-testid={`problem-card-desc-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-shell" id="how-it-works" data-testid="how-it-works-section">
          <div className="mx-auto w-full max-w-7xl">
            <p className="section-kicker" data-testid="how-it-works-kicker">
              How It Works
            </p>
            <h2 className="section-title" data-testid="how-it-works-headline">
              Privacy cleanup in 3 simple steps.
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3" data-testid="how-it-works-steps-grid">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article
                    key={step.title}
                    className="glass-card step-card"
                    data-testid={`how-step-${step.title.toLowerCase()}`}
                  >
                    <span className="step-count" data-testid={`how-step-count-${step.title.toLowerCase()}`}>
                      0{index + 1}
                    </span>
                    <Icon className="h-8 w-8 text-[#00f5ff]" aria-hidden="true" />
                    <h3 className="mt-4 font-heading text-2xl font-semibold text-white" data-testid={`how-step-title-${step.title.toLowerCase()}`}>
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#b8bcc8]" data-testid={`how-step-desc-${step.title.toLowerCase()}`}>
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-shell" id="features" data-testid="features-section">
          <div className="mx-auto w-full max-w-7xl">
            <p className="section-kicker" data-testid="features-kicker">
              Product Features
            </p>
            <h2 className="section-title" data-testid="features-headline">
              Built to protect your digital identity every day.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3" data-testid="features-grid">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={feature.title}
                    className="glass-card group feature-card"
                    data-testid={`feature-card-${feature.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    <div className="feature-icon-wrap">
                      <Icon className="h-7 w-7 text-[#00f5ff]" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 font-heading text-xl font-semibold text-white" data-testid={`feature-title-${feature.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#b8bcc8]" data-testid={`feature-desc-${feature.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-shell relative overflow-hidden" id="india-matters" data-testid="india-matters-section">
          <img
            src="https://images.unsplash.com/photo-1762868822096-d1434a812532?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHw0fHxzcGFtJTIwY2FsbCUyMHBob25lJTIwc2NyZWVuJTIwaGFja2VyJTIwZGFyayUyMGhvb2RpZSUyMGluZGlhbiUyMGNpdHklMjBidXN5JTIwc3RyZWV0fGVufDB8fHx8MTc3Mjg3NTYwMXww&ixlib=rb-4.1.0&q=85"
            alt="Indian city visual"
            className="absolute inset-0 h-full w-full object-cover opacity-10 grayscale"
            data-testid="india-context-image"
          />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative z-10" data-testid="india-content-column">
              <p className="section-kicker" data-testid="india-kicker">
                Why This Matters in India
              </p>
              <h2 className="section-title" data-testid="india-headline">
                Data privacy threats are accelerating across India.
              </h2>
              <p className="section-copy" data-testid="india-description">
                From telemarketing calls to fraudulent outreach, millions of Indians face constant privacy abuse driven by data sharing and leaks. As regulation evolves, individuals want tools that actively remove exposed data instead of only blocking numbers.
              </p>
            </div>
            <div className="relative z-10 grid grid-cols-2 gap-4" data-testid="india-stats-grid">
              {indiaStats.map((stat) => (
                <article
                  key={stat.label}
                  className="glass-card p-5"
                  data-testid={`india-stat-${stat.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                >
                  <p className="font-heading text-3xl font-black text-[#00f5ff]" data-testid={`india-stat-value-${stat.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-[#b8bcc8]" data-testid={`india-stat-label-${stat.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                    {stat.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell" id="dashboard-preview" data-testid="dashboard-preview-section">
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-card" data-testid="dashboard-mock-card">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-heading text-2xl font-semibold text-white" data-testid="dashboard-mock-title">
                  Privyra Privacy Dashboard
                </h3>
                <span className="rounded-full bg-[#00f5ff]/15 px-3 py-1 text-xs font-semibold text-[#00f5ff]" data-testid="dashboard-live-chip">
                  Live Monitoring
                </span>
              </div>
              <div className="space-y-4" data-testid="dashboard-list">
                {[
                  ["Data Brokers Detected", "134"],
                  ["Removal Requests Sent", "92"],
                  ["Data Removed", "58"],
                  ["Current Risk Score", "23%"],
                ].map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-[#101520] px-4 py-3"
                    data-testid={`dashboard-row-${key.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    <p className="text-sm text-[#b8bcc8]" data-testid={`dashboard-row-label-${key.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                      {key}
                    </p>
                    <p className="font-heading text-lg font-bold text-white" data-testid={`dashboard-row-value-${key.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4" data-testid="animated-metrics-grid">
              {dashboardMetrics.map((metric) => (
                <article
                  key={metric.label}
                  className="glass-card p-5"
                  data-testid={`metric-card-${metric.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                >
                  <AnimatedCounter
                    target={metric.value}
                    suffix={metric.suffix || ""}
                    dataTestId={`metric-value-${metric.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  />
                  <p className="mt-1 text-sm text-[#b8bcc8]" data-testid={`metric-label-${metric.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                    {metric.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell" id="trust" data-testid="trust-section">
          <div className="mx-auto w-full max-w-7xl">
            <p className="section-kicker" data-testid="trust-kicker">
              Social Proof
            </p>
            <h2 className="section-title" data-testid="trust-headline">
              Built by privacy enthusiasts and engineers.
            </h2>
            <p className="section-copy" data-testid="featured-in-label">
              Featured In
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-testid="featured-logo-grid">
              {featuredLogos.map((logo) => (
                <div
                  key={logo}
                  className="flex min-h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-semibold text-[#d5d8e0]"
                  data-testid={`featured-logo-${logo.toLowerCase()}`}
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell" id="pricing" data-testid="pricing-section">
          <div className="mx-auto w-full max-w-7xl">
            <p className="section-kicker" data-testid="pricing-kicker">
              Pricing Preview
            </p>
            <h2 className="section-title" data-testid="pricing-headline">
              Choose the privacy protection level that fits you.
            </h2>
            <p className="section-copy" data-testid="pricing-note">
              Early users get lifetime discounts.
            </p>
            <div className="mt-10 grid gap-6 lg:grid-cols-3" data-testid="pricing-cards-grid">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className="glass-card flex h-full flex-col"
                  data-testid={`pricing-card-${plan.name.toLowerCase()}`}
                >
                  <h3 className="font-heading text-2xl font-semibold text-white" data-testid={`pricing-name-${plan.name.toLowerCase()}`}>
                    {plan.name}
                  </h3>
                  <p className="mt-2 font-heading text-3xl font-bold text-[#00f5ff]" data-testid={`pricing-price-${plan.name.toLowerCase()}`}>
                    {plan.price}
                  </p>
                  <p className="mt-2 text-sm text-[#b8bcc8]" data-testid={`pricing-summary-${plan.name.toLowerCase()}`}>
                    {plan.summary}
                  </p>
                  <ul className="mt-4 flex-1 space-y-2 text-sm text-[#b8bcc8]" data-testid={`pricing-points-${plan.name.toLowerCase()}`}>
                    {plan.points.map((point) => (
                      <li key={point} className="flex items-start gap-2" data-testid={`pricing-point-${plan.name.toLowerCase()}-${point.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                        <ArrowRight className="mt-0.5 h-4 w-4 text-[#00f5ff]" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    type="button"
                    onClick={() => scrollToSection("waitlist")}
                    className="mt-5 rounded-full bg-[#0b3d91] text-white transition-[transform,background-color,box-shadow] hover:scale-[1.02] hover:bg-[#0a347e] hover:shadow-[0_0_24px_rgba(108,99,255,0.35)]"
                    data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                  >
                    Join The Waitlist
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell" id="faq" data-testid="faq-section">
          <div className="mx-auto w-full max-w-4xl">
            <p className="section-kicker" data-testid="faq-kicker">
              FAQs
            </p>
            <h2 className="section-title" data-testid="faq-headline">
              Everything you need to know.
            </h2>
            <Accordion type="single" collapsible className="mt-8 w-full" data-testid="faq-accordion">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.q}
                  value={`item-${index}`}
                  className="border-b border-white/10"
                  data-testid={`faq-item-${index + 1}`}
                >
                  <AccordionTrigger
                    className="text-left text-white hover:text-[#00f5ff]"
                    data-testid={`faq-question-${index + 1}`}
                  >
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#b8bcc8]" data-testid={`faq-answer-${index + 1}`}>
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-shell" id="final-cta" data-testid="final-cta-section">
          <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-white/10 bg-[#101723] px-8 py-14 text-center md:px-12">
            <h2 className="font-heading text-4xl font-black text-white md:text-5xl" data-testid="final-cta-headline">
              Take Back Control Of Your Personal Data.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-[#b8bcc8] md:text-base" data-testid="final-cta-subtext">
              Join the waitlist and be the first to protect your privacy.
            </p>
            <Button
              type="button"
              onClick={() => scrollToSection("waitlist")}
              className="mt-8 rounded-full bg-[#00f5ff] px-8 py-6 text-base font-bold text-[#0f1117] transition-[transform,box-shadow,background-color] hover:scale-[1.03] hover:bg-[#00d3dc] hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]"
              data-testid="final-cta-button"
            >
              Get Early Access
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-12 md:px-12" data-testid="footer-section">
        <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div data-testid="footer-brand-block">
            <h3 className="font-heading text-2xl font-bold text-white" data-testid="footer-brand-name">
              Privyra
            </h3>
            <p className="mt-3 max-w-lg text-sm text-[#b8bcc8]" data-testid="footer-brand-description">
              A privacy protection platform helping people remove personal data from the internet.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div data-testid="footer-links-product-block">
              <p className="text-xs uppercase tracking-[0.2em] text-[#6f7583]" data-testid="footer-links-title">
                Product
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[#d4d7de]">
                <li>
                  <button type="button" onClick={() => scrollToSection("how-it-works")} className="transition-colors hover:text-[#00f5ff]" data-testid="footer-link-how-it-works">
                    How It Works
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => scrollToSection("features")} className="transition-colors hover:text-[#00f5ff]" data-testid="footer-link-product">
                    Product
                  </button>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-[#00f5ff]" data-testid="footer-link-privacy-policy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-[#00f5ff]" data-testid="footer-link-terms">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-[#00f5ff]" data-testid="footer-link-contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div data-testid="footer-socials-block">
              <p className="text-xs uppercase tracking-[0.2em] text-[#6f7583]" data-testid="footer-socials-title">
                Social
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[#d4d7de]">
                <li>
                  <a href="#" className="transition-colors hover:text-[#00f5ff]" data-testid="footer-social-twitter">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-[#00f5ff]" data-testid="footer-social-linkedin">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@privyra.com" className="transition-colors hover:text-[#00f5ff]" data-testid="footer-social-email">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
