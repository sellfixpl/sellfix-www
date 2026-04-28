import { Link } from "react-router-dom";

export default function Stopka() {
  return (
    <footer className="border-t border-lime-400/10 bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-black text-lime-400">
            SellFix
          </h3>

          <p className="mt-2 text-zinc-400">
            Serwis GSM • Naprawa • Skup • Sprzedaż
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-zinc-400 md:items-end">
          <Link
            to="/polityka-prywatnosci"
            className="hover:text-lime-400"
          >
            Polityka prywatności i cookies
          </Link>

          <p>
            © 2026 SellFix. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}