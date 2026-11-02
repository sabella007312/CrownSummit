"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Globe, Landmark, Award } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600",
    title: "Institutional Wealth Management.",
    description:
      "Multi-generational wealth preservation and bespoke advisory services for the global elite. Est. 1990.",
    icon: <Landmark className="w-5 h-5" />,
    path: "/wealth-management",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1600",
    title: "Seamless Markets, Real-time Liquidity.",
    description:
      "Execute institutional-grade trades and manage multi-currency portfolios through our advanced global network.",
    icon: <Globe className="w-5 h-5" />,
    path: "/markets",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1600",
    title: "Fortress Security Protocols.",
    description:
      "Triple-layer encryption, real-time fraud prevention, and physical vault access to ensure your capital remains stable.",
    icon: <ShieldCheck className="w-5 h-5" />,
    path: "/security",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Syncs the auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000); // 8 seconds per slide for high-stakes reading
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* 1. PROFESSIONAL PARENT BACKGROUND (THE "HEADQUARTERS" LAYER) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* AnimatePresence for a seamless Cross-Fade background transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index} // FIX: Forces the background to swap simultaneously
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {/* The primary, high-key background image (Global HQ) */}
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
              className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
              alt="Doksanlar Global HQ"
            />
          </motion.div>
        </AnimatePresence>

        {/* 2. THE SECRET TO UX: LAYERED GRADIENT OVERLAY
            This creates a solid "Safe Zone" for text readability on the left,
            while the high-stakes photo stays vibrant on the right.
        */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/80 to-transparent md:from-slate-950 md:via-slate-950/90 md:to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />

        {/* Subtle Decorative Architectural Element (Faint Marble Texture) */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-24">
        {/* 3. TEXT CONTENT (Left Side, High Contrast) */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index} // Synced re-animation on slide change
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white shadow-sm border border-slate-100 mb-10">
                <div className="text-blue-700">{slides[index].icon}</div>
                <div className="h-4 w-px bg-slate-200" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
                  Est. 1990 • Global Tier 1 Bank
                </span>
              </div> */}

              {/* Title: Black on White (Best Contrast) */}
              <h1 className="text-6xl font-black md:text-8xl  text-white leading-[0.95] mb-8 tracking-tighter italic">
                {slides[index].title}
              </h1>

              {/* Description */}
              <p className="text-xl text-slate-300 mb-14 leading-relaxed font-medium max-w-xl">
                {slides[index].description}
              </p>

              <div className="flex flex-wrap gap-5">
                <Link
                  to="/signup"
                  className="px-10 py-5 bg-blue-700 text-white font-bold rounded-xl hover:bg-white hover:text-blue-950 transition-all duration-300 shadow-2xl shadow-blue-900/40 flex items-center gap-3 text-xs uppercase tracking-widest"
                >
                  Establish Account
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all text-xs uppercase tracking-widest"
                >
                  Request Consultation
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4. DYNAMIC IMAGE HOUSING (Right Side, Architectural Depth) */}
        <div className="relative h-112.5 md:h-162.5 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index} // FIX: Forces the image to swap simultaneously with the text
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 rounded-[4rem] overflow-hidden shadow-[0_60px_100px_-30px_rgba(0,0,0,0.25)] border-16 border-white z-10"
            >
              <img
                src={slides[index].image}
                alt="Institutional Banking"
                className="w-full h-full object-cover grayscale-[0.1] contrast-[1.1]"
              />
              {/* Internal Image Shadow for Depth */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Floating Trust Indicator (Institutional AAA Rating) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-8 -right-8 z-20 bg-white p-8 rounded-4xl shadow-2xl border border-slate-100 hidden lg:block"
          >
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                <Award size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Institution Rating
                </p>
                <p className="text-xl font-black text-slate-950">AAA+ Stable</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 5. CLEAN PROGRESS NAVIGATION */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${i === index ? "w-16 bg-blue-600" : "w-6 bg-white/20 hover:bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
