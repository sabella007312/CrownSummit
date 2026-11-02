// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Sliders,
//   Cpu,
//   Activity,
//   CheckCircle,
//   RotateCcw,
//   ShieldCheck,
// } from "lucide-react";

// // Explicit TypeScript shape for our telemetry categories
// interface CookiePreferences {
//   essential: boolean; // Always true
//   analytics: boolean;
//   functional: boolean;
// }

// export default function CookieSettings() {
//   // 1. DYNAMIC SYSTEM STATES
//   const [preferences, setPreferences] = useState<CookiePreferences>({
//     essential: true,
//     analytics: false,
//     functional: false,
//   });

//   const [isSaved, setIsSaved] = useState<boolean>(false);
//   const [activeAlert, setActiveAlert] = useState<string | null>(null);

//   // 2. LIFECYCLE: Read initialized system nodes on component mount
//   useEffect(() => {
//     const savedTelemetry = localStorage.getItem("doksanlarb_telemetry_prefs");
//     if (savedTelemetry) {
//       try {
//         const parsed = JSON.parse(savedTelemetry);
//         setPreferences({
//           essential: true, // Safeguard immutable status
//           analytics: !!parsed.analytics,
//           functional: !!parsed.functional,
//         });
//       } catch (e) {
//         console.error("Failed to decode tracking architecture tokens.");
//       }
//     }
//   }, []);

//   // 3. TELEMETRY ACTION HANDLERS
//   const handleToggle = (key: keyof Omit<CookiePreferences, "essential">) => {
//     setIsSaved(false); // Reset saved badge when state mutates
//     setPreferences((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//     triggerNotice(`Toggled ${key.toUpperCase()} tracking state.`);
//   };

//   const savePreferences = (explicitPrefs: CookiePreferences = preferences) => {
//     localStorage.setItem(
//       "doksanlarb_telemetry_prefs",
//       JSON.stringify(explicitPrefs),
//     );
//     setPreferences(explicitPrefs);
//     setIsSaved(true);
//     triggerNotice("Institutional telemetry state securely saved.");
//   };

//   const handleAcceptAll = () => {
//     const targetState = { essential: true, analytics: true, functional: true };
//     savePreferences(targetState);
//   };

//   const handleResetToDefaults = () => {
//     const defaultState = {
//       essential: true,
//       analytics: false,
//       functional: false,
//     };
//     setIsSaved(false);
//     savePreferences(defaultState);
//   };

//   const triggerNotice = (msg: string) => {
//     setActiveAlert(msg);
//     setTimeout(() => {
//       setActiveAlert((current) => (current === msg ? null : current));
//     }, 4000);
//   };

//   return (
//     <main className="w-full bg-white font-sans selection:bg-blue-600 selection:text-white relative">
//       {/* Real-time Telemetry Notification System */}
//       <div className="fixed bottom-8 left-8 z-50 pointer-events-none max-w-sm">
//         <AnimatePresence>
//           {activeAlert && (
//             <motion.div
//               initial={{ opacity: 0, y: 20, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -10, scale: 0.95 }}
//               className="p-4 bg-slate-900 border border-white/10 shadow-2xl rounded-2xl flex items-center gap-3 pointer-events-auto"
//             >
//               <ShieldCheck className="text-blue-400 shrink-0" size={18} />
//               <p className="text-white text-xs font-medium tracking-wide">
//                 {activeAlert}
//               </p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Editorial Header */}
//       <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-100">
//         <div className="max-w-4xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex items-center gap-4 mb-6"
//           >
//             <span className="h-0.5 w-8 bg-blue-600 rounded-full"></span>
//             <span className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">
//               Telemetry Configurator
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.05] mb-8"
//           >
//             Cookie & Telemetry <br />
//             <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 italic font-light">
//               Preferences.
//             </span>
//           </motion.h1>

//           <p className="text-slate-600 leading-relaxed text-lg max-w-2xl font-light">
//             We use micro-telemetry tokens to verify localized access nodes,
//             secure multi-currency transitions, and evaluate portal performance
//             metrics. Adjust your baseline configuration tracking layers below.
//           </p>
//         </div>
//       </section>

//       {/* Configurator Panels */}
//       <section className="py-24">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="space-y-8">
//             {/* 1. Essential Tracker Card (Immutable) */}
//             <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
//               <div className="flex gap-5 items-start">
//                 <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
//                   <Cpu size={20} />
//                 </div>
//                 <div>
//                   <div className="flex items-center gap-3">
//                     <h4 className="text-xl font-bold text-slate-900 tracking-tight">
//                       Essential Infrastructure Logs
//                     </h4>
//                     <span className="px-2.5 py-0.5 text-[9px] font-black tracking-widest bg-blue-50 text-blue-600 rounded-md uppercase">
//                       Mandatory
//                     </span>
//                   </div>
//                   <p className="text-slate-500 text-sm mt-1 max-w-xl">
//                     Required to manage security handshakes, anti-fraud
//                     telemetry, and multi-factor session validation. Cannot be
//                     paused or isolated.
//                   </p>
//                 </div>
//               </div>
//               <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center justify-end px-1 opacity-40 cursor-not-allowed">
//                 <div className="w-4 h-4 bg-white rounded-full"></div>
//               </div>
//             </div>

//             {/* 2. Performance Analytics Card (Dynamic Switch) */}
//             <div
//               className={`p-8 border rounded-[2.5rem] transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer ${
//                 preferences.analytics
//                   ? "bg-white border-blue-200 shadow-md shadow-blue-900/5"
//                   : "bg-white border-slate-100 shadow-xs"
//               }`}
//               onClick={() => handleToggle("analytics")}
//             >
//               <div className="flex gap-5 items-start">
//                 <div
//                   className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
//                     preferences.analytics
//                       ? "bg-blue-50 border-blue-100 text-blue-600"
//                       : "bg-slate-50 border-slate-100 text-slate-900"
//                   }`}
//                 >
//                   <Activity size={20} />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-slate-900 tracking-tight">
//                     Analytical Telemetry
//                   </h4>
//                   <p className="text-slate-500 text-sm mt-1 max-w-xl">
//                     Allows us to evaluate performance vectors and user behavior
//                     to refine UI layouts and reduce computational page loads.
//                   </p>
//                 </div>
//               </div>
//               <button
//                 type="button"
//                 aria-label="Toggle Analytics Tracking"
//                 className={`w-12 h-6 rounded-full transition-colors duration-300 flex items-center px-1 shrink-0 pointer-events-none ${
//                   preferences.analytics
//                     ? "bg-blue-600 justify-end"
//                     : "bg-slate-200 justify-start"
//                 }`}
//               >
//                 <motion.div
//                   layout
//                   transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                   className="w-4 h-4 bg-white rounded-full shadow-sm"
//                 />
//               </button>
//             </div>

//             {/* 3. Personalization Card (Dynamic Switch) */}
//             <div
//               className={`p-8 border rounded-[2.5rem] transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer ${
//                 preferences.functional
//                   ? "bg-white border-blue-200 shadow-md shadow-blue-900/5"
//                   : "bg-white border-slate-100 shadow-xs"
//               }`}
//               onClick={() => handleToggle("functional")}
//             >
//               <div className="flex gap-5 items-start">
//                 <div
//                   className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
//                     preferences.functional
//                       ? "bg-blue-50 border-blue-100 text-blue-600"
//                       : "bg-slate-50 border-slate-100 text-slate-900"
//                   }`}
//                 >
//                   <Sliders size={20} />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-slate-900 tracking-tight">
//                     Functional Personalization
//                   </h4>
//                   <p className="text-slate-500 text-sm mt-1 max-w-xl">
//                     Remembers your operational workspace selections, localized
//                     tracking nodes, and specific currency view default settings.
//                   </p>
//                 </div>
//               </div>
//               <button
//                 type="button"
//                 aria-label="Toggle Functional Personalization"
//                 className={`w-12 h-6 rounded-full transition-colors duration-300 flex items-center px-1 shrink-0 pointer-events-none ${
//                   preferences.functional
//                     ? "bg-blue-600 justify-end"
//                     : "bg-slate-200 justify-start"
//                 }`}
//               >
//                 <motion.div
//                   layout
//                   transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                   className="w-4 h-4 bg-white rounded-full shadow-sm"
//                 />
//               </button>
//             </div>
//           </div>

//           {/* Configuration Action Hub */}
//           <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
//             {/* Status Tracking Metric */}
//             <div className="flex items-center gap-3">
//               {isSaved ? (
//                 <motion.div
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider"
//                 >
//                   <CheckCircle size={16} /> Encryption node synchronized
//                 </motion.div>
//               ) : (
//                 <span className="text-slate-400 text-xs font-medium tracking-wide">
//                   * Unsaved configuration modifications staging.
//                 </span>
//               )}
//             </div>

//             {/* Action Triggers */}
//             <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
//               <button
//                 onClick={handleResetToDefaults}
//                 className="flex items-center justify-center gap-2 px-6 py-4 border border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-50 transition-all active:scale-98"
//               >
//                 <RotateCcw size={14} /> Revert To Minimum
//               </button>

//               <button
//                 onClick={() => savePreferences()}
//                 className="px-8 py-4 bg-slate-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-800 transition-all active:scale-98"
//               >
//                 Save Selected
//               </button>

//               <button
//                 onClick={handleAcceptAll}
//                 className="px-8 py-4 bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-blue-700 transition-all active:scale-98 shadow-lg shadow-blue-200"
//               >
//                 Accept All Parameters
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sliders,
  Cpu,
  Activity,
  CheckCircle,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
}

export default function CookieSettings() {
  // 1. DYNAMIC SYSTEM STATES
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    functional: false,
  });

  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [activeAlert, setActiveAlert] = useState<string | null>(null);

  // 2. LIFECYCLE: Load stored node configuration tokens
  useEffect(() => {
    const savedTelemetry = localStorage.getItem("doksanlarb_telemetry_prefs");
    if (savedTelemetry) {
      try {
        const parsed = JSON.parse(savedTelemetry);
        setPreferences({
          essential: true,
          analytics: !!parsed.analytics,
          functional: !!parsed.functional,
        });
      } catch (e) {
        console.error("Failed to decode tracking architecture tokens.");
      }
    }
  }, []);

  // 3. TELEMETRY ACTION HANDLERS
  const handleToggle = (key: keyof Omit<CookiePreferences, "essential">) => {
    setIsSaved(false);
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    triggerNotice(`Staged change for ${key.toUpperCase()} layer.`);
  };

  const savePreferences = (explicitPrefs: CookiePreferences = preferences) => {
    localStorage.setItem(
      "doksanlarb_telemetry_prefs",
      JSON.stringify(explicitPrefs),
    );
    setPreferences(explicitPrefs);
    setIsSaved(true);
    triggerNotice("Institutional telemetry preferences securely synced.");
  };

  const handleAcceptAll = () => {
    const targetState = { essential: true, analytics: true, functional: true };
    savePreferences(targetState);
  };

  const handleResetToDefaults = () => {
    const defaultState = {
      essential: true,
      analytics: false,
      functional: false,
    };
    setIsSaved(false);
    savePreferences(defaultState);
  };

  const triggerNotice = (msg: string) => {
    setActiveAlert(msg);
    setTimeout(() => {
      setActiveAlert((current) => (current === msg ? null : current));
    }, 4000);
  };

  return (
    <main className="w-full bg-white font-sans selection:bg-blue-600 selection:text-white relative">
      {/* Real-time Telemetry Notification System */}
      <div className="fixed bottom-8 left-8 z-50 pointer-events-none max-w-sm">
        <AnimatePresence>
          {activeAlert && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="p-4 bg-slate-900 border border-white/10 shadow-2xl rounded-2xl flex items-center gap-3 pointer-events-auto"
            >
              <ShieldCheck className="text-blue-400 shrink-0" size={18} />
              <p className="text-white text-xs font-medium tracking-wide">
                {activeAlert}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 1. ARCHITECTURAL HERO LAYER: Photographic Enterprise Background */}
      <section className="pt-40 pb-24 relative overflow-hidden bg-slate-950 text-white min-h-[45vh] flex items-center">
        {/* Dynamic Image Overlay Masked to Match UI Mood */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
            className="w-full h-full object-cover object-center grayscale-[0.3] contrast-[1.1] scale-102"
            alt="Crown Summit Bank Telemetry Center"
          />
          {/* Deep Institutional Vignette Gradients */}
          <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950/85 to-white" />
          <div className="absolute inset-0 bg-radial-at-tr from-blue-600/20 via-transparent to-transparent" />
        </div>

        {/* Hero Typography Container */}
        <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-0.5 w-8 bg-blue-400 rounded-full"></span>
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-400">
              Telemetry Configurator
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black tracking-tight leading-[1.05] mb-8 text-white"
          >
            Cookie & Telemetry <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-200 to-white font-light not-italic">
              Preferences.
            </span>
          </motion.h1>

          <p className="text-slate-300 leading-relaxed text-lg max-w-2xl font-light">
            We use micro-telemetry tokens to verify localized access nodes,
            secure multi-currency transitions, and evaluate portal performance
            metrics. Adjust your baseline configuration tracking layers below.
          </p>
        </div>
      </section>

      {/* 2. CONFIGURATOR CONTROLS */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {/* Essential Tracker Card (Immutable) */}
            <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <Cpu size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                      Essential Infrastructure Logs
                    </h4>
                    <span className="px-2.5 py-0.5 text-[9px] font-black tracking-widest bg-blue-50 text-blue-600 rounded-md uppercase">
                      Mandatory
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm mt-1 max-w-xl">
                    Required to manage security handshakes, anti-fraud
                    telemetry, and multi-factor session validation. Cannot be
                    paused or isolated.
                  </p>
                </div>
              </div>
              <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center justify-end px-1 opacity-40 cursor-not-allowed">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Performance Analytics Card (Interactive) */}
            <div
              className={`p-8 border rounded-[2.5rem] transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer ${
                preferences.analytics
                  ? "bg-white border-blue-200 shadow-md shadow-blue-900/5"
                  : "bg-white border-slate-100 shadow-xs"
              }`}
              onClick={() => handleToggle("analytics")}
            >
              <div className="flex gap-5 items-start">
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
                    preferences.analytics
                      ? "bg-blue-50 border-blue-100 text-blue-600"
                      : "bg-slate-50 border-slate-100 text-slate-900"
                  }`}
                >
                  <Activity size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                    Analytical Telemetry
                  </h4>
                  <p className="text-slate-500 text-sm mt-1 max-w-xl">
                    Allows us to evaluate performance vectors and user behavior
                    to refine UI layouts and reduce computational page loads.
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Toggle Analytics Tracking"
                className={`w-12 h-6 rounded-full transition-colors duration-300 flex items-center px-1 shrink-0 pointer-events-none ${
                  preferences.analytics
                    ? "bg-blue-600 justify-end"
                    : "bg-slate-200 justify-start"
                }`}
              >
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="w-4 h-4 bg-white rounded-full shadow-sm"
                />
              </button>
            </div>

            {/* Personalization Card (Interactive) */}
            <div
              className={`p-8 border rounded-[2.5rem] transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer ${
                preferences.functional
                  ? "bg-white border-blue-200 shadow-md shadow-blue-900/5"
                  : "bg-white border-slate-100 shadow-xs"
              }`}
              onClick={() => handleToggle("functional")}
            >
              <div className="flex gap-5 items-start">
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
                    preferences.functional
                      ? "bg-blue-50 border-blue-100 text-blue-600"
                      : "bg-slate-50 border-slate-100 text-slate-900"
                  }`}
                >
                  <Sliders size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                    Functional Personalization
                  </h4>
                  <p className="text-slate-500 text-sm mt-1 max-w-xl">
                    Remembers your operational workspace selections, localized
                    tracking nodes, and specific currency view default settings.
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Toggle Functional Personalization"
                className={`w-12 h-6 rounded-full transition-colors duration-300 flex items-center px-1 shrink-0 pointer-events-none ${
                  preferences.functional
                    ? "bg-blue-600 justify-end"
                    : "bg-slate-200 justify-start"
                }`}
              >
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="w-4 h-4 bg-white rounded-full shadow-sm"
                />
              </button>
            </div>
          </div>

          {/* Configuration Action Hub */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Status Tracking Metric */}
            <div className="flex items-center gap-3">
              {isSaved ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider"
                >
                  <CheckCircle size={16} /> Encryption node synchronized
                </motion.div>
              ) : (
                <span className="text-slate-400 text-xs font-medium tracking-wide">
                  * Unsaved configuration modifications staging.
                </span>
              )}
            </div>

            {/* Action Triggers */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={handleResetToDefaults}
                className="flex items-center justify-center gap-2 px-6 py-4 border border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-50 transition-all active:scale-98"
              >
                <RotateCcw size={14} /> Revert To Minimum
              </button>

              <button
                onClick={() => savePreferences()}
                className="px-8 py-4 bg-slate-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-800 transition-all active:scale-98"
              >
                Save Selected
              </button>

              <button
                onClick={handleAcceptAll}
                className="px-8 py-4 bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-blue-700 transition-all active:scale-98 shadow-lg shadow-blue-200"
              >
                Accept All Parameters
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
