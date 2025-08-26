import React from "react";

const Hero = () => {
  return (
  <section className="relative flex flex-col items-center justify-center min-h-[70vh] w-full text-center px-6 select-none overflow-hidden" style={{ background: 'transparent' }}>
    <h1
      className="text-white/95 font-extrabold pt-27 tracking-tight leading-[0.98] text-4xl md:text-6xl lg:text-7xl xl:text-8xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] animate-[fadeInUp_700ms_ease_0ms_both]"
      style={{ textShadow: "0 1px 0 rgba(255,255,255,0.25), 0 22px 44px rgba(0,0,0,0.45)" }}
    >
      Imagine having
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-blue-300">
        Unlimited Memory
      </span>
    </h1>

    <div className="w-full max-w-5xl mt-5">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
    </div>

    <h2 className="mt-5 text-white/85 text-lg md:text-xl max-w-3xl leading-relaxed animate-[fadeInUp_700ms_ease_80ms_both]">
      Supermemory keeps all your memory at one place <br />so that your LLMs get full context
    </h2>

    {/* CTA buttons */}
  <div className="mt-7 flex flex-wrap justify-center items-center gap-5 md:gap-7 animate-[fadeInUp_700ms_ease_120ms_both]">
      {/* Primary: Buy now – rectangular, clean, larger text */}
  <a
    href="#pricing"
  className="relative isolate group inline-flex items-center justify-center h-12 min-w-[140px] px-8 md:px-10 rounded-xl text-base md:text-lg font-semibold tracking-tight text-white bg-[linear-gradient(180deg,#A5F3FC_0%,#3B82F6_55%,#4F46E5_100%)] border border-white/10 shadow-[0_16px_48px_rgba(59,130,246,0.42)] -translate-x-[2px] md:-translate-x-[4px] hover:shadow-[0_18px_56px_rgba(59,130,246,0.55)] hover:brightness-110 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.99] cursor-pointer transition-[transform,filter,box-shadow] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#02040a] overflow-hidden"
    aria-label="Buy now"
  >
        <span className="pointer-events-none absolute inset-0 rounded-xl opacity-60 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.55),rgba(255,255,255,0)_32%)]" />
        <span className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_-1px_0_rgba(0,0,0,0.25)]" />
        <span className="relative z-[1]">Buy now</span>
      </a>

      {/* Secondary: See demo – rectangular, clean, larger text */}
      <a
        href="https://youtu.be/mKXzPVIMFYE?si=B1rMY7ETy9l5pjK_"
        target="_blank"
        rel="noopener noreferrer"
        className="relative isolate group inline-flex items-center justify-center h-12 min-w-[140px] px-8 md:px-10 rounded-xl text-base md:text-lg font-semibold tracking-tight text-white bg-[linear-gradient(180deg,#2B2F39_0%,#171C26_65%,#0B0F16_100%)] border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.5)] hover:shadow-[0_18px_56px_rgba(0,0,0,0.65)] hover:brightness-110 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.99] cursor-pointer transition-[transform,filter,box-shadow] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#02040a] overflow-hidden"
        aria-label="See demo video"
      >
        <span className="pointer-events-none absolute inset-0 rounded-xl opacity-60 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.55),rgba(255,255,255,0)_32%)]" />
        <span className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_-1px_0_rgba(0,0,0,0.25)]" />
        <span className="relative z-[1]">See demo</span>
      </a>
    </div>

    {/* Autoplay demo video */}
    <div id="demo" className="mt-14 md:mt-16 w-full max-w-6xl">
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
        <iframe
          className="absolute inset-0 h-full w-full"
          src="https://www.youtube.com/embed/mKXzPVIMFYE?si=B1rMY7ETy9l5pjK_&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=mKXzPVIMFYE"
          title="Supermemory Demo"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
        {/* Subtle top gloss */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.1),rgba(255,255,255,0)_18%)]" />
      </div>
    </div>
  </section>
  );
};

export default Hero;
