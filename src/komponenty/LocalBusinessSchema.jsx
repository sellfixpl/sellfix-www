import { Helmet } from "react-helmet-async";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SellFix",
    url: "https://sellfix.pl",
    telephone: "+48792937406",
    image: "https://sellfix.pl/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Warszawska 28",
      addressLocality: "Kielce",
      addressCountry: "PL",
    },
    areaServed: "Kielce",
    priceRange: "$$",
    description:
      "SellFix to serwis GSM w Kielcach. Naprawa telefonów, skup telefonów, zabezpieczenia ekranu oraz dodatkowa ochrona FixGuard.",
    sameAs: [
      "https://sellfix.pl"
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}