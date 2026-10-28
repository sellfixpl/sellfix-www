import { Helmet } from "react-helmet-async";

// Dane muszą być zgodne z rzeczywistymi informacjami o firmie.
// Godziny otwarcia i kod pocztowy można dodać po ich potwierdzeniu.
export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MobilePhoneStore",
    "@id": "https://sellfix.pl/#firma",
    name: "SellFix",
    url: "https://sellfix.pl/",
    telephone: "+48792937406",
    image: "https://sellfix.pl/1001.png",
    description:
      "SellFix – serwis i sklep GSM w Kielcach. Naprawa telefonów iPhone, Samsung, Xiaomi i innych marek, skup i sprzedaż telefonów oraz akcesoria.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Warszawska 28",
      addressLocality: "Kielce",
      addressCountry: "PL",
    },
    areaServed: {
      "@type": "City",
      name: "Kielce",
    },
    hasMap: "https://www.google.com/maps/search/?api=1&query=Warszawska+28%2C+Kielce",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61553593684081",
      "https://www.instagram.com/sellfix.pl/",
      "https://www.tiktok.com/@sellfix5",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
