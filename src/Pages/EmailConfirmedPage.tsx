import React, { useEffect, useState } from "react";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

interface EmailConfirmedPageProps {
  onRedirect?: () => void;
  loginUrl?: string;
}

const EmailConfirmedPage: React.FC<EmailConfirmedPageProps> = ({
  onRedirect,
  loginUrl = "/login",
}) => {
  const [countdown, setCountdown] = useState(25);

  useEffect(() => {
    if (countdown <= 0) {
      if (onRedirect) {
        onRedirect();
      } else {
        window.location.href = loginUrl;
      }
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, onRedirect, loginUrl]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans antialiased">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-100 p-8 text-center relative overflow-hidden">
        {/* Top Decorative Banner Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-emerald-500" />

        {/* Success Icon */}
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-emerald-50 text-emerald-600 mb-6 shadow-inner">
          <CheckCircle2 size={40} strokeWidth={2.5} />
        </div>

        {/* Heading & Confirmation Message */}
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
          Email Confirmed!
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-8">
          Your email has been successfully verified. You can now securely log in
          to your account dashboard and manage your portal.
        </p>

        {/* Login Now Action Button */}
        <a
          href={loginUrl}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-slate-900/10 active:scale-[0.98] mb-6"
        >
          Login Now
          <ArrowRight size={18} />
        </a>

        {/* Countdown Status */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center gap-2.5 text-xs text-slate-500">
          <ShieldCheck size={16} className="text-blue-600" />
          <span>
            Redirecting to login in{" "}
            <strong className="font-mono text-slate-800 font-bold">
              {countdown}s
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmedPage;
