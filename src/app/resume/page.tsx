export const metadata = {
  title: 'Resume | Rex Staples',
};

/**
 * Resume page stub.
 *
 * Intentionally empty — fill in the real content here. The header link is enabled
 * by rendering `<Header />` with the resume route included.
 */
export default function ResumePage() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Resume</p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Rex Staples</h1>
      <p className="text-lg text-slate-500">Resume content coming soon.</p>
    </section>
  );
}
