import { Link } from "react-router-dom";
import { AlertTriangle, Droplets, SearchCheck, Wrench, ShieldCheck, Phone, MapPin, CheckCircle2, XCircle } from "lucide-react";
import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import SEO from "../komponenty/SEO";

const zrob = [
  "Jeśli urządzenie działa, wyłącz je i nie próbuj ponownie uruchamiać.",
  "Odłącz ładowarkę i wszystkie akcesoria. Nie podłączaj telefonu do zasilania.",
  "Wytrzyj delikatnie obudowę suchą, miękką ściereczką. Nie potrząsaj urządzeniem.",
  "Jak najszybciej skontaktuj się z serwisem w celu oceny skutków zalania.",
];
const unikaj = [
  "Nie ładuj telefonu, nawet jeśli wydaje się suchy.",
  "Nie susz suszarką, grzejnikiem ani gorącym powietrzem.",
  "Nie wkładaj telefonu do ryżu — nie usuwa to zanieczyszczeń z wnętrza.",
  "Nie naciskaj wielokrotnie przycisku zasilania, aby sprawdzić, czy telefon działa.",
];
const etapy = [
  { Icon: SearchCheck, nazwa: "Wstępna diagnostyka", opis: "Sprawdzamy objawy i oceniamy zakres uszkodzeń po kontakcie z cieczą." },
  { Icon: Droplets, nazwa: "Ocena wnętrza", opis: "W razie potrzeby weryfikujemy ślady wilgoci, osady i korozję podzespołów." },
  { Icon: Wrench, nazwa: "Ustalenie naprawy", opis: "Przedstawiamy możliwe prace oraz wycenę. Naprawę wykonujemy po akceptacji." },
  { Icon: ShieldCheck, nazwa: "Testy urządzenia", opis: "Po wykonaniu prac sprawdzamy dostępne funkcje. Zakres testów zależy od stanu telefonu." },
];
const faq = [
  { q: "Czy telefon po zalaniu da się uratować?", a: "To zależy od rodzaju cieczy, czasu od zalania oraz uszkodzeń wewnętrznych. Możliwość naprawy oceniamy po diagnostyce." },
  { q: "Czy mogę naładować telefon po zalaniu?", a: "Nie. Podłączenie zasilania do zawilgoconego urządzenia może pogłębić uszkodzenia. Najpierw konieczna jest ocena jego stanu." },
  { q: "Czy ryż pomoże wysuszyć telefon?", a: "Nie jest to zalecana metoda. Ryż nie usuwa zanieczyszczeń ani korozji z wnętrza telefonu i może opóźnić właściwą diagnostykę." },
  { q: "Czy dane z zalanego telefonu można odzyskać?", a: "Czasami tak, ale nie można tego zagwarantować. Możliwość odzyskania danych zależy od stanu pamięci i pozostałych podzespołów." },
  { q: "Ile kosztuje naprawa telefonu po zalaniu?", a: "Koszt zależy od rozległości uszkodzeń i wymaganych prac. Cenę oraz opłacalność naprawy określamy po diagnostyce." },
];

export default function NaprawaPoZalaniu() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SEO title="Naprawa telefonu po zalaniu Kielce – iPhone i Android | SellFix" description="Zalany telefon? Serwis SellFix w Kielcach diagnozuje uszkodzenia po kontakcie z cieczą. iPhone, Samsung, Xiaomi. Warszawska 28, tel. 792 937 406." canonical="https://sellfix.pl/serwis/naprawa-po-zalaniu" />
      <MenuGlowne />
      <main>
        <section className="border-b border-white/10 bg-gradient-to-b from-lime-400/10 to-zinc-950">
          <div className="mx-auto max-w-7xl px-5 py-14 md:py-24">
            <nav aria-label="Ścieżka nawigacji" className="mb-8 text-sm text-zinc-400"><Link to="/" className="hover:text-lime-400">Strona główna</Link> <span aria-hidden="true">/</span> <Link to="/serwis" className="hover:text-lime-400">Serwis</Link> <span aria-hidden="true">/</span> <span className="text-zinc-200">Naprawa po zalaniu</span></nav>
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300"><Droplets size={17} /> Serwis telefonów po zalaniu w Kielcach</span>
            <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight md:text-6xl">Naprawa telefonu po zalaniu <span className="text-lime-400">Kielce</span></h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">Telefon wpadł do wody, został oblany napojem lub przestał działać po kontakcie z wilgocią? W SellFix diagnozujemy zalane iPhone’y, Samsungi, Xiaomi i inne telefony. Im szybciej urządzenie zostanie bezpiecznie wyłączone i sprawdzone, tym lepiej.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link to="/kontakt" className="rounded-xl bg-lime-400 px-7 py-4 font-bold text-zinc-950 transition hover:bg-lime-300">Skontaktuj się z serwisem</Link><a href="tel:+48792937406" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-4 font-bold transition hover:border-lime-400 hover:text-lime-400"><Phone size={18} /> 792 937 406</a></div>
            <p className="mt-7 inline-flex items-center gap-2 text-sm text-zinc-300"><MapPin size={17} className="text-lime-400" /> ul. Warszawska 28, Kielce</p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <div className="mb-9 flex items-start gap-3 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5 text-amber-100"><AlertTriangle className="mt-1 shrink-0" size={24} /><p className="leading-7"><strong>Ważne:</strong> nie uruchamiaj i nie ładuj telefonu po zalaniu. Jeśli urządzenie jest gorące, dymi lub bateria jest uszkodzona, nie dotykaj go bez potrzeby i odsuń od materiałów łatwopalnych.</p></div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-lime-400/20 bg-zinc-900 p-7"><h2 className="text-2xl font-bold">Co zrobić po zalaniu?</h2><ul className="mt-6 space-y-4">{zrob.map((item) => <li key={item} className="flex gap-3 leading-7 text-zinc-300"><CheckCircle2 size={22} className="mt-1 shrink-0 text-lime-400" />{item}</li>)}</ul></article>
            <article className="rounded-2xl border border-white/10 bg-zinc-900 p-7"><h2 className="text-2xl font-bold">Czego unikać?</h2><ul className="mt-6 space-y-4">{unikaj.map((item) => <li key={item} className="flex gap-3 leading-7 text-zinc-300"><XCircle size={22} className="mt-1 shrink-0 text-rose-400" />{item}</li>)}</ul></article>
          </div>
        </section>
        <section className="border-y border-white/10 bg-zinc-900/60"><div className="mx-auto max-w-7xl px-5 py-16 md:py-20"><h2 className="text-3xl font-bold md:text-4xl">Jak wygląda diagnostyka zalanego telefonu?</h2><p className="mt-4 max-w-3xl leading-8 text-zinc-300">Kontakt z cieczą może uszkodzić kilka elementów jednocześnie. Zakres prac ustalamy indywidualnie, a wynik naprawy zależy od stanu urządzenia.</p><div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{etapy.map(({Icon,nazwa,opis}) => <article key={nazwa} className="rounded-2xl border border-white/10 bg-zinc-950 p-6"><Icon size={30} className="text-lime-400" aria-hidden="true" /><h3 className="mt-5 text-lg font-bold">{nazwa}</h3><p className="mt-3 leading-7 text-zinc-300">{opis}</p></article>)}</div></div></section>
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:py-20"><div><h2 className="text-3xl font-bold md:text-4xl">Zalany iPhone, Samsung lub Xiaomi?</h2><p className="mt-5 leading-8 text-zinc-300">Sprawdzamy urządzenia różnych producentów. Nawet telefon, który po zalaniu nadal działa, może mieć wewnątrz wilgoć i rozwijającą się korozję.</p><p className="mt-4 leading-8 text-zinc-300">Nie każda naprawa jest możliwa lub ekonomicznie uzasadniona. Przed podjęciem prac omawiamy z klientem zakres oraz koszty.</p><div className="mt-7 flex flex-wrap gap-3"><Link to="/serwis/apple" className="rounded-lg border border-lime-400/40 px-5 py-3 font-semibold text-lime-300 hover:bg-lime-400/10">Serwis Apple</Link><Link to="/serwis/android" className="rounded-lg border border-lime-400/40 px-5 py-3 font-semibold text-lime-300 hover:bg-lime-400/10">Serwis Android</Link></div></div><aside className="rounded-2xl border border-lime-400/20 bg-zinc-900 p-7"><h3 className="text-2xl font-bold">Co z danymi w telefonie?</h3><p className="mt-5 leading-8 text-zinc-300">Przed diagnostyką poinformuj nas, jeśli priorytetem jest odzyskanie zdjęć lub innych danych. Nie możemy zagwarantować ich zachowania ani odzyskania, dlatego regularna kopia zapasowa jest tak ważna.</p><p className="mt-4 leading-8 text-zinc-300">W przypadku uszkodzeń po cieczy zakres ewentualnej gwarancji na wykonaną usługę zależy od ustalonych warunków i rodzaju naprawy.</p></aside></section>
        <section className="border-t border-white/10 bg-zinc-900/50"><div className="mx-auto max-w-4xl px-5 py-16 md:py-20"><h2 className="text-3xl font-bold md:text-4xl">Najczęstsze pytania</h2><div className="mt-8 space-y-4">{faq.map(({q,a}) => <details key={q} className="group rounded-xl border border-white/10 bg-zinc-950 p-5"><summary className="cursor-pointer list-none pr-5 font-semibold">{q}<span className="float-right text-lime-400 group-open:rotate-45">+</span></summary><p className="mt-4 leading-7 text-zinc-300">{a}</p></details>)}</div></div></section>
        <section className="border-t border-white/10"><div className="mx-auto max-w-7xl px-5 py-16 text-center"><h2 className="text-3xl font-bold md:text-4xl">Zalany telefon? Skontaktuj się z SellFix</h2><p className="mx-auto mt-4 max-w-2xl text-zinc-300">Powiedz nam, jaki to model i kiedy doszło do zalania. Podpowiemy, jak bezpiecznie przekazać urządzenie do diagnostyki.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/kontakt" className="rounded-xl bg-lime-400 px-7 py-4 font-bold text-zinc-950 hover:bg-lime-300">Kontakt z serwisem</Link><a href="tel:+48792937406" className="rounded-xl border border-white/20 px-7 py-4 font-bold hover:border-lime-400">Zadzwoń: 792 937 406</a></div></div></section>
      </main>
      <Stopka />
    </div>
  );
}
