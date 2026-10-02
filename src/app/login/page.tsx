import { PROVIDERS, isConfigured } from '@/auth';
import type { IconType } from 'react-icons';
import { SiApple, SiFacebook, SiGoogle } from 'react-icons/si';

export const metadata = {
  title: 'Log in | Rex Staples',
};

/**
 * Official brand marks, mapped by provider id.
 *
 * These are the Simple Icons glyphs, which follow each vendor's published mark.
 * Note the real "Sign in with Google" / "Sign in with Apple" guidelines prefer the
 * vendor-supplied button assets (with their own colours and minimum sizes) over a
 * composed button — swap to those before production if the providers enforce it.
 */
const PROVIDER_ICONS: Record<string, IconType> = {
  google: SiGoogle,
  facebook: SiFacebook,
  apple: SiApple,
};

/** Brand colour for each mark, so the glyph reads correctly on a white button. */
const PROVIDER_ICON_COLORS: Record<string, string> = {
  google: 'text-[#4285F4]',
  facebook: 'text-[#0866FF]',
  apple: 'text-black',
};

/**
 * Login page.
 *
 * Sign-in is currently **unconfigured**: no OAuth applications exist yet, so the
 * buttons are rendered disabled with the exact env vars each provider needs. Set
 * the credentials in `.env.local` (see `.env.example`) and this page starts
 * working without code changes.
 */
export default function LoginPage() {
  return (
    <section className="mx-auto flex max-w-md flex-col gap-6 px-6 py-16">
      <header className="flex flex-col gap-2">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Account</p>
        <h1 className="text-3xl font-semibold tracking-tight">Log in</h1>
        <p className="text-slate-600">Continue with one of the providers below.</p>
      </header>

      <ul className="flex flex-col gap-3">
        {PROVIDERS.map((provider) => {
          const ready = isConfigured(provider.envKeys);
          const callbackUrl = `/api/auth/signin/${provider.id}`;
          const Icon = PROVIDER_ICONS[provider.id];
          const iconColor = PROVIDER_ICON_COLORS[provider.id] ?? 'text-slate-500';

          const label = (
            <span className="flex items-center justify-center gap-3">
              {Icon ? <Icon aria-hidden className={`h-5 w-5 ${iconColor}`} /> : null}
              <span>Continue with {provider.name}</span>
            </span>
          );

          return (
            <li key={provider.id}>
              {ready ? (
                <a
                  href={callbackUrl}
                  className="flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-medium text-slate-900 transition-colors hover:bg-slate-100"
                >
                  {label}
                </a>
              ) : (
                <div
                  aria-disabled="true"
                  className="flex w-full flex-col gap-1 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-2.5 text-slate-400"
                >
                  <span className="flex items-center justify-center gap-3 font-medium">
                    {Icon ? <Icon aria-hidden className="h-5 w-5" /> : null}
                    <span>Continue with {provider.name}</span>
                  </span>
                  <span className="text-center text-xs">
                    Not configured — set {provider.envKeys.join(' and ')}
                  </span>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <p className="text-xs text-slate-500">
        Provider setup steps are in <code>TODO.md</code>; architecture is in{' '}
        <code>docs/DEV-ENVIRONMENT.md</code>.
      </p>
    </section>
  );
}
