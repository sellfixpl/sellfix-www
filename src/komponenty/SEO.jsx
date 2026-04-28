import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "SellFix | Serwis GSM Kielce",
  description = "SellFix to profesjonalny serwis GSM w Kielcach. Naprawa telefonów, skup telefonów, zabezpieczenia ekranu, gwarancja i szybka obsługa.",
  canonical = "https://sellfix.pl/",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="SellFix" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}