import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import { Smartphone, Wrench, BatteryCharging } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../komponenty/SEO";

const markiAndroid = [
  {
    nazwa: "Samsung",
    link: "/serwis/android/samsung",
    opis: "Naprawa Galaxy S, A, Note, Z Fold i Flip",
  },
  {
    nazwa: "Xiaomi",
    link: "/serwis/android/xiaomi",
    opis: "Serwis Redmi, Mi, POCO i Xiaomi",
  },
  {
    nazwa: "Huawei",
    link: "/serwis/android/huawei",
    opis: "Naprawa Huawei P, Mate, Nova",
  },
  {
    nazwa: "Motorola",
    link: "/serwis/android/motorola",
    opis: "Moto G, Edge, Razr i inne modele",
  },
  {
    nazwa: "Oppo",
    link: "/serwis/android/oppo",
    opis: "Serwis telefonów Oppo Reno i Find",
  },
  {
    nazwa: "Realme",
    link: "/serwis/android/realme",
    opis: "Naprawa Realme GT, C, Number Series",
  },
  {
    nazwa: "OnePlus",
    link: "/serwis/android/oneplus",
    opis: "Serwis OnePlus Nord i flagowców",
  },
];

export default function SerwisAndroid() {
  return (
    <div className="min-h-screen text-white">
      <SEO
        title="Serwis GSM Android Kielce | Samsung Xiaomi Huawei"
        description="Naprawa telefonów Android w Kielcach. Samsung, Xiaomi, Huawei, Motorola, Oppo, Realme, OnePlus. Wymiana baterii, wyświetlacza i szybka diagnostyka."
        canonical="https://sellfix.pl/serwis/android"
      />

      <MenuGlowne />

      <main className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12">
          <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
            Android
          </div>

          <h1 className="text-5xl font-black md:text-6xl">
            SellFix - profesjonalny serwis GSM w Kielcach
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Naprawiamy Samsung, Xiaomi, Huawei, Motorola,
            Oppo, Realme, OnePlus i inne smartfony z Androidem.
            Szybka diagnoza, konkretna wycena i profesjonalna naprawa.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-zinc-900 p-6">
            <Smartphone
              className="mb-4 text-lime-400"
              size={36}
            />
            <h3 className="text-2xl font-black">
              Serwis telefonów Android
            </h3>
            <p className="mt-3 text-zinc-300">
              Samsung, Xiaomi, Huawei, Motorola
              oraz inne popularne marki.
            </p>
          </div>

          <div className="rounded-3xl bg-zinc-900 p-6">
            <BatteryCharging
              className="mb-4 text-lime-400"
              size={36}
            />
            <h3 className="text-2xl font-black">
              Wymiana baterii
            </h3>
            <p className="mt-3 text-zinc-300">
              Szybka wymiana baterii, test kondycji
              oraz sprawdzenie układu ładowania.
            </p>
          </div>

          <div className="rounded-3xl bg-zinc-900 p-6">
            <Wrench
              className="mb-4 text-lime-400"
              size={36}
            />
            <h3 className="text-2xl font-black">
              Ekrany i podzespoły
            </h3>
            <p className="mt-3 text-zinc-300">
              Wyświetlacze, gniazda ładowania,
              aparaty, mikrofony i inne naprawy.
            </p>
          </div>
        </div>

        <section className="mt-16">
          <div className="mb-8">
            <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
              Popularne marki
            </div>

            <h2 className="text-4xl font-black md:text-5xl">
              Wybierz markę telefonu
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
              Po kliknięciu przejdziesz do strony z opisem
              najczęstszych usterek, napraw oraz cennikiem
              dla wybranej marki telefonu.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {markiAndroid.map((marka) => (
              <Link
                key={marka.nazwa}
                to={marka.link}
                className="rounded-2xl border border-lime-400/10 bg-zinc-900 p-6 transition hover:border-lime-400/50 hover:bg-zinc-800"
              >
                <h3 className="text-2xl font-black text-white">
                  {marka.nazwa}
                </h3>

                <p className="mt-3 text-zinc-400">
                  {marka.opis}
                </p>

                <p className="mt-4 text-sm font-semibold text-lime-400">
                  Sprawdź naprawy i cennik
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="rounded-3xl border border-lime-400/20 bg-zinc-900 p-8">
            <h2 className="text-3xl font-black">
              Nie widzisz swojej marki?
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
              Naprawiamy również inne telefony Android,
              mniej popularne modele oraz urządzenia firmowe.
              Jeśli nie widzisz swojego modelu, skontaktuj się
              z nami — przygotujemy indywidualną wycenę.
            </p>

            <Link
              to="/kontakt"
              className="mt-8 inline-flex rounded-2xl bg-lime-400 px-8 py-4 font-bold text-zinc-950 transition hover:bg-lime-300"
            >
              Zapytaj o swój model
            </Link>
          </div>
        </section>
      </main>

      <Stopka />
    </div>
  );
}