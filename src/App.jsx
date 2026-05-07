import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import CookieBanner from "./komponenty/CookieBanner";
import LocalBusinessSchema from "./komponenty/LocalBusinessSchema";
import FloatingSocials from "./komponenty/FloatingSocials";

import StronaGlowna from "./strony/StronaGlowna";
import ONas from "./strony/ONas";
import Kontakt from "./strony/Kontakt";
import Oferta from "./strony/Oferta";
import Serwis from "./strony/Serwis";
import SerwisApple from "./strony/SerwisApple";
import SerwisAndroid from "./strony/SerwisAndroid";

import WymianaWyswietlacza from "./strony/uslugi/WymianaWyswietlacza";
import WymianaBaterii from "./strony/uslugi/WymianaBaterii";
import NaprawaPoZalaniu from "./strony/uslugi/NaprawaPoZalaniu";
import WymianaGniazdaLadowania from "./strony/uslugi/WymianaGniazdaLadowania";

import Samsung from "./strony/android/Samsung";
import Xiaomi from "./strony/android/Xiaomi";
import Huawei from "./strony/android/Huawei";
import Motorola from "./strony/android/Motorola";
import Oppo from "./strony/android/Oppo";
import Realme from "./strony/android/Realme";
import OnePlus from "./strony/android/OnePlus";

import SkupTelefonow from "./strony/SkupTelefonow";
import Gwarancja from "./strony/Gwarancja";
import Artykuly from "./strony/Artykuly";
import Regulaminy from "./strony/Regulaminy";
import RegulaminSerwisu from "./strony/RegulaminSerwisu";
import FixGuard from "./strony/FixGuard";
import PolitykaPrywatnosci from "./strony/PolitykaPrywatnosci";


import IPhoneSE2020 from "./strony/modele-iphone/IPhoneSE2020";
import IPhoneSE2022 from "./strony/modele-iphone/IPhoneSE2022";
import IPhone8 from "./strony/modele-iphone/IPhone8";
import IPhone8Plus from "./strony/modele-iphone/IPhone8Plus";
import IPhoneX from "./strony/modele-iphone/IPhoneX";
import IPhoneXR from "./strony/modele-iphone/IPhoneXR";
import IPhoneXS from "./strony/modele-iphone/IPhoneXS";
import IPhoneXSMax from "./strony/modele-iphone/IPhoneXSMax";
import IPhone11 from "./strony/modele-iphone/IPhone11";
import IPhone11Pro from "./strony/modele-iphone/IPhone11Pro";
import IPhone11ProMax from "./strony/modele-iphone/IPhone11ProMax";
import IPhone12 from "./strony/modele-iphone/IPhone12";
import IPhone12Mini from "./strony/modele-iphone/IPhone12Mini";
import IPhone12Pro from "./strony/modele-iphone/IPhone12Pro";
import IPhone12ProMax from "./strony/modele-iphone/IPhone12ProMax";
import IPhone13 from "./strony/modele-iphone/IPhone13";
import IPhone13Mini from "./strony/modele-iphone/IPhone13Mini";
import IPhone13Pro from "./strony/modele-iphone/IPhone13Pro";
import IPhone13ProMax from "./strony/modele-iphone/IPhone13ProMax";
import IPhone14 from "./strony/modele-iphone/IPhone14";
import IPhone14Plus from "./strony/modele-iphone/IPhone14Plus";
import IPhone14Pro from "./strony/modele-iphone/IPhone14Pro";
import IPhone14ProMax from "./strony/modele-iphone/IPhone14ProMax";
import IPhone15 from "./strony/modele-iphone/IPhone15";
import IPhone15Plus from "./strony/modele-iphone/IPhone15Plus";
import IPhone15Pro from "./strony/modele-iphone/IPhone15Pro";
import IPhone15ProMax from "./strony/modele-iphone/IPhone15ProMax";
import IPhone16 from "./strony/modele-iphone/IPhone16";
import IPhone16Plus from "./strony/modele-iphone/IPhone16Plus";
import IPhone16Pro from "./strony/modele-iphone/IPhone16Pro";
import IPhone16ProMax from "./strony/modele-iphone/IPhone16ProMax";
import IPhone17 from "./strony/modele-iphone/IPhone17";
import IPhone17Plus from "./strony/modele-iphone/IPhone17Plus";
import IPhone17Pro from "./strony/modele-iphone/IPhone17Pro";
import IPhone17ProMax from "./strony/modele-iphone/IPhone17ProMax";

function ScrollDoSekcji() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: "url('/tlo-sellfix.png')" }}
    >
      <div className="absolute inset-0 bg-zinc-950/82" />
      <div className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-lime-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-10 h-[520px] w-[520px] rounded-full bg-lime-400/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative z-10 min-h-screen">
        <ScrollDoSekcji />
        <LocalBusinessSchema />
        <FloatingSocials />

        <Routes>
          <Route path="/" element={<StronaGlowna />} />
        
          <Route path="/o-nas" element={<ONas />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/oferta" element={<Oferta />} />
          <Route path="/skup-telefonow" element={<SkupTelefonow />} />
          <Route path="/gwarancja" element={<Gwarancja />} />
          <Route path="/artykuly" element={<Artykuly />} />

          <Route path="/serwis" element={<Serwis />} />
          <Route path="/serwis/apple" element={<SerwisApple />} />
          <Route path="/serwis/android" element={<SerwisAndroid />} />

          <Route path="/serwis/wymiana-wyswietlacza" element={<WymianaWyswietlacza />} />
          <Route path="/serwis/wymiana-baterii" element={<WymianaBaterii />} />
          <Route path="/serwis/naprawa-po-zalaniu" element={<NaprawaPoZalaniu />} />
          <Route path="/serwis/wymiana-gniazda-ladowania" element={<WymianaGniazdaLadowania />} />

          <Route path="/serwis/android/samsung" element={<Samsung />} />
          <Route path="/serwis/android/xiaomi" element={<Xiaomi />} />
          <Route path="/serwis/android/huawei" element={<Huawei />} />
          <Route path="/serwis/android/motorola" element={<Motorola />} />
          <Route path="/serwis/android/oppo" element={<Oppo />} />
          <Route path="/serwis/android/realme" element={<Realme />} />
          <Route path="/serwis/android/oneplus" element={<OnePlus />} />

          <Route path="/serwis/apple/iphone-se-2020" element={<IPhoneSE2020 />} />
          <Route path="/serwis/apple/iphone-se-2022" element={<IPhoneSE2022 />} />
          <Route path="/serwis/apple/iphone-8" element={<IPhone8 />} />
          <Route path="/serwis/apple/iphone-8-plus" element={<IPhone8Plus />} />
          <Route path="/serwis/apple/iphone-x" element={<IPhoneX />} />
          <Route path="/serwis/apple/iphone-xr" element={<IPhoneXR />} />
          <Route path="/serwis/apple/iphone-xs" element={<IPhoneXS />} />
          <Route path="/serwis/apple/iphone-xs-max" element={<IPhoneXSMax />} />
          <Route path="/serwis/apple/iphone-11" element={<IPhone11 />} />
          <Route path="/serwis/apple/iphone-11-pro" element={<IPhone11Pro />} />
          <Route path="/serwis/apple/iphone-11-pro-max" element={<IPhone11ProMax />} />
          <Route path="/serwis/apple/iphone-12" element={<IPhone12 />} />
          <Route path="/serwis/apple/iphone-12-mini" element={<IPhone12Mini />} />
          <Route path="/serwis/apple/iphone-12-pro" element={<IPhone12Pro />} />
          <Route path="/serwis/apple/iphone-12-pro-max" element={<IPhone12ProMax />} />
          <Route path="/serwis/apple/iphone-13" element={<IPhone13 />} />
          <Route path="/serwis/apple/iphone-13-mini" element={<IPhone13Mini />} />
          <Route path="/serwis/apple/iphone-13-pro" element={<IPhone13Pro />} />
          <Route path="/serwis/apple/iphone-13-pro-max" element={<IPhone13ProMax />} />
          <Route path="/serwis/apple/iphone-14" element={<IPhone14 />} />
          <Route path="/serwis/apple/iphone-14-plus" element={<IPhone14Plus />} />
          <Route path="/serwis/apple/iphone-14-pro" element={<IPhone14Pro />} />
          <Route path="/serwis/apple/iphone-14-pro-max" element={<IPhone14ProMax />} />
          <Route path="/serwis/apple/iphone-15" element={<IPhone15 />} />
          <Route path="/serwis/apple/iphone-15-plus" element={<IPhone15Plus />} />
          <Route path="/serwis/apple/iphone-15-pro" element={<IPhone15Pro />} />
          <Route path="/serwis/apple/iphone-15-pro-max" element={<IPhone15ProMax />} />
          <Route path="/serwis/apple/iphone-16" element={<IPhone16 />} />
          <Route path="/serwis/apple/iphone-16-plus" element={<IPhone16Plus />} />
          <Route path="/serwis/apple/iphone-16-pro" element={<IPhone16Pro />} />
          <Route path="/serwis/apple/iphone-16-pro-max" element={<IPhone16ProMax />} />
          <Route path="/serwis/apple/iphone-17" element={<IPhone17 />} />
          <Route path="/serwis/apple/iphone-17-plus" element={<IPhone17Plus />} />
          <Route path="/serwis/apple/iphone-17-pro" element={<IPhone17Pro />} />
          <Route path="/serwis/apple/iphone-17-pro-max" element={<IPhone17ProMax />} />

          <Route path="/regulaminy" element={<Regulaminy />} />
          <Route path="/regulamin-serwisu" element={<RegulaminSerwisu />} />
          <Route path="/fixguard" element={<FixGuard />} />
          <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
        </Routes>

        <CookieBanner />
      </div>
    </div>
  );
}