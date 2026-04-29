export default function PremiumMobile() {
  return (
    <section
      id="premium-mobile"
      className="mx-auto max-w-7xl px-5 py-20"
    >
      <div className="mb-6 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
        Premium Mobile
      </div>

      <h2 className="text-4xl font-black md:text-5xl">
        Internet i abonamenty komórkowe, umowa na ile chcesz.
      </h2>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
        W SellFix oferujemy również usługi Premium Mobile — abonamenty
        komórkowe, internet światłowodowy oraz rozwiązania dopasowane do
        klientów indywidualnych i firm. Pomożemy dobrać najlepszą ofertę bez
        zbędnych kosztów.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <a
          href="https://premiummobile.pl/"
          target="_blank"
          rel="noopener noreferrer"
          className="overflow-hidden rounded-3xl border border-lime-400/20 bg-zinc-900 shadow-xl"
        >
          <img
            src="/premium-mobile-1.jpg"
            alt="Premium Mobile"
            className="h-full w-full object-cover"
          />
        </a>

        <a
          href="https://premiummobile.pl/"
          target="_blank"
          rel="noopener noreferrer"
          className="overflow-hidden rounded-3xl border border-lime-400/30 bg-zinc-900 p-4 shadow-xl"
        >
          <img
            src="/premium-mobile-2.jpg"
            alt="Oferta Premium Mobile"
            className="mx-auto max-h-[320px] w-auto rounded-2xl object-contain"
          />
        </a>
      </div>
    </section>
  );
}