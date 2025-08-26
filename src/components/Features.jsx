import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, description, img, accent = "#2d6bff", className = "", mediaAspect = "aspect-[16/10]" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className={`group relative rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors shadow-[0_10px_40px_rgba(0,0,0,0.25)] overflow-hidden ${className}`}
  >
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
      <div className="absolute -inset-px rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: `0 0 0 2px ${accent}1A` }} />
    </div>

    {/* Media */}
    <div className={`relative ${mediaAspect} bg-white/[0.02]`}>
      <img src={img} alt={title} className="absolute inset-0 w-full h-full object-contain p-4 md:p-5" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
    </div>

    {/* Content */}
    <div className="p-5">
      <h4 className="text-white/95 text-lg md:text-xl font-semibold tracking-tight">{title}</h4>
      <p className="mt-2 text-white/75 text-sm md:text-base leading-6">{description}</p>
    </div>
  </motion.div>
);

const Features = () => {
  const items = [
    {
      title: "Automatic memory extraction",
      description: "Supermemory automatically extracts the most relevant info—no manual note-taking.",
      img: "/assets/user-1.DhW9kX2V.png",
    },
    {
      title: "Use your memories anywhere",
      description: "Turn raw data into insights with AI-driven analysis and reporting.",
      img: "/assets/user-2._jWBkq4B.png",
    },
    {
      title: "Find implicit connections",
      description: "Discover and display relationships across your memories in a beautiful graph.",
      img: "/assets/user-3.CvwytgxO.png",
    },
    {
      title: "Organize and talk to your memories",
      description: "Create projects that group memories together and chat with them in any AI app.",
      img: "/assets/user-4.BRR8D1Ex.png",
    },
    {
      title: "Connect to literally anything",
      description: "Connect to 100+ apps via MCP and import from Google Drive, OneDrive, and more.",
      img: "/assets/user-5.YplDun2k.png",
    },
  ];

  return (
  <section id="features" className="relative w-full px-6 md:px-10 py-16 md:py-24 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">What you can do with Supermemory</h2>
        
        </div>
        {/* Single grid; last two span 3 cols to sit parallel on lg */}
        <div className="grid gap-6 md:gap-7 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
          {items.map((it, i) => (
            <Card
              key={i}
              title={it.title}
              description={it.description}
              img={it.img}
              className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
              mediaAspect={i < 3 ? "aspect-[16/10]" : "aspect-[16/9]"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
