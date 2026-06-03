import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description:
    'Lubecision is committed to digital accessibility, targeting WCAG 2.1 Level AA, and welcomes feedback on accessibility barriers.',
};

export default function AccessibilityPage() {
  return (
    <>
      <h1>Accessibility Statement</h1>
      <p className="legal-updated">Last updated: June 2, 2026</p>

      <div className="legal-callout">
        <p>
          We review this Accessibility Statement periodically as our website
          evolves. If you need information from this site in an alternative
          format, or require an accommodation to access our content or services,
          please contact us at{' '}
          <a href="mailto:info@lubecision.com">info@lubecision.com</a> and
          we will work with you to provide the information you need.
        </p>
      </div>

      <h2>1. Our commitment</h2>
      <p>
        C.K. New Generation LLC (&ldquo;Lubecision,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to digital
        accessibility for people with disabilities. We believe that everyone
        should be able to access information about our products and our company,
        and we are working to ensure that our website is usable by as many people
        as possible, regardless of ability, technology, or assistive device.
      </p>
      <p>
        Accessibility is an ongoing priority for us rather than a one-time
        project. As we add features and content to our website, we aim to apply
        accessible design practices and to improve the experience over time.
      </p>

      <h2>2. Conformance status</h2>
      <p>
        We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1
        at Level AA. These guidelines, published by the World Wide Web Consortium
        (W3C), explain how to make web content more accessible to people with a
        wide range of disabilities, including visual, auditory, physical, speech,
        cognitive, and neurological disabilities.
      </p>
      <p>
        Our website has not yet been formally audited or certified against WCAG
        2.1 Level AA by an independent third party. As a result, we consider the
        website to be <strong>partially conformant</strong> with WCAG 2.1 Level
        AA: some content may not yet fully meet every applicable success
        criterion. Conformance is a target we are actively working toward, and we
        treat the guidelines as our standard of measurement as we continue to
        improve the site.
      </p>

      <h2>3. Measures we take</h2>
      <p>
        To support accessibility, we aim to incorporate the following measures
        into the design and development of our website:
      </p>
      <ul>
        <li>
          <strong>Semantic HTML</strong> &mdash; using meaningful markup and
          landmarks so the structure of pages is clear to assistive
          technologies.
        </li>
        <li>
          <strong>Keyboard navigation</strong> &mdash; aiming to make interactive
          elements reachable and operable using a keyboard alone, without
          requiring a mouse.
        </li>
        <li>
          <strong>Skip-to-content link</strong> &mdash; providing a way to bypass
          repeated navigation and move directly to the main content of a page.
        </li>
        <li>
          <strong>Color and contrast</strong> &mdash; considering color-contrast
          ratios for text and important interface elements to support
          readability.
        </li>
        <li>
          <strong>Text alternatives</strong> &mdash; providing alternative text
          for meaningful images so that their purpose can be conveyed to people
          who do not see them.
        </li>
        <li>
          <strong>Responsive design</strong> &mdash; building layouts that adapt
          to different screen sizes, orientations, and zoom levels.
        </li>
        <li>
          <strong>Reduced-motion preferences</strong> &mdash; aiming to respect
          the operating-system or browser &ldquo;reduced motion&rdquo; setting so
          that animation and movement can be minimized for users who prefer it.
        </li>
      </ul>
      <p>
        These measures reflect the goals we design toward. Because the site is
        not yet formally audited, individual pages or components may not
        implement every measure perfectly, and we welcome feedback where they
        fall short.
      </p>

      <h2>4. Known limitations</h2>
      <p>
        Despite our efforts, some areas of our website may not yet be fully
        accessible. Known and potential limitations include:
      </p>
      <ul>
        <li>
          <strong>Third-party content.</strong> Content, widgets, or services
          provided by third parties (for example, embedded media, maps, or forms)
          may not fully meet our accessibility goals, and we may have limited
          control over them.
        </li>
        <li>
          <strong>Animated or interactive content.</strong> Some animations,
          transitions, or richly interactive elements may not yet provide an
          equivalent experience for every user or assistive technology.
        </li>
        <li>
          <strong>Older or legacy pages and documents.</strong> Some materials
          may have been produced before our current accessibility practices and
          may not yet meet the same standard.
        </li>
      </ul>
      <p>
        We are working to identify and address these limitations as part of our
        ongoing accessibility efforts. If you encounter a barrier that is not
        listed here, please let us know using the contact details below.
      </p>

      <h2>5. Standards referenced</h2>
      <p>
        In our accessibility work, we reference and consider the following
        standards and frameworks:
      </p>
      <ul>
        <li>
          <strong>WCAG 2.1 Level AA</strong> &mdash; the Web Content
          Accessibility Guidelines published by the World Wide Web Consortium
          (W3C), which serve as our primary technical standard.
        </li>
        <li>
          <strong>United States &mdash; ADA and Section 508.</strong> We consider
          the accessibility expectations associated with the Americans with
          Disabilities Act (ADA) and Section&nbsp;508 of the Rehabilitation Act,
          which commonly look to WCAG as a reference point.
        </li>
        <li>
          <strong>European Union &mdash; EN 301 549.</strong> We consider the EN
          301&nbsp;549 standard, which incorporates WCAG and informs digital
          accessibility requirements in the European Union.
        </li>
      </ul>
      <p>
        References to these frameworks describe the standards we take into
        account; they are not a representation that our website has been
        certified as compliant with any specific law or regulation.
      </p>

      <h2>6. Feedback and contact</h2>
      <p>
        We welcome your feedback on the accessibility of our website. If you
        experience any difficulty accessing content, encounter a barrier, or have
        suggestions for how we can improve, please let us know:
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
      <p>
        When you contact us about an accessibility issue, it helps to include the
        web address (URL) of the page, a description of the problem, and the
        browser and assistive technology you were using, if known. We aim to
        acknowledge accessibility feedback within a few business days and to work
        with you toward a resolution or a suitable alternative.
      </p>

      <h2>7. Date of this statement</h2>
      <p>
        This Accessibility Statement was prepared and last reviewed on June 2, 2026. We
        review and update it periodically to reflect changes to our website and
        our accessibility practices.
      </p>
    </>
  );
}
