import { Link } from "react-router-dom";
import {
  Smartphone,
  BatteryCharging,
  Wrench,
  Apple,
  MonitorSmartphone,
  Droplets,
  Plug,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import SEO from "../komponenty/SEO";

const uslugi = [
  {
    tytul: "Wymiana wyświetlacza",
    opis: "Wymieniamy uszkodzone ekrany w telefonach iPhone, Samsung, Xiaomi i innych marek. Przed naprawą ustalamy zakres prac oraz koszt.",
    Icon: Smartphone,
  },
  {
    tytul: "Wymiana baterii",
    opis: "Sprawdzamy problemy z czasem pracy i ładowaniem telefonu. Dobieramy odpowiednią baterię i kontrolujemy działanie urządzenia po wymianie.",
    Icon: BatteryCharging,
  },
  {
    tytul: "Naprawa gniazda ładowania",
    opis: "Diagnozujemy problemy z ładowaniem i połączeniem przewodowym. Sprawdzamy złącze oraz pozostałe elementy układu ładowania.",
    Icon: Plug,
  },
  {
    tytul: "Diagnostyka po zalaniu",
    opis: "Weryfikujemy stan telefonu po kontakcie z cieczą i oceniamy możliwości naprawy. Zakres prac zależy od stanu urządzenia.",
    Icon: Droplets,
  },
  {
    tytul: "Naprawa aparatów i dźwięku",
    opis: "Sprawdzamy usterki aparatów, mikrofonów, głośników i innych podzespołów, a następnie przedstawiamy możliwe rozwiązania.",
    Icon: Wrench,
  },
  {
    tytul: "Serwis innych urządzeń",
    opis: "Przyjmujemy także tablety, smartwatche, laptopy i wybrane urządzenia elektroniczne. Dostępność naprawy potwierdzamy po weryfikacji.",
    Icon: MonitorSmartphone,
  },
];

export default function Serwis() {
  return (
    <div className="min-h-screen text-white">
      <SEO
        title="Serwis telefonów Kielce | Naprawa iPhone, Samsung | SellFix"
        description="Serwis telefonów w Kielcach, ul. Warszawska 28. Naprawa iPhone, Samsung i Xiaomi, wymiana baterii, ekranów i gniazd ładowania. Skontaktuj się z SellFix."
        canonical="https://sellfix.pl/serwis"
      />
      <MenuGlowne />

      <main className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <header className="mb-12">
          <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
            Serwis GSM Kielce
          </div>
          <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            Serwis telefonów w Kielcach – naprawa iPhone, Samsung i Xiaomi
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-300">
            SellFix to niezależny serwis telefonów przy ul. Warszawskiej 28 w Kielcach.
            Naprawiamy smartfony różnych marek, a także wybrane tablety, smartwatche
            i laptopy. Zaczynamy od diagnozy usterki oraz przedstawienia wyceny
            przed rozpoczęciem naprawy.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/kontakt#formularz"
              className="inline-flex items-center gap-2 rounded-2xl bg-lime-400 px-7 py-4 font-bold text-zinc-950 transition hover:bg-lime-300"
            >
              Zapytaj o wycenę <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href="tel:+48792937406"
              className="inline-flex items-center gap-2 rounded-2xl border border-lime-400/30 px-7 py-4 font-bold text-white transition hover:border-lime-400 hover:text-lime-400"
            >
              <Phone size={18} aria-hidden="true" /> Zadzwoń: 792 937 406
            </a>
          </div>
        </header>

        <section aria-labelledby="marki-heading" className="mb-16">
          <h2 id="marki-heading" className="mb-7 text-3xl font-black md:text-4xl">
            Wybierz serwis swojej marki
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              to="/serwis/apple"
              className="group rounded-3xl border border-lime-400/20 bg-zinc-900 p-7 transition hover:border-lime-400/60 hover:bg-zinc-800"
            >
              <Apple className="mb-5 text-lime-400" size={38} aria-hidden="true" />
              <h3 className="text-2xl font-black">Serwis Apple – iPhone</h3>
              <p className="mt-3 leading-7 text-zinc-300">
                Wymiana baterii, wyświetlaczy, naprawa ładowania i diagnostyka usterek
                telefonów iPhone oraz innych urządzeń Apple.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-lime-400">
                Zobacz serwis Apple <ArrowRight size={18} aria-hidden="true" />
              </span>
            </Link>
            <Link
              to="/serwis/android"
              className="group rounded-3xl border border-lime-400/20 bg-zinc-900 p-7 transition hover:border-lime-400/60 hover:bg-zinc-800"
            >
              <MonitorSmartphone className="mb-5 text-lime-400" size={38} aria-hidden="true" />
              <h3 className="text-2xl font-black">Serwis Android – Samsung, Xiaomi i inne</h3>
              <p className="mt-3 leading-7 text-zinc-300">
                Naprawiamy telefony Samsung, Xiaomi, Huawei, Motorola i innych marek.
                Sprawdzamy uszkodzenia ekranów, baterii i podzespołów.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-lime-400">
                Zobacz serwis Android <ArrowRight size={18} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </section>

        <section aria-labelledby="uslugi-heading" className="mb-16">
          <h2 id="uslugi-heading" className="mb-4 text-3xl font-black md:text-4xl">
            Jakie naprawy wykonujemy?
          </h2>
          <p className="mb-8 max-w-3xl leading-8 text-zinc-300">
            Zakres napraw zależy od modelu i stanu urządzenia. Po sprawdzeniu
            telefonu przedstawiamy dostępne możliwości oraz koszt usługi.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {uslugi.map(({ tytul, opis, Icon }) => (
              <article key={tytul} className="rounded-3xl bg-zinc-900 p-6">
                <Icon className="mb-4 text-lime-400" size={36} aria-hidden="true" />
                <h3 className="text-2xl font-black">{tytul}</h3>
                <p className="mt-3 leading-7 text-zinc-300">{opis}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="proces-heading" className="mb-16">
          <h2 id="proces-heading" className="mb-8 text-3xl font-black md:text-4xl">
            Jak przebiega naprawa telefonu?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["01", "Zgłoszenie usterki", "Opisz problem z telefonem i skontaktuj się z nami lub odwiedź serwis w Kielcach."],
              ["02", "Diagnoza i wycena", "Sprawdzamy urządzenie i informujemy o możliwym zakresie oraz koszcie naprawy."],
              ["03", "Naprawa i testy", "Po zaakceptowaniu wyceny wykonujemy usługę i sprawdzamy działanie naprawianych elementów."],
            ].map(([numer, tytul, opis]) => (
              <div key={numer} className="rounded-3xl border border-lime-400/10 bg-zinc-900 p-6">
                <span className="text-3xl font-black text-lime-400">{numer}</span>
                <h3 className="mt-4 text-xl font-black">{tytul}</h3>
                <p className="mt-3 leading-7 text-zinc-300">{opis}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-lime-400/20 bg-zinc-900 p-7 md:p-10">
          <div className="flex items-start gap-4">
            <ShieldCheck className="shrink-0 text-lime-400" size={38} aria-hidden="true" />
            <div>
              <h2 className="text-3xl font-black">Potrzebujesz naprawy telefonu w Kielcach?</h2>
              <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
                Odwiedź SellFix przy ul. Warszawskiej 28 lub napisz do nas,
                podając model urządzenia i opis usterki. Pomożemy ustalić kolejne kroki.
              </p>
              <p className="mt-4 flex items-center gap-2 text-zinc-300">
                <MapPin className="text-lime-400" size={20} aria-hidden="true" />
                ul. Warszawska 28, 25-312 Kielce
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link to="/kontakt#formularz" className="rounded-2xl bg-lime-400 px-7 py-4 font-bold text-zinc-950 transition hover:bg-lime-300">
                  Formularz kontaktowy
                </Link>
                <a href="tel:+48792937406" className="rounded-2xl border border-lime-400/30 px-7 py-4 font-bold text-white transition hover:border-lime-400">
                  Zadzwoń do serwisu
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Stopka />
    </div>
  );
}
