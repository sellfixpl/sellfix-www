import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import { BadgeDollarSign } from "lucide-react";
import SEO from "../komponenty/SEO";

export default function SkupTelefonow() {
  return (
    <div className="min-h-screen text-white">
      <SEO
        title="Skup telefonów Kielce | SellFix"
        description="Skupujemy iPhone, Samsung, Xiaomi oraz inne smartfony. Telefony sprawne, używane i uszkodzone. Szybka wycena i gotówka od ręki w SellFix Kielce."
        canonical="https://sellfix.pl/skup-telefonow"
      />

      <MenuGlowne />

      <main className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12">
          <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
            Skup Telefonów
          </div>

          <h1 className="text-5xl font-black md:text-6xl">
            Kupujemy telefony sprawne i uszkodzone
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Skupujemy iPhone, Samsung, Xiaomi oraz inne smartfony.
            Przyjmujemy urządzenia sprawne używane oraz uszkodzone.
          </p>
        </div>

        <div className="rounded-3xl border border-lime-400/20 bg-zinc-900 p-8">
          <BadgeDollarSign
            className="mb-6 text-lime-400"
            size={48}
          />

          <h2 className="text-3xl font-black">
            Jak wygląda wycena?
          </h2>

          <div className="mt-6 space-y-4 text-zinc-300">
            <div className="rounded-2xl bg-zinc-950 p-4">
              1. Podajesz model telefonu
            </div>

            <div className="rounded-2xl bg-zinc-950 p-4">
              2. Opisujesz stan urządzenia
            </div>

            <div className="rounded-2xl bg-zinc-950 p-4">
              3. Otrzymujesz szybką wycenę
            </div>

            <div className="rounded-2xl bg-zinc-950 p-4">
              4. Sprzedajesz od ręki
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="/kontakt#formularz"
              className="inline-flex items-center justify-center rounded-2xl bg-lime-400 px-8 py-4 text-base font-black text-zinc-950 transition hover:scale-105 hover:bg-lime-300"
            >
              Wyceń urządzenie
            </a>
          </div>
        </div>
      </main>

      <Stopka />
    </div>
  );
}