import type { Metadata } from "next";

import { LegalLead, LegalPage, LegalSection } from "@/components/squads/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for the Entrypoint Labs website.",
  alternates: {
    canonical: "/legal/terms-of-service",
  },
};

export default function Page() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="9th July 2026">
      <LegalSection>
        This Terms of Service agreement (the <LegalLead>&quot;Agreement&quot;</LegalLead>) governs
        your access to and use of the website located at entrypointlabs.xyz and
        its subdomains (the <LegalLead>&quot;Site&quot;</LegalLead>), operated by Entrypoint Labs (
        <LegalLead>&quot;Entrypoint Labs,&quot;</LegalLead> <LegalLead>&quot;we,&quot;</LegalLead>{" "}
        <LegalLead>&quot;us,&quot;</LegalLead> or <LegalLead>&quot;our&quot;</LegalLead>). By accessing
        or using the Site, you agree to be bound by this Agreement. If you do
        not agree, you should not access or use the Site.
      </LegalSection>

      <LegalSection>
        BY ACCESSING OR USING THE SITE IN ANY WAY, INCLUDING BROWSING,
        READING CONTENT, OR FOLLOWING A LINK FROM THE SITE, YOU ACKNOWLEDGE
        THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THIS
        AGREEMENT IN ITS ENTIRETY.
      </LegalSection>

      <LegalSection>
        <LegalLead>1. Acceptance of Terms.</LegalLead> This Agreement applies
        to anyone who visits or uses the Site, regardless of whether you have
        created an account with, or purchased anything from, Entrypoint Labs
        or any product referenced on the Site. The Site itself does not offer
        accounts, subscriptions, or purchases. We may update this Agreement
        from time to time as described in Section 9, and your continued use
        of the Site after an update constitutes acceptance of the revised
        terms.
      </LegalSection>

      <LegalSection>
        <LegalLead>2. About the Site.</LegalLead> The Site is an
        informational and marketing resource. It describes Entrypoint Labs,
        the products we build, and how to reach us. Nothing on the Site
        constitutes financial, investment, legal, tax, or other professional
        advice, and nothing on the Site is an offer or solicitation to buy or
        sell any security, token, or financial instrument. Any figures,
        roadmaps, or forward-looking statements on the Site are illustrative
        only and may change without notice. You should conduct your own
        research and consult independent professional advisors before making
        any financial, legal, or business decision.
      </LegalSection>

      <LegalSection>
        <LegalLead>3. Products.</LegalLead> Entrypoint Labs builds and
        operates several separate products, including Xend (xend.global),
        Ultraprop (ultraprop.xyz), Cortex (usecortexai.xyz), and Pontoon
        (pontoon.entrypointlabs.xyz).
        Each product is governed by its own terms of service, privacy policy,
        and other agreements published on that product&apos;s respective
        site, and none of those terms are incorporated into this Agreement.
        The Site may link to a product&apos;s website for your convenience;
        that link does not mean the product is part of, or offered under,
        this Agreement. We do not review, endorse, or take responsibility
        for content, terms, or practices on a linked product site beyond
        what is stated in that product&apos;s own agreements.
      </LegalSection>

      <LegalSection>
        <LegalLead>4. Intellectual Property.</LegalLead> All content on the
        Site, including text, graphics, logos, marks, icons, and the
        underlying code and design, is owned by Entrypoint Labs or its
        licensors and is protected by copyright, trademark, and other
        intellectual property laws. <LegalLead>&quot;Entrypoint Labs,&quot;</LegalLead>{" "}
        associated logos, and product names are marks of Entrypoint Labs or
        its affiliates. Except as necessary to view the Site in a standard
        web browser, you may not copy, reproduce, modify, distribute, or
        create derivative works from any part of the Site without our prior
        written permission.
      </LegalSection>

      <LegalSection>
        <LegalLead>5. Acceptable Use.</LegalLead> You agree not to use the
        Site to: (a) violate any applicable law or regulation; (b) probe,
        scan, or attempt to breach the security of the Site or any related
        system; (c) interfere with or disrupt the Site&apos;s operation,
        including through excessive automated requests; (d) misrepresent
        your affiliation with Entrypoint Labs; or (e) collect data from the
        Site through automated means except as permitted by robots.txt. We
        may restrict or block access to the Site for anyone we reasonably
        believe has violated this section.
      </LegalSection>

      <LegalSection>
        <LegalLead>6. Third-Party Links.</LegalLead> The Site may link to
        third-party websites, including product sites, social media, and
        documentation such as a litepaper, that we do not operate. We
        provide these links for convenience only. We do not control and are
        not responsible for the content, security, or practices of any
        third-party site, and including a link does not imply our
        endorsement of it. You access third-party sites at your own risk and
        subject to their own terms.
      </LegalSection>

      <LegalSection>
        <LegalLead>7. DISCLAIMER OF WARRANTIES.</LegalLead> THE SITE AND ALL
        CONTENT ON IT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
        AVAILABLE,&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS,
        IMPLIED, OR STATUTORY, INCLUDING WITHOUT LIMITATION WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
        NON-INFRINGEMENT. ENTRYPOINT LABS DOES NOT WARRANT THAT THE SITE
        WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT ANY
        INFORMATION ON THE SITE IS ACCURATE, COMPLETE, OR CURRENT.
      </LegalSection>

      <LegalSection>
        <LegalLead>8. LIMITATION OF LIABILITY.</LegalLead> TO THE FULLEST
        EXTENT PERMITTED BY LAW, ENTRYPOINT LABS AND ITS OFFICERS,
        EMPLOYEES, AND CONTRACTORS WILL NOT BE LIABLE FOR ANY INDIRECT,
        INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS
        OF PROFITS, DATA, OR GOODWILL, ARISING FROM OR RELATED TO YOUR
        ACCESS TO OR USE OF, OR INABILITY TO ACCESS OR USE, THE SITE, EVEN
        IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THIS
        LIMITATION APPLIES REGARDLESS OF THE LEGAL THEORY ON WHICH A CLAIM
        IS BASED.
      </LegalSection>

      <LegalSection>
        <LegalLead>9. Changes to the Terms.</LegalLead> We may revise this
        Agreement at any time by posting an updated version on the Site with
        a new &quot;Last Updated&quot; date. Changes take effect as soon as
        they are posted. It is your responsibility to review this Agreement
        periodically; continued use of the Site after a revision is posted
        constitutes your acceptance of it.
      </LegalSection>

      <LegalSection>
        <LegalLead>10. Termination.</LegalLead> We may suspend or terminate
        your access to the Site at any time, without notice, if we
        reasonably believe you have violated this Agreement. Sections of
        this Agreement that by their nature should survive termination,
        including Sections 4, 7, 8, and 11, will survive any termination of
        your access.
      </LegalSection>

      <LegalSection>
        <LegalLead>11. Governing Law.</LegalLead> This Agreement is governed
        by the laws applicable in the operator&apos;s place of
        establishment, without regard to conflict-of-laws principles. Any
        dispute arising from this Agreement or your use of the Site will be
        resolved under those laws.
      </LegalSection>

      <LegalSection>
        <LegalLead>12. Contact.</LegalLead> Questions about this Agreement
        can be sent to us on X at{" "}
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
