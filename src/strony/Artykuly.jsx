import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import { Newspaper } from "lucide-react";
import SEO from "../komponenty/SEO";

const listaArtykulow = [
  "Jak dbać o baterię w telefonie?",
  "Kiedy warto wymienić wyświetlacz?",
  "iPhone po zalaniu — co robić?",
];

export default function Artykuly() {
  return (
    <div className="min-h-screen text-white">
      <MenuGlowne />

      <main className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12">
          <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
            Artykuły
          </div>

          <h1 className="text-5xl font-black md:text-6xl">
            Poradniki i aktualności SellFix
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Miejsce na wpisy blogowe, poradniki oraz treści SEO
            związane z naprawą telefonów, serwisem GSM i elektroniką.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {listaArtykulow.map((tytul) => (
            <article
              key={tytul}
              className="rounded-3xl bg-zinc-900 p-6"
            >
              <Newspaper
                className="mb-4 text-lime-400"
                size={36}
              />

              <h2 className="text-2xl font-black">
                {tytul}
              </h2>

              <p className="mt-3 text-zinc-300">
                Tutaj później podepniemy pełny artykuł albo blog.
              </p>
            </article>
          ))}
        </div>
      </main>

      <Stopka />
    </div>
  );
}