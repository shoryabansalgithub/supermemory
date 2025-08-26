import React from "react";
import { motion } from "framer-motion";

const Section = ({ reverse = false, badge, title, bullets, imageSrc, imageAlt }) => (
  <section className={`relative w-full px-6 md:px-10 py-16 md:py-24 text-white`}
  >
    <div className={`max-w-6xl mx-auto grid items-center gap-10 md:gap-14 lg:gap-20 ${reverse ? 'md:grid-cols-[1.1fr_1fr]' : 'md:grid-cols-[1fr_1.1fr]'} grid-cols-1`}>
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`${reverse ? 'md:order-2' : ''}`}
      >
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-white/70">
            <span className="h-2 w-2 rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            {badge}
          </span>
        </div>
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          {title}
        </h3>
        <ul className="mt-5 space-y-2 md:space-y-3 text-white/85 text-base md:text-lg">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/60" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`${reverse ? '' : 'md:order-2'}`}
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </div>
  </section>
);

const UseCases = () => {
  return (
    <div>
      <section className="relative w-full px-6 md:px-10 pt-8 md:pt-10 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Use Cases</h2>
        </div>
      </section>

      <Section
        badge="For Developers"
        title={<><span className="text-white">Fast and Scalable</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-blue-300">Memory API + Router</span></>}
        bullets={[
          "Add long-term memory features to your app",
          "Efficient memory creation, storage, and search",
          "2x faster and cheaper than existing products",
        ]}
        imageSrc="/assets/home-1.C6OoNMzC.png"
        imageAlt="Developers use case"
      />

      <Section
        reverse
        badge="For Users"
        title={<><span className="text-white">Second-Brain That</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-blue-300">Works Where You Do</span></>}
        bullets={[
          "Your memories across clients like ChatGPT, Claude, and Cursor",
          "Integration with 100+ AI clients using MCP",
          "Automatic memory creation and inference with graphs",
        ]}
        imageSrc="/assets/home-2.CRwJ34FE.png"
        imageAlt="Users use case"
      />
    </div>
  );
};

export default UseCases;
