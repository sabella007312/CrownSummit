"use client";

import { useState } from "react";
import { supabase } from "../hooks/supabase"; // Import your singleton instance
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  ArrowLeft,
  KeyRound,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Loader2,
} from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle password reset request
  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`,
    });

    if (error) {
      setError(error.message);
    } else {
      setSubmitted(true);
      toast.success("Password reset email sent! Please check your inbox.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row overflow-hidden">
      {/* LEFT SIDE: Institutional Branding */}
      <div className="relative hidden lg:flex lg:w-1/2 bg-slate-950 items-center justify-center p-12">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Crown Summit Bank HQ"
          />
          <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 via-slate-950 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-md text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 inline-flex p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <KeyRound className="w-12 h-12 text-blue-400" />
          </motion.div>
          <h2 className="text-4xl font-black text-white mb-6 tracking-tighter">
            Access Recovery
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Protecting your financial legacy starts with secure access. Enter
            your institutional email to verify your identity.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Recovery Form */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-950 transition-colors mb-12 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-xs font-bold uppercase tracking-widest">
              Back to Login
            </span>
          </Link>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="mb-10">
                  <h1 className="text-4xl font-black text-slate-950 mb-3 tracking-tighter">
                    Forgot Password?
                  </h1>
                  <p className="text-slate-500 font-medium">
                    Please enter the email associated with your Crown Summit
                    Bank account.
                  </p>
                </div>

                <form onSubmit={handleReset} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
                      Institutional Email Address
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                        <Mail size={18} />
                      </div>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-950 font-medium focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white outline-none transition-all"
                        placeholder="e.g. name@Crown Summit Bank.com"
                      />
                    </div>
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-medium"
                    >
                      {error}
                    </motion.div>
                  )}

                  <button
                    disabled={loading}
                    className="w-full py-5 bg-slate-950 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-slate-950/10 disabled:opacity-50 flex items-center justify-center gap-3 text-xs uppercase tracking-widest"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      "Send Reset Link"
                    )}
                  </button>
                </form>

                <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
                  <ShieldCheck className="text-blue-600 shrink-0" size={20} />
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                    <span className="text-slate-950 font-bold">
                      Security Note:
                    </span>{" "}
                    If an account exists for this email, you will receive
                    instructions shortly. For immediate assistance, contact our
                    24/7 Global Security Desk.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="mb-8 inline-flex p-6 rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-black text-slate-950 mb-4 tracking-tighter">
                  Check Your Inbox
                </h2>
                <p className="text-slate-500 mb-10 leading-relaxed font-medium">
                  We have sent a secure password reset link to <br />
                  <span className="text-slate-950 font-bold">{email}</span>
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-black text-blue-600 uppercase tracking-widest hover:text-blue-800 transition-colors"
                >
                  Didn't receive an email? Try again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
