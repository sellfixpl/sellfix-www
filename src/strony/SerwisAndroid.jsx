import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import SEO from "../komponenty/SEO";
import { Link } from "react-router-dom";
import { Smartphone, Wrench, BatteryCharging, ArrowRight, Phone, MapPin, ShieldCheck } from "lucide-react";

const markiAndroid = [
  { nazwa: "Samsung", link: "/serwis/android/samsung", opis: "Galaxy S, Galaxy A, Note, Z Fold i Z Flip" },
  { nazwa: "Xiaomi", link: "/serwis/android/xiaomi", opis: "Xiaomi, Redmi i POCO" },
  { nazwa: "Huawei", link: "/serwis/android/huawei", opis: "Serie P, Mate i Nova" },
  { nazwa: "Motorola", link: "/serwis/android/motorola", opis: "Moto G, Edge i Razr" },
  { nazwa: "Oppo", link: "/serwis/android/oppo", opis: "Serie Reno, Find i A" },
  { nazwa: "Realme", link: "/serwis/android/realme", opis: "Serie GT, C i pozostałe modele" },
  { nazwa: "OnePlus", link: "/serwis/android/oneplus", opis: "Serie Nord i modele flagowe" },
];

const uslugi = [
  {
    nazwa: "Wymiana wyświetlacza",
    opis: "Naprawiamy telefony z rozbitym ekranem, problemami z dotykiem lub wyświetlaniem obrazu. Zakres naprawy ustalamy po sprawdzeniu urządzenia.",
    Icon: Smartphone,
  },
  {
    nazwa: "Wymiana baterii",
    opis: "Sprawdzamy problemy z krótkim czasem pracy, nagłym wyłączaniem i ładowaniem telefonu. Dobieramy rozwiązanie do konkretnego modelu.",
    Icon: BatteryCharging,
  },
  {
    nazwa: "Diagnostyka i naprawa podzespołów",
    opis: "Weryfikujemy usterki gniazda ładowania, aparatów, mikrofonów, głośników oraz innych elementów smartfona.",
    Icon: Wrench,
  },
];

export default function SerwisAndroid() {
  return (
    <div className="min-h-screen text-white">
      <SEO
        title="Serwis Android Kielce – Naprawa Samsung, Xiaomi, Huawei | SellFix"
        description="Serwis telefonów Android w Kielcach: Samsung, Xiaomi, Huawei, Motorola, Oppo, Realme i OnePlus. Wymiana ekranów, baterii i diagnostyka. SellFix, ul. Warszawska 28."
        canonical="https://sellfix.pl/serwis/android"
      />

      <MenuGlowne />
      <main className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <nav aria-label="Ścieżka nawigacji" className="mb-9 text-sm text-zinc-400">
          <Link to="/" className="hover:text-lime-400">Strona główna</Link>
          <span className="mx-2">/</span>
          <Link to="/serwis" className="hover:text-lime-400">Serwis</Link>
          <span className="mx-2">/</span>
          <span className="text-lime-400">Android</span>
        </nav>

        <header className="mb-12">
          <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">Serwis Android</div>
          <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            Serwis telefonów Android w Kielcach – Samsung, Xiaomi i inne marki
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            W SellFix diagnozujemy i naprawiamy smartfony Samsung, Xiaomi, Huawei, Motorola, Oppo, Realme i OnePlus.
            Pomagamy przy uszkodzonych ekranach, zużytych bateriach i problemach z ładowaniem.
            Przed rozpoczęciem naprawy przedstawiamy zakres prac i wycenę.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-2xl bg-lime-400 px-7 py-4 font-bold text-zinc-950 transition hover:bg-lime-300">
              Zapytaj o naprawę <ArrowRight size={18} />
            </Link>
            <a href="tel:+48792937406" className="inline-flex items-center gap-2 rounded-2xl border border-lime-400/30 px-7 py-4 font-bold text-white transition hover:bg-lime-400 hover:text-zinc-950">
              <Phone size={18} /> Zadzwoń
            </a>
          </div>
        </header>

        <section aria-labelledby="android-uslugi">
          <h2 id="android-uslugi" className="mb-7 text-3xl font-black md:text-4xl">Najczęstsze naprawy telefonów Android</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {uslugi.map(({ nazwa, opis, Icon }) => (
              <article key={nazwa} className="rounded-3xl border border-lime-400/10 bg-zinc-900 p-6">
                <Icon className="mb-4 text-lime-400" size={36} aria-hidden="true" />
                <h3 className="text-2xl font-black">{nazwa}</h3>
                <p className="mt-3 leading-7 text-zinc-300">{opis}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="android-marki">
          <div className="mb-8">
            <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">Popularne marki</div>
            <h2 id="android-marki" className="text-4xl font-black md:text-5xl">Wybierz markę telefonu</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
              Wybierz producenta, aby przejść do informacji o serwisie danej marki. Dostępność części i koszt naprawy potwierdzamy indywidualnie.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {markiAndroid.map((marka) => (
              <Link key={marka.nazwa} to={marka.link} className="group rounded-2xl border border-lime-400/10 bg-zinc-900 p-6 transition hover:border-lime-400/50 hover:bg-zinc-800">
                <h3 className="text-2xl font-black text-white">{marka.nazwa}</h3>
                <p className="mt-3 text-zinc-400">{marka.opis}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-lime-400">
                  Zobacz serwis marki <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-lime-400/20 bg-zinc-900 p-8">
            <ShieldCheck className="mb-4 text-lime-400" size={34} aria-hidden="true" />
            <h2 className="text-3xl font-black">Jak wygląda naprawa?</h2>
            <p className="mt-4 leading-8 text-zinc-300">
              Najpierw ustalamy objawy i sprawdzamy urządzenie. Następnie przedstawiamy możliwy zakres naprawy oraz koszt.
              Prace wykonujemy po zaakceptowaniu wyceny.
            </p>
          </div>
          <div className="rounded-3xl border border-lime-400/20 bg-zinc-900 p-8">
            <MapPin className="mb-4 text-lime-400" size={34} aria-hidden="true" />
            <h2 className="text-3xl font-black">Serwis Android w centrum Kielc</h2>
            <p className="mt-4 leading-8 text-zinc-300">
              Zapraszamy do SellFix przy ul. Warszawskiej 28 w Kielcach. Nie widzisz swojej marki lub modelu?
              Skontaktuj się z nami — sprawdzimy możliwości naprawy.
            </p>
            <Link to="/kontakt" className="mt-6 inline-flex rounded-2xl bg-lime-400 px-6 py-3 font-bold text-zinc-950 transition hover:bg-lime-300">
              Kontakt i dojazd
            </Link>
          </div>
        </section>
      </main>
      <Stopka />
    </div>
  );
}
