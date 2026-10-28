import { Routes, Route, Link, useParams } from "react-router-dom";
import StronaGlowna from "./strony/StronaGlowna";
import ONas from "./strony/ONas";
import Kontakt from "./strony/Kontakt";
import Oferta from "./strony/Oferta";
import Serwis from "./strony/Serwis";
import SerwisApple from "./strony/SerwisApple";
import SerwisAndroid from "./strony/SerwisAndroid";
import SkupTelefonow from "./strony/SkupTelefonow";
import Gwarancja from "./strony/Gwarancja";
import Artykuly from "./strony/Artykuly";
import Regulaminy from "./strony/Regulaminy";
import RegulaminSerwisu from "./strony/RegulaminSerwisu";
import PolitykaPrywatnosci from "./strony/PolitykaPrywatnosci";
import FixGuard from "./strony/FixGuard";
import IPhoneModelPage from "./strony/IPhoneModelPage";
import WymianaBaterii from "./strony/WymianaBaterii";
import WymianaWyswietlacza from "./strony/WymianaWyswietlacza";
import NaprawaPoZalaniu from "./strony/NaprawaPoZalaniu";
import WymianaGniazdaLadowania from "./strony/WymianaGniazdaLadowania";
import SerwisSamsung from "./strony/SerwisSamsung";
import SerwisXiaomi from "./strony/SerwisXiaomi";
import SerwisHuawei from "./strony/SerwisHuawei";
import SerwisMotorola from "./strony/SerwisMotorola";
import SerwisOppo from "./strony/SerwisOppo";
import SerwisRealme from "./strony/SerwisRealme";
import SerwisOnePlus from "./strony/SerwisOnePlus";
import MenuGlowne from "./komponenty/MenuGlowne";
import Stopka from "./komponenty/Stopka";
import SEO from "./komponenty/SEO";
import CookieBanner from "./komponenty/CookieBanner";
import FloatingSocials from "./komponenty/FloatingSocials";
import LocalBusinessSchema from "./komponenty/LocalBusinessSchema";

// Modele odpowiadają linkom wygenerowanym w SerwisApple.jsx.
const modele = [
  "iPhone SE 2020", "iPhone SE 2022", "iPhone 8", "iPhone 8 Plus",
  "iPhone X", "iPhone XR", "iPhone XS", "iPhone XS Max",
  "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max",
  "iPhone 12", "iPhone 12 Mini", "iPhone 12 Pro", "iPhone 12 Pro Max",
  "iPhone 13", "iPhone 13 Mini", "iPhone 13 Pro", "iPhone 13 Pro Max",
  "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max",
  "iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max",
  "iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max",
  "iPhone 17", "iPhone 17 Plus", "iPhone 17 Pro", "iPhone 17 Pro Max",
];
const modelePoSlug = Object.fromEntries(modele.map((model) => [model.toLowerCase().replace(/\s+/g, "-"), model]));
const naprawyIphone = [
  { nazwa: "Wymiana wyświetlacza", opis: "Diagnostyka uszkodzonego ekranu, dotyku i obrazu oraz dobór odpowiedniej części." },
  { nazwa: "Wymiana baterii", opis: "Sprawdzenie kondycji i układu zasilania, a następnie dobór rozwiązania do modelu." },
  { nazwa: "Wymiana złącza ładowania", opis: "Sprawdzenie gniazda, przewodu i układu ładowania przed wyceną naprawy." },
  { nazwa: "Naprawa po zalaniu", opis: "Ocena stanu urządzenia po kontakcie z cieczą i możliwości dalszej naprawy." },
  { nazwa: "Naprawa głośnika i mikrofonu", opis: "Diagnostyka problemów z dźwiękiem i rozmowami telefonicznymi." },
];

const marki = {
  samsung: "Samsung", xiaomi: "Xiaomi", huawei: "Huawei",
  motorola: "Motorola", oppo: "Oppo", realme: "Realme", oneplus: "OnePlus",
};
const uslugi = {
  "wymiana-wyswietlacza": { tytul: "Wymiana wyświetlacza", opis: "Diagnozujemy uszkodzenia ekranu, problemy z obrazem i dotykiem. Dobieramy zakres naprawy do modelu telefonu." },
  "wymiana-baterii": { tytul: "Wymiana baterii", opis: "Sprawdzamy czas pracy telefonu, ładowanie i stan baterii, a następnie przedstawiamy możliwości wymiany." },
  "naprawa-po-zalaniu": { tytul: "Naprawa telefonu po zalaniu", opis: "Weryfikujemy skutki kontaktu urządzenia z cieczą i oceniamy, jakie prace mogą być potrzebne." },
  "wymiana-gniazda-ladowania": { tytul: "Naprawa gniazda ładowania", opis: "Sprawdzamy gniazdo, zanieczyszczenia i pozostałe elementy układu ładowania przed ustaleniem zakresu naprawy." },
};

function StronaInformacyjna({ tytul, opis, canonical, powrot = "/serwis" }) {
  return (
    <div className="min-h-screen text-white">
      <SEO title={`${tytul} Kielce | SellFix`} description={`${opis} SellFix, ul. Warszawska 28 w Kielcach.`} canonical={`https://sellfix.pl${canonical}`} />
      <MenuGlowne />
      <main className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <nav aria-label="Ścieżka nawigacji" className="mb-8 text-sm text-zinc-400"><Link className="hover:text-lime-400" to="/">Strona główna</Link> / <Link className="hover:text-lime-400" to={powrot}>Serwis</Link></nav>
        <span className="inline-block rounded-full bg-lime-400 px-4 py-2 text-sm font-bold text-zinc-950">Serwis GSM Kielce</span>
        <h1 className="mt-5 text-4xl font-black md:text-6xl">{tytul} w Kielcach</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{opis}</p>
        <p className="mt-5 max-w-3xl leading-7 text-zinc-300">Przed naprawą weryfikujemy usterkę i przedstawiamy wycenę. Dostępność części i termin potwierdzamy indywidualnie.</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link to="/kontakt" className="rounded-2xl bg-lime-400 px-7 py-4 font-bold text-zinc-950 hover:bg-lime-300">Zapytaj o naprawę</Link>
          <a href="tel:+48792937406" className="rounded-2xl border border-lime-400/30 px-7 py-4 font-bold hover:text-lime-400">Zadzwoń: 792 937 406</a>
        </div>
      </main>
      <Stopka />
    </div>
  );
}

function ModelIphoneRoute() {
  const { modelSlug } = useParams();
  const model = modelePoSlug[modelSlug];
  if (!model) return <NieZnaleziono />;
  return <IPhoneModelPage model={model} slug={modelSlug} opis={`Serwis ${model} w Kielcach. Diagnozujemy usterki ekranu, baterii, ładowania i innych podzespołów. Koszt oraz dostępność części potwierdzamy po weryfikacji urządzenia.`} naprawy={naprawyIphone} />;
}

function MarkaAndroidRoute() {
  const { markaSlug } = useParams();
  const marka = marki[markaSlug];
  if (!marka) return <NieZnaleziono />;
  return <StronaInformacyjna tytul={`Serwis ${marka}`} opis={`Diagnozujemy i naprawiamy telefony ${marka}: ekrany, baterie, problemy z ładowaniem oraz inne usterki.`} canonical={`/serwis/android/${markaSlug}`} powrot="/serwis/android" />;
}

function UslugaRoute() {
  const { uslugaSlug } = useParams();
  const usluga = uslugi[uslugaSlug];
  if (!usluga) return <NieZnaleziono />;
  return <StronaInformacyjna tytul={usluga.tytul} opis={usluga.opis} canonical={`/serwis/${uslugaSlug}`} />;
}

function NieZnaleziono() {
  return (
    <div className="min-h-screen text-white">
      <SEO title="Nie znaleziono strony | SellFix" description="Nie znaleziono wskazanej podstrony SellFix." noindex />
      <MenuGlowne />
      <main className="mx-auto max-w-4xl px-5 py-24 text-center">
        <h1 className="text-5xl font-black">404 — Nie znaleziono strony</h1>
        <p className="mt-5 text-zinc-300">Sprawdź adres lub wróć do strony głównej.</p>
        <Link to="/" className="mt-8 inline-flex rounded-2xl bg-lime-400 px-8 py-4 font-bold text-zinc-950">Strona główna</Link>
      </main>
      <Stopka />
    </div>
  );
}

export default function App() {
  return (
    <>
      <LocalBusinessSchema />
      <Routes>
        <Route path="/" element={<StronaGlowna />} />
        <Route path="/o-nas" element={<ONas />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/oferta" element={<Oferta />} />
        <Route path="/serwis" element={<Serwis />} />
        <Route path="/serwis/apple" element={<SerwisApple />} />
        <Route path="/serwis/apple/:modelSlug" element={<ModelIphoneRoute />} />
        <Route path="/serwis/android" element={<SerwisAndroid />} />
        <Route path="/serwis/android/samsung" element={<SerwisSamsung />} />
        <Route path="/serwis/android/xiaomi" element={<SerwisXiaomi />} />
        <Route path="/serwis/android/huawei" element={<SerwisHuawei />} />
        <Route path="/serwis/android/motorola" element={<SerwisMotorola />} />
        <Route path="/serwis/android/oppo" element={<SerwisOppo />} />
        <Route path="/serwis/android/realme" element={<SerwisRealme />} />
        <Route path="/serwis/android/oneplus" element={<SerwisOnePlus />} />
        <Route path="/serwis/android/:markaSlug" element={<MarkaAndroidRoute />} />
        <Route path="/serwis/wymiana-baterii" element={<WymianaBaterii />} />
        <Route path="/serwis/wymiana-wyswietlacza" element={<WymianaWyswietlacza />} />
        <Route path="/serwis/naprawa-po-zalaniu" element={<NaprawaPoZalaniu />} />
        <Route path="/serwis/wymiana-gniazda-ladowania" element={<WymianaGniazdaLadowania />} />
        <Route path="/serwis/:uslugaSlug" element={<UslugaRoute />} />
        <Route path="/skup-telefonow" element={<SkupTelefonow />} />
        <Route path="/gwarancja" element={<Gwarancja />} />
        <Route path="/artykuly" element={<Artykuly />} />
        <Route path="/regulaminy" element={<Regulaminy />} />
        <Route path="/regulamin-serwisu" element={<RegulaminSerwisu />} />
        <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
        <Route path="/fixguard" element={<FixGuard />} />
        <Route path="*" element={<NieZnaleziono />} />
      </Routes>
      <FloatingSocials />
      <CookieBanner />
    </>
  );
}
