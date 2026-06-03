import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'How Lubecision uses cookies and similar storage technologies, the strictly-necessary storage we set, and how to manage your consent under GDPR and the ePrivacy Directive.',
};

export default function CookiePolicyPage() {
  return (
    <>
      <h1>Cookie Policy</h1>
      <p className="legal-updated">Last updated: June 2, 2026</p>

      <div className="legal-callout">
        <p>
          This Cookie Policy explains how our website uses cookies and similar
          technologies. As of the date above, our website sets only
          strictly-necessary, first-party storage and uses{' '}
          <strong>no analytics or marketing cookies</strong>. If and when we introduce
          analytics, advertising, or other non-essential tools, we will update this policy
          and the categories in our consent banner accordingly, and such tools will only be
          activated after you opt in.
        </p>
      </div>

      <h2>1. What are cookies and similar technologies</h2>
      <p>
        A &ldquo;cookie&rdquo; is a small text file that a website asks your browser to
        store on your device. Cookies let a site recognize your browser and remember
        information about your visit, such as your preferences. Cookies set by the site you
        are visiting are called &ldquo;first-party&rdquo; cookies; cookies set by another
        domain are &ldquo;third-party&rdquo; cookies.
      </p>
      <p>
        &ldquo;Similar technologies&rdquo; perform comparable functions to cookies but use
        different storage mechanisms in your browser. These include{' '}
        <strong>localStorage</strong> and <strong>sessionStorage</strong> (key-value data
        held in the browser), as well as pixels, tags, and software development kits (SDKs).
        In this policy, references to &ldquo;cookies&rdquo; include these similar
        technologies unless we say otherwise. Where this policy refers to information stored
        on your device, the rules described here apply regardless of the specific storage
        mechanism used.
      </p>

      <h2>2. How we use cookies and your consent</h2>
      <p>
        We group cookies and similar technologies into categories based on their purpose:
      </p>
      <ul>
        <li>
          <strong>Strictly necessary.</strong> These are required to operate the website,
          provide core functionality, keep it secure, and record your cookie choices.
          Because they are essential to deliver a service you have requested, they are set
          without consent and cannot be switched off through the consent banner. Under the
          ePrivacy Directive and equivalent national laws, prior consent is not required for
          storage that is strictly necessary to provide a service you have explicitly
          requested.
        </li>
        <li>
          <strong>Analytics.</strong> These would help us understand how visitors use the
          site so we can improve it. <strong>None are currently in use.</strong> If
          introduced, they would only be set after you opt in.
        </li>
        <li>
          <strong>Marketing.</strong> These would support advertising and measure campaign
          performance. <strong>None are currently in use.</strong> If introduced, they would
          only be set after you opt in.
        </li>
      </ul>
      <p>
        For any non-essential cookie (such as analytics or marketing), we ask for your
        consent before it is set. When you first visit our website, a consent banner
        appears. From the banner you can:
      </p>
      <ul>
        <li>
          <strong>Accept</strong> all non-essential categories;
        </li>
        <li>
          <strong>Reject</strong> all non-essential categories (strictly-necessary storage
          still applies); or
        </li>
        <li>
          <strong>Customize</strong> your choices by category, where more than one category
          is available.
        </li>
      </ul>
      <p>
        You can change or withdraw your consent at any time. To do so, select the{' '}
        <strong>&ldquo;Cookie Preferences&rdquo;</strong> link in the footer of any page to
        reopen the banner and update your choices. Withdrawing consent is as easy as giving
        it and does not affect the lawfulness of any processing carried out before you
        withdrew. Because no analytics or marketing cookies are currently in use, accepting
        or rejecting today changes only the consent preference we record; it does not enable
        any additional tracking at this time.
      </p>
      <p>
        We remember your choice so we do not ask on every visit. Your preference is stored
        first-party in your browser&rsquo;s localStorage under the key{' '}
        <code>lubecision-cookie-consent</code> for approximately twelve&nbsp;(12) months,
        after which we will ask again. Clearing your browser storage, or using a different
        browser or device, will remove this record and cause the banner to reappear.
      </p>

      <h2>3. Cookies and storage we use</h2>
      <p>
        The table below lists the cookies and similar storage we use. As noted above, we do
        not currently use any analytics or marketing cookies; those rows are included for
        transparency and would only be populated after you opt in.
      </p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Purpose</th>
            <th>Provider</th>
            <th>Duration</th>
            <th>Legal basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>lubecision-cookie-consent</code>
            </td>
            <td>Strictly necessary</td>
            <td>
              Stores your cookie choices so we can honor them and avoid re-prompting on
              every visit (stored in browser localStorage)
            </td>
            <td>Lubecision (first-party)</td>
            <td>~12 months</td>
            <td>
              Legitimate interest / legal obligation (record of consent under
              Art.&nbsp;7(1) GDPR)
            </td>
          </tr>
          <tr>
            <td>Session / security state</td>
            <td>Strictly necessary</td>
            <td>
              Maintains site security and core functionality during your visit, such as
              load balancing and request integrity
            </td>
            <td>Lubecision (first-party)</td>
            <td>Session</td>
            <td>Legitimate interest (Art.&nbsp;6(1)(f) GDPR)</td>
          </tr>
          <tr>
            <td>Analytics</td>
            <td>Analytics</td>
            <td>None currently in use &mdash; would only be set with your consent.</td>
            <td>&mdash;</td>
            <td>&mdash;</td>
            <td>Consent (Art.&nbsp;6(1)(a) GDPR), if introduced</td>
          </tr>
          <tr>
            <td>Marketing</td>
            <td>Marketing</td>
            <td>None currently in use &mdash; would only be set with your consent.</td>
            <td>&mdash;</td>
            <td>&mdash;</td>
            <td>Consent (Art.&nbsp;6(1)(a) GDPR), if introduced</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Managing cookies in your browser</h2>
      <p>
        In addition to our consent banner, most browsers let you control cookies and similar
        storage through their settings. You can typically block or delete existing cookies,
        block third-party cookies, or have the browser warn you before storing them. The
        exact steps depend on your browser; consult its help pages (for example, the
        settings or privacy section of Chrome, Safari, Firefox, or Edge) for instructions.
        You can also clear localStorage and other site data from the same settings.
      </p>
      <p>
        Please note that strictly-necessary storage is essential to how the site works. If
        you block or delete it, parts of the website may not function correctly, you may
        need to re-enter information, and the consent banner may reappear on each visit
        because we can no longer remember your choice.
      </p>

      <h2>5. Do Not Track</h2>
      <p>
        Some browsers offer a &ldquo;Do Not Track&rdquo; (DNT) setting that signals your
        preference not to be tracked across websites. There is no consistent industry or
        legal standard for how sites should respond to DNT signals. Because we do not
        currently use analytics or marketing cookies and do not track you across third-party
        websites, our practices align with a DNT preference regardless of the signal we
        receive. We honor the choices you make through our consent banner. If we adopt
        non-essential tracking in the future, we will describe how we treat DNT and any
        equivalent signals (such as Global Privacy Control) at that time.
      </p>

      <h2>6. Changes to this policy</h2>
      <p>
        We may update this Cookie Policy from time to time, including when we change the
        cookies we use or the technologies we deploy. When we do, we will revise the
        &ldquo;Last updated&rdquo; date above. If we begin using analytics, marketing, or
        other non-essential cookies, we will update this policy and the categories in our
        consent banner, and we will request your consent before such cookies are set.
      </p>

      <h2>7. Contact us</h2>
      <p>
        If you have questions about this Cookie Policy or how we use cookies and similar
        technologies, please contact us at{' '}
        <a href="mailto:info@lubecision.com">info@lubecision.com</a>. For more information
        about how we handle personal information, including the rights available to you, see
        our <a href="/legal/privacy">Privacy Policy</a>.
      </p>
    </>
  );
}
