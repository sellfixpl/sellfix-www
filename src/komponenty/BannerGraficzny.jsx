export default function BannerGraficzny() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-8">
      <a
        href="/oferta"
        className="block overflow-hidden rounded-3xl border border-lime-400/20 shadow-xl"
      >
        <img
          src="/banner-glowny.png"
          alt="Banner SellFix"
          className="h-[220px] w-full object-cover md:h-[280px]"
        />
      </a>
    </section>
  );
}