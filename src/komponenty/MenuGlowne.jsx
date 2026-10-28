import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const menuSerwis = [
  { nazwa: "Wszystkie usługi", link: "/serwis" },
  { nazwa: "Serwis Apple", link: "/serwis/apple" },
  { nazwa: "Serwis Android", link: "/serwis/android" },
  { nazwa: "Wymiana wyświetlacza", link: "/serwis/wymiana-wyswietlacza" },
  { nazwa: "Wymiana baterii", link: "/serwis/wymiana-baterii" },
  { nazwa: "Naprawa po zalaniu", link: "/serwis/naprawa-po-zalaniu" },
  { nazwa: "Gniazdo ładowania", link: "/serwis/wymiana-gniazda-ladowania" },
];

const menuOferta = [
  { nazwa: "Sklep GSM", link: "/oferta" },
  { nazwa: "Premium Mobile", link: "/#premium-mobile", hash: true },
  { nazwa: "FixGuard", link: "/fixguard" },
];

const menuGlowne = [
  { nazwa: "Skup telefonów", link: "/skup-telefonow" },
  { nazwa: "O nas", link: "/o-nas" },
  { nazwa: "Kontakt", link: "/kontakt" },
  { nazwa: "Artykuły", link: "/artykuly" },
  { nazwa: "Regulaminy", link: "/regulaminy" },
];

const linkKlasa = ({ isActive }) =>
  `text-sm font-medium transition-colors ${isActive ? "text-lime-400" : "text-zinc-200 hover:text-lime-400"}`;

export default function MenuGlowne() {
  const location = useLocation();
  const [menuMobilne, setMenuMobilne] = useState(false);
  const [otwarte, setOtwarte] = useState(null);

  useEffect(() => {
    setMenuMobilne(false);
    setOtwarte(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const zamknijEscape = (event) => {
      if (event.key === "Escape") {
        setMenuMobilne(false);
        setOtwarte(null);
      }
    };
    window.addEventListener("keydown", zamknijEscape);
    return () => window.removeEventListener("keydown", zamknijEscape);
  }, []);

  const zamknij = () => {
    setMenuMobilne(false);
    setOtwarte(null);
  };

  const przelacz = (nazwa) => setOtwarte((poprzednie) => (poprzednie === nazwa ? null : nazwa));

  const renderLink = (item, klasa, onClick) =>
    item.hash ? (
      <a key={item.link} href={item.link} className={klasa} onClick={onClick}>
        {item.nazwa}
      </a>
    ) : (
      <NavLink key={item.link} to={item.link} className={klasa} onClick={onClick}>
        {item.nazwa}
      </NavLink>
    );

  const renderDesktopDropdown = (nazwa, elementy, szerokosc) => (
    <div className="relative" onMouseLeave={() => setOtwarte(null)}>
      <button
        type="button"
        aria-expanded={otwarte === nazwa}
        aria-haspopup="true"
        onClick={() => przelacz(nazwa)}
        className="flex items-center gap-1 text-sm font-medium text-zinc-200 transition hover:text-lime-400"
      >
        {nazwa}
        <ChevronDown size={16} className={`transition-transform ${otwarte === nazwa ? "rotate-180" : ""}`} />
      </button>
      {otwarte === nazwa && (
        <div className={`absolute left-0 top-full z-50 pt-4 ${szerokosc}`}>
          <div className="max-h-[70vh] overflow-y-auto rounded-2xl border border-lime-400/20 bg-zinc-900 p-3 shadow-2xl shadow-black/40">
            {elementy.map((item) =>
              renderLink(
                item,
                "block rounded-xl px-4 py-3 text-sm text-zinc-200 transition hover:bg-lime-400 hover:text-zinc-950",
                zamknij
              )
            )}
          </div>
        </div>
      )}
    </div>
  );

  const renderMobileDropdown = (nazwa, elementy) => (
    <div>
      <button
        type="button"
        aria-expanded={otwarte === nazwa}
        onClick={() => przelacz(nazwa)}
        className="flex w-full items-center justify-between py-3 text-left text-zinc-200"
      >
        {nazwa}
        <ChevronDown size={16} className={`transition-transform ${otwarte === nazwa ? "rotate-180" : ""}`} />
      </button>
      {otwarte === nazwa && (
        <div className="mb-2 rounded-2xl border border-lime-400/20 bg-zinc-900 p-2">
          {elementy.map((item) =>
            renderLink(
              item,
              "block rounded-xl px-4 py-3 text-zinc-200 transition hover:bg-lime-400 hover:text-zinc-950",
              zamknij
            )
          )}
        </div>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-lime-400/20 bg-zinc-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex shrink-0 items-center" onClick={zamknij} aria-label="SellFix — strona główna">
          <img src="/1001.png" alt="SellFix" className="h-20 w-auto md:h-24" />
        </Link>

        <nav aria-label="Nawigacja główna" className="hidden items-center gap-5 xl:flex">
          <NavLink to="/" end className={linkKlasa} onClick={zamknij}>Strona główna</NavLink>
          {renderDesktopDropdown("Serwis", menuSerwis, "w-80")}
          {renderDesktopDropdown("Oferta", menuOferta, "w-72")}
          {menuGlowne.map((item) => (
            <NavLink key={item.link} to={item.link} className={linkKlasa} onClick={zamknij}>
              {item.nazwa}
            </NavLink>
          ))}
        </nav>

        <a href="tel:+48792937406" className="hidden shrink-0 rounded-2xl bg-lime-400 px-6 py-3 text-sm font-bold text-zinc-950 transition hover:bg-lime-300 md:inline-flex">
          Zadzwoń
        </a>

        <button
          type="button"
          aria-label={menuMobilne ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={menuMobilne}
          aria-controls="sellfix-menu-mobilne"
          className="text-white xl:hidden"
          onClick={() => { setMenuMobilne((v) => !v); setOtwarte(null); }}
        >
          {menuMobilne ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuMobilne && (
        <nav
          id="sellfix-menu-mobilne"
          aria-label="Nawigacja mobilna"
          className="max-h-[calc(100dvh-105px)] overflow-y-auto overscroll-contain border-t border-lime-400/20 bg-zinc-950 px-5 pb-6 xl:hidden"
        >
          <NavLink to="/" end className="block py-3 text-zinc-200" onClick={zamknij}>Strona główna</NavLink>
          {renderMobileDropdown("Serwis", menuSerwis)}
          {renderMobileDropdown("Oferta", menuOferta)}
          {menuGlowne.map((item) => (
            <NavLink key={item.link} to={item.link} className="block py-3 text-zinc-200" onClick={zamknij}>
              {item.nazwa}
            </NavLink>
          ))}
          <a href="tel:+48792937406" onClick={zamknij} className="mt-4 inline-flex rounded-2xl bg-lime-400 px-6 py-3 font-bold text-zinc-950">
            Zadzwoń
          </a>
        </nav>
      )}
    </header>
  );
}
