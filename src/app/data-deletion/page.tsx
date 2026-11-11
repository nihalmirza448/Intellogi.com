import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Data deletion",
  description:
    "How to ask Intellogi Technologies to delete the personal data it holds about you, including WhatsApp conversation records.",
  alternates: { canonical: "/data-deletion" },
};

export default function DataDeletionPage() {
  return (
    <LegalPage kicker="Your data" title="Data deletion instructions">
      <p>
        You can ask Intellogi Technologies to delete the personal data we hold
        about you at any time. This includes the WhatsApp conversation records
        described in our <Link href="/privacy">privacy policy</Link>, which
        come from Intellogi&rsquo;s WhatsApp Business number and our Meta app
        &ldquo;nihal-wasup-assistant&rdquo;.
      </p>

      <h2>How to request deletion</h2>
      <ol>
        <li>
          Email{" "}
          <a
            href={`mailto:${COMPANY.email}?subject=${encodeURIComponent("Data deletion request")}`}
          >
            {COMPANY.email}
          </a>{" "}
          with the subject line &ldquo;Data deletion request&rdquo;.
        </li>
        <li>
          Include the WhatsApp phone number you used to message us, with the
          country code, and your name.
        </li>
        <li>
          If you want only some data deleted, for example one conversation,
          tell us which.
        </li>
      </ol>

      <h2>What happens next</h2>
      <ul>
        <li>We confirm we have received your request within 5 working days.</li>
        <li>
          We may ask you to confirm the request from the same WhatsApp number,
          so that we delete the right person&rsquo;s data.
        </li>
        <li>
          We delete your messages, media, contact details and any summaries
          derived from them from our systems within one month, and email you
          when it is done.
        </li>
        <li>
          If the law requires us to keep any record, for example an invoice,
          we tell you what we kept and why.
        </li>
      </ul>

      <h2>Removing our app from your Facebook account</h2>
      <p>
        If you ever connected a Facebook or Meta account to our app, you can
        also remove it yourself. In Facebook, open Settings &amp; privacy,
        then Settings, then Apps and websites. Find
        &ldquo;nihal-wasup-assistant&rdquo; and choose Remove. You can then
        email us as above to delete any data we already received.
      </p>

      <h2>Data held by Meta</h2>
      <p>
        Deleting data from Intellogi&rsquo;s systems does not delete messages
        on your own phone or data that WhatsApp and Meta hold under their own
        policies. To manage that, use the settings in WhatsApp or see the
        WhatsApp privacy policy.
      </p>
    </LegalPage>
  );
}
