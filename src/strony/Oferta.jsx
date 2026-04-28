import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import {
  ShoppingBag,
  ShieldCheck,
  Clock,
  
} from "lucide-react";
import SEO from "../komponenty/SEO";

export default function Oferta() {
  return (
    <div className="min-h-screen text-white">
      <MenuGlowne />

      <main className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12">
          <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
            Oferta
          </div>

          <h1 className="text-5xl font-black md:text-6xl">
            Serwis, sprzedaż i rozwiązania GSM
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            W SellFix zajmujemy się naprawą telefonów,
            sprzedażą urządzeń, akcesoriów GSM oraz
            dodatkowymi usługami ochronnymi i serwisowymi.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-zinc-900 p-6">
            <ShoppingBag
              className="mb-4 text-lime-400"
              size={36}
            />

            <h3 className="text-2xl font-black">
              Sklep GSM
            </h3>

            <p className="mt-3 text-zinc-300">
              Telefony, akcesoria i sprzęt GSM dostępny
              stacjonarnie oraz pod zamówienie.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://allegro.pl/uzytkownik/SellFixpl/sklep "
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-2xl bg-white px-6 py-4 hover:scale-105 transition"
              >
                <img
                  src="/allegro-logo.png"
                  alt="Allegro"
                  className="h-8 w-auto"
                />
              </a>

              <a
                href="https://www.empik.com/sklepy/sellfix-sklep,22737,m"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-2xl bg-white px-6 py-4 hover:scale-105 transition"
              >
                <img
                  src="/empik-logo.png"
                  alt="Empik"
                  className="h-8 w-auto"
                />
              </a>
              <a
                href="https://sellfix.olx.pl/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-2xl bg-white px-6 py-4 hover:scale-105 transition"
              >
                <img
                  src="/olx.jpg"
                  alt="Empik"
                  className="h-8 w-auto"
                />
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-zinc-900 p-6">
            <ShieldCheck
              className="mb-4 text-lime-400"
              size={36}
            />

            <h3 className="text-2xl font-black">
              FixGuard
            </h3>

            <p className="mt-3 text-zinc-300">
              Dodatkowa ochrona po zakupie lub naprawie
              urządzenia dla większego spokoju klienta.
            </p>
          </div>

          <div className="rounded-3xl bg-zinc-900 p-6">
            <Clock
              className="mb-4 text-lime-400"
              size={36}
            />

            <h3 className="text-2xl font-black">
              Szybka diagnostyka
            </h3>

            <p className="mt-3 text-zinc-300">
              Bezpłatnie sprawdzamy urządzenie i jasno mówimy,
              co warto naprawiać, a czego nie.
          
            </p>
          </div>
        </div>
      </main>

      <Stopka />
    </div>
  );
}