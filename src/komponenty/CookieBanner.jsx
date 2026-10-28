import { useEffect, useState } from "react";

const STORAGE_KEY = "sellfix-cookie-consent-v2";
const LEGACY_KEY = "sellfix-cookie-consent";

const odmowa = { analytics: false, marketing: false };

function odczytajZgode() {
  try {
    const zapis = localStorage.getItem(STORAGE_KEY);
    if (zapis) {
      const dane = JSON.parse(zapis);
      if (typeof dane.analytics === "boolean" && typeof dane.marketing === "boolean") {
        return { analytics: dane.analytics, marketing: dane.marketing };
      }
    }
    const staryZapis = localStorage.getItem(LEGACY_KEY);
    if (staryZapis === "accepted") return { analytics: true, marketing: true };
    if (staryZapis === "rejected") return { ...odmowa };
  } catch {
    // Brak dostępu do pamięci przeglądarki nie powinien blokować strony.
  }
  return null;
}

function zastosujZgode(zgoda) {
  const gtag = window.gtag;
  if (typeof gtag !== "function") return;

  gtag("consent", "update", {
    analytics_storage: zgoda.analytics ? "granted" : "denied",
    ad_storage: zgoda.marketing ? "granted" : "denied",
    ad_user_data: zgoda.marketing ? "granted" : "denied",
    ad_personalization: zgoda.marketing ? "granted" : "denied",
  });
}

export default function CookieBanner() {
  const [otwarty, setOtwarty] = useState(false);
  const [szczegoly, setSzczegoly] = useState(false);
  const [analityka, setAnalityka] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const zapis = odczytajZgode();
    if (zapis) {
      setAnalityka(zapis.analytics);
      setMarketing(zapis.marketing);
      zastosujZgode(zapis);
    } else {
      setOtwarty(true);
    }
  }, []);

  const zapisz = (zgoda) => {
    zastosujZgode(zgoda);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(zgoda));
      localStorage.removeItem(LEGACY_KEY);
    } catch {
      // W trybie prywatnym zapis może być niedostępny.
    }
    setAnalityka(zgoda.analytics);
    setMarketing(zgoda.marketing);
    setOtwarty(false);
    setSzczegoly(false);
  };

  return (
    <>
      {!otwarty && (
        <button
          type="button"
          onClick={() => { setSzczegoly(true); setOtwarty(true); }}
          className="fixed bottom-4 left-4 z-[9999] rounded-xl border border-lime-400/30 bg-zinc-950 px-4 py-2 text-xs font-semibold text-white shadow-xl hover:border-lime-400"
          aria-label="Otwórz ustawienia plików cookies"
        >
          Ustawienia cookies
        </button>
      )}

      {otwarty && (
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby="sellfix-cookie-title"
          className="fixed bottom-4 left-1/2 z-[9999] max-h-[90vh] w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 overflow-y-auto rounded-3xl border border-lime-400/20 bg-zinc-950 p-5 text-white shadow-2xl shadow-black/60 sm:p-7"
        >
          <h2 id="sellfix-cookie-title" className="text-xl font-black">Pliki cookies i prywatność</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            Niezbędne technologie służą do działania strony. Za Twoją zgodą używamy też
            narzędzi analitycznych i reklamowych. Możesz odrzucić dodatkowe zgody lub
            wybrać je osobno. Decyzję zmienisz w dowolnym momencie przyciskiem
            „Ustawienia cookies”. Szczegóły znajdziesz w {" "}
            <a href="/polityka-prywatnosci" className="font-semibold text-lime-400 underline">polityce prywatności</a>.
          </p>

          {szczegoly && (
            <div className="mt-5 space-y-4 rounded-2xl border border-zinc-700 bg-zinc-900 p-4">
              <div className="flex items-start justify-between gap-4">
                <div><p className="font-bold">Niezbędne</p><p className="text-sm text-zinc-400">Ustawienia potrzebne do funkcjonowania witryny i zapamiętania wyboru.</p></div>
                <span className="shrink-0 text-sm text-lime-400">Zawsze aktywne</span>
              </div>
              <label className="flex cursor-pointer items-start justify-between gap-4 border-t border-zinc-700 pt-4">
                <span><span className="block font-bold">Analityczne</span><span className="block text-sm text-zinc-400">Pomagają mierzyć ruch i korzystanie ze strony.</span></span>
                <input type="checkbox" checked={analityka} onChange={(e) => setAnalityka(e.target.checked)} className="mt-1 h-5 w-5 accent-lime-400" />
              </label>
              <label className="flex cursor-pointer items-start justify-between gap-4 border-t border-zinc-700 pt-4">
                <span><span className="block font-bold">Marketingowe</span><span className="block text-sm text-zinc-400">Służą do pomiaru reklam i personalizacji reklam, jeśli wyrazisz zgodę.</span></span>
                <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="mt-1 h-5 w-5 accent-lime-400" />
              </label>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" onClick={() => zapisz(odmowa)} className="rounded-xl border border-zinc-600 px-5 py-3 text-sm font-bold hover:border-lime-400">Odrzuć dodatkowe</button>
            {!szczegoly ? (
              <button type="button" onClick={() => setSzczegoly(true)} className="rounded-xl border border-zinc-600 px-5 py-3 text-sm font-bold hover:border-lime-400">Dostosuj</button>
            ) : (
              <button type="button" onClick={() => zapisz({ analytics: analityka, marketing })} className="rounded-xl border border-lime-400 px-5 py-3 text-sm font-bold text-lime-400 hover:bg-zinc-900">Zapisz wybór</button>
            )}
            <button type="button" onClick={() => zapisz({ analytics: true, marketing: true })} className="rounded-xl bg-lime-400 px-5 py-3 text-sm font-black text-zinc-950 hover:bg-lime-300">Akceptuj wszystkie</button>
          </div>
        </section>
      )}
    </>
  );
}
