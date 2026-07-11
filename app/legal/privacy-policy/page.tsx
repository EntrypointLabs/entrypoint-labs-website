import type { Metadata } from "next";

import { LegalLead, LegalPage, LegalSection } from "@/components/squads/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Entrypoint Labs website.",
  alternates: {
    canonical: "/legal/privacy-policy",
  },
};

export default function Page() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="9th July 2026">
      <LegalSection>
        This Privacy Policy explains how Entrypoint Labs (
        <LegalLead>&quot;we,&quot;</LegalLead> <LegalLead>&quot;us,&quot;</LegalLead> or{" "}
        <LegalLead>&quot;our&quot;</LegalLead>) handles information in connection with the
        website located at entrypointlabs.xyz (the <LegalLead>&quot;Site&quot;</LegalLead>). It
        does not apply to the separate products we build — Xend, Ultraprop,
        Cortex, and Pontoon — each of which maintains its own privacy policy
        on its own site. Because this Site does not offer accounts,
        subscriptions, or purchases, the information described below is
        limited to what is necessary to operate, secure, and understand
        traffic to a marketing website.
      </LegalSection>

      <LegalSection>
        <LegalLead>1. Who We Are.</LegalLead> Entrypoint Labs is a product
        research and development lab. This Site is informational only: it
        describes Entrypoint Labs, the products we build, and how to reach
        us. The Site does not offer accounts, does not process payments, and
        does not custody funds.
      </LegalSection>

      <LegalSection>
        <LegalLead>2. Information We Collect.</LegalLead> The Site does not
        require you to create an account or submit personal information to
        browse it. We collect two limited categories of information. First,
        our hosting provider generates standard server logs for every
        request, which may include an IP address, browser and device
        information, the page requested, and the time of the request.
        Second, we use privacy-friendly analytics, described in Section 4,
        to understand aggregate traffic to the Site. We do not knowingly
        collect sensitive personal information, such as financial account
        numbers or government identifiers, through the Site. If you email us
        or message us on X or GitHub using the contact details in Section 10,
        we will see whatever information you choose to include in that
        message, such as your handle and the content of your question.
      </LegalSection>

      <LegalSection>
        <LegalLead>3. How We Use Information.</LegalLead> We use the
        information described in Section 2 to operate, secure, and improve
        the Site — for example, to diagnose technical problems, prevent
        abuse, and understand which pages are useful to visitors. We do not
        sell information collected through the Site, and we do not use it to
        build advertising profiles.
      </LegalSection>

      <LegalSection>
        <LegalLead>4. Cookies.</LegalLead> The Site uses Vercel Analytics to
        measure aggregate traffic. Vercel Analytics is designed to avoid
        cross-site tracking and does not use cookies to identify individual
        visitors across sites. Beyond what this analytics service strictly
        requires to function, the Site does not set tracking cookies or use
        similar tracking technologies.
      </LegalSection>

      <LegalSection>
        <LegalLead>5. Third-Party Services.</LegalLead> The Site is hosted
        on Vercel&apos;s infrastructure, which processes server logs and
        analytics data on our behalf as described above. The Site also links
        to separate product sites (Xend, Ultraprop, Cortex, Pontoon) and to
        third-party platforms such as X and GitHub. Each of those
        destinations has its own privacy practices, which we encourage you
        to review; this Policy does not cover them. Vercel may act as a
        processor of the server log and analytics data described in Section
        2 on our behalf, and its own privacy and security practices govern
        how that data is handled on its infrastructure.
      </LegalSection>

      <LegalSection>
        <LegalLead>6. Data Retention.</LegalLead> We retain server logs only
        as long as needed for security and operational purposes, after which
        they are deleted or aggregated in a way that no longer identifies a
        specific visitor. Aggregate analytics data does not identify
        individual visitors and may be retained indefinitely for historical
        comparison.
      </LegalSection>

      <LegalSection>
        <LegalLead>7. Your Rights.</LegalLead> Depending on where you are
        located, you may have rights to request access to, correction of, or
        deletion of personal information we hold about you. Because the
        Site does not maintain accounts or profiles, we are typically only
        able to act on requests concerning server log data, such as an IP
        address associated with a specific request. To make a request,
        contact us using the details in Section 10 and describe the
        information involved as specifically as you can; we will respond
        within a reasonable time and may ask you to verify your request
        before acting on it.
      </LegalSection>

      <LegalSection>
        <LegalLead>8. Children.</LegalLead> The Site is not directed to
        children, and we do not knowingly collect personal information from
        children through the Site.
      </LegalSection>

      <LegalSection>
        <LegalLead>9. Changes to This Policy.</LegalLead> We may update this
        Policy from time to time by posting a revised version on the Site
        with a new &quot;Last Updated&quot; date. Continued use of the Site
        after a revision is posted constitutes your acceptance of it.
      </LegalSection>

      <LegalSection>
        <LegalLead>10. Contact.</LegalLead> Questions about this Policy can
        be sent to us on X at{" "}
        <a
          href="https://x.com/_0xGifted"
          target="_blank"
          rel="noreferrer"
          className="font-bold underline"
        >
          @_0xGifted
        </a>{" "}
        or through the issue tracker on our GitHub at{" "}
        <a
          href="https://github.com/EntrypointLabs"
          target="_blank"
          rel="noreferrer"
          className="font-bold underline"
        >
          github.com/EntrypointLabs
        </a>
        .
      </LegalSection>
    </LegalPage>
  );
}
