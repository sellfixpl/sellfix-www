import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import SEO from "../komponenty/SEO";

export default function FixGuard() {
  return (
    <div className="min-h-screen text-white">
      <SEO
        title="FixGuard | Dodatkowa ochrona telefonu SellFix"
        description="FixGuard to dodatkowa ochrona telefonu w SellFix. Warianty Silver, Gold i Platinum obejmują ochronę wyświetlacza, korpusu lub przedłużenie gwarancji."
        canonical="https://sellfix.pl/fixguard"
      />

      <MenuGlowne />

      <main className="mx-auto max-w-5xl px-5 py-20">
        <div className="mb-12">
          <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
            FixGuard
          </div>

          <h1 className="text-4xl font-black md:text-5xl">
            Usługa serwisowa FixGuard
          </h1>
        </div>

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
      </main>

      <Stopka />
    </div>
  );
}