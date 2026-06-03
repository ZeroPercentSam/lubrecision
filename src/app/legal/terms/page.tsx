import type { Metadata } from 'next';
import { NO_MEDICAL_ADVICE, FDA_STATUS_LINE, REGULATORY_NOTICE } from '@/lib/compliance';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms governing use of the Lubecision website by healthcare professionals and business users. This informational, pre-commercial site does not offer products for sale.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p className="legal-updated">Last updated: June 2, 2026</p>

      <div className="legal-callout">
        <p>
          These Terms of Service govern your access to and use of the Lubecision website.
          By using the site, you agree to them. Please read them carefully &mdash; they
          include important disclaimers about the investigational status of our product
          and limits on our liability.
        </p>
      </div>

      <h2>1. Acceptance of these terms</h2>
      <p>
        These Terms of Service (the &ldquo;Terms&rdquo;) govern your access to and use of the
        website operated by C.K. New Generation LLC (&ldquo;Lubecision,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) and any content, features, and materials made
        available through it (collectively, the &ldquo;Site&rdquo;). By accessing or using the
        Site, you agree to be bound by these Terms and by our{' '}
        <a href="/legal/privacy">Privacy Policy</a>, which is incorporated by reference. If you
        do not agree to these Terms, do not access or use the Site.
      </p>
      <p>
        If you use the Site on behalf of an organization, you represent that you have authority
        to bind that organization to these Terms, and &ldquo;you&rdquo; refers to both you and
        that organization.
      </p>

      <h2>2. Eligibility and intended audience</h2>
      <p>
        The Site is intended for healthcare professionals, hospitals, surgical facilities,
        distributors, and other business users, and is directed to them on a
        business-to-business basis. It is not directed to consumers or to patients seeking
        medical advice or treatment information.
      </p>
      <p>
        By using the Site, you represent that you are at least the age of majority in your
        jurisdiction and are accessing the Site in a professional or business capacity. The Site
        is not intended for use by patients, and you should not rely on it for personal medical
        decisions. If you are a patient, please consult a qualified healthcare provider.
      </p>

      <h2>3. About the Site and our products (investigational; not for sale)</h2>
      <p>{FDA_STATUS_LINE}</p>
      <p>{REGULATORY_NOTICE}</p>
      <p>
        The Site is provided for general informational purposes only. It does not offer any
        product for sale, does not display pricing, and does not accept orders, quotes, or
        purchase requests. Nothing on the Site constitutes an offer to sell, a solicitation of
        an offer to buy, or a recommendation to use any product, and no contract for the sale of
        goods is formed through the Site. Any future availability of products will depend on,
        among other things, applicable regulatory clearances and will be subject to separate
        terms.
      </p>

      <h2>4. No medical advice</h2>
      <p>{NO_MEDICAL_ADVICE}</p>
      <p>
        You are solely responsible for any clinical decisions, and you should rely on the
        professional judgment of qualified healthcare providers and on cleared or approved
        product labeling rather than on information presented on the Site.
      </p>

      <h2>5. License to use the Site</h2>
      <p>
        Subject to your compliance with these Terms, we grant you a limited, revocable,
        non-exclusive, non-transferable, and non-sublicensable license to access and use the
        Site for your internal, lawful, informational, and business purposes. This license does
        not transfer any ownership rights, and all rights not expressly granted are reserved. We
        may suspend, restrict, or terminate your access to the Site at any time, with or without
        notice, including if we believe you have violated these Terms.
      </p>

      <h2>6. Intellectual property</h2>
      <p>
        The Site and all content on it, including text, graphics, logos, images, layout,
        design, and software, are owned by C.K. New Generation LLC or its licensors and are
        protected by intellectual-property and other laws. &ldquo;Lubecision&rdquo; and our
        related names and logos are our trademarks. You may not use them without our prior
        written permission.
      </p>
      <p>
        Third-party names, trademarks, and logos referenced on the Site, including da
        Vinci&reg;, are the property of their respective owners and are referenced for
        identification and informational purposes only. Their use does not imply any
        affiliation with, endorsement by, or sponsorship by those owners. For further detail,
        see our <a href="/legal/disclaimer">Disclaimers</a>.
      </p>

      <h2>7. Acceptable use and prohibited conduct</h2>
      <p>You agree not to, and not to permit any third party to:</p>
      <ul>
        <li>Use the Site for any unlawful purpose or in violation of these Terms;</li>
        <li>
          Scrape, harvest, data-mine, reverse engineer, decompile, or attempt to derive the
          source code of any part of the Site, except to the extent such restriction is
          prohibited by applicable law;
        </li>
        <li>
          Interfere with or disrupt the integrity, security, or performance of the Site, or
          attempt to gain unauthorized access to it or to any related systems or networks;
        </li>
        <li>
          Introduce viruses, malware, or other harmful code, or use any automated means to
          overload or impair the Site;
        </li>
        <li>
          Infringe or misappropriate the intellectual-property or other rights of C.K. New
          Generation LLC or any third party;
        </li>
        <li>
          Misrepresent your identity or affiliation, or impersonate any person or entity; or
        </li>
        <li>
          Copy, reproduce, republish, frame, distribute, or create derivative works from the
          Site except as expressly permitted by these Terms or with our prior written consent.
        </li>
      </ul>

      <h2>8. User submissions</h2>
      <p>
        If you submit information to us through the Site, including through a contact or
        information-request form, you represent that the information you provide is accurate,
        current, and complete, and that you have the right to provide it. You are responsible for
        keeping it accurate. Information you submit is handled in accordance with our{' '}
        <a href="/legal/privacy">Privacy Policy</a>. Please do not submit patient information,
        protected health information, or other sensitive personal data through the Site.
      </p>
      <p>
        To the extent you provide us with any suggestions, feedback, or ideas about the Site or
        our products, you agree that we may use them without restriction or obligation to you.
      </p>

      <h2>9. Third-party links</h2>
      <p>
        The Site may contain links to third-party websites, resources, or services that we do
        not own or control. These links are provided for your convenience only. We do not
        endorse and are not responsible for the content, products, services, or practices of any
        third-party site, and your use of any third-party site is at your own risk and subject to
        that site&rsquo;s own terms and policies.
      </p>

      <h2>10. Disclaimers of warranties</h2>
      <p>
        THE SITE AND ALL CONTENT, MATERIALS, AND INFORMATION ON IT ARE PROVIDED &ldquo;AS
        IS&rdquo; AND &ldquo;AS AVAILABLE,&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS,
        IMPLIED, OR STATUTORY. To the maximum extent permitted by applicable law, we disclaim all
        warranties, including any implied warranties of merchantability, fitness for a particular
        purpose, title, and non-infringement, and any warranties arising out of course of
        dealing or usage of trade.
      </p>
      <p>
        We do not warrant that the Site will be uninterrupted, timely, secure, or error-free,
        that defects will be corrected, or that the Site or its servers are free of harmful
        components. We make no warranty that any information on the Site is accurate, complete,
        reliable, current, or suitable for any particular purpose. Some jurisdictions do not
        allow the exclusion of certain warranties, so some of the above exclusions may not apply
        to you.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL C.K. NEW GENERATION
        LLC, ITS AFFILIATES, OR THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS,
        OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR
        PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS
        OPPORTUNITY, ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF, OR INABILITY TO
        ACCESS OR USE, THE SITE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING
        NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT WE HAVE BEEN ADVISED
        OF THE POSSIBILITY OF SUCH DAMAGES.
      </p>
      <p>
        To the maximum extent permitted by applicable law, our total aggregate liability arising
        out of or relating to these Terms or the Site will not exceed one hundred U.S. dollars
        (US&nbsp;$100). Some jurisdictions do not allow the limitation or exclusion of liability
        for certain damages, so some of the above limitations may not apply to you, and nothing
        in these Terms limits liability that cannot be limited under applicable law.
      </p>

      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless C.K. New Generation LLC and its
        affiliates, and their respective officers, directors, employees, contractors, and agents,
        from and against any claims, liabilities, damages, losses, costs, and expenses, including
        reasonable attorneys&rsquo; fees, arising out of or relating to your use of the Site, your
        violation of these Terms, or your violation of any law or the rights of any third party.
      </p>

      <h2>13. Forward-looking statements</h2>
      <p>
        The Site contains forward-looking statements regarding products in development, intended
        manufacturing and quality systems, and anticipated regulatory pathways. These statements
        reflect current plans only and are not guarantees of future results, timing, or
        availability. For further detail, see our{' '}
        <a href="/legal/disclaimer">Disclaimers</a>.
      </p>

      <h2>14. Governing law and venue</h2>
      <p>
        These Terms and any dispute arising out of or relating to them or the Site are governed by
        the laws of State of Texas, United States, without regard to its conflict-of-laws principles.
        Subject to Section&nbsp;15, you agree that the exclusive venue for any dispute that
        proceeds in court will be the state and federal courts located in State of Texas, United States,
        and you consent to the personal jurisdiction of those courts. The United Nations
        Convention on Contracts for the International Sale of Goods does not apply.
      </p>

      <h2>15. Dispute resolution</h2>
      <p>
        Before initiating any formal proceeding, you agree to first contact us and attempt in
        good faith to resolve the dispute informally. Send a written description of the dispute to
        the contact details in Section&nbsp;18, and we will attempt to resolve it within a
        reasonable period.
      </p>
      <p>
        If a dispute cannot be resolved informally, it will be subject to the governing law
        and venue set out in these Terms. You and we each retain the rights and remedies
        available under applicable law.
      </p>

      <h2>16. Changes to these terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will revise the &ldquo;Last
        updated&rdquo; date above and, where required, provide additional notice. Your continued
        use of the Site after an update takes effect constitutes acceptance of the revised Terms
        to the extent permitted by applicable law. If you do not agree to the updated Terms, you
        must stop using the Site.
      </p>

      <h2>17. Severability and entire agreement</h2>
      <p>
        If any provision of these Terms is held to be invalid, illegal, or unenforceable, that
        provision will be limited or eliminated to the minimum extent necessary, and the
        remaining provisions will remain in full force and effect. Our failure to enforce any
        provision is not a waiver of our right to do so later.
      </p>
      <p>
        These Terms, together with our <a href="/legal/privacy">Privacy Policy</a> and any other
        policies referenced on the Site, constitute the entire agreement between you and us
        regarding the Site and supersede any prior or contemporaneous agreements or
        understandings on that subject. These Terms do not create any agency, partnership, joint
        venture, or employment relationship between you and us.
      </p>

      <h2>18. Contact us</h2>
      <p>
        If you have questions about these Terms, please contact us:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:info@lubecision.com">info@lubecision.com</a>
        </li>
        <li>
          <strong>Address:</strong> 10601 Clarence Dr., Suite 250, Frisco, TX
        </li>
      </ul>
    </>
  );
}
