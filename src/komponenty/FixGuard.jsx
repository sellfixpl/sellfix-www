import { ShieldCheck } from "lucide-react";

export default function FixGuard() {
  return (
    <section id="fixguard" className="bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
              FixGuard
            </div>

            <h2 className="text-4xl font-black md:text-5xl">
              Dodatkowa ochrona po zakupie telefonu
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-300">
              FixGuard to dodatkowa usługa ochronna dostępna przy zakupie
              telefonu w SellFix. Zapewnia wymianę wyświetlacza, korpusu
              urządzenia lub przedłużenie gwarancji — zależnie od wybranego
              wariantu ochrony.
            </p>

            <p className="mt-4 text-zinc-400">
              Ochrona obowiązuje przez 12 miesięcy i dostępna jest w trzech
              wariantach: Silver, Gold oraz Platinum.
            </p>
          </div>

          <div className="rounded-3xl border border-lime-400/20 bg-zinc-900 p-8">
            <ShieldCheck
              className="mb-6 text-lime-400"
              size={42}
            />

            <h3 className="text-2xl font-black">
              Warianty ochrony
            </h3>

            <div className="mt-6 space-y-4 text-zinc-300">
              <div className="rounded-2xl bg-zinc-950 p-4">
                <strong>Silver</strong> — ochrona wyłącznie wyświetlacza
              </div>

              <div className="rounded-2xl bg-zinc-950 p-4">
                <strong>Gold</strong> — ochrona wyświetlacza oraz korpusu
              </div>

              <div className="rounded-2xl bg-zinc-950 p-4">
                <strong>Platinum</strong> — przedłużenie gwarancji o dodatkowe
                12 miesięcy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}