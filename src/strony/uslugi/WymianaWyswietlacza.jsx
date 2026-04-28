import MenuGlowne from "../../komponenty/MenuGlowne";
import Stopka from "../../komponenty/Stopka";
import SEO from "../../komponenty/SEO";
import {
  Smartphone,
  BatteryCharging,
  Plug,
  Droplets,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const punkty = [
  {
    "tytul": "Zbity ekran",
    "opis": "Naprawiamy pęknięte szybki i uszkodzone wyświetlacze po upadku telefonu."
  },
  {
    "tytul": "Problemy z dotykiem",
    "opis": "Sprawdzamy dotyk, martwe pola, opóźnienia reakcji i samoczynne klikanie ekranu."
  },
  {
    "tytul": "Czarny ekran",
    "opis": "Diagnozujemy brak obrazu, podświetlenia lub uszkodzenie taśmy i modułu wyświetlacza."
  },
  {
    "tytul": "Jasna wycena",
    "opis": "Przed naprawą podajemy koszt i wariant części, żeby decyzja była prosta."
  }
];

const faq = [
  {
    "pytanie": "Ile trwa wymiana wyświetlacza?",
    "odpowiedz": "W wielu modelach naprawa jest możliwa tego samego dnia. Czas zależy od modelu telefonu i dostępności części."
  },
  {
    "pytanie": "Czy po wymianie wyświetlacza telefon działa normalnie?",
    "odpowiedz": "Tak, po naprawie testujemy obraz, dotyk, jasność, czujniki i podstawowe funkcje urządzenia."
  },
  {
    "pytanie": "Czy dostanę gwarancję?",
    "odpowiedz": "Tak, na wykonaną usługę otrzymujesz gwarancję zgodnie z regulaminem SellFix."
  }
];

export default function WymianaWyswietlacza() {
  return (
    <div className="min-h-screen text-white">
      <SEO
        title="Wymiana wyświetlacza Kielce | SellFix"
        description="Wymiana wyświetlacza w telefonie w Kielcach. Naprawa ekranów iPhone, Samsung, Xiaomi, Huawei i innych smartfonów. Szybka diagnoza i wycena w SellFix."
        canonical="https://sellfix.pl/serwis/wymiana-wyswietlacza"
      />

      <MenuGlowne />

      <main className="mx-auto max-w-7xl px-5 py-20">
        <section className="mb-12">
          <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
            Wymiana wyświetlacza
          </div>

          <h1 className="text-5xl font-black md:text-6xl">
            Wymiana wyświetlacza w telefonie Kielce
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Zbity ekran, problemy z dotykiem, czarny obraz albo paski na wyświetlaczu? W SellFix diagnozujemy uszkodzenie i wymieniamy wyświetlacze w iPhone, Samsung, Xiaomi, Huawei, Motorola oraz innych telefonach.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-lime-400/20 bg-zinc-900 p-6">
            <Smartphone className="mb-4 text-lime-400" size={36} />
            <h2 className="text-2xl font-black">iPhone i Android</h2>
            <p className="mt-3 leading-7 text-zinc-300">
              Obsługujemy urządzenia Apple, Samsung, Xiaomi, Huawei, Motorola,
              Oppo, Realme, OnePlus i inne popularne marki.
            </p>
          </div>

          <div className="rounded-3xl border border-lime-400/20 bg-zinc-900 p-6">
            <ShieldCheck className="mb-4 text-lime-400" size={36} />
            <h2 className="text-2xl font-black">Diagnoza i wycena</h2>
            <p className="mt-3 leading-7 text-zinc-300">
              Najpierw sprawdzamy urządzenie i podajemy koszt.
              Naprawę wykonujemy dopiero po Twojej akceptacji.
            </p>
          </div>

          <div className="rounded-3xl border border-lime-400/20 bg-zinc-900 p-6">
            <CheckCircle2 className="mb-4 text-lime-400" size={36} />
            <h2 className="text-2xl font-black">Gwarancja SellFix</h2>
            <p className="mt-3 leading-7 text-zinc-300">
              Na wykonaną usługę otrzymujesz gwarancję zgodnie z regulaminem
              serwisu SellFix.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8">
            <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
              Co obejmuje usługa?
            </div>

            <h2 className="text-4xl font-black md:text-5xl">
              Jak pomagamy?
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {punkty.map((punkt) => (
              <div
                key={punkt.tytul}
                className="rounded-3xl border border-lime-400/10 bg-zinc-900 p-6 transition hover:border-lime-400/40 hover:bg-zinc-800"
              >
                <CheckCircle2 className="mb-4 text-lime-400" size={34} />

                <h3 className="text-2xl font-black">
                  {punkt.tytul}
                </h3>

                <p className="mt-3 leading-7 text-zinc-300">
                  {punkt.opis}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-lime-400/20 bg-zinc-900 p-8">
          <h2 className="text-3xl font-black md:text-4xl">
            Ile kosztuje usługa?
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
            Cena zależy od modelu telefonu, dostępności części i zakresu
            uszkodzenia. Po diagnozie podajemy konkretną wycenę przed naprawą.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/kontakt#formularz"
              className="inline-flex rounded-2xl bg-lime-400 px-8 py-4 font-black text-zinc-950 transition hover:bg-lime-300"
            >
              Wyceń wymianę wyświetlacza
            </a>

            <a
              href="tel:+48792937406"
              className="inline-flex rounded-2xl border border-lime-400/30 px-8 py-4 font-black text-white transition hover:bg-lime-400 hover:text-zinc-950"
            >
              Zadzwoń
            </a>
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8">
            <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
              FAQ
            </div>

            <h2 className="text-4xl font-black md:text-5xl">
              Najczęstsze pytania
            </h2>
          </div>

          <div className="space-y-4">
            {faq.map((item) => (
              <div
                key={item.pytanie}
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
