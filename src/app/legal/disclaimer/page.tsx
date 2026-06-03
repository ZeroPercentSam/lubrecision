import type { Metadata } from 'next';
import {
  REGULATORY_NOTICE,
  FDA_STATUS_LINE,
  NO_MEDICAL_ADVICE,
  FORWARD_LOOKING,
  TRADEMARK_NOTICE,
  AORN_NOTE,
} from '@/lib/compliance';

export const metadata: Metadata = { title: 'Disclaimers' };

export default function DisclaimerPage() {
  return (
    <>
      <h1>Disclaimers</h1>
      <p className="legal-updated">Last updated: June 2, 2026</p>

      <h2>Regulatory &amp; investigational status</h2>
      <p>{FDA_STATUS_LINE}</p>
      <p>
        Lubecision is a product in development. It has not been cleared or
        approved by the U.S. Food and Drug Administration, and it is not
        available for sale or for clinical use. Nothing on this site should be
        read as a claim of safety, efficacy, or regulatory clearance.
      </p>
      <div className="legal-callout">
        <p>{REGULATORY_NOTICE}</p>
      </div>

      <h2>No medical advice</h2>
      <p>
        This site describes a company and a product under development. It is not
        a source of clinical guidance.
      </p>
      <p>{NO_MEDICAL_ADVICE}</p>

      <h2>Forward-looking statements</h2>
      <p>
        Parts of this site describe our plans and intentions rather than
        present facts.
      </p>
      <p>{FORWARD_LOOKING}</p>

      <h2>Third-party trademarks &amp; non-affiliation</h2>
      <p>{TRADEMARK_NOTICE}</p>
      <p>
        All other product names, logos, and brands are the property of their
        respective owners. Any reference to a third-party product or company is
        for identification and context only and does not imply affiliation,
        sponsorship, or endorsement.
      </p>

      <h2>Guidelines &amp; standards (no endorsement)</h2>
      <p>{AORN_NOTE}</p>
      <p>
        References on this site to AORN or to any other guideline, standard, or
        professional body are provided for context only. They do not imply
        endorsement, certification, or approval of Lubecision or this company by
        those bodies.
      </p>

      <h2>General information only</h2>
      <p>
        All content on this site is provided &ldquo;as is&rdquo; for general
        informational purposes. We make no warranty as to its accuracy or
        completeness, and content may change without notice. Your use of this
        site is also governed by our{' '}
        <a href="/legal/terms">Terms of Service</a>.
      </p>

      <h2>External links</h2>
      <p>
        This site may link to third-party websites for convenience. We do not
        control those sites and are not responsible for their content,
        accuracy, or practices. A link does not imply our endorsement of the
        linked site.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these disclaimers? Please{' '}
        <a href="/contact">get in touch</a>.
      </p>
    </>
  );
}
