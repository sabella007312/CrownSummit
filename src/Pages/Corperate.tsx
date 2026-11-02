"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Globe2,
  ArrowRight,
  ShieldCheck,
  LineChart,
  Users2,
} from "lucide-react";
import { Link } from "react-router-dom";
import GlobalTicker from "../Components/Locations";

const CorporatePage = () => {
  return (
    <main className="w-full bg-white font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. PURE IMAGE HUMAN-CENTRIC HERO */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop"
            className="w-full h-full object-cover grayscale-[0.2] brightness-[0.7]"
            alt="Corporate Advisory Meeting"
          />
          {/* Elite Gradient Mask */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-blue-500"></div>
              <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-xs">
                Institutional Division
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
              Powering <br /> Global{" "}
              <span className="text-blue-500">Enterprise.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed font-medium">
              Customized liquidity solutions, risk management, and strategic
              advisory for the world's most ambitious corporations.
            </p>
            <div className="flex gap-6">
              <Link
                to="/Signup"
                className="px-10 py-5 bg-blue-700 text-white font-black rounded-xl hover:bg-white hover:text-slate-950 transition-all shadow-2xl"
              >
                Open Corporate Account
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE SERVICES GRID */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-end mb-20">
            <div>
              <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-4 block">
                Our Expertise
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
                Enterprise-Grade <br /> Financial Ecosystems
              </h2>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed">
              We provide the infrastructure required for multinational
              operations, from automated treasury sweeps to complex cross-border
              trade finance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 />,
                title: "Treasury Management",
                desc: "Optimize your working capital with AI-driven cash flow forecasting and automated liquidity sweeps.",
              },
              {
                icon: <Globe2 />,
                title: "Trade Finance",
                desc: "Mitigate international risk with letters of credit, guarantees, and specialized supply chain financing.",
              },
              {
                icon: <LineChart />,
                title: "Capital Markets",
                desc: "Access debt and equity markets through our premier investment banking and advisory wing.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-8">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NEW PATTERN: THE SPLIT-CARD CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-0 rounded-[4rem] overflow-hidden shadow-2xl">
          {/* Left Side: Visual/Value */}
          <div className="relative bg-slate-950 p-16 md:p-24 flex flex-col justify-center">
            <div className="relative z-10">
              <Users2 className="text-blue-500 mb-8" size={48} />
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 tracking-tighter">
                Dedicated <br /> Relationship <br /> Management.
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Every Crown Summit Bank Corporate client is paired with a senior
                advisor specializing in their specific industry vertical.
              </p>
              <div className="flex items-center gap-4 group cursor-pointer">
                <Link
                  to="/contact"
                  className="relative overflow-hidden px-10 py-5 bg-linear-to-r from-blue-700 via-blue-600 to-blue-800 rounded-2xl transition-all duration-500 shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.6)] hover:-translate-y-1 active:scale-95 border border-white/10"
                >
                  {/* SUBTLE REFLECTION SHIMMER */}
                  <div className="absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <span className="relative z-10 flex items-center gap-4 text-xs font-black text-white uppercase tracking-[0.2em]">
                    Meet the Advisory Team
                    {/* ICON HOUSING: Dedicated circle for the arrow */}
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white group-hover:text-blue-700 transition-all duration-500">
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform duration-500"
                      />
                    </div>
                  </span>
                </Link>
              </div>
            </div>
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]"></div>
          </div>

          {/* Right Side: Action/Direct Image */}
          <div className="relative min-h-125">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Office space"
            />
            <div className="absolute inset-0 bg-blue-700/80 backdrop-blur-sm flex flex-col items-center justify-center p-12 text-center">
              <ShieldCheck className="text-white mb-6" size={64} />
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">
                Ready to Scale?
              </h3>
              <Link
                to="/contact"
                className="px-12 py-5 bg-white text-blue-900 font-black rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-xl"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* locations imported here  */}

      <div>
        <GlobalTicker />
      </div>

      {/* 4. INSTITUTIONAL FOOTER STRIP */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-10">
          <div className="flex gap-16">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">
                Global Rating
              </p>
              <p className="text-2xl font-black text-slate-900 tracking-tight">
                AAA Standard
              </p>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">
                Assets Managed
              </p>
              <p className="text-2xl font-black text-slate-900 tracking-tight">
                $82.4B+
              </p>
            </div>
          </div>
          <p className="text-[10px] font-bold text-slate-400 max-w-md text-right uppercase tracking-widest leading-loose">
            Crown Summit Bank PLC is regulated by the Prudential Regulation
            Authority and the Financial Conduct Authority.
          </p>
        </div>
      </section>
    </main>
  );
};

export default CorporatePage;
