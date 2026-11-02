"use client";

import { useState } from "react";
import { supabase } from "../hooks/supabase";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  Eye,
  EyeOff,
  ShieldCheck,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function UpdatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Password Validation Logic
  const requirements = [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "Contains a number", met: /[0-9]/.test(password) },
    {
      label: "Special character (@$!%*?)",
      met: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
  ];

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.updateUser({ password: password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
      toast.success("Password updated successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 3000);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row overflow-hidden">
      {/* LEFT SIDE: Security Visuals */}
      <div className="relative hidden lg:flex lg:w-1/2 bg-slate-950 items-center justify-center p-12">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2000"
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="Secure Vault"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 inline-flex p-4 rounded-3xl bg-blue-600/20 border border-blue-500/30 backdrop-blur-xl"
          >
            <ShieldCheck className="w-12 h-12 text-blue-400" />
          </motion.div>
          <h2 className="text-4xl font-black text-white mb-6 tracking-tighter italic">
            Secure Your Legacy.
          </h2>
          <p className="text-slate-400 leading-relaxed font-medium">
            Your new password must be unique and robust. Crown Summit Bank
            utilizes military-grade encryption to ensure your credentials remain
            private.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Update Form */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-16 bg-slate-50/30">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.div
                key="update-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <div className="mb-10">
                  <h1 className="text-4xl font-black text-slate-950 mb-3 tracking-tighter">
                    Set New Password
                  </h1>
                  <p className="text-slate-500 font-medium">
                    Create a strong password to protect your institutional
                    assets.
                  </p>
                </div>

                <form onSubmit={handleUpdate} className="space-y-6">
                  {/* Password Input */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                      New Password
                    </label>
                    <div className="relative group">
                      <input
                        required
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-5 pr-12 py-5 bg-white border border-slate-200 rounded-2xl text-slate-950 font-medium focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 outline-none transition-all shadow-sm"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-blue-600 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Password Strength Checklist */}
                  <div className="grid grid-cols-1 gap-2 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    {requirements.map((req, i) => (
                      <div key={i} className="flex items-center gap-2">
                        {req.met ? (
                          <CheckCircle2
                            size={14}
                            className="text-emerald-500"
                          />
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-200" />
                        )}
                        <span
                          className={`text-[11px] font-bold uppercase tracking-tight ${req.met ? "text-slate-950" : "text-slate-400"}`}
                        >
                          {req.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                      Confirm Password
                    </label>
                    <input
                      required
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-5 py-5 bg-white border border-slate-200 rounded-2xl text-slate-950 font-medium focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 outline-none transition-all shadow-sm"
                      placeholder="••••••••"
                    />
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs font-bold flex items-center gap-2">
                      <XCircle size={16} /> {error}
                    </div>
                  )}

                  <button
                    disabled={loading || requirements.some((r) => !r.met)}
                    className="w-full py-5 bg-slate-950 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-slate-950/10 disabled:opacity-30 flex items-center justify-center gap-3 text-xs uppercase tracking-widest active:scale-[0.98]"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      "Update Credentials"
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="mb-8 inline-flex p-6 rounded-full bg-emerald-50 text-emerald-600 shadow-inner">
                  <CheckCircle2 size={64} />
                </div>
                <h2 className="text-4xl font-black text-slate-950 mb-4 tracking-tighter">
                  Security Updated
                </h2>
                <p className="text-slate-500 mb-10 leading-relaxed font-medium">
                  Your password has been successfully reset. <br />
                  Redirecting you to the secure login portal...
                </p>
                <div className="w-12 h-1 bg-slate-100 mx-auto rounded-full overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 3 }}
                    className="w-full h-full bg-emerald-500"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
