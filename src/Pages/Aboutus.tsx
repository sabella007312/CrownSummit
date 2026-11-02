"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Briefcase } from "lucide-react";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

// --- REUSABLE COMPONENTS ---

const SectionHeading = ({
  subtitle,
  title,
  centered = false,
}: {
  subtitle: string;
  title: string;
  centered?: boolean;
}) => (
  <div className={`mb-16 ${centered ? "text-center" : ""}`}>
    <div
      className={`flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`}
    >
      <div className="h-px w-12 bg-blue-600"></div>
      <span className="font-bold uppercase tracking-[0.2em] text-xs text-blue-600">
        {subtitle}
      </span>
    </div>
    <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 tracking-tight max-w-2xl mx-auto lg:mx-0">
      {title}
    </h2>
  </div>
);

// --- MAIN PAGE ---

export default function AboutUs() {
  return (
    <main className="w-full bg-white font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. HERO SECTION: Institutional Scale */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2074" // High-angle skyscraper architecture
            alt="Crown Summit Bank Headquarters"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/80 to-slate-950/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="h-px w-12 bg-blue-500"></div>
              <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-sm">
                Founded in 1990
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter">
              Legacy of <span className="text-blue-500 italic">Trust.</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-xl mx-auto leading-relaxed mb-12">
              Discover the principles, history, and vision that drive Crown
              Summit Bank to protect your wealth and empower your ambition in a
              global economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR JOURNEY (Timeline Section) */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="The Dividend-Bank Journey"
            title="Thirty Years of Stability and Evolution"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20 relative">
            {/* Horizontal Timeline Line */}
            <div className="absolute top-7 left-10 right-10 h-1 bg-blue-100 rounded-full hidden lg:block"></div>

            {[
              {
                year: "1990",
                title: "Establishment",
                text: "Founded as a specialized commercial lender focused on local market stability.",
              },
              {
                year: "2005",
                title: "Digital Pioneer",
                text: "Launched our first online banking portal, anticipating the digital shift.",
              },
              {
                year: "2015",
                title: "Global Expansion",
                text: "Opened strategic branches in 15 countries across three continents.",
              },
              {
                year: "2024+",
                title: "Next-Gen Fintech",
                text: "Integrating advanced AI and security standards for borderless wealth.",
              },
            ].map((milestone) => (
              <div
                key={milestone.year}
                className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <div className="w-16 h-16 rounded-full bg-blue-700 text-white font-black text-xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                  {milestone.year}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  {milestone.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">
                  {milestone.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-[150px] opacity-30"></div>
      </section>

      {/* 3. CORE VALUES GRID */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <SectionHeading
              subtitle="Our Core Pillars"
              title="Principles that Guide Every Transaction"
              centered
            />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <ShieldCheck />,
                title: "Absolute Integrity",
                desc: "Our reputation is built on transparency, honesty, and unwavering ethical standards.",
              },
              {
                icon: <TrendingUp />,
                title: "Client Growth",
                desc: "We are committed to empowering your financial ambition through bespoke advisory and solutions.",
              },
              {
                icon: <Briefcase />,
                title: "Global Perspective",
                desc: "A world-class outlook combined with deep local insights to unlock opportunities anywhere.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_100px_rgba(59,130,246,0.08)] transition-all"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-8 scale-100 hover:scale-105 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6 text-[15px]">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP SPLIT SECTION */}
      <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative mb-16 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1573166953836-06864dc70a21?q=80&w=2069" // Corporate meeting / executive focus
                className="rounded-[3rem] shadow-2xl relative z-10 border-12 border-slate-900"
                alt="Doksanlar Leadership Team"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
            </div>

            <div className="order-1 lg:order-2 mb-16 lg:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-blue-400"></div>
                <span className="font-bold uppercase tracking-[0.2em] text-xs text-blue-300">
                  Our Management
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight text-white tracking-tight mb-8">
                Guided by Global Visionaries
              </h2>

              <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                The Crown Summit Bank leadership team is comprised of seasoned
                financial experts, technologists, and risk managers who ensure
                our institution maintains its AAA+ stability while leading in
                fintech innovation.
              </p>

              <p className="text-slate-400 mb-12 text-[16px] leading-relaxed">
                Under their guidance, the bank remains focused on protecting
                client capital and identifying strategic investment
                opportunities in a globalized economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-32 px-6 relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* The Main Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group rounded-[4rem] p-12 md:p-24 overflow-hidden shadow-[0_50px_100px_-20px_rgba(30,58,138,0.25)]"
          >
            {/* 1. Sophisticated Background Layer */}
            <div className="absolute inset-0 bg-slate-950"></div>

            {/* 2. Animated Ambient Glows (The "Expensive" Look) */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -top-24 -right-24 w-125 h-125 bg-blue-600 rounded-full blur-[120px]"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -bottom-24 -left-24 w-100 h-100 bg-indigo-500 rounded-full blur-[100px]"
            />

            {/* 3. The Content Overlay */}
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-10"
              >
                <ShieldCheck className="text-blue-400 w-4 h-4" />
                <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">
                  Institutional Grade Security
                </span>
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8 max-w-4xl mx-auto">
                Secure your legacy with <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-200 to-white">
                  Crown Summit Bank.
                </span>
              </h2>

              <p className="text-blue-100/70 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
                Join an elite global network of individuals and corporations who
                prioritize absolute stability and borderless financial growth.
              </p>

              {/* Premium Button Interaction */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link
                  to="/signup"
                  className="group relative px-12 py-6 bg-white text-slate-950 font-black rounded-2xl transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)] active:scale-95 flex items-center gap-3 overflow-hidden"
                >
                  <span className="relative z-10">OPEN ACCOUNT ONLINE</span>
                  <ArrowRight
                    className="relative z-10 group-hover:translate-x-2 transition-transform duration-300"
                    size={20}
                  />

                  {/* Button Shine Effect */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent to-white/40 opacity-40 group-hover:animate-shine" />
                </Link>

                <Link
                  to="/services"
                  className="px-10 py-5 text-white font-bold rounded-2xl border border-white/20 hover:bg-white/5 transition-all flex items-center gap-2 group"
                >
                  <Zap size={18} className="text-blue-400" />
                  <span>VIEW CORPORATE PLANS</span>
                </Link>
              </div>

              {/* Regulatory Footer Tag */}
              <p className="mt-16 text-[10px] font-bold text-white/30 uppercase tracking-[0.4em]">
                Member FDIC • Equal Housing Lender • Global Asset Protection
              </p>
            </div>

            {/* 4. Glass Border effect */}
            <div className="absolute inset-0 rounded-[4rem] border border-white/10 pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Tailwind CSS Custom Keyframes (Add to your global CSS or Tailwind config) */}
      </section>
    </main>
  );
}
