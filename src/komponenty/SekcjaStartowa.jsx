import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

export default function SekcjaStartowa() {
  return (
    <section
      id="start"
      className="relative overflow-hidden border-b border-lime-400/10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/tlo-sellfix.png')" }}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-55"
        src="/sellfix-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-zinc-950/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/55 to-zinc-950/75" />

      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-lime-400/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-5 inline-flex rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
            Profesjonalny serwis i sklep GSM w Kielcach
          </div>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Naprawa, skup i sprzedaż telefonów.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Lokalny, niezależny serwis GSM w Kielcach. Specjalizujemy się w
            pogwarancyjnej naprawie iPhone, Samsung oraz innych smartfonów.
            Działamy konkretnie: diagnoza, wycena, naprawa.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/kontakt"
              className="rounded-2xl bg-lime-400 px-7 py-4 text-center font-bold text-zinc-950 hover:bg-lime-300"
            >
              Skontaktuj się
            </a>

            <a
              href="/oferta"
              className="rounded-2xl border border-zinc-700 px-7 py-4 text-center font-bold text-white hover:border-lime-400 hover:text-lime-400"
            >
              Zobacz ofertę
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-[2rem] border border-lime-400/20 bg-zinc-900/75 p-6 shadow-2xl backdrop-blur-md"
        >
          <div className="rounded-[1.5rem] bg-zinc-950/95 p-7">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-lime-400 text-zinc-950">
                <Smartphone size={42} />
              </div>

              <img src="/1001.png" alt="SellFix" className="h-20 w-auto" />
            </div>

            <h2 className="text-3xl font-black">
              Serwis GSM bez kombinowania
            </h2>

            <p className="mt-4 text-zinc-300">
              Telefony, smartfony, akcesoria, skup oraz naprawy. Jedno miejsce
              dla klienta, który chce szybko rozwiązać problem ze sprzętem.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl bg-zinc-900 p-4 font-semibold text-lime-400">
                iPhone / Samsung / Xiaomi
              </div>

              <div className="rounded-2xl bg-zinc-900 p-4 font-semibold text-lime-400">
                Naprawa / skup / sprzedaż
              </div>

              <div className="rounded-2xl bg-zinc-900 p-4 font-semibold text-lime-400">
                Kielce i wysyłkowo
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}