import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, ContactBlock, LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of service",
  description:
    "The terms for using intellogi.com and messaging Intellogi Technologies on WhatsApp.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage kicker="Terms" title="Terms of service">
      <h2>About these terms</h2>
      <p>
        These terms apply when you use intellogi.com or message Intellogi
        Technologies on WhatsApp. By doing either, you agree to them. Work we
        carry out for clients is governed by a separate written agreement,
        which takes priority over these terms.
      </p>
      <ContactBlock />

      <h2>Using the website</h2>
      <p>
        You may view and share pages of this website for your own information.
        You may not copy its content for commercial use, try to break or
        overload it, or use it for anything unlawful. The content describes
        our work in general terms. It is not advice, and we do not promise
        that it is complete or always up to date.
      </p>

      <h2>Messaging us on WhatsApp</h2>
      <ul>
        <li>
          Our WhatsApp channel is for business enquiries and conversations
          with clients and partners.
        </li>
        <li>
          We use software, including AI tools, to organise and summarise
          messages and to draft replies. A person at Intellogi reviews replies
          before they are sent.
        </li>
        <li>
          Please do not send passwords, payment card details or other
          sensitive personal data over WhatsApp.
        </li>
        <li>
          You can stop receiving messages from us at any time by telling us
          in the chat or by blocking our number in WhatsApp.
        </li>
        <li>
          Your use of WhatsApp itself is also governed by WhatsApp&rsquo;s own
          terms of service.
        </li>
      </ul>

      <h2>Your data</h2>
      <p>
        Our <Link href="/privacy">privacy policy</Link> explains how we handle
        personal data. Our <Link href="/data-deletion">data deletion page</Link>{" "}
        explains how to have it deleted.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The website, its text, design and the Intellogi name and marks belong
        to Intellogi Technologies or its licensors.
      </p>

      <h2>Liability</h2>
      <p>
        We provide the website and our WhatsApp channel as they are. To the
        extent the law allows, we are not liable for any indirect or
        consequential loss arising from your use of them. Nothing in these
        terms limits liability that cannot be limited by law, such as
        liability for death or personal injury caused by negligence, or for
        fraud.
      </p>

      <h2>Changes and governing law</h2>
      <p>
        We may update these terms and will change the date at the top of this
        page when we do. These terms are governed by the law of England and
        Wales, and the courts of England and Wales have jurisdiction.
        Questions go to{" "}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
      </p>
    </LegalPage>
  );
}
