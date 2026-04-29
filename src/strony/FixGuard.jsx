import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import SEO from "../komponenty/SEO";

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
    <div className="min-h-screen text-white">
      <SEO
        title="FixGuard | Dodatkowa ochrona telefonu SellFix"
        description="FixGuard to dodatkowa ochrona telefonu w SellFix. Warianty Silver, Gold i Platinum obejmują ochronę wyświetlacza, korpusu lub przedłużenie gwarancji."
        canonical="https://sellfix.pl/fixguard"
      />

      <MenuGlowne />

      <main className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12">
          <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
            FixGuard
          </div>

          <h1 className="text-4xl font-black md:text-5xl">
            Usługa serwisowa FixGuard
          </h1>
        </div>

        <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
          {/* LEWA STRONA */}
          <div className="space-y-10 rounded-3xl bg-zinc-900 p-8 md:p-10 text-zinc-300 leading-8">
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">
                §1. Postanowienia ogólne
              </h2>

              <ol className="list-decimal space-y-3 pl-5">
                <li>
                  Regulamin określa zasady korzystania z Dodatkowej Ochrony
                  przy zakupie telefonu w sklepie SellFix.
                </li>
                <li>
                  Dodatkowa Ochrona dostępna jest w trzech wariantach:
                  Silver, Gold i Platinum.
                </li>
                <li>
                  Usługa obejmuje wymianę wyświetlacza i/lub korpusu
                  urządzenia lub przedłużenie gwarancji o kolejne 12 miesięcy.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">
                §2. Warianty ochrony
              </h2>

              <ol className="list-decimal space-y-3 pl-5">
                <li>Silver – ochrona wyświetlacza telefonu.</li>
                <li>Gold – ochrona wyświetlacza oraz korpusu telefonu.</li>
                <li>
                  Platinum – przedłużenie podstawowej gwarancji o dodatkowy rok.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">
                §3. Zakres usługi
              </h2>

              <ol className="list-decimal space-y-3 pl-5">
                <li>
                  Ochrona obejmuje wymianę uszkodzonych elementów na zamienniki
                  lub przedłużenie okresu gwarancji.
                </li>
                <li>
                  Zamienniki są w pełni funkcjonalne, lecz mogą różnić się
                  od oryginalnych komponentów.
                </li>
              </ol>
            </section>
          </div>

          {/* PRAWA STRONA — CENNIK */}
          <div className="rounded-3xl border border-lime-400/20 bg-zinc-900 p-6 shadow-2xl shadow-black/30">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-lime-400">
              Cennik wariantów
            </p>

            <h2 className="mb-6 text-3xl font-black text-white">
              FixGuard dla iPhone
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="min-w-full text-sm">
                <thead className="bg-lime-400 text-zinc-950">
                  <tr>
                    <th className="px-4 py-4 text-left font-black">Model</th>
                    <th className="px-4 py-4 text-center font-black">Silver</th>
                    <th className="px-4 py-4 text-center font-black">Gold</th>
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
      </main>

      <Stopka />
    </div>
  );
}