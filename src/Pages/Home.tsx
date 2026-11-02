"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Award,
  BarChart3,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

// Internal Components
import Hero from "../Components/Homehero";
import StatsStrip from "../Components/StatsStrip";
import ServicesGrid from "../Components/ServicesGrid";
import SecurityCommitment from "../Components/SecurityCommitment";
import GlobalTicker from "../Components/Locations";

/**
 * SectionHeading Component
 * Professionally styled with motion and architectural accents.
 */
const SectionHeading = ({
  subtitle,
  title,
  light = false,
  centered = false,
}: {
  subtitle: string;
  title: string;
  light?: boolean;
  centered?: boolean;
}) => (
  <div
    className={`mb-16 md:mb-24 ${centered ? "text-center mx-auto" : "text-left"}`}
  >
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex items-center gap-4 mb-6 ${centered ? "justify-center" : ""}`}
    >
      <span
        className={`h-0.5 w-8 rounded-full ${light ? "bg-blue-400" : "bg-blue-600"}`}
      ></span>
      <span
        className={`text-[11px] font-black uppercase tracking-[0.3em] ${light ? "text-blue-300" : "text-blue-600"}`}
      >
        {subtitle}
      </span>
    </motion.div>

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-2xl md:text-6xl font-black tracking-tight leading-[1.1] ${
        light ? "text-white" : "text-slate-900"
      } max-w-4xl ${centered ? "mx-auto" : ""}`}
    >
      {title}
    </motion.h2>

    {centered && (
      <div className="mt-8 flex justify-center">
        <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
      </div>
    )}
  </div>
);

// Main Home Component
export default function Home() {
  return (
    <main className="w-full bg-white font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Hero Section */}
      <Hero />
      {/* location and places */}
      <div>
        <GlobalTicker />
      </div>

      {/* 2. Trust Indicators */}
      <StatsStrip />

      {/* 3. Detailed Mission / Legacy Section */}
      <section className="py-32 bg-slate-50 overflow-hidden border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                subtitle="Our Legacy"
                title="Over 30 Years of Institutional Excellence"
              />
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Since 1990, Crown Summit Bank has served as a global cornerstone
                of financial stability. We combine traditional wealth protection
                with high-velocity digital infrastructure to empower the modern
                investor.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Tier-1 Capital Ratios",
                  "Global Asset Custody",
                  "Bespoke Wealth Advisory",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 font-bold text-slate-800"
                  >
                    <CheckCircle className="text-blue-600" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="max-w-fit flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-700 transition-all group"
              >
                LEARN OUR STORY
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
                className="rounded-[3rem] shadow-2xl relative z-10 border-12 border-white"
                alt="Crown Summit Bank Headquarters"
                loading="lazy"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Services Grid (Modular Section) */}
      <ServicesGrid />

      {/* 5. Security & Infrastructure (Dark Section) */}
      <SecurityCommitment />

      {/* 6. Corporate Social Responsibility / Impact */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeading
            subtitle="Global Impact"
            title="Sustainable Banking for a Greener Future"
            centered
          />
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            {[
              {
                title: "Eco-Invest",
                icon: <Zap />,
                text: "We've committed $5B to renewable energy projects and sustainable infrastructure by 2030.",
              },
              {
                title: "Community First",
                icon: <Award />,
                text: "Supporting local small businesses through specialized grants and low-interest credit lines.",
              },
              {
                title: "Transparent Governance",
                icon: <BarChart3 />,
                text: "Ranked #1 for ethical banking practices and institutional transparency in 2025.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all"
              >
                <div className="w-20 h-20 bg-blue-700 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
                  {React.cloneElement(
                    card.icon as React.ReactElement,
                    { size: 32 } as any,
                  )}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-slate-900">
                  {card.title}
                </h4>
                <p className="text-slate-500 leading-relaxed text-[15px]">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto relative group rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(2,6,23,0.4)]">
          {/* 1. ARCHITECTURAL LAYER: Institutional Scale Background */}
          <div className="absolute inset-0 z-0 scale-105 group-hover:scale-110 transition-transform duration-3000 ease-out">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
              className="w-full h-full object-cover grayscale-[0.3] contrast-[1.1]"
              alt="Crown Summit Bank Global HQ"
            />
            {/* Multi-layered Vignette for Text Readability */}
            <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-950/90 to-blue-900/40" />
            <div className="absolute inset-0 bg-radial-at-tr from-blue-500/10 via-transparent to-transparent" />
          </div>

          {/* 2. CONTENT LAYER: High-Density Typography */}
          <div className="relative z-10 p-16 md:p-32 flex flex-col items-center text-center">
            {/* Compliance & Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-12 shadow-2xl"
            >
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-black text-blue-200 uppercase tracking-[0.5em]">
                Global Asset Protection • Tier 1 Capital
              </span>
            </motion.div>

            {/* Headline: Mixing weight and style for "Editorial" look */}
            <h2 className="text-4xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9] max-w-5xl italic">
              Command Your <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-200 to-white not-italic font-light tracking-normal">
                Financial Destiny.
              </span>
            </h2>

            <p className="text-blue-100/60 mb-16 max-w-2xl mx-auto text-lg md:text-2xl font-medium leading-relaxed">
              Infrastructure for the global citizen. Secure multi-currency
              liquidity and institutional-grade wealth management across 140+
              jurisdictions.
            </p>

            {/* Action Hub */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full">
              <Link
                to="/signup"
                className="group/btn relative px-14 py-7 bg-white text-slate-950 font-black rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl active:scale-95 flex items-center gap-4 text-xs uppercase tracking-[0.2em] overflow-hidden"
              >
                <span className="relative z-10">Establish Private Account</span>
                <ArrowUpRight className="relative z-10 w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="px-14 py-7 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 backdrop-blur-md transition-all text-xs uppercase tracking-[0.2em] flex items-center gap-3 group/link"
              >
                Consult an International Advisor
                <ChevronRight
                  size={16}
                  className="text-blue-400 group-hover/link:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* 3. ATMOSPHERIC POLISH */}
          <div className="absolute top-0 right-0 w-150 h-150 bg-blue-500/10 rounded-full blur-[140px] -mr-80 -mt-80 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-100 h-100 bg-indigo-500/10 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />

          {/* The "Internal Glow" Border */}
          <div className="absolute inset-0 border border-white/10 rounded-[4rem] pointer-events-none" />
        </div>
      </section>
    </main>
  );
}
