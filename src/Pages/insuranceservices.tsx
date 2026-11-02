"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  ArrowRight,
  Briefcase,
  HeartPulse,
  Ship,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";

import GlobalTicker from "../Components/Locations";

const policies = [
  {
    title: "High-Value Asset Protection",
    desc: "Bespoke coverage for private collections, high-end real estate, and luxury equity. Engineered for the 1%.",
    icon: <ShieldCheck className="w-6 h-6" />,
    tag: "Global Coverage",
  },
  {
    title: "Corporate Liability Shield",
    desc: "Comprehensive D&O and professional indemnity structures to protect institutional leadership and operations.",
    icon: <Briefcase className="w-6 h-6" />,
    tag: "Institutional Grade",
  },
  {
    title: "Family Legacy Continuity",
    desc: "Sophisticated life and health structures designed to ensure seamless wealth transfer and medical sovereignty.",
    icon: <HeartPulse className="w-6 h-6" />,
    tag: "Multi-Generational",
  },
  {
    title: "Maritime & Aviation Security",
    desc: "Specialized risk management for private fleets and international transit logistics in all jurisdictions.",
    icon: <Ship className="w-6 h-6" />,
    tag: "Transit Security",
  },
];

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. THE ARCHITECTURAL HERO SECTION */}
      <section className="relative min-h-[85vh] w-full flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover grayscale-[0.3] contrast-[1.1]"
            alt="Doksanlar Institutional Infrastructure"
          />
          {/* THE SHIELD GRADIENT: Solid dark on left, fading to architectural view on right */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-blue-900/20" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-blue-600/10 border border-blue-500/20 backdrop-blur-md mb-8">
              <Lock className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-black text-blue-300 uppercase tracking-[0.4em]">
                Risk Mitigation Division
              </span>
            </div>

            <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.9] mb-10 tracking-tighter italic">
              Insuring <br />
              <span className="text-blue-500 not-italic font-light">
                Global Assets.
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-lg mb-12 leading-relaxed font-medium">
              From maritime logistics to corporate liability, we provide the
              underwriting precision required by the world's most significant
              institutions.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link
                to="/contact"
                className="group px-12 py-6 bg-blue-700 text-white font-black rounded-2xl hover:bg-white hover:text-blue-950 transition-all duration-500 shadow-2xl shadow-blue-900/40 flex items-center gap-3 text-xs uppercase tracking-widest"
              >
                Consult an Underwriter
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>

          {/* Floating Consultant/Verification Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-[3rem] overflow-hidden border-12 border-white/5 shadow-2xl aspect-square max-w-md ml-auto">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover grayscale-[0.2]"
                alt="Crown Summit Bank Expert Advisor"
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="text-blue-400" size={20} />
                  <span className="text-white font-black text-xs uppercase tracking-widest">
                    Verified Fiduciary
                  </span>
                </div>
                <p className="text-[10px] text-slate-300 font-medium leading-relaxed">
                  All Crown Summit Bank policies are backed by Tier-1
                  reinsurance capital and Basel III compliance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SPECIALIZED COVERAGE GRID */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl font-black text-slate-950 tracking-tighter uppercase italic">
            Institutional{" "}
            <span className="text-blue-600 not-italic">Underwriting Units</span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {policies.map((policy, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="flex flex-col md:flex-row gap-8 p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group"
            >
              <div className="w-16 h-16 shrink-0 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {policy.icon}
              </div>
              <div className="flex flex-col justify-between py-1">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-black text-slate-950 tracking-tight">
                      {policy.title}
                    </h3>
                    <span className="px-3 py-1 bg-slate-200 text-[9px] font-black text-slate-500 rounded-full uppercase tracking-widest">
                      {policy.tag}
                    </span>
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8">
                    {policy.desc}
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-widest group-hover:gap-4 transition-all"
                >
                  Underwrite Asset <ChevronRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. TRUST & CLAIMS ANALYTICS */}
      <section className="bg-slate-950 py-32 px-6 overflow-hidden relative">
        {/* Subtle background tech pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20 items-center relative z-10">
          <div className="lg:col-span-1">
            <ShieldAlert size={56} className="text-blue-500 mb-8" />
            <h2 className="text-5xl font-black text-white tracking-tighter mb-6 italic">
              The Crown Summit Bank <br /> Guarantee.
            </h2>
            <p className="text-slate-400 font-medium text-lg leading-relaxed">
              When crisis strikes, our Rapid Response claims desk activates
              within 60 minutes, providing immediate liquidity to stabilize
              global operations.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md">
              <p className="text-4xl font-black text-white mb-2">$4.2B+</p>
              <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em]">
                Capital Reserved
              </p>
            </div>
            <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md">
              <p className="text-4xl font-black text-white mb-2">99.8%</p>
              <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em]">
                Claims Fulfillment
              </p>
            </div>
            <div className="p-10 bg-blue-600 rounded-[2.5rem] shadow-xl shadow-blue-900/20">
              <p className="text-4xl font-black text-white mb-2">24/7</p>
              <p className="text-[10px] font-bold text-white/70 uppercase tracking-[0.3em]">
                Active Monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GLOBAL COVERAGE TICKER */}
      {/* location and places */}
      <div>
        <GlobalTicker />
      </div>
    </div>
  );
}
