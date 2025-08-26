import React from "react";

const PageTwo = () => {
  return (
    <section className="relative w-full min-h-[70vh] px-6 md:px-10 py-16 md:py-24 text-white" style={{ background: 'transparent' }}>

      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-sm md:text-base font-semibold tracking-wide uppercase text-white/70">
            <span className="h-2 w-2 rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.5)]" />
            What is Supermemory
          </span>
        </div>

        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          A brain that never forgets
        </h3>

  <div className="h-px w-full my-5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <p className="text-lg md:text-xl leading-8 text-white/85 max-w-4xl">
          Supermemory  is like a brain that never forgets. Everything you see, read, or save—notes, links, chats, documents—stays in one place, and you can find it instantly when you need it. For everyday people, it feels like Google for your own life. For teams and companies, it’s the missing memory layer for AI, so assistants and apps actually remember context instead of starting fresh every time. Simple for anyone to use, but powerful enough to be the backbone of how AI will work in the future.
        </p>
      </div>
    </section>
  );
};

export default PageTwo;