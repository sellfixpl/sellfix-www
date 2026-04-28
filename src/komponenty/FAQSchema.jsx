import { Helmet } from "react-helmet-async";

export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Jak wygląda naprawa iPhone i telefonów z Androidem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Naprawa telefonu zaczyna się od diagnozy usterki i wyceny. Serwisujemy iPhone’y oraz telefony z Androidem, takie jak Samsung, Xiaomi, Huawei czy Motorola. Po akceptacji kosztu przystępujemy do naprawy.",
        },
      },
      {
        "@type": "Question",
        name: "Ile kosztuje naprawa iPhone lub telefonu z Androidem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cena zależy od modelu i rodzaju uszkodzenia. Najczęściej naprawiane usterki to wymiana wyświetlacza, baterii lub złącza ładowania. Wycenę podajemy przed rozpoczęciem naprawy.",
        },
      },
      {
        "@type": "Question",
        name: "Ile trwa naprawa telefonu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Większość napraw, takich jak wymiana baterii czy ekranu, wykonujemy tego samego dnia. Bardziej skomplikowane usterki mogą potrwać dłużej.",
        },
      },
      {
        "@type": "Question",
        name: "Czy naprawa telefonu się opłaca?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "W wielu przypadkach tak. Naprawa jest znacznie tańsza niż zakup nowego urządzenia, szczególnie przy droższych modelach iPhone i Samsung.",
        },
      },
      {
        "@type": "Question",
        name: "Czy naprawiacie telefony po zalaniu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, zajmujemy się naprawą telefonów po zalaniu. Kluczowy jest czas, dlatego warto jak najszybciej oddać urządzenie do serwisu.",
        },
      },
      {
        "@type": "Question",
        name: "Czy wymieniacie baterię w iPhone i Androidzie?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, oferujemy wymianę baterii w iPhone oraz telefonach z Androidem. Nowa bateria poprawia czas pracy i wydajność urządzenia.",
        },
      },
      {
        "@type": "Question",
        name: "Czy naprawiacie zbite wyświetlacze?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, wymieniamy uszkodzone wyświetlacze w iPhone i telefonach z Androidem. To jedna z najczęstszych usług w serwisie.",
        },
      },
      {
        "@type": "Question",
        name: "Czy oferujecie gwarancję na naprawę telefonu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, na każdą naprawę udzielamy gwarancji. Jej długość zależy od rodzaju usługi i użytych części.",
        },
      },
      {
        "@type": "Question",
        name: "Czy sprzedajecie używane iPhone i telefony z Androidem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, oferujemy sprawdzone i przetestowane telefony. Każdy iPhone i Android przechodzi kontrolę techniczną przed sprzedażą.",
        },
      },
      {
        "@type": "Question",
        name: "Czy używane telefony są sprawne?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, wszystkie urządzenia są dokładnie sprawdzane. Testujemy ekran, baterię, aparaty, głośniki, mikrofon oraz funkcje takie jak Face ID czy Touch ID.",
        },
      },
      {
        "@type": "Question",
        name: "Czy telefony mają gwarancję?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, sprzedawane telefony objęte są gwarancją, dzięki czemu masz pewność bezpiecznego zakupu.",
        },
      },
      {
        "@type": "Question",
        name: "Czy telefony są bez blokad iCloud i Google?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, wszystkie urządzenia są przygotowane do użytkowania i nie posiadają blokad poprzedniego właściciela.",
        },
      },
      {
        "@type": "Question",
        name: "Czy warto kupić używanego iPhone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, to dobry sposób na zakup sprawdzonego telefonu w niższej cenie. Oferujemy modele w różnych przedziałach cenowych.",
        },
      },
      {
        "@type": "Question",
        name: "Czy skupujecie iPhone i telefony z Androidem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, skupujemy zarówno sprawne, jak i uszkodzone telefony.",
        },
      },
      {
        "@type": "Question",
        name: "Jak wygląda skup telefonu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wyceniamy urządzenie na podstawie modelu, stanu technicznego i wizualnego. Po akceptacji oferty wypłacamy gotówkę lub robimy przelew.",
        },
      },
      {
        "@type": "Question",
        name: "Czy można sprzedać uszkodzony telefon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, skupujemy telefony z uszkodzonym ekranem, baterią, problemami z ładowaniem czy po zalaniu.",
        },
      },
      {
        "@type": "Question",
        name: "Od czego zależy cena telefonu w skupie?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cena zależy od modelu, pamięci, stanu technicznego, kondycji baterii oraz ewentualnych blokad.",
        },
      },
      {
        "@type": "Question",
        name: "Czy trzeba umawiać się na naprawę telefonu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nie, ale w przypadku mniej popularnych modeli warto wcześniej się skontaktować.",
        },
      },
      {
        "@type": "Question",
        name: "Czy można naprawić telefon od ręki?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, wiele napraw wykonujemy na miejscu, nawet w kilkadziesiąt minut.",
        },
      },
      {
        "@type": "Question",
        name: "Czy dane w telefonie są bezpieczne podczas naprawy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, ale zalecamy wykonanie kopii zapasowej przed oddaniem telefonu do serwisu.",
        },
      },
      {
        "@type": "Question",
        name: "Czy pomagacie przenieść dane na nowy telefon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, pomagamy przenieść kontakty, zdjęcia i aplikacje na nowe urządzenie.",
        },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}