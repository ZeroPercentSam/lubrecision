/**
 * Pre-launch gate.
 *
 * Until we're ready to launch publicly, the production site (lubecision.com)
 * shows a Coming Soon page and every other route is unpublished (redirected to
 * the home page). Preview/staging deployments always render the full site so
 * the team can review it before going live.
 *
 * Resolution order:
 *   1. COMING_SOON=true|false explicitly forces a mode (any environment).
 *   2. Otherwise, only the production environment is gated.
 *
 * To launch: set COMING_SOON=false in the production environment (or remove the
 * gate entirely). No code changes required.
 */
export function isComingSoon(): boolean {
  const override = process.env.COMING_SOON;
  if (override === 'true') return true;
  if (override === 'false') return false;

  return process.env.VERCEL_ENV === 'production';
}
