import { Link } from "react-router-dom";
import { BatteryCharging, CheckCircle2, Clock3, MapPin, Phone, ShieldCheck, Smartphone, Wrench } from "lucide-react";
import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import SEO from "../komponenty/SEO";

const korzysci = [
  { Icon: BatteryCharging, tytul: "Diagnostyka baterii", opis: "Sprawdzamy objawy zużycia, kondycję baterii i działanie układu ładowania." },
  { Icon: Smartphone, tytul: "iPhone i Android", opis: "Obsługujemy wybrane modele Apple, Samsung, Xiaomi oraz innych producentów." },
  { Icon: Wrench, tytul: "Kontrola po wymianie", opis: "Po wykonaniu usługi weryfikujemy ładowanie i podstawowe działanie urządzenia." },
  { Icon: ShieldCheck, tytul: "3 miesiące gwarancji", opis: "Na wykonaną usługę i zamontowaną część udzielamy 3-miesięcznej gwarancji na zasadach określonych w dokumentacji naprawy." },
];

const pytania = [
  { q: "Kiedy warto wymienić baterię w telefonie?", a: "Gdy telefon szybko się rozładowuje, niespodziewanie wyłącza lub jego czas pracy wyraźnie się skrócił. Przyczynę potwierdzamy podczas diagnostyki." },
  { q: "Ile kosztuje wymiana baterii?", a: "Cena zależy od modelu telefonu, rodzaju części i zakresu prac. Przed rozpoczęciem naprawy przedstawiamy wycenę." },
  { q: "Czy po wymianie baterii utracę dane?", a: "Standardowa wymiana baterii nie wymaga usuwania danych. Przed oddaniem telefonu do serwisu zalecamy jednak wykonanie kopii zapasowej." },
  { q: "Czy w iPhonie pojawi się komunikat o baterii?", a: "Zależy to od modelu i zastosowanej technologii naprawy. Informujemy o rodzaju części i możliwych komunikatach przed wykonaniem usługi." },
  { q: "Jak długo trwa wymiana baterii?", a: "Czas realizacji zależy od modelu, stanu urządzenia i dostępności części. Termin potwierdzamy przy przyjęciu telefonu." },
];

export default function WymianaBaterii() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SEO
        title="Wymiana baterii w telefonie Kielce – iPhone, Samsung, Xiaomi | SellFix"
        description="Wymiana baterii iPhone, Samsung i Xiaomi w Kielcach. Diagnostyka, wycena przed naprawą i kontrola działania. SellFix, ul. Warszawska 28. Tel. 792 937 406."
        canonical="https://sellfix.pl/serwis/wymiana-baterii"
      />
      <MenuGlowne />
      <main>
        <section className="border-b border-white/10 bg-gradient-to-b from-lime-400/10 to-zinc-950">
          <div className="mx-auto max-w-7xl px-5 py-14 md:py-24">
            <nav aria-label="Ścieżka nawigacji" className="mb-8 text-sm text-zinc-400">
              <Link to="/" className="hover:text-lime-400">Strona główna</Link> <span aria-hidden="true">/</span>{" "}
              <Link to="/serwis" className="hover:text-lime-400">Serwis</Link> <span aria-hidden="true">/</span>{" "}
              <span className="text-zinc-200">Wymiana baterii</span>
            </nav>
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300"><BatteryCharging size={17} /> Serwis GSM w Kielcach</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">Wymiana baterii w telefonie <span className="text-lime-400">Kielce</span></h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">Telefon szybko się rozładowuje, wyłącza przy pozornie naładowanej baterii lub wymaga częstego podłączania do ładowarki? W SellFix sprawdzimy przyczynę i zaproponujemy odpowiednie rozwiązanie dla Twojego urządzenia.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/kontakt" className="rounded-xl bg-lime-400 px-7 py-4 font-bold text-zinc-950 transition hover:bg-lime-300">Zapytaj o wycenę</Link>
              <a href="tel:+48792937406" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-4 font-bold transition hover:border-lime-400 hover:text-lime-400"><Phone size={18} /> 792 937 406</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-zinc-300"><span className="inline-flex items-center gap-2"><MapPin size={17} className="text-lime-400" /> ul. Warszawska 28, Kielce</span><span className="inline-flex items-center gap-2"><Clock3 size={17} className="text-lime-400" /> Termin ustalany indywidualnie</span></div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <h2 className="text-3xl font-bold md:text-4xl">Jak przebiega wymiana baterii?</h2>
          <p className="mt-4 max-w-3xl text-zinc-300">Najpierw ustalamy przyczynę problemu, a następnie zakres i koszt naprawy. Nie każda usterka ładowania oznacza konieczność wymiany baterii.</p>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {korzysci.map(({ Icon, tytul, opis }) => (
              <article key={tytul} className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
                <Icon className="text-lime-400" size={30} aria-hidden="true" />
                <h3 className="mt-5 text-lg font-bold">{tytul}</h3>
                <p className="mt-3 leading-7 text-zinc-300">{opis}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-zinc-900/60">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Wymiana baterii iPhone i Android</h2>
              <p className="mt-5 leading-8 text-zinc-300">Serwisujemy telefony Apple oraz wybrane urządzenia z Androidem. Rodzaj baterii, sposób montażu i dostępność części zależą od konkretnego modelu.</p>
              <p className="mt-4 leading-8 text-zinc-300">W przypadku iPhone'a przed naprawą wyjaśniamy kwestię elektroniki baterii, wskazań kondycji i ewentualnych komunikatów systemowych. Nie obiecujemy identycznego efektu dla wszystkich modeli.</p>
              <div className="mt-7 flex flex-wrap gap-3"><Link className="rounded-lg border border-lime-400/40 px-5 py-3 font-semibold text-lime-300 hover:bg-lime-400/10" to="/serwis/apple">Serwis Apple</Link><Link className="rounded-lg border border-lime-400/40 px-5 py-3 font-semibold text-lime-300 hover:bg-lime-400/10" to="/serwis/android">Serwis Android</Link></div>
            </div>
            <div className="rounded-2xl border border-lime-400/20 bg-zinc-950 p-7">
              <h3 className="text-2xl font-bold">Kiedy zgłosić się do serwisu?</h3>
              <ul className="mt-6 space-y-4">
                {["Telefon działa znacznie krócej niż wcześniej", "Urządzenie niespodziewanie się wyłącza", "Poziom naładowania zmienia się skokowo", "Bateria jest spuchnięta lub obudowa zaczyna się rozchodzić", "Telefon nagrzewa się nietypowo podczas ładowania"].map((objaw) => <li key={objaw} className="flex gap-3 text-zinc-300"><CheckCircle2 size={21} className="mt-0.5 shrink-0 text-lime-400" aria-hidden="true" />{objaw}</li>)}
              </ul>
              <p className="mt-6 text-sm leading-6 text-zinc-400">Jeśli bateria jest spuchnięta lub urządzenie mocno się nagrzewa, przerwij ładowanie i skontaktuj się z serwisem.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-16 md:py-20">
          <h2 className="text-3xl font-bold md:text-4xl">Najczęstsze pytania</h2>
          <div className="mt-8 space-y-4">
            {pytania.map(({ q, a }) => <details key={q} className="group rounded-xl border border-white/10 bg-zinc-900 p-5"><summary className="cursor-pointer list-none pr-5 font-semibold text-white marker:hidden">{q} <span className="float-right text-lime-400 group-open:rotate-45">+</span></summary><p className="mt-4 leading-7 text-zinc-300">{a}</p></details>)}
          </div>
        </section>

        <section className="border-t border-white/10 bg-zinc-900/50">
          <div className="mx-auto max-w-7xl px-5 py-16 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Zapytaj o wymianę baterii w Kielcach</h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-300">Podaj model telefonu i opisz problem. Sprawdzimy dostępność części oraz przedstawimy możliwy termin i koszt naprawy.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/kontakt" className="rounded-xl bg-lime-400 px-7 py-4 font-bold text-zinc-950 hover:bg-lime-300">Kontakt z SellFix</Link><a href="tel:+48792937406" className="rounded-xl border border-white/20 px-7 py-4 font-bold hover:border-lime-400">Zadzwoń do serwisu</a></div>
          </div>
        </section>
      </main>
      <Stopka />
    </div>
  );
}
