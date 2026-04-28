import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import { Phone, MapPin, Mail } from "lucide-react";
import SEO from "../komponenty/SEO";

export default function Kontakt() {
  return (
    <div className="min-h-screen text-white">
      <SEO
        title="Kontakt | SellFix Kielce"
        description="Skontaktuj się z SellFix w Kielcach. Naprawa telefonów, skup smartfonów, wycena urządzeń, serwis iPhone oraz Android. Warszawska 28, Kielce."
        canonical="https://sellfix.pl/kontakt"
      />

      <MenuGlowne />

      <main className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12">
          <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
            Kontakt
          </div>

          <h1 className="text-5xl font-black md:text-6xl">
            Skontaktuj się z SellFix
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Masz telefon do naprawy, chcesz sprzedać urządzenie albo
            potrzebujesz wyceny? Napisz, zadzwoń albo odwiedź nas
            stacjonarnie w Kielcach.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-zinc-900 p-6">
            <Phone className="mb-4 text-lime-400" size={36} />
            <h3 className="text-2xl font-black">Telefon</h3>
            <p className="mt-3 text-zinc-300">
              +48 792 937 406
            </p>
          </div>

          <div className="rounded-3xl bg-zinc-900 p-6">
            <MapPin className="mb-4 text-lime-400" size={36} />
            <h3 className="text-2xl font-black">Lokalizacja</h3>
            <p className="mt-3 text-zinc-300">
              25-312 Kielce, Warszawska 28, Polska
            </p>
          </div>

          <div className="rounded-3xl bg-zinc-900 p-6">
            <Mail className="mb-4 text-lime-400" size={36} />
            <h3 className="text-2xl font-black">E-mail</h3>
            <p className="mt-3 text-zinc-300">
              sellfix.sp@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-black">
              Godziny otwarcia
            </h2>

            <div className="rounded-3xl bg-zinc-900 p-8">
              <div className="grid gap-4 text-lg">
                {[
                  "Poniedziałek",
                  "Wtorek",
                  "Środa",
                  "Czwartek",
                  "Piątek",
                ].map((day) => (
                  <div
                    key={day}
                    className="flex items-center justify-between border-b border-zinc-800 pb-3"
                  >
                    <span>{day}</span>
                    <span className="font-bold text-lime-400">
                      09:00 – 18:00
                    </span>
                  </div>
                ))}

                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <span>Sobota</span>
                  <span className="font-bold text-lime-400">
                    10:00 – 15:00
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Niedziela</span>
                  <span className="font-bold text-red-400">
                    Zamknięte
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-black">
              Znajdź nas
            </h2>

            <div className="overflow-hidden rounded-3xl border border-lime-400/20">
              <iframe
                title="SellFix Lokalizacja"
                src="https://www.google.com/maps?q=Warszawska+28,+25-312+Kielce&output=embed"
                width="100%"
                height="100%"
                className="min-h-[520px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-16" id="formularz">
          <h2 className="mb-6 text-3xl font-black">
            Napisz do nas
          </h2>

          <div className="rounded-3xl bg-zinc-900 p-8">
            <form
              action="https://formsubmit.co/sellfix.sp@gmail.com"
              method="POST"
              className="grid gap-6"
            >
              <input
                type="hidden"
                name="_subject"
                value="Nowa wiadomość ze strony SellFix"
              />

              <input
                type="hidden"
                name="_captcha"
                value="true"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  name="Imię i nazwisko"
                  required
                  placeholder="Imię i nazwisko"
                  className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-5 py-4 text-white outline-none focus:border-lime-400"
                />

                <input
                  type="tel"
                  name="Telefon"
                  required
                  placeholder="Numer telefonu"
                  className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-5 py-4 text-white outline-none focus:border-lime-400"
                />
              </div>

              <input
                type="email"
                name="Email"
                required
                placeholder="Adres e-mail"
                className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-5 py-4 text-white outline-none focus:border-lime-400"
              />

              <textarea
                name="Wiadomość"
                rows="6"
                required
                placeholder="Opisz czego potrzebujesz..."
                className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-5 py-4 text-white outline-none focus:border-lime-400"
              />

              <button
                type="submit"
                className="w-fit rounded-2xl bg-lime-400 px-8 py-4 font-bold text-zinc-950 transition hover:bg-lime-300"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </main>

      <Stopka />
    </div>
  );
}