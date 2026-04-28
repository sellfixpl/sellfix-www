import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import SEO from "../komponenty/SEO";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function Regulaminy() {
  return (
    <div className="min-h-screen text-white">
      <SEO
        title="Regulaminy i dokumenty | SellFix Kielce"
        description="Regulaminy i dokumenty SellFix. Regulamin serwisu, warunki gwarancji, FixGuard oraz polityka prywatności i cookies."
        canonical="https://sellfix.pl/regulaminy"
      />

      <MenuGlowne />

      <main className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12">
          <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
            Regulaminy
          </div>

          <h1 className="text-5xl font-black md:text-6xl">
            Regulaminy i dokumenty SellFix
          </h1>
        </div>

        <div className="rounded-3xl bg-zinc-900 p-8">
          <FileText
            className="mb-6 text-lime-400"
            size={48}
          />

          <div className="mt-6 space-y-4 text-zinc-300">
            <Link
              to="/regulamin-serwisu"
              className="block rounded-2xl bg-zinc-950 p-4 transition hover:bg-zinc-800"
            >
              Regulamin serwisu
            </Link>

            <Link
              to="/gwarancja"
              className="block rounded-2xl bg-zinc-950 p-4 transition hover:bg-zinc-800"
            >
              Warunki gwarancji
            </Link>

            <Link
              to="/fixguard"
              className="block rounded-2xl bg-zinc-950 p-4 transition hover:bg-zinc-800"
            >
              FixGuard – Dodatkowa Ochrona
            </Link>

            <Link
              to="/polityka-prywatnosci"
              className="block rounded-2xl bg-zinc-950 p-4 transition hover:bg-zinc-800"
            >
              Polityka prywatności i cookies
            </Link>
          </div>
        </div>
      </main>

      <Stopka />
    </div>
  );
}