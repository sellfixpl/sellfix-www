import { Link } from "react-router-dom";
import { Cable, CheckCircle2, Clock3, MapPin, Phone, ShieldCheck, Smartphone, Wrench } from "lucide-react";
import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import SEO from "../komponenty/SEO";

const korzysci = [
  { Icon: Cable, tytul: "Diagnostyka portu", opis: "Sprawdzamy gniazdo, kabel, ładowarkę i objawy problemów z zasilaniem." },
  { Icon: Smartphone, tytul: "iPhone i Android", opis: "Obsługujemy wybrane modele Apple, Samsung, Xiaomi i innych producentów." },
  { Icon: Wrench, tytul: "Czyszczenie lub naprawa", opis: "Jeśli przyczyną są zabrudzenia, nie zawsze potrzebna jest wymiana złącza." },
  { Icon: ShieldCheck, tytul: "3 miesiące gwarancji", opis: "Na wykonaną naprawę i zamontowaną część udzielamy 3-miesięcznej gwarancji na zasadach dokumentacji serwisowej." },
];

const pytania = [
  { q: "Dlaczego telefon nie ładuje się mimo podłączenia kabla?", a: "Przyczyną mogą być zabrudzenia portu, uszkodzony przewód, ładowarka, gniazdo lub inny element układu ładowania. Usterkę ustalamy podczas diagnostyki." },
  { q: "Czy zawsze trzeba wymieniać gniazdo ładowania?", a: "Nie. Czasem wystarcza oczyszczenie portu. Jeśli złącze jest uszkodzone, przedstawiamy możliwości i koszt naprawy." },
  { q: "Ile kosztuje naprawa gniazda ładowania?", a: "Koszt zależy od modelu i przyczyny usterki. Wycenę podajemy po sprawdzeniu telefonu." },
  { q: "Czy naprawa gniazda ładowania usuwa dane?", a: "Zwykle nie wymaga kasowania danych, jednak przed oddaniem urządzenia zalecamy wykonanie kopii zapasowej." },
  { q: "Jak długo trwa naprawa?", a: "Termin zależy od modelu, zakresu prac i dostępności części. Potwierdzamy go indywidualnie." },
];

export default function WymianaGniazdaLadowania() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SEO
        title="Naprawa gniazda ładowania Kielce – iPhone, Samsung, Xiaomi | SellFix"
        description="Naprawa gniazda ładowania i czyszczenie portu USB-C lub Lightning w Kielcach. Serwis iPhone, Samsung, Xiaomi. SellFix, Warszawska 28. Tel. 792 937 406."
        canonical="https://sellfix.pl/serwis/wymiana-gniazda-ladowania"
      />
      <MenuGlowne />
      <main>
        <section className="border-b border-white/10 bg-gradient-to-b from-lime-400/10 to-zinc-950">
          <div className="mx-auto max-w-7xl px-5 py-14 md:py-24">
            <nav aria-label="Ścieżka nawigacji" className="mb-8 text-sm text-zinc-400">
              <Link to="/" className="hover:text-lime-400">Strona główna</Link> <span aria-hidden="true">/</span>{" "}
              <Link to="/serwis" className="hover:text-lime-400">Serwis</Link> <span aria-hidden="true">/</span>{" "}
              <span className="text-zinc-200">Gniazdo ładowania</span>
            </nav>
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300"><Cable size={17} /> Serwis GSM w Kielcach</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">Naprawa gniazda ładowania <span className="text-lime-400">Kielce</span></h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">Telefon nie ładuje się, przerywa ładowanie albo kabel wypada z portu? W SellFix sprawdzimy przyczynę problemu i zaproponujemy odpowiednią naprawę. Nie zawsze konieczna jest wymiana złącza.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/kontakt" className="rounded-xl bg-lime-400 px-7 py-4 font-bold text-zinc-950 transition hover:bg-lime-300">Zapytaj o wycenę</Link>
              <a href="tel:+48792937406" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-4 font-bold transition hover:border-lime-400 hover:text-lime-400"><Phone size={18} /> 792 937 406</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-zinc-300"><span className="inline-flex items-center gap-2"><MapPin size={17} className="text-lime-400" /> ul. Warszawska 28, Kielce</span><span className="inline-flex items-center gap-2"><Clock3 size={17} className="text-lime-400" /> Termin ustalany indywidualnie</span></div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <h2 className="text-3xl font-bold md:text-4xl">Jak naprawiamy problemy z ładowaniem?</h2>
          <p className="mt-4 max-w-3xl text-zinc-300">Najpierw sprawdzamy źródło usterki. Zabrudzony port może dawać podobne objawy jak uszkodzone gniazdo lub układ zasilania.</p>
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
              <h2 className="text-3xl font-bold md:text-4xl">Czyszczenie i wymiana portu USB-C lub Lightning</h2>
              <p className="mt-5 leading-8 text-zinc-300">Serwisujemy wybrane modele iPhone oraz telefony z Androidem. Sprawdzamy port ładowania, przewód i zasilanie. W zależności od wyniku diagnostyki proponujemy czyszczenie, wymianę złącza lub dalszą weryfikację elektroniki.</p>
              <p className="mt-4 leading-8 text-zinc-300">W SellFix oferujemy bezpłatne czyszczenie portu ładowania. Jeśli okaże się, że potrzebna jest naprawa, przedstawimy wycenę przed jej rozpoczęciem.</p>
              <div className="mt-7 flex flex-wrap gap-3"><Link className="rounded-lg border border-lime-400/40 px-5 py-3 font-semibold text-lime-300 hover:bg-lime-400/10" to="/serwis/apple">Serwis Apple</Link><Link className="rounded-lg border border-lime-400/40 px-5 py-3 font-semibold text-lime-300 hover:bg-lime-400/10" to="/serwis/android">Serwis Android</Link></div>
            </div>
            <div className="rounded-2xl border border-lime-400/20 bg-zinc-950 p-7">
              <h3 className="text-2xl font-bold">Objawy uszkodzonego gniazda</h3>
              <ul className="mt-6 space-y-4">
                {["Telefon ładuje się tylko pod określonym kątem", "Ładowanie przerywa przy poruszeniu przewodem", "Wtyczka nie trzyma się stabilnie w porcie", "Telefon nie wykrywa podłączonej ładowarki", "Pojawia się komunikat o wilgoci lub problemie z akcesorium"].map((objaw) => <li key={objaw} className="flex gap-3 text-zinc-300"><CheckCircle2 size={21} className="mt-0.5 shrink-0 text-lime-400" aria-hidden="true" />{objaw}</li>)}
              </ul>
              <p className="mt-6 text-sm leading-6 text-zinc-400">Nie wkładaj metalowych przedmiotów do portu i nie próbuj ładować urządzenia, jeśli złącze jest mokre lub uszkodzone.</p>
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
            <h2 className="text-3xl font-bold md:text-4xl">Naprawa gniazda ładowania w Kielcach</h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-300">Podaj model telefonu i opisz objawy. Sprawdzimy, czy potrzebne jest czyszczenie, czy naprawa portu ładowania.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/kontakt" className="rounded-xl bg-lime-400 px-7 py-4 font-bold text-zinc-950 hover:bg-lime-300">Kontakt z SellFix</Link><a href="tel:+48792937406" className="rounded-xl border border-white/20 px-7 py-4 font-bold hover:border-lime-400">Zadzwoń do serwisu</a></div>
          </div>
        </section>
      </main>
      <Stopka />
    </div>
  );
}
