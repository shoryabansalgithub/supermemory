import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FaqItem = ({ q, a, defaultOpen = false, index }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition-colors shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start gap-4 p-5 text-left"
        aria-expanded={open}
      >
        <div className="mt-1 h-5 w-5 shrink-0 rounded-full bg-white/15 grid place-items-center text-white/80">
          <motion.span
            initial={false}
            animate={{ rotate: open ? 135 : 45 }}
            transition={{ duration: 0.2 }}
            className="block h-[10px] w-[10px] border-t-[1.5px] border-r-[1.5px] border-white/70"
          />
        </div>
        <div>
          <h4 className="text-lg md:text-xl font-semibold text-white/95 leading-snug">{index}. {q}</h4>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-3 pr-2 text-white/80 leading-7">
                  {a.split("\n\n").map((para, i) => (
                    <p key={i} className="mb-3 last:mb-0">{para}</p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </div>
  );
};

const Faq = () => {
  const general = [
    {
      q: "What exactly is Supermemory?",
      a: "Supermemory is your personal AI-powered memory. It saves everything you read, write, or store—notes, links, chats, documents—and makes them instantly searchable, so you can find what you need without digging.",
    },
    {
      q: "How is this different from Google or Notion?",
      a: "Google searches the internet. Notion stores your notes. Supermemory is focused on recall—it’s like Google, but for your own life. No scrolling through folders or tabs; you just ask, and it finds the exact thing.",
    },
    {
      q: "Do I need to organize things myself?",
      a: "Nope. You can, if you want—but Supermemory automatically organizes and indexes your content. Even if you just dump stuff in, it will be there when you need it.",
    },
    {
      q: "Will Supermemory work on my phone or laptop?",
      a: "Yes. It’s cross-platform and syncs everywhere—so whatever you save on one device is available instantly on the other.",
    },
    {
      q: "Is my data private?",
      a: "Yes. Your data belongs only to you. Everything is encrypted, and if you’re advanced, you can even self-host for full control.",
    },
  ];

  const company = [
    {
      q: "How can Supermemory help me at work?",
      a: "Supermemory makes all your project files, meeting notes, and client conversations instantly searchable. No more wasting time trying to remember “where that doc was” or “what was said in that call.”",
    },
    {
      q: "Does it integrate with workplace tools?",
      a: "Yes. Supermemory plugs into apps like Slack, Notion, Google Drive, and email, so you can pull up the right info in context, without switching tabs.",
    },
    {
      q: "Can teams share a collective memory?",
      a: "Yes. You can keep your personal memory private, but also create shared “memory spaces” where teams store knowledge together—perfect for onboarding, project handoffs, or client work.",
    },
    {
      q: "Is it secure enough for company use?",
      a: "Absolutely. Supermemory uses enterprise-grade encryption, supports compliance standards, and offers admin controls for IT teams.",
    },
    {
      q: "Why should a company care about memory for AI?",
      a: "Because AI without memory is like an intern with amnesia. Supermemory gives AI assistants and workflows long-term context—so they actually learn from past interactions, reduce repetition, and save time across the whole org.",
    },
  ];

  return (
    <section id="faq" className="relative w-full px-6 md:px-10 py-20 md:py-28 text-white">
      {/* Ambient accent */}
      <div className="pointer-events-none absolute -z-10 inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-[85%] rounded-full blur-3xl opacity-20 bg-[radial-gradient(circle_at_center,rgba(120,140,255,0.35),transparent_60%)]" />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-white/70">
            <span className="h-2 w-2 rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            Frequently Asked Questions
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">Everything you need to know</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-5">
          {general.map((item, i) => (
            <FaqItem key={i} index={i + 1} q={item.q} a={item.a} defaultOpen={i === 0} />
          ))}
        </div>

        <div className="mt-14 md:mt-16 mb-6">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-white/70">
            <span className="h-2 w-2 rounded-full bg-yellow-300/80" />
            For Company Employees / Teams
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-5">
          {company.map((item, i) => (
            <FaqItem key={i} index={i + 6} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
