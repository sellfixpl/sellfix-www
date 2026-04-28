import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import SEO from "../komponenty/SEO";
import {
  Smartphone,
  BatteryCharging,
  Plug,
  Droplets,
  Camera,
  Volume2,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const ikony = {
  "Wymiana wyświetlacza": Smartphone,
  "Wymiana baterii": BatteryCharging,
  "Wymiana złącza ładowania": Plug,
  "Naprawa po zalaniu": Droplets,
  "Wymiana szybki aparatu": Camera,
  "Naprawa głośnika i mikrofonu": Volume2,
  "Naprawa aparatów Pro": Camera,
  "Diagnoza Face ID": ShieldCheck,
  "Diagnoza Touch ID": ShieldCheck,
};

export default function IPhoneModelPage({
  model,
  opis,
  slug,
  naprawy,
}) {
  return (
    <div className="min-h-screen text-white">
      <SEO
        title={`Naprawa ${model} Kielce | SellFix`}
        description={`Naprawa ${model} w Kielcach. Wymiana wyświetlacza, baterii, złącza ładowania, aparatu, głośnika oraz diagnoza usterek w SellFix.`}
        canonical={`https://sellfix.pl/serwis/apple/${slug}`}
      />

      <MenuGlowne />

      <main className="mx-auto max-w-7xl px-5 py-20">
        <Link
          to="/serwis/apple"
          className="mb-8 inline-flex items-center gap-2 rounded-2xl border border-lime-400/20 bg-zinc-900 px-5 py-3 text-sm font-bold text-zinc-200 transition hover:bg-lime-400 hover:text-zinc-950"
        >
          <ArrowLeft size={18} />
          Wróć do modeli iPhone
        </Link>

        <section className="mb-12">
          <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
            Serwis Apple
          </div>

          <h1 className="text-5xl font-black md:text-6xl">
            Naprawa {model}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            {opis}
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-lime-400/20 bg-zinc-900 p-6">
            <h2 className="text-2xl font-black">
              Diagnoza przed naprawą
            </h2>
            <p className="mt-3 leading-7 text-zinc-300">
              Najpierw sprawdzamy urządzenie i potwierdzamy zakres usterki.
              Dzięki temu wiesz, co dokładnie będzie naprawiane.
            </p>
          </div>

          <div className="rounded-3xl border border-lime-400/20 bg-zinc-900 p-6">
            <h2 className="text-2xl font-black">
              Jasna wycena
            </h2>
            <p className="mt-3 leading-7 text-zinc-300">
              Koszt naprawy podajemy przed rozpoczęciem pracy.
              Nie robimy dodatkowych napraw bez Twojej zgody.
            </p>
          </div>

          <div className="rounded-3xl border border-lime-400/20 bg-zinc-900 p-6">
            <h2 className="text-2xl font-black">
              Gwarancja
            </h2>
            <p className="mt-3 leading-7 text-zinc-300">
              Na wykonaną usługę otrzymujesz gwarancję zgodnie z regulaminem
              serwisu SellFix.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8">
            <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
              Dostępne naprawy
            </div>

            <h2 className="text-4xl font-black md:text-5xl">
              Najczęstsze naprawy {model}
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
              Poniżej znajdziesz najczęściej wykonywane usługi dla tego modelu.
              Dokładną cenę potwierdzamy po diagnozie oraz sprawdzeniu dostępności części.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {naprawy.map((naprawa) => {
              const Icon = ikony[naprawa.nazwa] || Smartphone;

              return (
                <div
                  key={naprawa.nazwa}
                  className="rounded-3xl border border-lime-400/10 bg-zinc-900 p-6 transition hover:border-lime-400/40 hover:bg-zinc-800"
                >
                  <Icon className="mb-4 text-lime-400" size={34} />

                  <h3 className="text-2xl font-black text-white">
                    {naprawa.nazwa}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-300">
                    {naprawa.opis}
                  </p>

                  <div className="mt-5 rounded-2xl bg-zinc-950 p-4">
                    <p className="text-sm font-bold text-lime-400">
                      Cena: po diagnozie
                    </p>
                    <p className="mt-1 text-sm text-zinc-400">
                      Ostateczna cena zależy od wersji części, stanu urządzenia
                      oraz zakresu uszkodzenia.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-lime-400/20 bg-zinc-900 p-8">
          <h2 className="text-3xl font-black">
            Chcesz wycenić naprawę {model}?
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            Napisz do nas, opisz problem i podaj model urządzenia.
            Oddzwonimy lub odpiszemy z informacją, co da się zrobić i jaki może być koszt.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/kontakt#formularz"
              className="inline-flex rounded-2xl bg-lime-400 px-8 py-4 font-black text-zinc-950 transition hover:bg-lime-300"
            >
              Wyceń naprawę
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