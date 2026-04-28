/**
 * URL of the deployed Privyra CRA frontend (same app as the export under
 * `frontend/`). Set in Vercel/hosting env as NEXT_PUBLIC_PRIVYRA_DEMO_URL.
 * The demo host must allow embedding (e.g. CSP frame-ancestors) for the iframe to render.
 */
export function getPrivyraDemoUrl(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_PRIVYRA_DEMO_URL?.trim();
  if (!raw) return undefined;
  if (!/^https?:\/\//i.test(raw)) return undefined;
  return raw.replace(/\/$/, "");
}
