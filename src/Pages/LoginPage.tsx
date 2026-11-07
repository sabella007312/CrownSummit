"use client";

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../hooks/supabase";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  // Landmark,
  Lock,
  User,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // 1) AUTH: sign in
      const {
        data: { user, session },
        error: authError,
      } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;
      if (!user || !session)
        throw new Error("Login failed. No user session returned.");

      // 2) GATEKEEPER: check profiles status
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("status")
        .eq("id", user.id)
        .single();

      if (profileError) {
        await supabase.auth.signOut();
        throw new Error(
          "Profile synchronization failed. Please contact support.",
        );
      }

      // 3) ENFORCE STATUS
      if (profile?.status !== "active") {
        await supabase.auth.signOut();

        let statusMessage = "Access Denied.";
        if (profile.status === "pending") {
          statusMessage =
            "Your account is currently pending administrative review.";
        } else if (
          profile.status === "locked" ||
          profile.status === "suspended"
        ) {
          statusMessage = "This account has been locked for security purposes.";
        }

        throw new Error(statusMessage);
      }

      // 4) SUCCESS: trigger Edge Function
      try {
        const functionUrl =
          "https://lgbvxoyntonznxpfmtbq.supabase.co/functions/v1/send-login-email";

        const userEmail = user.email;
        if (!userEmail) {
          throw new Error(
            "User email missing; cannot send login notification.",
          );
        }

        // We MUST send the JWT token in the Authorization header
        // for the Edge Function to verify the user via supabase.auth.getUser()
        await fetch(functionUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({
            email: userEmail,
            name:
              user.user_metadata?.full_name || user.user_metadata?.name || null,
          }),
        });

        toast.success("Welcome back! Redirecting to your dashboard...");
        navigate("/Client");
      } catch (err) {
        // Don’t block login if email sending fails
        console.warn("send-login-email failed:", err);
        toast.success("Welcome back! Redirecting to your dashboard...");
        navigate("/Client");
      }
    } catch (err: any) {
      setError(err?.message || "Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className=" w-full flex flex-col lg:flex-row bg-white font-sans overflow-x-hidden">
      {/* LEFT VISUAL SIDE */}
      <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-950">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Crown Summit Bank HQ"
        />
        <div className="relative z-10 p-12 xl:p-20 flex flex-col justify-between h-full w-full">
          {/* <Link to="/" className="flex items-center gap-3 group pt-18">
            <Landmark className="text-blue-500 w-10 h-10 group-hover:rotate-12 transition-transform" />
            <span className="text-2xl xl:text-3xl font-black text-white tracking-tighter uppercase ">
              Crown Summit Bank{" "}
            </span>
          </Link> */}

          <div className="max-w-xl py-50">
            <h2 className="text-5xl xl:text-7xl font-black text-white tracking-tighter leading-[0.85] mb-6">
              Institutional <br />
              <span className="text-blue-500 italic">Access.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-md font-medium">
              Securely manage your global assets with our enterprise-grade
              encrypted private banking portal.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">
              Global Standard Security v4.2
            </p>
            <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* RIGHT FORM SIDE */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 bg-slate-50 min-h-screen">
        <div className="w-full max-w-md">
          {/* <div className="flex lg:hidden items-center justify-center gap-2 mb-8">
            <Landmark className="text-blue-600 w-8 h-8" />
            <span className="text-xl font-black text-slate-900 tracking-tighter uppercase">
              Crown Summit Bank
            </span>
          </div> */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 sm:p-10 md:p-12 rounded-4xl sm:rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] border border-slate-100"
          >
            <div className="text-center lg:text-left mb-8">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight italic">
                Sign In
              </h1>
              <p className="text-slate-500 text-sm sm:text-base font-medium">
                Enter your official credentials to access your private banking
                portal.
              </p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-center gap-3 text-xs sm:text-sm font-bold shadow-sm"
              >
                <AlertCircle size={18} className="shrink-0" /> {error}
              </motion.div>
            )}

            <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                  Email Address
                </label>
                <div className="relative group">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors"
                    size={18}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-3.5 sm:p-4 pl-12 rounded-xl sm:rounded-2xl outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all font-medium text-sm sm:text-base"
                    placeholder="client@Crown Summit Bank.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                    Security Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-[10px] font-black text-blue-600 hover:text-blue-800 uppercase tracking-widest transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative group">
                  <Lock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors"
                    size={18}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-3.5 sm:p-4 pl-12 pr-12 rounded-xl sm:rounded-2xl outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all font-medium text-sm sm:text-base"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 sm:py-5 bg-slate-950 text-white font-black text-sm sm:text-base rounded-xl sm:rounded-2xl hover:bg-blue-700 transition-all shadow-xl flex items-center justify-center gap-3 group disabled:opacity-70 active:scale-[0.98] mt-2"
              >
                {isLoading ? "AUTHENTICATING..." : "SECURE LOGIN"}
                {!isLoading && (
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                )}
              </button>
            </form>

            <div className="mt-8 flex flex-col items-center gap-5">
              <div className="flex items-center gap-2 text-slate-400">
                <ShieldCheck size={16} className="text-emerald-500" />
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]">
                  Encrypted Session
                </span>
              </div>

              <div className="h-px w-full bg-slate-100 relative">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-[9px] font-black text-slate-300 uppercase tracking-widest whitespace-nowrap">
                  New to Crown Summit Bank?
                </span>
              </div>

              <Link
                to="/Signup"
                className="text-xs sm:text-sm font-bold text-slate-600 hover:text-blue-700 transition-colors flex items-center gap-2 group text-center"
              >
                Create an Institutional Account
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>

          <p className="mt-8 text-center text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">
            Regulatory ID: CSB-882-991
          </p>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
