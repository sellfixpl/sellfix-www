import IPhoneModelPage from "../../komponenty/IPhoneModelPage";

const naprawy = [
  {
    "nazwa": "Wymiana wyświetlacza",
    "opis": "Wymiana uszkodzonego ekranu w iPhone 13 Pro Max. Usługa obejmuje montaż sprawnego wyświetlacza, test dotyku, jasności, kolorów oraz czujników."
  },
  {
    "nazwa": "Wymiana baterii",
    "opis": "Wymiana baterii w iPhone 13 Pro Max, gdy telefon szybko się rozładowuje, wyłącza się pod obciążeniem albo pokazuje słabą kondycję akumulatora."
  },
  {
    "nazwa": "Wymiana złącza ładowania",
    "opis": "Naprawa problemów z ładowaniem w iPhone 13 Pro Max. Sprawdzamy port, przewód, reakcję na ładowarkę oraz stabilność połączenia."
  },
  {
    "nazwa": "Naprawa po zalaniu",
    "opis": "Diagnoza i czyszczenie iPhone 13 Pro Max po kontakcie z cieczą. Im szybciej telefon trafi do serwisu, tym większa szansa na skuteczną naprawę."
  },
  {
    "nazwa": "Wymiana szybki aparatu",
    "opis": "Wymiana pękniętej szybki aparatu w iPhone 13 Pro Max, gdy zdjęcia są rozmazane albo obiektyw jest narażony na zabrudzenia."
  },
  {
    "nazwa": "Naprawa głośnika i mikrofonu",
    "opis": "Usuwamy problemy z rozmowami, dźwiękiem, nagrywaniem audio i zabrudzonymi siatkami głośników w iPhone 13 Pro Max."
  },
  {
    "nazwa": "Naprawa aparatów Pro",
    "opis": "Diagnozujemy problemy z aparatami w iPhone 13 Pro Max, w tym drgania obrazu, problemy z ostrością i uszkodzenia modułów kamer."
  },
  {
    "nazwa": "Diagnoza Face ID",
    "opis": "Sprawdzamy problemy z Face ID w iPhone 13 Pro Max. Po diagnozie informujemy, czy naprawa jest możliwa i opłacalna."
  }
];

export default function IPhone13ProMax() {
  return (
    <IPhoneModelPage
      model="iPhone 13 Pro Max"
      slug="iphone-13-pro-max"
      opis="Serwisujemy iPhone 13 Pro Max w SellFix Kielce. Wykonujemy diagnozę, wymianę wyświetlacza, baterii, złącza ładowania, aparatu oraz inne naprawy typowe dla tego modelu. Przed rozpoczęciem pracy podajemy jasną wycenę."
      naprawy={naprawy}
    />
  );
}
