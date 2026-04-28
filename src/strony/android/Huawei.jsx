import MenuGlowne from "../../komponenty/MenuGlowne";
import Stopka from "../../komponenty/Stopka";
import SEO from "../../komponenty/SEO";
import {
  Smartphone,
  BatteryCharging,
  Plug,
  Droplets,
  Camera,
  Volume2,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const naprawy = [
  {
    nazwa: "Wymiana wyświetlacza",
    opis: "Naprawiamy zbite ekrany, problemy z dotykiem, migotanie obrazu, paski na ekranie oraz czarny ekran po upadku.",
    icon: Smartphone,
  },
  {
    nazwa: "Wymiana baterii",
    opis: "Wymieniamy baterie, gdy telefon szybko się rozładowuje, wyłącza się, grzeje albo trzyma wyraźnie krócej niż wcześniej.",
    icon: BatteryCharging,
  },
  {
    nazwa: "Naprawa złącza ładowania",
    opis: "Sprawdzamy port USB-C, problemy z ładowaniem, luźne gniazdo, brak reakcji na ładowarkę i problemy z transferem danych.",
    icon: Plug,
  },
  {
    nazwa: "Naprawa po zalaniu",
    opis: "Wykonujemy diagnozę i czyszczenie po kontakcie z cieczą. W takich przypadkach najlepiej zgłosić się jak najszybciej.",
    icon: Droplets,
  },
  {
    nazwa: "Aparat i szybka aparatu",
    opis: "Usuwamy problemy z ostrością, uszkodzoną szybką aparatu, rozmazanymi zdjęciami i błędami aplikacji aparatu.",
    icon: Camera,
  },
  {
    nazwa: "Głośnik, mikrofon i rozmowy",
    opis: "Naprawiamy problemy z dźwiękiem, rozmowami, nagrywaniem audio, brakiem dźwięku i zabrudzonymi siatkami głośników.",
    icon: Volume2,
  },
];

export default function Huawei() {
  return (
    <div className="min-h-screen text-white">
      <SEO
        title="Serwis Huawei Kielce | Naprawa telefonów Huawei"
        description="Serwis Huawei w Kielcach. Naprawa telefonów Huawei, wymiana wyświetlacza, baterii, złącza ładowania, aparatu, głośnika oraz naprawy po zalaniu."
        canonical="https://sellfix.pl/serwis/android/huawei"
      />

      <MenuGlowne />

      <main className="mx-auto max-w-7xl px-5 py-20">
        <Link
          to="/serwis/android"
          className="mb-8 inline-flex items-center gap-2 rounded-2xl border border-lime-400/20 bg-zinc-900 px-5 py-3 text-sm font-bold text-zinc-200 transition hover:bg-lime-400 hover:text-zinc-950"
        >
          <ArrowLeft size={18} />
          Wróć do serwisu Android
        </Link>

        <section className="mb-12">
          <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
            Huawei
          </div>

          <h1 className="text-5xl font-black md:text-6xl">
            Serwis Huawei Kielce
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Naprawiamy telefony Huawei: Huawei P, Mate, Nova oraz starsze modele. Wykonujemy diagnozę,
            wymianę wyświetlacza, baterii, złącza ładowania, aparatu,
            głośnika oraz naprawy po zalaniu. Przed rozpoczęciem pracy
            podajemy jasną wycenę.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-lime-400/20 bg-zinc-900 p-6">
            <h2 className="text-2xl font-black">Diagnoza usterki</h2>
            <p className="mt-3 leading-7 text-zinc-300">
              Sprawdzamy telefon i określamy, co faktycznie wymaga naprawy.
              Dzięki temu nie przepłacasz za niepotrzebne części.
            </p>
          </div>

          <div className="rounded-3xl border border-lime-400/20 bg-zinc-900 p-6">
            <h2 className="text-2xl font-black">Wycena przed naprawą</h2>
            <p className="mt-3 leading-7 text-zinc-300">
              Koszt potwierdzamy przed rozpoczęciem pracy. Naprawiamy dopiero
              po akceptacji ceny przez klienta.
            </p>
          </div>

          <div className="rounded-3xl border border-lime-400/20 bg-zinc-900 p-6">
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
              Naprawy Huawei
            </div>

            <h2 className="text-4xl font-black md:text-5xl">
              Najczęstsze naprawy telefonów Huawei
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
              Poniżej znajdziesz usługi, które najczęściej wykonujemy
              przy telefonach Huawei. Dokładną cenę podajemy po diagnozie
              i sprawdzeniu dostępności części.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {naprawy.map((naprawa) => {
              const Icon = naprawa.icon;

              return (
                <div
                  key={naprawa.nazwa}
                  className="rounded-3xl border border-lime-400/10 bg-zinc-900 p-6 transition hover:border-lime-400/40 hover:bg-zinc-800"
                >
                  <Icon className="mb-4 text-lime-400" size={34} />

                  <h3 className="text-2xl font-black">
                    {naprawa.nazwa}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-300">
                    {naprawa.opis}
                  </p>

                  <div className="mt-5 rounded-2xl bg-zinc-950 p-4">
                    <p className="text-sm font-bold text-lime-400">
                      Cena: po diagnozie
                    </p>
                    <p className="mt-1 text-sm text-zinc-400">
                      Cena zależy od modelu, wersji części oraz zakresu uszkodzenia.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-lime-400/20 bg-zinc-900 p-8">
          <h2 className="text-3xl font-black md:text-4xl">
            Chcesz wycenić naprawę Huawei?
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
            Napisz do nas, podaj dokładny model telefonu i opisz usterkę.
            Sprawdzimy dostępność części i przygotujemy wycenę naprawy.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/kontakt#formularz"
              className="inline-flex rounded-2xl bg-lime-400 px-8 py-4 font-black text-zinc-950 transition hover:bg-lime-300"
            >
              Wyceń naprawę
            </a>

            <a
              href="tel:+48792937406"
              className="inline-flex rounded-2xl border border-lime-400/30 px-8 py-4 font-black text-white transition hover:bg-lime-400 hover:text-zinc-950"
            >
              Zadzwoń
            </a>
          </div>
        </section>
      </main>

      <Stopka />
    </div>
  );
}
