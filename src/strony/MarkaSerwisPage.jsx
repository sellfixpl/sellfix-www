import { Link } from "react-router-dom";
import { BatteryCharging, CheckCircle2, MapPin, Phone, ShieldCheck, Smartphone, Wrench, PlugZap, Droplets } from "lucide-react";
import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import SEO from "../komponenty/SEO";

const uslugi = [
  { Icon: Smartphone, tytul: "Wymiana wyświetlacza", opis: "Diagnostyka problemów z obrazem, dotykiem i uszkodzeniami ekranu.", link: "/serwis/wymiana-wyswietlacza" },
  { Icon: BatteryCharging, tytul: "Wymiana baterii", opis: "Weryfikacja krótkiego czasu pracy i problemów z zasilaniem.", link: "/serwis/wymiana-baterii" },
  { Icon: PlugZap, tytul: "Gniazdo ładowania", opis: "Sprawdzenie złącza, przewodu i przyczyn braku ładowania.", link: "/serwis/wymiana-gniazda-ladowania" },
  { Icon: Droplets, tytul: "Telefon po zalaniu", opis: "Ocena skutków kontaktu z cieczą i możliwości naprawy.", link: "/serwis/naprawa-po-zalaniu" },
];

export default function MarkaSerwisPage({ marka, slug, rodziny, nazwaWOpisie }) {
  const faq = [
    { q: `Czy naprawiacie telefony ${marka}?`, a: `W SellFix przyjmujemy do diagnostyki wybrane modele ${marka}. Możliwość naprawy zależy od konkretnego modelu, rodzaju usterki i dostępności części.` },
    { q: `Ile kosztuje naprawa ${marka}?`, a: "Cena zależy od modelu, uszkodzenia i wybranej części. Przed rozpoczęciem prac przedstawiamy wycenę." },
    { q: "Jak długo trwa naprawa?", a: "Termin zależy od zakresu prac i dostępności części. Potwierdzamy go indywidualnie." },
    { q: "Czy dane pozostaną w telefonie?", a: "Wiele napraw nie wymaga usuwania danych, jednak przed przekazaniem urządzenia zalecamy wykonanie kopii zapasowej." },
    { q: "Czy naprawa ma gwarancję?", a: "Na wykonaną usługę serwisową i zamontowaną część udzielamy 3-miesięcznej gwarancji zgodnie z dokumentacją naprawy." },
  ];
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SEO title={`Serwis ${marka} Kielce – Naprawa telefonów | SellFix`} description={`Serwis ${marka} w Kielcach: diagnostyka, wymiana wyświetlacza, baterii i naprawa ładowania. SellFix, Warszawska 28. Tel. 792 937 406.`} canonical={`https://sellfix.pl/serwis/android/${slug}`} />
      <MenuGlowne />
      <main>
        <section className="border-b border-white/10 bg-gradient-to-b from-lime-400/10 to-zinc-950">
          <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
            <nav aria-label="Ścieżka nawigacji" className="text-sm text-zinc-400"><Link to="/">Strona główna</Link> / <Link to="/serwis/android">Serwis Android</Link> / {marka}</nav>
            <span className="mt-8 inline-flex rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">Serwis GSM Kielce</span>
            <h1 className="mt-6 text-4xl font-extrabold md:text-6xl">Serwis {marka} <span className="text-lime-400">Kielce</span></h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">Naprawa {nazwaWOpisie} w Kielcach. Przyjmujemy do diagnostyki m.in. modele z rodzin {rodziny}. Sprawdzamy usterkę, przedstawiamy zakres prac i wycenę przed naprawą.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link to="/kontakt" className="rounded-xl bg-lime-400 px-7 py-4 font-bold text-zinc-950 hover:bg-lime-300">Zapytaj o naprawę</Link><a href="tel:+48792937406" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-4 font-bold hover:text-lime-400"><Phone size={18} /> 792 937 406</a></div>
            <p className="mt-7 inline-flex items-center gap-2 text-zinc-300"><MapPin size={18} className="text-lime-400" /> SellFix, ul. Warszawska 28, Kielce</p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <h2 className="text-3xl font-bold md:text-4xl">Jakie usterki diagnozujemy?</h2>
          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">W zależności od modelu i dostępności części możemy zaproponować następujące usługi:</p>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{uslugi.map(({ Icon, tytul, opis, link }) => <Link key={tytul} to={link} className="rounded-2xl border border-white/10 bg-zinc-900 p-6 transition hover:border-lime-400/50"><Icon size={29} className="text-lime-400" aria-hidden="true" /><h3 className="mt-5 text-lg font-bold">{tytul}</h3><p className="mt-3 leading-7 text-zinc-300">{opis}</p><span className="mt-4 inline-block font-semibold text-lime-400">Dowiedz się więcej →</span></Link>)}</div>
        </section>
        <section className="border-y border-white/10 bg-zinc-900/60"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-2"><div><Wrench size={32} className="text-lime-400" /><h2 className="mt-4 text-3xl font-bold">Najpierw diagnoza, potem wycena</h2><p className="mt-5 leading-8 text-zinc-300">Nie każda usterka wymaga wymiany podzespołu. Sprawdzamy przyczynę problemu i przedstawiamy dostępne rozwiązania. Termin i koszt zależą od modelu urządzenia.</p></div><div><ShieldCheck size={32} className="text-lime-400" /><h2 className="mt-4 text-3xl font-bold">Gwarancja na usługę</h2><p className="mt-5 leading-8 text-zinc-300">Na wykonaną naprawę oraz zamontowaną część udzielamy 3 miesięcy gwarancji, zgodnie z warunkami przekazanymi podczas realizacji zlecenia.</p></div></div></section>
        <section className="mx-auto max-w-4xl px-5 py-16 md:py-20"><h2 className="text-3xl font-bold">Pytania o serwis {marka}</h2><div className="mt-8 space-y-4">{faq.map(({q,a}) => <details key={q} className="rounded-xl border border-white/10 bg-zinc-900 p-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-4 leading-7 text-zinc-300">{a}</p></details>)}</div></section>
        <section className="border-t border-white/10 bg-zinc-900/50"><div className="mx-auto max-w-7xl px-5 py-16 text-center"><h2 className="text-3xl font-bold">Naprawa {marka} w Kielcach</h2><p className="mx-auto mt-4 max-w-2xl text-zinc-300">Podaj model i opisz usterkę. Sprawdzimy możliwości naprawy i dostępność części.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><Link to="/kontakt" className="rounded-xl bg-lime-400 px-7 py-4 font-bold text-zinc-950">Kontakt</Link><a href="tel:+48792937406" className="rounded-xl border border-white/20 px-7 py-4 font-bold">Zadzwoń</a></div></div></section>
      </main><Stopka />
    </div>
  );
}
