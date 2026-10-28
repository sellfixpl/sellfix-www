import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://sellfix.pl";
const DEFAULT_TITLE = "SellFix | Serwis GSM Kielce";
const DEFAULT_DESCRIPTION =
  "SellFix – serwis telefonów w Kielcach przy ul. Warszawskiej 28. Naprawa iPhone, Samsung i Xiaomi, skup telefonów oraz sprzedaż urządzeń.";

/**
 * Metadane pojedynczej podstrony. Komponent musi znajdować się wewnątrz
 * BrowserRouter i HelmetProvider (tak jak w main.jsx).
 *
 * Uwaga: Helmet aktualizuje dokument po uruchomieniu JavaScript.
 * Ten komponent nie zastępuje prerenderingu / SSR.
 */
export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonical,
  noindex = false,
}) {
  const { pathname } = useLocation();
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const pageUrl = canonical || `${SITE_URL}${normalizedPath}`;

  return (
    <Helmet>
      <html lang="pl" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:locale" content="pl_PL" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SellFix" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
