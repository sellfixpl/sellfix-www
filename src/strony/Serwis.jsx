import MenuGlowne from "../komponenty/MenuGlowne";
import Stopka from "../komponenty/Stopka";
import {
  Smartphone,
  BatteryCharging,
  Wrench,
} from "lucide-react";
import SEO from "../komponenty/SEO";

export default function Serwis() {
  return (
    <div className="min-h-screen text-white">
      <MenuGlowne />

      <main className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12">
          <div className="mb-4 inline-flex rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-zinc-950">
            Serwis
          </div>

          <h1 className="text-5xl font-black md:text-6xl">
            Profesjonalna naprawa telefonów i urządzeń GSM
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Naprawiamy smartfony, tablety, smartwatche,
            laptopy i inne urządzenia elektroniczne.
            Zawsze zaczynamy od diagnozy i jasnej wyceny.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-zinc-900 p-6">
            <Smartphone
              className="mb-4 text-lime-400"
              size={36}
            />
            <h3 className="text-2xl font-black">
              Serwis telefonów
            </h3>
            <p className="mt-3 text-zinc-300">
              iPhone, Samsung, Xiaomi, Huawei,
              Motorola i inne popularne marki.
            </p>
          </div>

          <div className="rounded-3xl bg-zinc-900 p-6">
            <BatteryCharging
              className="mb-4 text-lime-400"
              size={36}
            />
            <h3 className="text-2xl font-black">
              Wymiana baterii
            </h3>
            <p className="mt-3 text-zinc-300">
              Szybka wymiana baterii, test kondycji
              oraz kontrola poprawności ładowania.
            </p>
          </div>

          <div className="rounded-3xl bg-zinc-900 p-6">
            <Wrench
              className="mb-4 text-lime-400"
              size={36}
            />
            <h3 className="text-2xl font-black">
              Wyświetlacze i podzespoły
            </h3>
            <p className="mt-3 text-zinc-300">
              Ekrany, gniazda ładowania, aparaty,
              mikrofony, głośniki i inne naprawy.
            </p>
          </div>
        </div>
      </main>

      <Stopka />
    </div>
  );
}