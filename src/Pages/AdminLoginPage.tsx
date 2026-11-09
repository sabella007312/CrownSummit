import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ShieldCheck, User, Lock, Eye, EyeOff } from "lucide-react";

const AdminLoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const ADMIN_DATA = {
    username: "admin_root",
    password: "Kingso2026@",
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (
        formData.username === ADMIN_DATA.username &&
        formData.password === ADMIN_DATA.password
      ) {
        sessionStorage.setItem(
          "admin-transfer-credentials",
          JSON.stringify(ADMIN_DATA),
        );
        toast.success("Access Granted", {
          description: "Welcome back, Admin. Redirecting...",
        });

        setTimeout(() => {
          navigate("/admin");
        }, 1500);
      } else {
        setIsLoading(false);
        toast.error("Authentication Failed", {
          description: "Invalid credentials. Access attempt logged.",
        });
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/10 mb-4">
            <ShieldCheck className="w-10 h-10 text-blue-500" />
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Admin Portal
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Crown Summit Bank Internal System
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username Input */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5 ml-1">
                Username
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type="text"
                  required
                  autoComplete="username"
                  className="block w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-200 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-600"
                  placeholder="Enter admin username"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5 ml-1">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  className="block w-full pl-11 pr-12 py-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-200 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-600"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Verifying..." : "Sign In"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-slate-500 uppercase tracking-widest">
          Authorized Personnel Only
        </p>
      </div>
    </div>
  );
};

export default AdminLoginPage;
