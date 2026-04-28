import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import {
  Smartphone,
  BatteryCharging,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../komponenty/SEO";

const modeleIphone = [
  "iPhone SE 2020",
  "iPhone SE 2022",
  "iPhone 8",
  "iPhone 8 Plus",
  "iPhone X",
  "iPhone XR",
  "iPhone XS",
  "iPhone XS Max",
  "iPhone 11",
  "iPhone 11 Pro",
  "iPhone 11 Pro Max",
  "iPhone 12",
  "iPhone 12 Mini",
  "iPhone 12 Pro",
  "iPhone 12 Pro Max",
  "iPhone 13",
  "iPhone 13 Mini",
  "iPhone 13 Pro",
  "iPhone 13 Pro Max",
  "iPhone 14",
  "iPhone 14 Plus",
  "iPhone 14 Pro",
  "iPhone 14 Pro Max",
  "iPhone 15",
  "iPhone 15 Plus",
  "iPhone 15 Pro",
  "iPhone 15 Pro Max",
  "iPhone 16",
  "iPhone 16 Plus",
  "iPhone 16 Pro",
  "iPhone 16 Pro Max",
  "iPhone 17",
  "iPhone 17 Plus",
  "iPhone 17 Pro",
  "iPhone 17 Pro Max",
];

function slugify(model) {
  return model
    .toLowerCase()
    .replaceAll(" ", "-");
}

export default function SerwisApple() {
  return (
    <div className="min-h-screen text-white">
      <SEO
        title="Serwis Apple Kielce | Naprawa iPhone, iPad, MacBook"
        description="Pogwarancyjny serwis Apple w Kielcach. Naprawa iPhone, wymiana baterii, wyświetlacza, złącza ładowania, aparatów i innych podzespołów."
        canonical="https://sellfix.pl/serwis/apple"
      />

      <MenuGlowne />

      <main className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12">
          <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
            Apple
          </div>

          <h1 className="text-5xl font-black md:text-6xl">
            Profesjonalna naprawa urządzeń Apple
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Naprawiamy iPhone, iPad, MacBook i Apple Watch.
            Zawsze zaczynamy od diagnozy, jasnej wyceny
            i konkretnego terminu naprawy.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-zinc-900 p-6">
            <Smartphone
              className="mb-4 text-lime-400"
              size={36}
            />
            <h3 className="text-2xl font-black">
              Pogwarancyjny serwis Apple
            </h3>
            <p className="mt-3 text-zinc-300">
              iPhone, iPad, MacBook, Apple Watch.
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
              oraz kontrola poprawności ładowania.
            </p>
          </div>

          <div className="rounded-3xl bg-zinc-900 p-6">
            <Wrench
              className="mb-4 text-lime-400"
              size={36}
            />
            <h3 className="text-2xl font-black">
              Wyświetlacze i podzespoły
            </h3>
            <p className="mt-3 text-zinc-300">
              Ekrany, gniazda ładowania, aparaty,
              mikrofony, głośniki i inne naprawy.
            </p>
          </div>
        </div>

        <section className="mt-16">
          <div className="mb-8">
            <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
              Modele iPhone
            </div>

            <h2 className="text-4xl font-black md:text-5xl">
              Wybierz model i sprawdź naprawy
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
              Po kliknięciu przejdziesz do strony z opisem
              najczęstszych usterek, dostępnych napraw
              oraz cennikiem dla konkretnego modelu.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {modeleIphone.map((model) => (
              <Link
                key={model}
                to={`/serwis/apple/${slugify(model)}`}
                className="rounded-2xl border border-lime-400/10 bg-zinc-900 p-5 transition hover:border-lime-400/50 hover:bg-zinc-800"
              >
                <p className="text-lg font-black text-white">
                  {model}
                </p>

                <p className="mt-2 text-sm text-zinc-400">
                  Sprawdź naprawy i cennik
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-lime-400/20 bg-zinc-900 p-8">
          <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
            Nie widzisz swojego modelu?
          </div>

          <h2 className="text-3xl font-black md:text-4xl">
            Naprawiamy również iPad, Apple Watch, MacBook oraz inne urządzenia Apple
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
            Jeśli nie widzisz tutaj swojego modelu urządzenia,
            skontaktuj się z nami. Serwisujemy również iPad,
            Apple Watch, MacBook, AirPods oraz inne urządzenia Apple.
            Sprawdzimy dostępność części i przygotujemy indywidualną wycenę.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/kontakt"
              className="inline-flex rounded-2xl bg-lime-400 px-8 py-4 font-black text-zinc-950 transition hover:bg-lime-300"
            >
              Zapytaj o swój model
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