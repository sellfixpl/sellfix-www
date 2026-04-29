export default function YouTubeAutoVideo() {
  return (
    <section className="border-t border-lime-400/60 bg-zinc-950/80 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-lime-400">
            Zobacz SellFix w akcji
          </p>

          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
            Profesjonalny serwis GSM bez ściemy
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
            Krótki materiał pokazujący, czym zajmujemy się na co dzień:
            naprawa, skup i sprzedaż telefonów.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_0_60px_rgba(163,230,53,0.15)]">
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/qk257hD6X6s?autoplay=1&mute=1&loop=1&playlist=qk257hD6X6s&controls=0&modestbranding=1&rel=0&playsinline=1"
              title="Film SellFix"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}