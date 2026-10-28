import { Link } from "react-router-dom";
import { Smartphone, BatteryCharging, Wrench, ArrowRight, Phone, MapPin } from "lucide-react";
import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import SEO from "../komponenty/SEO";

// Zachowujemy pełną listę modeli z dotychczasowej strony.
const modeleIphone = [
  "iPhone SE 2020", "iPhone SE 2022", "iPhone 8", "iPhone 8 Plus",
  "iPhone X", "iPhone XR", "iPhone XS", "iPhone XS Max",
  "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max",
  "iPhone 12", "iPhone 12 Mini", "iPhone 12 Pro", "iPhone 12 Pro Max",
  "iPhone 13", "iPhone 13 Mini", "iPhone 13 Pro", "iPhone 13 Pro Max",
  "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max",
  "iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max",
  "iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max",
  "iPhone 17", "iPhone 17 Plus", "iPhone 17 Pro", "iPhone 17 Pro Max",
];

const uslugi = [
  {
    tytul: "Naprawa urządzeń Apple",
    opis: "Diagnoza usterek i naprawa iPhone, iPad, MacBook oraz Apple Watch. Zakres usługi ustalamy po sprawdzeniu urządzenia.",
    ikona: Smartphone,
  },
  {
    tytul: "Wymiana baterii iPhone",
    opis: "Weryfikacja problemów z zasilaniem, wymiana baterii oraz kontrola ładowania i działania urządzenia po naprawie.",
    ikona: BatteryCharging,
  },
  {
    tytul: "Wymiana wyświetlacza i podzespołów",
    opis: "Naprawy ekranów, złączy ładowania, aparatów, mikrofonów i głośników. Możliwości naprawy zależą od modelu i rodzaju usterki.",
    ikona: Wrench,
  },
];

function slugify(model) {
  return model.toLowerCase().replace(/\s+/g, "-");
}

export default function SerwisApple() {
  return (
    <div className="min-h-screen text-white">
      <SEO
        title="Serwis Apple Kielce – Naprawa iPhone i wymiana baterii | SellFix"
        description="Serwis Apple w Kielcach przy ul. Warszawskiej 28. Naprawa iPhone, wymiana baterii, wyświetlaczy, aparatów i złączy ładowania. Sprawdź modele i skontaktuj się z SellFix."
        canonical="https://sellfix.pl/serwis/apple"
      />
      <MenuGlowne />
      <main className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <nav aria-label="Ścieżka nawigacji" className="mb-8 text-sm text-zinc-400">
          <Link to="/" className="hover:text-lime-400">Strona główna</Link>
          <span aria-hidden="true"> / </span>
          <Link to="/serwis" className="hover:text-lime-400">Serwis</Link>
          <span aria-hidden="true"> / </span>
          <span className="text-zinc-200">Apple</span>
        </nav>

        <section aria-labelledby="apple-heading">
          <span className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">Serwis Apple</span>
          <h1 id="apple-heading" className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            Serwis Apple w Kielcach – naprawa iPhone
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Naprawiamy iPhone oraz inne urządzenia Apple: iPad, MacBook i Apple Watch.
            Zaczynamy od diagnozy usterki, przedstawiamy zakres prac i wycenę,
            a następnie ustalamy termin naprawy.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-2xl bg-lime-400 px-7 py-4 font-bold text-zinc-950 transition hover:bg-lime-300">
              Zapytaj o naprawę <ArrowRight size={18} />
            </Link>
            <a href="tel:+48792937406" className="inline-flex items-center gap-2 rounded-2xl border border-lime-400/30 px-7 py-4 font-bold text-white transition hover:border-lime-400 hover:text-lime-400">
              <Phone size={18} /> Zadzwoń
            </a>
          </div>
        </section>

        <section aria-label="Najczęstsze usługi Apple" className="mt-14 grid gap-6 md:grid-cols-3">
          {uslugi.map(({ tytul, opis, ikona: Ikona }) => (
            <article key={tytul} className="rounded-3xl border border-lime-400/10 bg-zinc-900 p-6">
              <Ikona className="mb-4 text-lime-400" size={36} aria-hidden="true" />
              <h2 className="text-2xl font-black">{tytul}</h2>
              <p className="mt-3 leading-7 text-zinc-300">{opis}</p>
            </article>
          ))}
        </section>

        <section className="mt-16" aria-labelledby="modele-heading">
          <span className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">Modele iPhone</span>
          <h2 id="modele-heading" className="text-3xl font-black md:text-5xl">Wybierz model iPhone</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
            Wybierz model, aby sprawdzić opis najczęstszych napraw. Dostępność części
            oraz ostateczną cenę potwierdzamy indywidualnie.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {modeleIphone.map((model) => (
              <Link
                key={model}
                to={`/serwis/apple/${slugify(model)}`}
                className="group rounded-2xl border border-lime-400/10 bg-zinc-900 p-5 transition hover:border-lime-400/50 hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-400"
                aria-label={`Sprawdź naprawy ${model}`}
              >
                <span className="block text-lg font-black text-white">{model}</span>
                <span className="mt-2 flex items-center gap-2 text-sm text-zinc-400 group-hover:text-lime-400">
                  Sprawdź naprawy <ArrowRight size={15} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-lime-400/20 bg-zinc-900 p-8" aria-labelledby="inne-apple-heading">
          <span className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">Inne urządzenia Apple</span>
          <h2 id="inne-apple-heading" className="text-3xl font-black md:text-4xl">iPad, MacBook, Apple Watch i AirPods</h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            Nie widzisz swojego urządzenia? Skontaktuj się z nami. Sprawdzimy możliwość
            naprawy, dostępność części i przedstawimy indywidualną wycenę.
          </p>
          <p className="mt-5 flex items-center gap-2 text-zinc-300"><MapPin size={18} className="text-lime-400" aria-hidden="true" /> Kielce, ul. Warszawska 28</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/kontakt" className="inline-flex rounded-2xl bg-lime-400 px-8 py-4 font-black text-zinc-950 transition hover:bg-lime-300">Zapytaj o swój model</Link>
            <a href="tel:+48792937406" className="inline-flex rounded-2xl border border-lime-400/30 px-8 py-4 font-black text-white transition hover:bg-lime-400 hover:text-zinc-950">Zadzwoń</a>
          </div>
        </section>
      </main>
      <Stopka />
    </div>
  );
}
