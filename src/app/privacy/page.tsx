import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, ContactBlock, LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Intellogi Technologies collects, uses and protects personal data on intellogi.com and in its WhatsApp messaging tools.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage kicker="Privacy" title="Privacy policy">
      <h2>Who we are</h2>
      <p>
        This policy explains how Intellogi Technologies (&ldquo;Intellogi&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles personal data. We are the
        controller of the personal data described here.
      </p>
      <ContactBlock />

      <h2>What this policy covers</h2>
      <p>It covers two things:</p>
      <ul>
        <li>this website, intellogi.com; and</li>
        <li>
          Intellogi&rsquo;s WhatsApp messaging tools, which connect our own
          WhatsApp Business number to the WhatsApp Business Platform provided
          by Meta. This includes the Meta app registered to us as
          &ldquo;intellogi-wassap-assistant&rdquo;.
        </li>
      </ul>

      <h2>Data we collect on this website</h2>
      <p>
        The website has no account system, no contact form and no advertising
        or analytics cookies. Our hosting provider, Vercel, processes standard
        technical data such as IP address, browser type and the pages
        requested, in order to deliver the site and keep it secure. If you
        email us, we receive your email address and whatever you choose to
        write.
      </p>

      <h2>Data we collect through WhatsApp</h2>
      <p>
        When you exchange messages with Intellogi&rsquo;s WhatsApp Business
        number, Meta passes the following to our systems:
      </p>
      <ul>
        <li>your WhatsApp phone number and profile name;</li>
        <li>
          the content of the messages you send us and that we send you,
          including any media or files;
        </li>
        <li>timestamps and delivery and read status; and</li>
        <li>
          when the number is first connected, a one-time copy of up to 180
          days of earlier one-to-one chats on that number, as provided by
          Meta&rsquo;s history sync.
        </li>
      </ul>
      <p>
        We do not receive WhatsApp group chats, calls or status updates. We
        only receive conversations with our own business number. We do not
        access your other WhatsApp chats or your contacts.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>to keep a record of business conversations with us;</li>
        <li>
          to file each conversation under the right project and produce
          internal summaries for Intellogi staff;
        </li>
        <li>
          to draft replies, which a person at Intellogi reviews before they
          are sent; and
        </li>
        <li>to respond to you and provide the services you ask us for.</li>
      </ul>
      <p>
        Our legal bases under UK GDPR are our legitimate interest in running
        and following up our business correspondence, and taking steps at
        your request before or under a contract with you. We do not sell
        personal data, and we do not use it for advertising or to build
        marketing profiles.
      </p>

      <h2>Who we share it with</h2>
      <p>
        We use the following service providers, each acting on our
        instructions:
      </p>
      <ul>
        <li>
          <strong>Meta Platforms</strong>, which operates WhatsApp and the
          WhatsApp Business Platform. Meta&rsquo;s own handling of your data is
          set out in the WhatsApp privacy policy.
        </li>
        <li>
          <strong>Google Cloud</strong>, which hosts the server that receives
          and stores WhatsApp messages, in the United States (us-central1).
        </li>
        <li>
          <strong>Anthropic</strong>, whose Claude AI model we use to
          summarise conversations and draft replies. Anthropic processes
          message content to return a result to us.
        </li>
        <li>
          <strong>Vercel</strong>, which hosts this website.
        </li>
      </ul>
      <p>
        Some of these providers process data outside the United Kingdom,
        including in the United States. Where they do, we rely on safeguards
        recognised under UK data protection law, such as the UK International
        Data Transfer Addendum to the EU standard contractual clauses. We may
        also disclose data where the law requires it.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep WhatsApp conversation records for as long as we have a
        working relationship with you, and no longer than 24 months after
        your last message to us, unless the law requires us to keep them
        longer. Website server logs are kept by Vercel under its standard
        retention periods.
      </p>

      <h2>How we protect it</h2>
      <p>
        Messages are received over encrypted connections, every incoming
        webhook is checked against Meta&rsquo;s signature, and access to the
        stored data is limited to Intellogi staff who need it.
      </p>

      <h2>Your rights</h2>
      <p>
        Under UK data protection law you can ask us to give you a copy of
        your data, correct it, delete it, restrict or object to how we use it,
        or transfer it to someone else. To make a request, email{" "}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We reply
        within one month. To have your WhatsApp data deleted, follow the
        steps on our <Link href="/data-deletion">data deletion page</Link>.
      </p>
      <p>
        You can also complain to the Information Commissioner&rsquo;s Office
        at <a href="https://ico.org.uk/make-a-complaint/">ico.org.uk</a>.
      </p>

      <h2>Children</h2>
      <p>
        Our services are for businesses and are not directed at children
        under 16. We do not knowingly collect their data.
      </p>

      <h2>Changes</h2>
      <p>
        If we change this policy, we will update the date at the top of this
        page. Our <Link href="/terms">terms of service</Link> explain the
        rules for using our website and WhatsApp channel.
      </p>
    </LegalPage>
  );
}
