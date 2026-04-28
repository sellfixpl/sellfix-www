import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import { Info, BadgeCheck, ShieldCheck } from "lucide-react";
import SEO from "../komponenty/SEO";

export default function ONas() {
  return (
    <div className="min-h-screen text-white">
      <MenuGlowne />

      <main className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12">
          <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
            O nas
          </div>

          <h1 className="text-5xl font-black md:text-6xl">
            SellFix — Profesjonalny niezależny serwis gsm w Kielcach
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            SellFix oferuje serwis telefonów w Kielcach, zajmując się szybką i skuteczną naprawą smartfonów, watchy, tabletów, laptopów i konsol wszystkich marek. Nasz serwis w Kielcach oferuje kompleksową pomoc w naprawie i konserwacji urządzeń mobilnych. Wykonujemy zarówno standardowe naprawy, jak i bardziej zaawansowane usługi serwisowe, aby Twój sprzęt działał jak nowy.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-zinc-900 p-6">
            <Info className="mb-4 text-lime-400" size={36} />
            <h3 className="text-2xl font-black">
              Lokalny serwis GSM
            </h3>
            <p className="mt-3 text-zinc-300">
              Działamy stacjonarnie w Kielcach i obsługujemy także
              klientów wysyłkowo z całej Polski.
            </p>
          </div>

          <div className="rounded-3xl bg-zinc-900 p-6">
            <BadgeCheck className="mb-4 text-lime-400" size={36} />
            <h3 className="text-2xl font-black">
              Naprawy pogwarancyjne
            </h3>
            <p className="mt-3 text-zinc-300">
              iPhone, Samsung, Xiaomi i inne marki. Naprawy robimy
              szybko i bez niepotrzebnego kombinowania.
            </p>
          </div>

          <div className="rounded-3xl bg-zinc-900 p-6">
            <ShieldCheck className="mb-4 text-lime-400" size={36} />
            <h3 className="text-2xl font-black">
              Jasne zasady
            </h3>
            <p className="mt-3 text-zinc-300">
              Najpierw diagnoza i wycena, potem decyzja klienta.
              Bez ukrytych kosztów i niespodzianek.
            </p>
          </div>
        </div>
      </main>

      <Stopka />
    </div>
  );
}