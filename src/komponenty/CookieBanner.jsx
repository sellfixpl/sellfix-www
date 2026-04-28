import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [pokaz, setPokaz] = useState(false);

  useEffect(() => {
    const zgoda = localStorage.getItem("sellfix-cookie-consent");

    if (!zgoda) {
      setPokaz(true);
    }
  }, []);

  const ustawZgode = (czyAkceptuje) => {
    const status = czyAkceptuje ? "granted" : "denied";

    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: status,
        ad_storage: status,
        ad_user_data: status,
        ad_personalization: status,
      });
    }

    localStorage.setItem(
      "sellfix-cookie-consent",
      czyAkceptuje ? "accepted" : "rejected"
    );

    setPokaz(false);
  };

  if (!pokaz) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-[9999] w-[95%] max-w-5xl -translate-x-1/2 rounded-3xl border border-lime-400/20 bg-zinc-950 p-6 shadow-2xl shadow-black/60">
      <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h3 className="text-xl font-black text-white">
            Pliki cookies i zgody
          </h3>

          <p className="mt-2 text-sm leading-7 text-zinc-300">
            Używamy plików cookies do prawidłowego działania strony,
            analityki oraz działań reklamowych. Możesz zaakceptować
            albo odrzucić zgody. Szczegóły znajdziesz w naszej{" "}
            <a
              href="/polityka-prywatnosci"
              className="font-semibold text-lime-400 hover:text-lime-300"
            >
              Polityce prywatności
            </a>.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => ustawZgode(false)}
            className="rounded-2xl border border-zinc-700 px-6 py-3 font-bold text-white hover:border-lime-400 hover:text-lime-400"
          >
            Odrzucam
          </button>

          <button
            onClick={() => ustawZgode(true)}
            className="rounded-2xl bg-lime-400 px-6 py-3 font-bold text-zinc-950 hover:bg-lime-300"
          >
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  );
}