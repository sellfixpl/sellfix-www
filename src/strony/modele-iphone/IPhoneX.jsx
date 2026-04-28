import IPhoneModelPage from "../../komponenty/IPhoneModelPage";

const naprawy = [
  {
    "nazwa": "Wymiana wyświetlacza",
    "opis": "Wymiana uszkodzonego ekranu w iPhone X. Usługa obejmuje montaż sprawnego wyświetlacza, test dotyku, jasności, kolorów oraz czujników."
  },
  {
    "nazwa": "Wymiana baterii",
    "opis": "Wymiana baterii w iPhone X, gdy telefon szybko się rozładowuje, wyłącza się pod obciążeniem albo pokazuje słabą kondycję akumulatora."
  },
  {
    "nazwa": "Wymiana złącza ładowania",
    "opis": "Naprawa problemów z ładowaniem w iPhone X. Sprawdzamy port, przewód, reakcję na ładowarkę oraz stabilność połączenia."
  },
  {
    "nazwa": "Naprawa po zalaniu",
    "opis": "Diagnoza i czyszczenie iPhone X po kontakcie z cieczą. Im szybciej telefon trafi do serwisu, tym większa szansa na skuteczną naprawę."
  },
  {
    "nazwa": "Wymiana szybki aparatu",
    "opis": "Wymiana pękniętej szybki aparatu w iPhone X, gdy zdjęcia są rozmazane albo obiektyw jest narażony na zabrudzenia."
  },
  {
    "nazwa": "Naprawa głośnika i mikrofonu",
    "opis": "Usuwamy problemy z rozmowami, dźwiękiem, nagrywaniem audio i zabrudzonymi siatkami głośników w iPhone X."
  },
  {
    "nazwa": "Diagnoza Face ID",
    "opis": "Sprawdzamy problemy z Face ID w iPhone X. Po diagnozie informujemy, czy naprawa jest możliwa i opłacalna."
  }
];

export default function IPhoneX() {
  return (
    <IPhoneModelPage
      model="iPhone X"
      slug="iphone-x"
      opis="Serwisujemy iPhone X w SellFix Kielce. Wykonujemy diagnozę, wymianę wyświetlacza, baterii, złącza ładowania, aparatu oraz inne naprawy typowe dla tego modelu. Przed rozpoczęciem pracy podajemy jasną wycenę."
      naprawy={naprawy}
    />
  );
}
