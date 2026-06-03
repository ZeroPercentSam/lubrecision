/**
 * Canonical compliance copy — single source of truth.
 *
 * Lubecision is a PRE-CLEARANCE, pre-revenue, pre-manufacturer Class II device.
 * Per FDA CPG 300.600 and FTC health-claim substantiation rules, the public site
 * may not state efficacy/safety as fact, may not claim FDA clearance/approval,
 * may not take orders/quotes/pricing, and must present development status honestly.
 *
 * Import these constants instead of re-typing disclaimers so wording stays
 * consistent and reviewable. Counsel (Peter Hoffman-Brim) must approve before launch.
 */

/** Short status used in badges/eyebrows. No dates, no "submitted", no "predicate". */
export const FDA_STATUS_SHORT = 'In Development · Pursuing FDA 510(k) Clearance';

/** One-line status for body copy. */
export const FDA_STATUS_LINE =
  'Lubecision is an investigational device in development. We are pursuing FDA 510(k) clearance. It has not been cleared or approved by the FDA and is not available for sale.';

/** Primary regulatory notice (footer + near any product context). */
export const REGULATORY_NOTICE =
  'CAUTION — Investigational device. Lubecision is in development and has not been cleared or approved by the U.S. Food and Drug Administration. It is not available for sale or clinical use. Statements on this site have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease.';

/** No-medical-advice disclaimer (Terms + Disclaimer page + health-content pages). */
export const NO_MEDICAL_ADVICE =
  'This website is provided for general informational purposes only and does not constitute medical advice. It is not a substitute for the professional judgment of a qualified healthcare provider. Nothing on this site should be used to diagnose or treat any health problem or disease.';

/** Forward-looking-statements disclaimer (Disclaimer page + investor-adjacent copy). */
export const FORWARD_LOOKING =
  'This website contains forward-looking statements regarding products in development, intended manufacturing and quality systems, and anticipated regulatory pathways. These statements reflect current plans only. Actual results, timing, regulatory outcomes, and product availability are not guaranteed and are subject to change.';

/** Manufacturing/quality — forward-looking (no manufacturer is under contract yet). */
export const MANUFACTURING_INTENT =
  'Lubecision is intended to be manufactured under cGMP and ISO 13485 quality systems.';

/** Third-party trademark / non-affiliation notice (any page that references da Vinci). */
export const TRADEMARK_NOTICE =
  'da Vinci® is a registered trademark of Intuitive Surgical, Inc. Lubecision is an independent company and is not affiliated with, endorsed by, or sponsored by Intuitive Surgical, Inc. or any other third party referenced on this site.';

/** AORN framing — AORN is an advisory/guideline body, NOT an endorsing body. */
export const AORN_NOTE =
  'Designed with AORN surgical-energy-safety guidance in mind. AORN does not endorse or approve specific products.';

/** Study attribution disclaimer (science page). */
export const STUDY_CLASS_DISCLAIMER =
  'This independent study concerns anti-stick phospholipid solutions as a product class. Lubecision has not been independently studied; these results may not be representative of Lubecision.';

/** Contact-form consent text (rendered next to a required checkbox). */
export const FORM_CONSENT =
  'I agree that Lubecision may use the information I provide to respond to my inquiry, in accordance with the Privacy Policy.';
