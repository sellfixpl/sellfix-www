import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import SEO from "../komponenty/SEO";

export default function PolitykaPrywatnosci() {
  return (
    <div className="min-h-screen text-white">
      <MenuGlowne />

      <main className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12">
          <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
            Polityka prywatności
          </div>

          <h1 className="text-5xl font-black md:text-6xl">
            Polityka prywatności i cookies
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-300">
            Niniejsza polityka prywatności określa zasady przetwarzania danych
            osobowych oraz wykorzystywania plików cookies na stronie SellFix.
          </p>
        </div>

        <div className="rounded-3xl bg-zinc-900 p-8 md:p-10">
          <div className="space-y-8 text-zinc-300 leading-8">
            <div>
              <h2 className="text-2xl font-black text-white">
                1. Administrator danych
              </h2>
              <p>
                Administratorem danych jest SellFix, ul. Warszawska 28,
                25-312 Kielce.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                2. Zakres zbieranych danych
              </h2>
              <p>
                Możemy przetwarzać dane przekazane przez formularz kontaktowy,
                takie jak imię, numer telefonu, adres e-mail oraz treść
                wiadomości.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                3. Cel przetwarzania danych
              </h2>
              <p>
                Dane wykorzystywane są wyłącznie w celu kontaktu z klientem,
                realizacji usług serwisowych oraz obsługi zapytań ofertowych.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                4. Pliki cookies
              </h2>
              <p>
                Strona korzysta z plików cookies w celu poprawnego działania,
                analizy ruchu oraz działań marketingowych zgodnych z Google
                Consent Mode v2.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">
                5. Prawa użytkownika
              </h2>
              <p>
                Użytkownik ma prawo do wglądu, poprawiania, usunięcia danych
                oraz ograniczenia ich przetwarzania.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Stopka />
    </div>
  );
}