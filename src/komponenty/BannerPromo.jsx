export default function BannerPromo() {
  return (
    <section className="border-y border-lime-400/20 bg-zinc-900/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-8 text-center md:flex-row md:text-left">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-lime-400">
            Promocja miesiąca
          </p>

          <h2 className="mt-2 text-3xl font-black md:text-4xl">
            Darmowa diagnoza telefonu
          </h2>

          <p className="mt-3 max-w-2xl text-zinc-300">
            Sprawdzimy Twój telefon bez opłat i powiemy jasno,
            co warto naprawić, a czego nie.
          </p>
        </div>

        <a
          href="/kontakt"
          className="rounded-2xl bg-lime-400 px-8 py-4 font-bold text-zinc-950 hover:bg-lime-300"
        >
          Umów diagnozę
        </a>
      </div>
    </section>
  );
}