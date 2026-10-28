import { Helmet } from "react-helmet-async";

/**
 * FAQ JSON-LD generowany wyłącznie z pytań widocznych na stronie.
 * Oczekuje tablicy: [{ pytanie: string, odpowiedz: string }].
 */
export default function FAQSchema({ faqLista = [] }) {
  const mainEntity = faqLista
    .filter((item) => item && typeof item.pytanie === "string" && typeof item.odpowiedz === "string")
    .filter((item) => item.pytanie.trim() && item.odpowiedz.trim())
    .map(({ pytanie, odpowiedz }) => ({
      "@type": "Question",
      name: pytanie.trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: odpowiedz.trim(),
      },
    }));

  if (mainEntity.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
