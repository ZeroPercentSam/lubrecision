# Post-FDA-Clearance Restore List

> Created during the 2026-06 compliance overhaul. The public site was **de-commercialized**
> and all efficacy/cost claims were removed because Lubecision is **pre-510(k)-clearance**
> (FDA CPG 300.600 prohibits promoting, pricing, quoting, or selling an uncleared Class II
> device). **Once FDA 510(k) clearance is granted**, a future session should restore the
> commercial experience below. Do NOT restore any of this before clearance is in hand and
> confirmed with counsel (Peter Hoffman-Brim).

## Gate
- [ ] FDA 510(k) clearance letter received (record the K-number + date here).
- [ ] Counsel confirms cleared **indications for use** — all restored claims must stay within them.
- [ ] A manufacturer is under contract and certified (see cGMP/ISO items below).

## 1. Commercial / ordering UX (removed — restore)
- **Pricing & SKUs** — product SKU table (e.g. `LBR-4ML-20`, 20 units/box, 4 mL bottle + foam pad) and any catalog numbers. Removed from `src/app/procurement/page.tsx`.
- **Tiered / volume pricing** — "10+ cases per month" tiers, volume discounts. `procurement`.
- **Ordering channels** — Direct / GPO / Distribution purchasing language. `procurement`.
- **"Get a Quote" flow** — nav CTA, footer CTA, contact-form "quote" tab + "Estimated Annual Volume" dropdown + GPO/shipping fields. `Navigation.tsx`, `Footer.tsx`, `contact/page.tsx`.
- **ROI / savings calculator** — interactive `$/OR-minute × minutes-saved` calculator and its annual-savings outputs. Removed from `procurement/page.tsx`. (Was built on unsubstantiated per-case figures — rebuild only with cleared, substantiated data.)
- **"Request Evaluation Kit" / sample-distribution** — kit-count ordering semantics in `contact/page.tsx` and CTAs. (Pre-clearance, sample distribution is only allowable under an IDE; post-clearance it becomes normal sampling.)

## 2. Claims that can be upgraded once substantiated + within cleared indications
- Efficacy/performance statements were softened to investigational/mechanistic wording (no "eliminates / prevents / dramatically reduces / proven"). After clearance, claims **supported by data and within the cleared indications** may be stated more directly — still no comparative/superiority claims without head-to-head evidence.
- Quantified benefit/cost/time stats (e.g. "$2,400/case", "10–40 min saved", "80% eschar reduction", per-case pause counts) were removed. Restore only with a cited, substantiated source.

## 3. Manufacturing / quality claims (currently forward-looking)
- Site now says "**will be** manufactured under cGMP / ISO 13485 quality systems." Once a manufacturer is contracted and certified, change to present tense and add the real facility/registration details. Remove the "FDA-registered facility" phrasing until that is literally true.

## 4. Regulatory status language (currently general)
- All status copy reads "**in development; pursuing FDA 510(k) clearance; not cleared or available for sale**" (no dates, no "submitted", no "predicate"). After clearance, swap to the cleared status (e.g. "FDA 510(k) cleared — K######") across: `Footer.tsx` regulatory notice (uses `REGULATORY_NOTICE` in `src/lib/compliance.ts`), `layout.tsx` JSON-LD `regulatoryStatus`, and the status badges on `product`, `science`, `surgeons`, `procurement`, `about`, `faq`.
- **Single source of truth:** `src/lib/compliance.ts`. Update the constants there first; pages consume them.

## 5. International
- "Available in Brazil / LATAM / EU" style claims were changed to "intend to pursue registration pathways." Restore market-availability language per market only after the corresponding registration (ANVISA, EU MDR/CE, etc.) is granted.

## Note
The cookie-consent infrastructure (`src/components/CookieConsent.tsx`) is already analytics-ready — when you add analytics/marketing scripts, gate them on `getConsent()` and bump `CONSENT_VERSION`.
