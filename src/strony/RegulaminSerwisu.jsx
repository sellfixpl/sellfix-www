import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import SEO from "../komponenty/SEO";

export default function RegulaminSerwisu() {
  return (
    <div className="min-h-screen text-white">
      <MenuGlowne />

      <main className="mx-auto max-w-5xl px-5 py-20">
        <div className="mb-12">
          <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
            Regulamin serwisu
          </div>

          <h1 className="text-4xl font-black md:text-5xl">
            Regulamin Serwisu SellFix Sp. z o.o.
          </h1>
        </div>

        <div className="rounded-3xl bg-zinc-900 p-8 md:p-10 space-y-10 text-zinc-300 leading-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">
              §1. Postanowienia ogólne
            </h2>

            <ol className="list-decimal space-y-3 pl-5">
              <li>
                Niniejszy regulamin określa zasady korzystania z usług
                serwisowych świadczonych przez SellFix Sp. z o.o. z siedzibą
                w Kielcach, przy ul. Warszawskiej 28.
              </li>
              <li>
                Serwis SellFix świadczy usługi naprawy urządzeń
                elektronicznych, w szczególności telefonów komórkowych,
                tabletów, laptopów oraz innych urządzeń mobilnych.
              </li>
              <li>
                Kontakt z serwisem możliwy jest pod numerem telefonu:
                792 937 406.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">
              §2. Zakres usług
            </h2>

            <ol className="list-decimal space-y-3 pl-5">
              <li>
                Serwis SellFix wykonuje usługi serwisowe dla urządzeń różnych
                marek, w tym urządzeń Apple oraz innych popularnych producentów.
              </li>
              <li>
                Serwis oferuje naprawy ekspresowe, zazwyczaj realizowane
                w ciągu dwóch godzin, z możliwością wykonania bardziej
                skomplikowanych napraw na podstawie indywidualnej wyceny
                i terminu.
              </li>
              <li>
                SellFix oferuje również usługi zabezpieczenia urządzeń poprzez
                montaż folii hydrożelowych, szkieł hartowanych 9H oraz etui
                z opcją dojazdu do klienta dla zabezpieczeń firmowych.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">
              §3. Zasady przyjęcia i wydania urządzeń
            </h2>

            <ol className="list-decimal space-y-3 pl-5">
              <li>
                Klient dostarcza urządzenie do siedziby serwisu osobiście
                lub za pośrednictwem kuriera.
              </li>
              <li>
                Po przyjęciu urządzenia do serwisu SellFix dokonuje wstępnej
                diagnozy i wyceny kosztów naprawy. Diagnoza oraz kosztorys
                są przedstawiane klientowi przed przystąpieniem do naprawy.
              </li>
              <li>
                Wydanie urządzenia następuje po dokonaniu pełnej płatności
                za wykonaną usługę.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">
              §4. Gwarancja i reklamacje
            </h2>

            <ol className="list-decimal space-y-3 pl-5">
              <li>
                Na wszystkie naprawy wykonane przez SellFix Sp. z o.o.
                udzielana jest 3-miesięczna gwarancja, chyba że ustalono
                inaczej.
              </li>
              <li>
                Na folie ochronne 3mk udzielana jest 6-miesięczna gwarancja.
              </li>
              <li>
                W przypadku wystąpienia wady po naprawie klient zobowiązany
                jest do zgłoszenia reklamacji niezwłocznie, ale nie później
                niż w ciągu 7 dni od stwierdzenia usterki.
              </li>
              <li>
                Reklamacje rozpatrywane są w terminie 14 dni od dnia ich
                zgłoszenia.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">
              §5. Odpowiedzialność serwisu
            </h2>

            <ol className="list-decimal space-y-3 pl-5">
              <li>
                SellFix Sp. z o.o. nie ponosi odpowiedzialności za utratę
                danych zapisanych na urządzeniu. Klient jest zobowiązany
                do wykonania kopii zapasowej danych przed przekazaniem
                urządzenia do serwisu.
              </li>
              <li>
                Serwis nie ponosi odpowiedzialności za urządzenia pozostawione
                w serwisie dłużej niż 30 dni od zakończenia naprawy, jeśli
                nie zostały odebrane przez klienta.
              </li>
              <li>
                SellFix Sp. z o.o. nie ponosi odpowiedzialności za usterki,
                które ujawnią się po wykonaniu naprawy zgłoszonej usterki
                i które nie były objęte wcześniejszą diagnozą serwisu.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">
              §6. Ochrona danych osobowych
            </h2>

            <ol className="list-decimal space-y-3 pl-5">
              <li>
                Dane osobowe klientów są przetwarzane zgodnie z przepisami
                prawa o ochronie danych osobowych. Administratorem danych
                jest SellFix Sp. z o.o.
              </li>
              <li>
                Dane klientów wykorzystywane są wyłącznie w celu realizacji
                usług serwisowych i nie są udostępniane osobom trzecim bez
                zgody klienta, chyba że wynika to z obowiązujących przepisów
                prawa.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">
              §7. Postanowienia końcowe
            </h2>

            <ol className="list-decimal space-y-3 pl-5">
              <li>
                Regulamin obowiązuje od dnia jego publikacji i jest dostępny
                w siedzibie serwisu oraz na stronie internetowej
                www.sellfix.pl.
              </li>
              <li>
                SellFix Sp. z o.o. zastrzega sobie prawo do zmiany regulaminu
                w dowolnym czasie, przy czym wszelkie zmiany regulaminu będą
                obowiązywać od momentu ich publikacji.
              </li>
            </ol>
          </section>
        </div>
      </main>

      <Stopka />
    </div>
  );
}