import React, { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      id="nav-wrapper"
      className="fixed top-0 left-0 w-full z-50 pointer-events-none transition-all duration-300 px-2 lg:px-4 pt-2"
    >
      {/* Outer container with glassy background */}
      <div
        className="nav-container-styles pointer-events-auto transition-all duration-500 ease-in-out backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl shadow-lg mx-auto"
        id="nav-container"
        data-scrolled="false"
        style={{ transition: "width 0.5s ease-in-out", width: "100%" }}
      >
        {/* Inner bar */}
        <div
          id="nav-inner"
          className="relative flex p-4 gap-4 size-full justify-between items-center transition-all duration-500 text-white"
        >
          {/* Left: Home / Logo */}
          <a
            href="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-md px-1 -mx-1"
            aria-label="Supermemory Home"
          >
            <img src="https://supermemory.ai/blog/content/images/2025/06/Frame-2147223248.svg" alt="Supermemory logo" className="h-[1.1em] w-auto align-middle" style={{display: 'inline-block', verticalAlign: 'middle'}} />
           
          </a>

          {/* Center: Desktop links (hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            {[
              { href: "/memory", label: "Memory" },
              { href: "/developers", label: "Developers" },
              { href: "/pricing", label: "Pricing" },
              { href: "https://supermemory.ai/blog", label: "Blog", ext: true },
              { href: "https://supermemory.ai/docs", label: "Docs", ext: true },
              { href: "/mission", label: "Mission" },
            ].map(({ href, label, ext }) => (
              <a
                key={label}
                href={href}
                target={ext ? "_blank" : undefined}
                rel={ext ? "noreferrer" : undefined}
                className="relative px-2 py-1 rounded-md text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 hover:bg-white/5 after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-white/60 after:rounded-full after:transition-all after:duration-300 hover:after:w-[60%] text-[1.1em]"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right: CTAs + mobile toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center">
              <a
                href="/signin"
                className="px-3 py-1 rounded-md border border-white/10 text-white/90 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                Sign in
              </a>
              <a
                href="/get-started"
                className="ml-2 px-3 py-1 rounded-md text-black bg-white hover:bg-white/95 transition-colors shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_24px_0_rgba(255,255,255,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                Get started
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Toggle menu"
              className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 hover:bg-white/10"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                {mobileOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (collapsible) */}
      <div
        id="mobile-menu"
        className={`w-full pointer-events-auto mt-2 transition-all duration-300 ease-in-out transform origin-top lg:hidden ${
          mobileOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <div className="rounded-2xl backdrop-blur-md bg-black/30 border border-white/10 shadow-lg text-white p-3 mx-2">
          <nav className="flex flex-col gap-2">
            <a href="/memory" className="px-2 py-2 rounded-md text-white/85 hover:text-white hover:bg-white/10 transition-colors">Memory</a>
            <a href="/developers" className="px-2 py-2 rounded-md text-white/85 hover:text-white hover:bg-white/10 transition-colors">Developers</a>
            <a href="/pricing" className="px-2 py-2 rounded-md text-white/85 hover:text-white hover:bg-white/10 transition-colors">Pricing</a>
            <a href="https://supermemory.ai/blog" target="_blank" rel="noreferrer" className="px-2 py-2 rounded-md text-white/85 hover:text-white hover:bg-white/10 transition-colors">Blog</a>
            <a href="https://supermemory.ai/docs" target="_blank" rel="noreferrer" className="px-2 py-2 rounded-md text-white/85 hover:text-white hover:bg-white/10 transition-colors">Docs</a>
            <a href="/mission" className="px-2 py-2 rounded-md text-white/85 hover:text-white hover:bg-white/10 transition-colors">Mission</a>
            <div className="h-px bg-white/10 my-1" />
            <a href="/signin" className="px-2 py-2 rounded-md text-white/85 hover:text-white hover:bg-white/10 transition-colors">Sign in</a>
            <a href="/get-started" className="px-2 py-2 rounded-md bg-white text-black text-center hover:bg-white/95 transition-colors">Get started</a>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
