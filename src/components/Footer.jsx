import React from "react";

const LogoMark = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M4 10h6M8 6v6m6 2h6M16 12v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative w-full text-white">
      {/* Brand banner */}
      <div className="relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-20 rounded-[24px] border border-white/10 bg-gradient-to-br from-[#3b82f6]/25 via-[#2563eb]/20 to-black/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.35)]">
          {/* ambient */}
          <div className="pointer-events-none absolute -top-1/3 left-1/2 -translate-x-1/2 w-[140%] h-[80%] bg-[radial-gradient(60%_60%_at_50%_50%,rgba(59,130,246,0.45),rgba(59,130,246,0)_70%)] blur-3xl opacity-70" />
          <div className="relative z-10 flex items-center gap-5 md:gap-6">
            <div className="text-white/95">
              <LogoMark className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              supermemory<span className="align-super text-base md:text-xl font-black">™</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-6 md:mt-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/85">
          <div className="text-sm">© 2025 SUPERMEMORY</div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </nav>
          <a href="mailto:ceo@supermemory.ai" className="text-sm hover:text-white">EMAIL THE CEO</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
