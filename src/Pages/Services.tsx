"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Zap,
  Globe,
  ChevronRight,
  CheckCircle2,
  PieChart,
  Lock,
  Crown,
  Landmark,
  ShieldCheck,
  Briefcase,
  type LucideIcon, // Required for typing icons
} from "lucide-react";

// --- Types ---
interface CardProductProps {
  name: string;
  type: string;
  features: string[];
  img: string;
  icon: LucideIcon;
  colorClass: string;
  delay: number;
}

// --- Sub-Component: CardProduct ---
const CardProduct = ({
  name,
  type,
  features,
  img,
  icon: Icon,
  colorClass,
  delay,
}: CardProductProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay }}
    whileHover={{ y: -10 }}
    className="group relative bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(30,58,138,0.12)] transition-all duration-500 flex flex-col h-full"
  >
    <div className="relative h-64 md:h-72 overflow-hidden">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div
        className={`absolute inset-0 bg-linear-to-t ${colorClass} opacity-60 transition-opacity group-hover:opacity-40`}
      />

      <div className="absolute bottom-6 left-8 flex items-center gap-3">
        <div className="p-2.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
          <Icon className="text-white w-5 h-5" />
        </div>
        <div>
          <span className="block text-[10px] font-black text-white/70 uppercase tracking-[0.2em]">
            Tier
          </span>
          <span className="text-white font-bold text-sm uppercase tracking-widest">
            {type}
          </span>
        </div>
      </div>
    </div>

    <div className="p-8 md:p-10 flex flex-col flex-1">
      <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight italic">
        {name}
      </h3>

      <ul className="space-y-4 mb-10 flex-1">
        {features.map((f: string, i: number) => (
          <li
            key={i}
            className="flex items-start gap-3 text-slate-500 text-sm font-medium leading-relaxed"
          >
            <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className="w-full py-4 bg-slate-950 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-slate-900/10 hover:shadow-blue-700/20"
      >
        Request Invitation
        <ChevronRight
          size={16}
          className="group-hover:translate-x-1 transition-transform"
        />
      </Link>
    </div>
  </motion.div>
);

export default function Services() {
  const cardData: CardProductProps[] = [
    {
      name: "Black Infinite",
      type: "Elite Lifestyle",
      icon: Crown,
      colorClass: "from-slate-950 via-slate-900 to-transparent",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071",
      features: [
        "Unrestricted Global Spending",
        "Dedicated Private Wealth Manager",
        "Unlimited Global Lounge Access",
        "5% Instant Cashback on Travel",
      ],
      delay: 0.1,
    },
    {
      name: "Platinum Business",
      type: "Institutional",
      icon: Landmark,
      colorClass: "from-blue-950 via-blue-900/40 to-transparent",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
      features: [
        "Multi-User Expense Management",
        "Real-time Treasury Syncing",
        "Zero Foreign Transaction Fees",
        "Institutional Grade Insurance",
      ],
      delay: 0.2,
    },
    {
      name: "Gold Signature",
      type: "Executive",
      icon: Briefcase,
      colorClass: "from-amber-900 via-amber-700/40 to-transparent",
      img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2070",
      features: [
        "Tier-1 Asset-Backed Rates",
        "Curated Retail Partnerships",
        "24/7 Concierge Assistance",
        "Contactless Global Payments",
      ],
      delay: 0.3,
    },
  ];

  return (
    <main className="w-full bg-white font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative py-32 md:py-48 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
            className="w-full h-full object-cover"
            alt="Nexus-Finance Interior"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-10 backdrop-blur-md">
              <ShieldCheck className="text-blue-400 w-4 h-4" />
              <span className="text-blue-300 text-[10px] font-black uppercase tracking-[0.4em]">
                Institutional Trust
              </span>
            </span>

            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
              Capital <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-200 italic font-light">
                Without Borders.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl font-medium">
              Crown Summit Bank provides the infrastructure for your global
              lifestyle. Our card suites are engineered for resilience, speed,
              and absolute security.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                to="/corporate"
                className="px-10 py-5 bg-blue-700 text-white font-black rounded-2xl hover:bg-white hover:text-blue-950 transition-all shadow-2xl shadow-blue-900/30"
              >
                Explore The Suite
              </Link>
              <Link
                to="/contact"
                className="px-10 py-5 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all flex items-center gap-2"
              >
                Talk to Private Banker <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CARD PRODUCTS GRID */}
      <section className="py-24 md:py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-blue-700 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                Financial Instruments
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Designed for the <br />
                <span className="text-slate-400 italic font-light tracking-normal underline decoration-blue-500/30 underline-offset-8">
                  Modern Institution.
                </span>
              </h3>
            </div>
            <p className="text-slate-500 max-w-xs text-sm leading-relaxed border-l-2 border-blue-600 pl-6 font-medium">
              Every card is a master-key to global logistics, private
              concierges, and instant liquidity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {cardData.map((card, idx) => (
              <CardProduct key={idx} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. BENEFITS STRIP */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
              The Advantage of Scale
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {[
              {
                icon: <Lock />,
                title: "Secure Vault",
                desc: "Military-grade EMV encryption and biometric verification.",
              },
              {
                icon: <Globe />,
                title: "Global Reach",
                desc: "Settlement capabilities in 140+ currencies instantly.",
              },
              {
                icon: <Zap />,
                title: "Instant Issuance",
                desc: "Activate your digital asset tier in under 60 seconds.",
              },
              {
                icon: <PieChart />,
                title: "Wealth Analytics",
                desc: "AI-powered insight into institutional spending patterns.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex flex-col items-center text-center"
              >
                {/* Fixed class rounded-4xl based on terminal suggestion */}
                <div className="w-20 h-20 bg-slate-50 text-blue-700 rounded-4xl flex items-center justify-center mb-8 group-hover:bg-blue-700 group-hover:text-white group-hover:rotate-12 transition-all duration-500 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
              {/* Fixed class min-w-150 based on terminal suggestion */}
              <table className="w-full text-left border-collapse min-w-150">
                <thead>
                  <tr className="bg-slate-950 text-white">
                    <th className="p-10 text-[10px] font-black uppercase tracking-[0.3em]">
                      Metric
                    </th>
                    <th className="p-10 text-center text-blue-400 font-black tracking-widest italic text-xl">
                      Infinite
                    </th>
                    <th className="p-10 text-center text-slate-300 font-black tracking-widest italic text-xl">
                      Signature
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 font-semibold">
                  {[
                    ["Annual Management", "$450 / yr", "$95 / yr"],
                    ["Variable APR", "14.24%", "17.99%"],
                    ["FX Exchange Markup", "0.00%", "2.50%"],
                    ["Liquidity Limit", "Uncapped*", "$10,000+"],
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="p-10 font-black text-slate-900 text-sm uppercase tracking-tight">
                        {row[0]}
                      </td>
                      <td className="p-10 text-center text-slate-900">
                        {row[1]}
                      </td>
                      <td className="p-10 text-center">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-10 text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            * Institutional audit required for uncapped liquidity.
          </p>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative group rounded-[4rem] p-12 md:p-28 text-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 z-0 scale-105 group-hover:scale-110 transition-transform duration-1000">
              <img
                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1974"
                alt="Institutional Headquarters"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-950/90 to-blue-900/50 opacity-95" />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              {/* Fixed class leading-none based on terminal suggestion */}
              <h2 className="text-4xl md:text-7xl font-black mb-10 text-white leading-none tracking-tighter max-w-4xl italic">
                Secure Your <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-300 font-light tracking-normal not-italic">
                  Financial Legacy.
                </span>
              </h2>
              <p className="text-blue-100/70 max-w-xl mx-auto mb-14 text-lg font-medium leading-relaxed">
                Join the global elite who rely on Crown Summit Bank for
                cross-border capital management and asset protection.
              </p>
              <Link
                to="/contact"
                className="px-14 py-6 bg-blue-700 text-white font-black rounded-2xl hover:bg-white hover:text-blue-950 transition-all shadow-xl active:scale-95 uppercase tracking-widest text-xs"
              >
                Request Private Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
