import MenuGlowne from "../komponenty/MenuGlowne";
import SekcjaStartowa from "../komponenty/SekcjaStartowa";
import BannerPromo from "../komponenty/BannerPromo";
import FixGuard from "../komponenty/FixGuard";
import PremiumMobile from "../komponenty/PremiumMobile";
import Stopka from "../komponenty/Stopka";
import FAQSchema from "../komponenty/FAQSchema";

export default function StronaGlowna() {
  const faqLista = [
    {
      pytanie: "Jak wygląda naprawa iPhone i telefonów z Androidem?",
      odpowiedz:
        "Naprawa telefonu zaczyna się od diagnozy usterki i wyceny. Serwisujemy iPhone’y oraz telefony z Androidem, takie jak Samsung, Xiaomi, Huawei czy Motorola. Po akceptacji kosztu przystępujemy do naprawy.",
    },
    {
      pytanie: "Ile kosztuje naprawa iPhone lub telefonu z Androidem?",
      odpowiedz:
        "Cena zależy od modelu i rodzaju uszkodzenia. Najczęściej naprawiane usterki to wymiana wyświetlacza, baterii lub złącza ładowania. Wycenę podajemy przed rozpoczęciem naprawy.",
    },
    {
      pytanie: "Ile trwa naprawa telefonu?",
      odpowiedz:
        "Większość napraw, takich jak wymiana baterii czy ekranu, wykonujemy tego samego dnia. Bardziej skomplikowane usterki mogą potrwać dłużej.",
    },
    {
      pytanie: "Czy naprawa telefonu się opłaca?",
      odpowiedz:
        "W wielu przypadkach tak. Naprawa jest znacznie tańsza niż zakup nowego urządzenia, szczególnie przy droższych modelach iPhone i Samsung.",
    },
    {
      pytanie: "Czy naprawiacie telefony po zalaniu?",
      odpowiedz:
        "Tak, zajmujemy się naprawą telefonów po zalaniu. Kluczowy jest czas, dlatego warto jak najszybciej oddać urządzenie do serwisu.",
    },
    {
      pytanie: "Czy wymieniacie baterię w iPhone i Androidzie?",
      odpowiedz:
        "Tak, oferujemy wymianę baterii w iPhone oraz telefonach z Androidem. Nowa bateria poprawia czas pracy i wydajność urządzenia.",
    },
    {
      pytanie: "Czy naprawiacie zbite wyświetlacze?",
      odpowiedz:
        "Tak, wymieniamy uszkodzone wyświetlacze w iPhone i telefonach z Androidem. To jedna z najczęstszych usług w serwisie.",
    },
    {
      pytanie: "Czy oferujecie gwarancję na naprawę telefonu?",
      odpowiedz:
        "Tak, na każdą naprawę udzielamy gwarancji. Jej długość zależy od rodzaju usługi i użytych części.",
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <FAQSchema />
      <MenuGlowne />

      <main>
        <SekcjaStartowa />
        <BannerPromo />
        <PremiumMobile />
        <FixGuard />

        {/* FAQ */}
        <section className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-12">
            <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
              FAQ
            </div>

            <h2 className="text-4xl font-black md:text-6xl">
              Najczęściej zadawane pytania
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              Wszystko, co najczęściej pytacie o naprawy,
              skup telefonów, sprzedaż urządzeń oraz serwis
              iPhone i Android w SellFix.
            </p>
          </div>

          <div className="space-y-4">
            {faqLista.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-lime-400/10 bg-zinc-900 p-6"
              >
                <h3 className="text-xl font-black text-white">
                  {item.pytanie}
                </h3>

                <p className="mt-4 leading-8 text-zinc-300">
                  {item.odpowiedz}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Stopka />
    </div>
  );
}