import { PROVIDERS, isConfigured } from '@/auth';

export const metadata = {
  title: 'Log in | Rex Staples',
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

          return (
            <li key={provider.id}>
              {ready ? (
                <a
                  href={callbackUrl}
                  className="flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-medium text-slate-900 transition-colors hover:bg-slate-100"
                >
                  Continue with {provider.name}
                </a>
              ) : (
                <div
                  aria-disabled="true"
                  className="flex w-full flex-col gap-1 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-2.5 text-slate-400"
                >
                  <span className="font-medium">Continue with {provider.name}</span>
                  <span className="text-xs">
                    Not configured — set {provider.envKeys.join(' and ')}
                  </span>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <p className="text-xs text-slate-500">
        Provider setup is documented in <code>docs/DEV-ENVIRONMENT.md</code>.
      </p>
    </section>
  );
}
