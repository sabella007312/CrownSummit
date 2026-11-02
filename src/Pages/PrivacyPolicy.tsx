"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Lock } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "June 16, 2026";

  const sections = [
    {
      id: "collection",
      title: "1. Information We Collect",
      icon: <Eye className="text-blue-600" size={22} />,
      content:
        "We collect information that quantifies your institutional interaction with our services. This includes personal identifiers (name, corporate structure, fiscal residency), financial background benchmarks, cryptographic public keys, and real-time network telemetry required to maintain Tier-1 security compliance.",
    },
    {
      id: "utilization",
      title: "2. How We Utilize Data",
      icon: <Shield className="text-blue-600" size={22} />,
      content:
        "Your data orchestrates secure global asset management. We map infrastructure behaviors to optimize multi-currency liquidity pathways, mitigate cross-border asset threats, execute requested bespoke wealth protocols, and completely satisfy strict institutional regulatory frameworks across all 140+ operating jurisdictions.",
    },
    {
      id: "protection",
      title: "3. Cryptographic Asset & Data Protection",
      icon: <Lock className="text-blue-600" size={22} />,
      content:
        "Data persistence utilizes zero-knowledge architectures wherever feasible. Rest data undergoes mandatory AES-256-GCM encryption, while network transit pipelines are bound to customized TLS 1.3 cryptographic tunnels. Operational logs undergo immutable auditing to prevent compromised tracking loops.",
    },
  ];

  return (
    <main className="w-full bg-white font-sans selection:bg-blue-600 selection:text-white">
      {/* Editorial Header */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-0.5 w-8 bg-blue-600 rounded-full"></span>
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">
              Institutional Safeguards
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.05] mb-8"
          >
            Privacy & Asset <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 italic font-light">
              Data Policy.
            </span>
          </motion.h1>

          <p className="text-slate-500 font-medium text-sm tracking-wider uppercase">
            Last Reviewed/Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-slate max-w-none space-y-16">
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              At Crown Summit Bank, physical wealth protection and digital data
              integrity are treated as a unified operational layer. This policy
              defines how our global data architecture aggregates, shields, and
              audits structural information.
            </p>

            <hr className="border-slate-100" />

            {sections.map((section, idx) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight m-0">
                    {section.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-[16px] pl-16">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Institutional Closing Note */}
          <div className="mt-24 p-12 bg-slate-950 rounded-[2.5rem] relative overflow-hidden text-white shadow-xl">
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-3">
                Regulatory Clarifications
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                Questions surrounding cross-border asset telemetry, compliance
                frameworks, or explicit data erasure mechanisms within local
                nodes can be directed straight to our International Advisory
                Board.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
