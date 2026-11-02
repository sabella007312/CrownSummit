// "use client";

// import { motion } from "framer-motion";
// import { Globe, AlertTriangle, Terminal } from "lucide-react";

// export default function TermsOfService() {
//   const termsList = [
//     {
//       title: "Account Establishment & Verification",
//       icon: <Terminal size={20} />,
//       desc: "Private institutional accounts require absolute validation of cross-border identities under regulatory Tier-1 capital compliance checks. Crown Summit Bank reserves the autonomous right to reject architecture provisioning to unverified or multi-jurisdictional anonymous entities.",
//     },
//     {
//       title: "Liquidity Protocols & Execution",
//       icon: <Globe size={20} />,
//       desc: "High-velocity financial pipelines and multi-currency exchange platforms operate under fixed algorithmic latency baselines. Users recognize that market volatility can structurally impact trade velocities across localized clearings.",
//     },
//     {
//       title: "Institutional Asset Boundaries",
//       icon: <AlertTriangle size={20} />,
//       desc: "All financial advisory, bespoke custody configurations, and structural asset systems are bounded strictly by international treaty laws. Any exploit of digital workflows triggers instant containment protocols and jurisdictional reporting.",
//     },
//   ];

//   return (
//     <main className="w-full bg-white font-sans selection:bg-blue-600 selection:text-white">
//       {/* Editorial Header */}
//       <section className="pt-40 pb-20 bg-slate-950 text-white relative overflow-hidden">
//         <div className="absolute inset-0 z-0 opacity-40">
//           <div className="absolute inset-0 bg-radial-at-b from-blue-900/40 via-slate-950 to-slate-950" />
//         </div>

//         <div className="max-w-4xl mx-auto px-6 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex items-center gap-4 mb-6"
//           >
//             <span className="h-0.5 w-8 bg-blue-400 rounded-full"></span>
//             <span className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-400">
//               Governance Standard
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl md:text-7xl font-black tracking-tight leading-[1.05] mb-8"
//           >
//             Terms of <br />
//             <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-200 to-white font-light italic">
//               Global Service.
//             </span>
//           </motion.h1>

//           <p className="text-slate-400 font-medium text-sm tracking-wider uppercase">
//             Effective Version: FY2026.1
//           </p>
//         </div>
//       </section>

//       {/* Dynamic Terms Grid */}
//       <section className="py-24 bg-white">
//         <div className="max-w-4xl mx-auto px-6">
//           <p className="text-xl text-slate-600 leading-relaxed mb-16 font-light">
//             By initializing our systems or interacting with Crown Summit Bank
//             nodes, you accept structural compliance protocols governing
//             institutional actions, asset management boundaries, and security
//             measures.
//           </p>

//           <div className="space-y-12">
//             {termsList.map((term, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="p-10 bg-slate-50 border border-slate-100 rounded-4xl hover:bg-slate-50/50 hover:shadow-xl hover:shadow-blue-900/5 transition-all flex flex-col md:flex-row gap-6 items-start"
//               >
//                 <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-200">
//                   {term.icon}
//                 </div>
//                 <div>
//                   <h4 className="text-2xl font-bold mb-3 text-slate-900 tracking-tight">
//                     {term.title}
//                   </h4>
//                   <p className="text-slate-500 leading-relaxed text-[15px]">
//                     {term.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Legal Footnote */}
//           <div className="mt-20 border-t border-slate-100 pt-10 text-center">
//             <p className="text-slate-400 text-xs tracking-wide uppercase">
//               Litigation and arbitrary dispute processes follow strict
//               guidelines outlined inside international maritime & sovereign
//               banking codes.
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Globe, AlertTriangle, Terminal } from "lucide-react";

export default function TermsOfService() {
  const termsList = [
    {
      title: "Account Establishment & Verification",
      icon: <Terminal size={20} />,
      desc: "Private institutional accounts require absolute validation of cross-border identities under regulatory Tier-1 capital compliance checks. Crown Summit Bank reserves the autonomous right to reject architecture provisioning to unverified or multi-jurisdictional anonymous entities.",
    },
    {
      title: "Liquidity Protocols & Execution",
      icon: <Globe size={20} />,
      desc: "High-velocity financial pipelines and multi-currency exchange platforms operate under fixed algorithmic latency baselines. Users recognize that market volatility can structurally impact trade velocities across localized clearings.",
    },
    {
      title: "Institutional Asset Boundaries",
      icon: <AlertTriangle size={20} />,
      desc: "All financial advisory, bespoke custody configurations, and structural asset systems are bounded strictly by international treaty laws. Any exploit of digital workflows triggers instant containment protocols and jurisdictional reporting.",
    },
  ];

  return (
    <main className="w-full bg-white font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. ARCHITECTURAL HERO LAYER: High-Density Institutional Imagery */}
      <section className="pt-40 pb-20 relative overflow-hidden bg-slate-950 text-white min-h-[50vh] flex items-center">
        {/* Unsplash Financial Architecture Engine with Multi-layered Masking */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071"
            className="w-full h-full object-cover object-center grayscale-[0.2] contrast-[1.15] scale-105"
            alt="Crown Summit Bank Global Clearing Node"
          />
          {/* Layered Vignette for Absolute Typography Readability */}
          <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950/85 to-slate-950" />
          <div className="absolute inset-0 bg-radial-at-tr from-blue-600/15 via-transparent to-transparent" />
        </div>

        {/* Hero Content Space */}
        <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-0.5 w-8 bg-blue-400 rounded-full"></span>
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-400">
              Governance Standard
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black tracking-tight leading-[1.05] mb-8"
          >
            Terms of <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-200 to-white font-light italic">
              Global Service.
            </span>
          </motion.h1>

          <p className="text-slate-400 font-medium text-sm tracking-wider uppercase">
            Effective Version: FY2026.1
          </p>
        </div>

        {/* Structural Polish Accents */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent pointer-events-none opacity-5" />
      </section>

      {/* 2. DYNAMIC TERMS GRID (Retained features and styles) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xl text-slate-600 leading-relaxed mb-16 font-light">
            By initializing our systems or interacting with Crown Summit Bank
            nodes, you accept structural compliance protocols governing
            institutional actions, asset management boundaries, and security
            measures.
          </p>

          <div className="space-y-12">
            {termsList.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 bg-slate-50 border border-slate-100 rounded-4xl hover:bg-slate-50/50 hover:shadow-xl hover:shadow-blue-900/5 transition-all flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-200">
                  {term.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3 text-slate-900 tracking-tight">
                    {term.title}
                  </h4>
                  <p className="text-slate-500 leading-relaxed text-[15px]">
                    {term.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legal Footnote */}
          <div className="mt-20 border-t border-slate-100 pt-10 text-center">
            <p className="text-slate-400 text-xs tracking-wide uppercase">
              Litigation and arbitrary dispute processes follow strict
              guidelines outlined inside international maritime & sovereign
              banking codes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
