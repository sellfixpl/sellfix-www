import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaFacebookMessenger,
} from "react-icons/fa";

export default function FloatingSocials() {
  return (
    <div className="fixed right-5 top-1/2 z-[999] hidden -translate-y-1/2 flex-col gap-4 lg:flex">
      <a
        href="https://www.facebook.com/profile.php?id=61553593684081"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/70 text-white backdrop-blur-xl transition hover:scale-110 hover:border-lime-400 hover:bg-lime-400 hover:text-black"
      >
        <FaFacebookF size={20} />
      </a>

      <a
        href="https://www.instagram.com/sellfix.pl/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/70 text-white backdrop-blur-xl transition hover:scale-110 hover:border-lime-400 hover:bg-lime-400 hover:text-black"
      >
        <FaInstagram size={20} />
      </a>

      <a
        href="https://www.tiktok.com/@sellfix5"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/70 text-white backdrop-blur-xl transition hover:scale-110 hover:border-lime-400 hover:bg-lime-400 hover:text-black"
      >
        <FaTiktok size={20} />
      </a>

      <a
        href="https://m.me/SellFix"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat"
        className="group flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400 text-black shadow-[0_0_30px_rgba(163,230,53,0.35)] transition hover:scale-110 hover:bg-lime-300"
      >
        <FaFacebookMessenger size={22} />
      </a>
    </div>
  );
}