import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const menuSerwis = [
  { nazwa: "Apple", link: "/serwis/apple" },
  { nazwa: "Android", link: "/serwis/android" },
  { nazwa: "Wymiana wyświetlacza", link: "/serwis/wymiana-wyswietlacza" },
  { nazwa: "Wymiana baterii", link: "/serwis/wymiana-baterii" },
  { nazwa: "Naprawa po zalaniu", link: "/serwis/naprawa-po-zalaniu" },
  { nazwa: "Gniazdo ładowania", link: "/serwis/wymiana-gniazda-ladowania" },
];

const menuOferta = [
  { nazwa: "Sklep GSM", link: "/oferta" },
  { nazwa: "Premium Mobile", link: "/#premium-mobile" },
];

const menuGlowne = [
  { nazwa: "Skup Telefonów", link: "/skup-telefonow" },
  { nazwa: "O nas", link: "/o-nas" },
  { nazwa: "Kontakt", link: "/kontakt" },
  { nazwa: "Artykuły", link: "/artykuly" },
  { nazwa: "Regulaminy", link: "/regulaminy" },
];

export default function MenuGlowne() {
  const [menuMobilne, setMenuMobilne] = useState(false);
  const [menuSerwisOpen, setMenuSerwisOpen] = useState(false);
  const [menuOfertaOpen, setMenuOfertaOpen] = useState(false);

  const klasyMenu = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive
        ? "text-lime-400"
        : "text-zinc-200 hover:text-lime-400"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-lime-400/20 bg-zinc-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src="/1001.png"
            alt="SellFix"
            className="h-20 w-auto md:h-24"
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          <NavLink to="/" className={klasyMenu}>
            Strona główna
          </NavLink>

          {/* SERWIS */}
          <div className="relative">
            <button
              onClick={() => {
                setMenuSerwisOpen(!menuSerwisOpen);
                setMenuOfertaOpen(false);
              }}
              className="flex items-center gap-1 text-sm font-medium text-zinc-200 transition hover:text-lime-400"
            >
              Serwis
              <ChevronDown size={16} />
            </button>

            {menuSerwisOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-0 mt-4 w-80 rounded-2xl border border-lime-400/20 bg-zinc-900 p-3 shadow-2xl shadow-black/40"
              >
                {menuSerwis.map((item) => (
                  <NavLink
                    key={item.nazwa}
                    to={item.link}
                    onClick={() => setMenuSerwisOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-sm transition ${
                        isActive
                          ? "bg-lime-400 text-zinc-950"
                          : "text-zinc-200 hover:bg-lime-400 hover:text-zinc-950"
                      }`
                    }
                  >
                    {item.nazwa}
                  </NavLink>
                ))}
              </motion.div>
            )}
          </div>

          {/* OFERTA */}
          <div className="relative">
            <button
              onClick={() => {
                setMenuOfertaOpen(!menuOfertaOpen);
                setMenuSerwisOpen(false);
              }}
              className="flex items-center gap-1 text-sm font-medium text-zinc-200 transition hover:text-lime-400"
            >
              Oferta
              <ChevronDown size={16} />
            </button>

            {menuOfertaOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-0 mt-4 w-72 rounded-2xl border border-lime-400/20 bg-zinc-900 p-3 shadow-2xl shadow-black/40"
              >
                {menuOferta.map((item) => (
                  <NavLink
                    key={item.nazwa}
                    to={item.link}
                    onClick={() => setMenuOfertaOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-sm transition ${
                        isActive
                          ? "bg-lime-400 text-zinc-950"
                          : "text-zinc-200 hover:bg-lime-400 hover:text-zinc-950"
                      }`
                    }
                  >
                    {item.nazwa}
                  </NavLink>
                ))}
              </motion.div>
            )}
          </div>

          {menuGlowne.map((item) => (
            <NavLink
              key={item.nazwa}
              to={item.link}
              className={klasyMenu}
            >
              {item.nazwa}
            </NavLink>
          ))}
        </nav>

        <a
          href="tel:+48792937406"
          className="hidden rounded-2xl bg-lime-400 px-6 py-3 text-sm font-bold text-zinc-950 transition hover:bg-lime-300 md:inline-flex"
        >
          Zadzwoń
        </a>

        <button
          className="text-white xl:hidden"
          onClick={() => setMenuMobilne(!menuMobilne)}
        >
          {menuMobilne ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE */}
      {menuMobilne && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-lime-400/20 bg-zinc-950 px-5 pb-5 xl:hidden"
        >
          <NavLink
            to="/"
            className="block py-3 text-zinc-200"
            onClick={() => setMenuMobilne(false)}
          >
            Strona główna
          </NavLink>

          {menuSerwis.map((item) => (
            <NavLink
              key={item.nazwa}
              to={item.link}
              className="block py-3 text-zinc-200"
              onClick={() => setMenuMobilne(false)}
            >
              {item.nazwa}
            </NavLink>
          ))}

          {menuGlowne.map((item) => (
            <NavLink
              key={item.nazwa}
              to={item.link}
              className="block py-3 text-zinc-200"
              onClick={() => setMenuMobilne(false)}
            >
              {item.nazwa}
            </NavLink>
          ))}

          <a
            href="tel:+48792937406"
            className="mt-4 inline-flex rounded-2xl bg-lime-400 px-6 py-3 font-bold text-zinc-950"
          >
            Zadzwoń
          </a>
        </motion.div>
      )}
    </header>
  );
}