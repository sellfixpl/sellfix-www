import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import SEO from "../komponenty/SEO";

export default function Gwarancja() {
  return (
    <div className="min-h-screen text-white">
      <MenuGlowne />

      <main className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12">
          <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
            Gwarancja
          </div>

          <h1 className="text-5xl font-black md:text-6xl">
            Gwarancja
          </h1>

          <p className="mt-6 max-w-5xl text-lg leading-8 text-zinc-300">
            Zapewniamy 12-miesięczną gwarancję na zakupione urządzenia.
            Gwarancja obowiązuje od daty zakupu i obejmuje wszelkie wady
            fabryczne oraz usterki wynikające z normalnego użytkowania sprzętu.
          </p>
        </div>

        <div className="rounded-3xl bg-zinc-900 p-8 md:p-10">
          <h2 className="mb-8 text-3xl font-black">
            Warunki Gwarancji
          </h2>

          <div className="space-y-8 text-zinc-300 leading-8">
            <div>
              <h3 className="text-xl font-bold text-white">
                1. Okres Gwarancji
              </h3>
              <p>
                Gwarancja obowiązuje przez okres 12 miesięcy od daty zakupu
                urządzenia.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                2. Zakres Gwarancji
              </h3>
              <p>Gwarancja obejmuje:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Wady fabryczne urządzenia</li>
                <li>Usterki wynikające z normalnego użytkowania sprzętu</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                3. Wyłączenia z Gwarancji
              </h3>
              <p>Gwarancja nie obejmuje:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Uszkodzeń mechanicznych, w tym zalań i zbić</li>
                <li>
                  Uszkodzeń powstałych na skutek niewłaściwego użytkowania
                  lub konserwacji urządzenia
                </li>
                <li>
                  Elementów, które ulegają naturalnej eksploatacji
                  (np. baterie)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                4. Procedura Reklamacyjna
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  W przypadku stwierdzenia wady urządzenia, prosimy o kontakt
                  z naszym działem obsługi klienta
                </li>
                <li>
                  Klient jest zobowiązany dostarczyć urządzenie do serwisu
                  SellFix wraz z dowodem zakupu
                </li>
                <li>
                  Serwis SellFix zastrzega sobie prawo do weryfikacji
                  zgłoszonej usterki
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                5. Naprawy i Wymiany
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  W przypadku uznania reklamacji, SellFix zobowiązuje się
                  do bezpłatnej naprawy urządzenia
                </li>
                <li>
                  Jeśli naprawa okaże się niemożliwa, SellFix wymieni
                  urządzenie na nowe lub zwróci równowartość ceny zakupu
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                6. Wyłączenia Gwarancji
              </h3>
              <p>Gwarancja traci ważność w przypadku:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Samodzielnych napraw lub ingerencji w urządzenie przez osoby
                  nieupoważnione
                </li>
                <li>
                  Uszkodzeń powstałych w wyniku użytkowania niezgodnego
                  z instrukcją obsługi
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Stopka />
    </div>
  );
}