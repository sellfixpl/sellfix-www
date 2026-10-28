import { Link } from "react-router-dom";
import { Smartphone, ShieldCheck, SearchCheck, Wrench, Phone, MapPin, CheckCircle2, AlertTriangle } from "lucide-react";
import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import SEO from "../komponenty/SEO";

const etapy = [
  { Icon: SearchCheck, nazwa: "Weryfikacja usterki", opis: "Sprawdzamy obraz, dotyk i stan urządzenia, aby określić zakres potrzebnej naprawy." },
  { Icon: Smartphone, nazwa: "Dobór wyświetlacza", opis: "Przedstawiamy dostępne opcje części odpowiednie dla konkretnego modelu telefonu." },
  { Icon: Wrench, nazwa: "Wymiana ekranu", opis: "Wykonujemy uzgodnioną naprawę, uwzględniając stan obudowy i pozostałych podzespołów." },
  { Icon: ShieldCheck, nazwa: "Testy i gwarancja", opis: "Po naprawie sprawdzamy podstawowe funkcje. Na usługę i część udzielamy 3 miesięcy gwarancji zgodnie z jej warunkami." },
];
const objawy = ["Pęknięta szybka lub uszkodzony ekran", "Czarne plamy, kolorowe pasy lub rozlany obraz", "Brak obrazu mimo działania telefonu", "Dotyk nie reaguje lub działa nieprawidłowo", "Migotanie albo niestabilna jasność wyświetlacza"];
const faq = [
  { q: "Ile kosztuje wymiana wyświetlacza?", a: "Cena zależy od modelu telefonu, rodzaju dostępnego ekranu oraz stanu urządzenia. Wyceniamy naprawę przed jej wykonaniem." },
  { q: "Czy można wymienić samą szybkę?", a: "Możliwość takiej naprawy zależy od modelu i stanu wyświetlacza. Po oględzinach informujemy, czy jest możliwa i opłacalna." },
  { q: "Czy po wymianie ekranu dane zostaną zachowane?", a: "Standardowa wymiana wyświetlacza zwykle nie wymaga kasowania danych, ale przed oddaniem telefonu zalecamy wykonanie kopii zapasowej." },
  { q: "Czy wyświetlacz będzie miał 120 Hz?", a: "Parametry zależą od modelu i wybranego rodzaju części. Przed naprawą wyjaśniamy dostępne opcje, w tym częstotliwość odświeżania, jeśli ma zastosowanie." },
  { q: "Jak długo trwa wymiana ekranu?", a: "Termin zależy od modelu, dostępności części i zakresu uszkodzeń. Potwierdzamy go podczas przyjęcia urządzenia." },
];

export default function WymianaWyswietlacza() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SEO title="Wymiana wyświetlacza Kielce – iPhone, Samsung, Xiaomi | SellFix" description="Wymiana wyświetlacza i ekranu telefonu w Kielcach. Naprawa iPhone, Samsung i Xiaomi, diagnostyka i wycena przed naprawą. SellFix, Warszawska 28, tel. 792 937 406." canonical="https://sellfix.pl/serwis/wymiana-wyswietlacza" />
      <MenuGlowne />
      <main>
        <section className="border-b border-white/10 bg-gradient-to-b from-lime-400/10 to-zinc-950">
          <div className="mx-auto max-w-7xl px-5 py-14 md:py-24">
            <nav aria-label="Ścieżka nawigacji" className="mb-8 text-sm text-zinc-400"><Link to="/" className="hover:text-lime-400">Strona główna</Link> <span aria-hidden="true">/</span> <Link to="/serwis" className="hover:text-lime-400">Serwis</Link> <span aria-hidden="true">/</span> <span className="text-zinc-200">Wymiana wyświetlacza</span></nav>
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300"><Smartphone size={17} /> Naprawa ekranów telefonów w Kielcach</span>
            <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight md:text-6xl">Wymiana wyświetlacza <span className="text-lime-400">Kielce</span></h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">Pęknięty ekran, brak obrazu, plamy na matrycy lub niedziałający dotyk? W SellFix diagnozujemy uszkodzenia wyświetlaczy i dobieramy rozwiązania dla wybranych modeli iPhone, Samsung, Xiaomi oraz innych telefonów.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link to="/kontakt" className="rounded-xl bg-lime-400 px-7 py-4 font-bold text-zinc-950 transition hover:bg-lime-300">Zapytaj o wycenę</Link><a href="tel:+48792937406" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-4 font-bold transition hover:border-lime-400 hover:text-lime-400"><Phone size={18} /> 792 937 406</a></div>
            <p className="mt-7 inline-flex items-center gap-2 text-sm text-zinc-300"><MapPin size={17} className="text-lime-400" /> ul. Warszawska 28, Kielce</p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <h2 className="text-3xl font-bold md:text-4xl">Jak wygląda naprawa wyświetlacza?</h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">Najpierw ustalamy rodzaj uszkodzenia i sprawdzamy, czy problem dotyczy samego ekranu, czy także innych elementów telefonu.</p>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{etapy.map(({ Icon, nazwa, opis }) => <article key={nazwa} className="rounded-2xl border border-white/10 bg-zinc-900 p-6"><Icon size={30} className="text-lime-400" aria-hidden="true" /><h3 className="mt-5 text-lg font-bold">{nazwa}</h3><p className="mt-3 leading-7 text-zinc-300">{opis}</p></article>)}</div>
        </section>
        <section className="border-y border-white/10 bg-zinc-900/60"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
          <div><h2 className="text-3xl font-bold md:text-4xl">Naprawa ekranu iPhone i Android</h2><p className="mt-5 leading-8 text-zinc-300">Rodzaj wyświetlacza, jego parametry i możliwość naprawy zależą od modelu telefonu. W przypadku części zamiennych przed usługą informujemy o istotnych różnicach względem oryginalnej specyfikacji oraz ewentualnych komunikatach systemowych.</p><p className="mt-4 leading-8 text-zinc-300">Jeżeli uszkodzeniu ekranu towarzyszy odkształcenie ramki, zbity tył lub inne uszkodzenia, przed wyceną oceniamy ryzyko i zakres dodatkowych prac.</p><div className="mt-7 flex flex-wrap gap-3"><Link to="/serwis/apple" className="rounded-lg border border-lime-400/40 px-5 py-3 font-semibold text-lime-300 hover:bg-lime-400/10">Serwis Apple</Link><Link to="/serwis/android" className="rounded-lg border border-lime-400/40 px-5 py-3 font-semibold text-lime-300 hover:bg-lime-400/10">Serwis Android</Link></div></div>
          <div className="rounded-2xl border border-lime-400/20 bg-zinc-950 p-7"><h3 className="text-2xl font-bold">Objawy uszkodzonego ekranu</h3><ul className="mt-6 space-y-4">{objawy.map((objaw) => <li key={objaw} className="flex gap-3 text-zinc-300"><CheckCircle2 size={21} className="mt-0.5 shrink-0 text-lime-400" aria-hidden="true" />{objaw}</li>)}</ul><p className="mt-7 flex gap-2 text-sm leading-6 text-zinc-400"><AlertTriangle size={19} className="mt-0.5 shrink-0 text-lime-400" />Jeżeli szkło jest popękane, unikaj naciskania ekranu i zabezpiecz dane kopią zapasową, o ile telefon pozwala na bezpieczną obsługę.</p></div>
        </div></section>
        <section className="mx-auto max-w-4xl px-5 py-16 md:py-20"><h2 className="text-3xl font-bold md:text-4xl">Najczęstsze pytania</h2><div className="mt-8 space-y-4">{faq.map(({ q, a }) => <details key={q} className="group rounded-xl border border-white/10 bg-zinc-900 p-5"><summary className="cursor-pointer list-none pr-5 font-semibold text-white">{q}<span className="float-right text-lime-400 group-open:rotate-45">+</span></summary><p className="mt-4 leading-7 text-zinc-300">{a}</p></details>)}</div></section>
        <section className="border-t border-white/10 bg-zinc-900/50"><div className="mx-auto max-w-7xl px-5 py-16 text-center"><h2 className="text-3xl font-bold md:text-4xl">Wymiana ekranu w Kielcach — zapytaj o termin</h2><p className="mx-auto mt-4 max-w-2xl text-zinc-300">Podaj dokładny model telefonu i opisz uszkodzenie. Przedstawimy dostępne możliwości naprawy, cenę i przewidywany termin.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/kontakt" className="rounded-xl bg-lime-400 px-7 py-4 font-bold text-zinc-950 hover:bg-lime-300">Kontakt z SellFix</Link><a href="tel:+48792937406" className="rounded-xl border border-white/20 px-7 py-4 font-bold hover:border-lime-400">Zadzwoń do serwisu</a></div></div></section>
      </main><Stopka />
    </div>
  );
}
