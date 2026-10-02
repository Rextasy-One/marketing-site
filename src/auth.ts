import NextAuth from 'next-auth';
import Apple from 'next-auth/providers/apple';
import Facebook from 'next-auth/providers/facebook';
import Google from 'next-auth/providers/google';

/**
 * Provider registry.
 *
 * A provider is only registered when its credentials are present, so the app boots
 * and `/login` renders (with the provider marked unavailable) before any OAuth app
 * has been created. Nothing here claims to work without credentials.
 *
 * The client secret is deliberately absent from this file: Auth.js reads
 * `AUTH_<PROVIDER>_SECRET` from the environment, so secrets never live in git.
 * See `.env.example` for the full list.
 */
export const PROVIDERS = [
  {
    id: 'google',
    name: 'Google',
    envKeys: ['AUTH_GOOGLE_ID', 'AUTH_GOOGLE_SECRET'],
    provider: Google,
    hint: 'Google Cloud Console → APIs & Services → Credentials → OAuth client ID (Web).',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    envKeys: ['AUTH_FACEBOOK_ID', 'AUTH_FACEBOOK_SECRET'],
    provider: Facebook,
    hint: 'Meta for Developers → App → Facebook Login → Settings. HTTPS redirect URI required.',
  },
  {
    id: 'apple',
    name: 'Apple',
    envKeys: ['AUTH_APPLE_ID', 'AUTH_APPLE_SECRET'],
    provider: Apple,
    hint: 'Apple Developer → Services ID. Redirect URI must be a real domain, not localhost.',
  },
] as const;

export type ProviderId = (typeof PROVIDERS)[number]['id'];

/** A provider is configured when every env key it needs is set. */
export function isConfigured(envKeys: readonly string[]): boolean {
  return envKeys.every((key) => Boolean(process.env[key]));
}

export const configuredProviders = PROVIDERS.filter((p) => isConfigured(p.envKeys)).map(
  (p) => p.id,
);

/**
 * Auth.js configuration.
 *
 * Base path is `/api/auth` on this origin, which is the single origin the browser
 * talks to (see docs/DEV-ENVIRONMENT.md). Session is a signed cookie, so both the
 * marketing app and anything proxied under this origin can read it.
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: PROVIDERS.filter((p) => isConfigured(p.envKeys)).map((p) => p.provider),
  pages: {
    signIn: '/login',
  },
  /**
   * Auth.js refuses to boot without a secret, even to answer `/api/auth/providers`
   * or render `/login`. Requiring a real secret in development would make the app
   * unusable before any provider exists, so a fixed, clearly-labelled development
   * value is used when `AUTH_SECRET` is unset.
   *
   * Production builds fail loudly instead — an insecure secret must never ship.
   */
  secret:
    (process.env.AUTH_SECRET ?? process.env.NODE_ENV === 'production')
      ? process.env.AUTH_SECRET
      : 'dev-only-insecure-secret-do-not-use-in-production',
  // Required behind a proxy: the browser origin is localhost:3000 while the app
  // itself is served on another loopback port.
  trustHost: true,
});
