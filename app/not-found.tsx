import { LinkButton } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-32 text-center">
      <p className="font-display text-8xl font-semibold text-gold-400">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-emerald-900">This shelf is empty</h1>
      <p className="mt-3 text-ink-600">The page you were looking for isn&apos;t here, but the pantry is full.</p>
      <div className="mt-8"><LinkButton href="/shop">Back to the Pantry</LinkButton></div>
    </section>
  );
}
