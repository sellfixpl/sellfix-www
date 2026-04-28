import IPhoneModelPage from "../../komponenty/IPhoneModelPage";

const naprawy = [
  {
    "nazwa": "Wymiana wyświetlacza",
    "opis": "Wymiana uszkodzonego ekranu w iPhone 17. Usługa obejmuje montaż sprawnego wyświetlacza, test dotyku, jasności, kolorów oraz czujników."
  },
  {
    "nazwa": "Wymiana baterii",
    "opis": "Wymiana baterii w iPhone 17, gdy telefon szybko się rozładowuje, wyłącza się pod obciążeniem albo pokazuje słabą kondycję akumulatora."
  },
  {
    "nazwa": "Wymiana złącza ładowania",
    "opis": "Naprawa problemów z ładowaniem w iPhone 17. Sprawdzamy port, przewód, reakcję na ładowarkę oraz stabilność połączenia."
  },
  {
    "nazwa": "Naprawa po zalaniu",
    "opis": "Diagnoza i czyszczenie iPhone 17 po kontakcie z cieczą. Im szybciej telefon trafi do serwisu, tym większa szansa na skuteczną naprawę."
  },
  {
    "nazwa": "Wymiana szybki aparatu",
    "opis": "Wymiana pękniętej szybki aparatu w iPhone 17, gdy zdjęcia są rozmazane albo obiektyw jest narażony na zabrudzenia."
  },
  {
    "nazwa": "Naprawa głośnika i mikrofonu",
    "opis": "Usuwamy problemy z rozmowami, dźwiękiem, nagrywaniem audio i zabrudzonymi siatkami głośników w iPhone 17."
  },
  {
    "nazwa": "Diagnoza Face ID",
    "opis": "Sprawdzamy problemy z Face ID w iPhone 17. Po diagnozie informujemy, czy naprawa jest możliwa i opłacalna."
  }
];

export default function IPhone17() {
  return (
    <IPhoneModelPage
      model="iPhone 17"
      slug="iphone-17"
      opis="Serwisujemy iPhone 17 w SellFix Kielce. Wykonujemy diagnozę, wymianę wyświetlacza, baterii, złącza ładowania, aparatu oraz inne naprawy typowe dla tego modelu. Przed rozpoczęciem pracy podajemy jasną wycenę."
      naprawy={naprawy}
    />
  );
}
