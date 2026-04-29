import { ShieldCheck } from "lucide-react";

const fixGuardCennik = [
  ["iPhone SE 2020/2022", "79", "139", "99"],
  ["iPhone 11", "99", "149", "99"],
  ["iPhone 11 Pro", "149", "249", "99"],
  ["iPhone 11 Pro Max", "179", "279", "99"],
  ["iPhone 12 Mini", "149", "249", "139"],
  ["iPhone 12", "149", "249", "139"],
  ["iPhone 12 Pro", "149", "249", "139"],
  ["iPhone 12 Pro Max", "199", "299", "139"],
  ["iPhone 13 Mini", "179", "279", "149"],
  ["iPhone 13", "179", "279", "149"],
  ["iPhone 13 Pro", "199", "299", "149"],
  ["iPhone 13 Pro Max", "199", "299", "149"],
  ["iPhone 14", "199", "279", "149"],
  ["iPhone 14 Pro", "249", "449", "199"],
  ["iPhone 14 Pro Max", "299", "499", "249"],
  ["iPhone 15", "249", "349", "249"],
  ["iPhone 15 Pro", "299", "379", "249"],
  ["iPhone 15 Pro Max", "299", "379", "249"],
  ["iPhone 16", "299", "379", "249"],
  ["iPhone 16 Pro", "349", "449", "249"],
  ["iPhone 17", "399", "499", "249"],
  ["iPhone 17 Pro", "1099", "1499", "299"],
  ["iPhone 17 Pro Max", "1299", "1699", "299"],
];

export default function FixGuard() {
  return (
    <section id="fixguard" className="bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
          {/* LEWA STRONA */}
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

            <div className="mt-8 rounded-3xl border border-lime-400/20 bg-zinc-900 p-8">
              <ShieldCheck
                className="mb-6 text-lime-400"
                size={42}
              />

              <h3 className="text-2xl font-black">
                Warianty ochrony
              </h3>

              <div className="mt-6 space-y-4 text-zinc-300">
                <div className="rounded-2xl bg-zinc-950 p-4">
                  <strong className="text-white">Silver</strong> — ochrona LCD,
                  darmowa wymiana przy uszkodzeniu mechanicznym
                </div>

                <div className="rounded-2xl bg-zinc-950 p-4">
                  <strong className="text-yellow-400">Gold</strong> — ochrona
                  LCD + korpusu urządzenia
                </div>

                <div className="rounded-2xl bg-zinc-950 p-4">
                  <strong className="text-sky-200">Platinum</strong> —
                  przedłużenie gwarancji o dodatkowe 12 miesięcy
                </div>
              </div>
            </div>
          </div>

          {/* PRAWA STRONA */}
          <div className="rounded-3xl border border-lime-400/20 bg-zinc-900 p-6 shadow-2xl shadow-black/30">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-lime-400">
              Cennik wariantów
            </p>

            <h3 className="mb-6 text-3xl font-black text-white">
              FixGuard dla iPhone
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="min-w-full text-sm">
                <thead className="bg-lime-400 text-zinc-950">
                  <tr>
                    <th className="px-4 py-4 text-left font-black">Model</th>
                    <th className="px-4 py-4 text-center font-black">
                      Silver
                    </th>
                    <th className="px-4 py-4 text-center font-black">
                      Gold
                    </th>
                    <th className="px-4 py-4 text-center font-black">
                      Platinum
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-zinc-950/70">
                  {fixGuardCennik.map(
                    ([model, silver, gold, platinum], index) => (
                      <tr
                        key={model}
                        className={`border-t border-white/10 ${
                          index % 2 === 0 ? "bg-white/[0.02]" : ""
                        }`}
                      >
                        <td className="px-4 py-4 font-semibold text-white">
                          {model}
                        </td>

                        <td className="px-4 py-4 text-center font-bold text-zinc-300">
                          {silver} zł
                        </td>

                        <td className="px-4 py-4 text-center font-bold text-yellow-400">
                          {gold} zł
                        </td>

                        <td className="px-4 py-4 text-center font-bold text-sky-200">
                          {platinum} zł
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}