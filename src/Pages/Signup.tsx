// "use client";

// import React, { useState, useRef } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { supabase } from "../hooks/supabase";
// import { motion, AnimatePresence } from "framer-motion";
// import { toast } from "sonner";
// import {
//   Landmark,
//   Lock,
//   User,
//   Mail,
//   Camera,
//   ArrowRight,
//   AlertCircle,
//   Loader2,
//   Globe,
//   MapPin,
//   Phone,
//   CheckCircle2,
//   // Wallet,
//   ArrowLeft,
// } from "lucide-react";

// const SignupPage = () => {
//   const [formData, setFormData] = useState({
//     full_name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     country: "",
//     address: "",
//     mobile: "",
//     balance: "",
//   });

//   const [image, setImage] = useState<File | null>(null);
//   const [imagePreview, setImagePreview] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [isSuccess, setIsSuccess] = useState(false);

//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const navigate = useNavigate();

//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match.");
//       setIsLoading(false);
//       return;
//     }

//     // LOGIC: Generate 10-digit account number
//     const generatedAccountNumber = Math.floor(
//       1000000000 + Math.random() * 9000000000,
//     ).toString();

//     try {
//       const { data: authData, error: authError } = await supabase.auth.signUp({
//         email: formData.email,
//         password: formData.password,
//         options: {
//           data: {
//             full_name: formData.full_name,
//             country: formData.country,
//             address: formData.address,
//             mobile: formData.mobile,
//             balance: parseFloat(formData.balance) || 0,
//             account_number: generatedAccountNumber,
//             account_status: "pending", // For bank admin review
//           },
//         },
//       });

//       if (authError) throw authError;

//       // LOGIC: Trigger "Email to Bank" (Simulated via console/metadata)
//       // In production, use a Supabase Edge Function to send an actual email to bank@doksanlar.com
//       console.log(
//         `NOTIFICATION: New account request from ${formData.email}. Status: PENDING CONFIRMATION.`,
//       );

//       if (image && authData.user) {
//         const fileExt = image.name.split(".").pop();
//         const fileName = `${authData.user.id}-${Date.now()}.${fileExt}`;
//         await supabase.storage.from("avatars").upload(fileName, image);
//         await supabase.auth.updateUser({ data: { avatar_url: fileName } });
//       }

//       setIsSuccess(true);
//       toast.success(
//         "Account created successfully! Please check your email for verification. Redirecting to login...",
//       );
//       setTimeout(() => navigate("/Login"), 5000);
//     } catch (err: any) {
//       setError(err.message || "Registration failed.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen w-full flex flex-col lg:flex-row bg-white font-sans overflow-x-hidden">
//       <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-950">
//         <motion.img
//           initial={{ scale: 1.2, opacity: 0 }}
//           animate={{ scale: 1, opacity: 0.3 }}
//           transition={{ duration: 1.2 }}
//           src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1974"
//           className="absolute inset-0 w-full h-full object-cover"
//           alt="Doksanlar Interior"
//         />
//         <div className="relative z-10 p-16 flex flex-col justify-between h-full w-full">
//           <Link to="/" className="flex items-center gap-3 pt-15">
//             <Landmark className="text-blue-500 w-12 h-12" />
//             <span className="text-3xl font-black text-white tracking-tighter uppercase">
//               Doksanlarb<span className="text-blue-300 italic">-Finance</span>
//             </span>
//           </Link>

//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             <h2 className="text-7xl font-black text-white tracking-tighter leading-none mb-6">
//               JOIN THE <br />
//               <span className="text-blue-500 italic">ELITE.</span>
//             </h2>
//             <p className="text-slate-400 text-xl max-w-md leading-relaxed">
//               Experience the pinnacle of institutional private banking. Secure
//               your legacy with Doksanlarb-
//               <span className="text-blue-300 italic">Finance</span> global
//               assets.
//             </p>
//           </motion.div>
//           <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
//         </div>
//       </section>

//       <section className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-20 bg-slate-50 min-h-screen">
//         <div className="w-full max-w-4xl mb-6 flex justify-between items-center px-4">
//           <Link
//             to="/Login"
//             className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group"
//           >
//             <ArrowLeft
//               size={20}
//               className="group-hover:-translate-x-1 transition-transform"
//             />
//             <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
//               Back to Login
//             </span>
//           </Link>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="w-full max-w-4xl bg-white p-8 sm:p-12 lg:p-16 rounded-[3rem] shadow-2xl border border-slate-100"
//         >
//           {isSuccess ? (
//             <div className="text-center py-10">
//               <CheckCircle2 className="mx-auto text-emerald-500 w-24 h-24 mb-6" />
//               <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase italic">
//                 Awaiting Approval
//               </h1>
//               <p className="text-slate-600 text-lg font-medium">
//                 Registration received. Your high-security profile is currently{" "}
//                 <strong>Pending Confirmation</strong> by our board.
//               </p>
//               <Link
//                 to="/Login"
//                 className="inline-block mt-10 text-blue-600 font-black border-b-2 border-blue-600 hover:text-blue-700 text-lg"
//               >
//                 Return to Sign In
//               </Link>
//             </div>
//           ) : (
//             <>
//               <div className="text-center mb-10">
//                 <h1 className="text-3xl sm:text-4xl font-black text-slate-900 italic uppercase tracking-tighter">
//                   Account Setup
//                 </h1>
//                 <p className="text-slate-500 text-base font-medium mt-2">
//                   Create your high-security private banking profile.
//                 </p>
//               </div>

//               <AnimatePresence mode="wait">
//                 {error && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0 }}
//                     className="mb-8 p-5 bg-red-50 text-red-600 rounded-2xl flex items-center gap-3 text-sm font-bold border border-red-100"
//                   >
//                     <AlertCircle size={20} /> {error}
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               <form onSubmit={handleSignup} className="space-y-8">
//                 <div className="flex flex-col items-center mb-4">
//                   <div
//                     onClick={() => fileInputRef.current?.click()}
//                     className="w-24 h-24 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center cursor-pointer overflow-hidden relative group hover:border-blue-500 transition-colors shadow-inner"
//                   >
//                     {imagePreview ? (
//                       <img
//                         src={imagePreview}
//                         className="w-full h-full object-cover"
//                         alt="Preview"
//                       />
//                     ) : (
//                       <Camera className="text-slate-400" size={32} />
//                     )}
//                   </div>
//                   <input
//                     type="file"
//                     ref={fileInputRef}
//                     onChange={(e) => {
//                       const file = e.target.files?.[0];
//                       if (file) {
//                         setImage(file);
//                         setImagePreview(URL.createObjectURL(file));
//                       }
//                     }}
//                     className="hidden"
//                     accept="image/*"
//                   />
//                   <p className="text-[10px] font-bold text-slate-400 uppercase mt-2 tracking-widest">
//                     Upload Profile Photo
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
//                   <div className="space-y-1">
//                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
//                       Full Name
//                     </label>
//                     <div className="relative">
//                       <User
//                         className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
//                         size={18}
//                       />
//                       <input
//                         type="text"
//                         required
//                         value={formData.full_name}
//                         onChange={(e) =>
//                           setFormData({
//                             ...formData,
//                             full_name: e.target.value,
//                           })
//                         }
//                         className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all"
//                         placeholder="John Doe"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-1">
//                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
//                       Email Address
//                     </label>
//                     <div className="relative">
//                       <Mail
//                         className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
//                         size={18}
//                       />
//                       <input
//                         type="email"
//                         required
//                         value={formData.email}
//                         onChange={(e) =>
//                           setFormData({ ...formData, email: e.target.value })
//                         }
//                         className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all"
//                         placeholder="name@company.com"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-1">
//                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
//                       Mobile Contact
//                     </label>
//                     <div className="relative">
//                       <Phone
//                         className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
//                         size={18}
//                       />
//                       <input
//                         type="tel"
//                         required
//                         value={formData.mobile}
//                         onChange={(e) =>
//                           setFormData({ ...formData, mobile: e.target.value })
//                         }
//                         className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all"
//                         placeholder="+44..."
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-1">
//                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
//                       Country
//                     </label>
//                     <div className="relative">
//                       <Globe
//                         className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
//                         size={18}
//                       />
//                       <input
//                         type="text"
//                         required
//                         value={formData.country}
//                         onChange={(e) =>
//                           setFormData({ ...formData, country: e.target.value })
//                         }
//                         className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all"
//                         placeholder="UK"
//                       />
//                     </div>
//                   </div>

//                   <div className="md:col-span-2 space-y-1">
//                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
//                       Residential Address
//                     </label>
//                     <div className="relative">
//                       <MapPin
//                         className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
//                         size={18}
//                       />
//                       <input
//                         type="text"
//                         required
//                         value={formData.address}
//                         onChange={(e) =>
//                           setFormData({ ...formData, address: e.target.value })
//                         }
//                         className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all"
//                         placeholder="123 Luxury Lane, City"
//                       />
//                     </div>
//                   </div>

//                   {/* <div className="md:col-span-2 space-y-1">
//                     <label className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] ml-1">
//                       Opening Deposit (USD)
//                     </label>
//                     <div className="relative">
//                       <Wallet
//                         className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500"
//                         size={24}
//                       />
//                       <span className="absolute left-12 top-1/2 -translate-y-1/2 font-bold text-slate-400 text-xl">
//                         $
//                       </span>
//                       <input
//                         type="number"
//                         required
//                         min="100"
//                         value={formData.balance}
//                         onChange={(e) =>
//                           setFormData({
//                             ...formData,
//                             balance: e.target.value,
//                           })
//                         }
//                         className="w-full bg-blue-50/30 border-2 border-blue-100 p-5 pl-16 rounded-2xl text-2xl font-black focus:border-blue-600 outline-none transition-all"
//                         placeholder="0.00"
//                       />
//                     </div>
//                   </div> */}

//                   <div className="space-y-1">
//                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
//                       Password
//                     </label>
//                     <div className="relative">
//                       <Lock
//                         className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
//                         size={18}
//                       />
//                       <input
//                         type="password"
//                         required
//                         value={formData.password}
//                         onChange={(e) =>
//                           setFormData({ ...formData, password: e.target.value })
//                         }
//                         className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all"
//                         placeholder="••••••••"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-1">
//                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
//                       Confirm Password
//                     </label>
//                     <div className="relative">
//                       <Lock
//                         className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
//                         size={18}
//                       />
//                       <input
//                         type="password"
//                         required
//                         value={formData.confirmPassword}
//                         onChange={(e) =>
//                           setFormData({
//                             ...formData,
//                             confirmPassword: e.target.value,
//                           })
//                         }
//                         className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all"
//                         placeholder="••••••••"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <motion.button
//                   whileHover={{ scale: 1.01 }}
//                   whileTap={{ scale: 0.99 }}
//                   type="submit"
//                   disabled={isLoading}
//                   className="w-full py-6 bg-slate-950 text-white font-black rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-4 disabled:opacity-50 mt-6 shadow-2xl text-lg tracking-widest"
//                 >
//                   {isLoading ? (
//                     <Loader2 className="animate-spin" size={24} />
//                   ) : (
//                     "FINALIZE REGISTRATION"
//                   )}
//                   {!isLoading && <ArrowRight size={24} />}
//                 </motion.button>
//               </form>

//               <div className="mt-10 pt-8 border-t border-slate-100 text-center">
//                 <p className="text-base font-medium text-slate-500">
//                   Already a member?{" "}
//                   <Link
//                     to="/Login"
//                     className="text-blue-600 font-black hover:underline underline-offset-8"
//                   >
//                     Sign In
//                   </Link>
//                 </p>
//               </div>
//             </>
//           )}
//         </motion.div>
//         <p className="mt-12 text-[10px] font-bold text-slate-300 uppercase tracking-[0.5em]">
//           Dividend-Bank Institutional Portal v4.2
//         </p>
//       </section>
//     </main>
//   );
// };

// export default SignupPage;

"use client";

import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../hooks/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  Lock,
  User,
  Mail,
  Camera,
  ArrowRight,
  AlertCircle,
  Loader2,
  Globe,
  MapPin,
  Phone,
  CheckCircle2,
  // Wallet,
  ArrowLeft,
  Eye,
  EyeOff,
} from "lucide-react";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    address: "",
    mobile: "",
    balance: "",
  });

  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Toggle states for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    // LOGIC: Generate 10-digit account number
    const generatedAccountNumber = Math.floor(
      1000000000 + Math.random() * 9000000000,
    ).toString();

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.full_name,
            country: formData.country,
            address: formData.address,
            mobile: formData.mobile,
            balance: parseFloat(formData.balance) || 0,
            account_number: generatedAccountNumber,
            account_status: "pending", // For bank admin review
          },
        },
      });

      if (authError) throw authError;

      // LOGIC: Trigger "Email to Bank" (Simulated via console/metadata)
      // In production, use a Supabase Edge Function to send an actual email to bank@doksanlar.com
      console.log(
        `NOTIFICATION: New account request from ${formData.email}. Status: PENDING CONFIRMATION.`,
      );

      if (image && authData.user) {
        const fileExt = image.name.split(".").pop();
        const fileName = `${authData.user.id}-${Date.now()}.${fileExt}`;
        await supabase.storage.from("avatars").upload(fileName, image);
        await supabase.auth.updateUser({ data: { avatar_url: fileName } });
      }

      setIsSuccess(true);
      toast.success(
        "Account created successfully! Please check your email for verification. Redirecting to login...",
      );
      setTimeout(() => navigate("/Login"), 5000);
    } catch (err: any) {
      setError(err.message || "Registration failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col lg:flex-row bg-white font-sans overflow-x-hidden">
      <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-950">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.2 }}
          src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1974"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Doksanlar Interior"
        />
        <div className="relative z-10 p-16  justify-between h-full w-full">
          {/* <Link to="/" className="flex items-center gap-3 pt-15">
            <img
              src="/favicon.png"
              alt="Doksanlar Logo"
              className="w-12 h-12"
            />
            <Landmark className="text-blue-500 w-12 h-12" />
            <span className="text-3xl font-black text-white tracking-tighter uppercase">
              Doksanlarb<span className="text-blue-300 italic">-Finance</span>
            </span>
          </Link> */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="py-50"
          >
            <h2 className="text-7xl font-black text-white tracking-tighter leading-none mb-6">
              JOIN THE <br />
              <span className="text-blue-500 italic">ELITE.</span>
            </h2>
            <p className="text-slate-400 text-xl max-w-md leading-relaxed">
              Experience the pinnacle of institutional private banking. Secure
              your legacy with Doksanlarb-
              <span className="text-blue-300 italic">Finance</span> global
              assets.
            </p>
          </motion.div>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
        </div>
      </section>

      <section className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-20 bg-slate-50 min-h-screen">
        <div className="w-full max-w-4xl mb-6 flex justify-between items-center px-4">
          <Link
            to="/Login"
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Back to Login
            </span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl bg-white p-8 sm:p-12 lg:p-16 rounded-[3rem] shadow-2xl border border-slate-100"
        >
          {isSuccess ? (
            <div className="text-center py-10">
              <CheckCircle2 className="mx-auto text-emerald-500 w-24 h-24 mb-6" />
              <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase italic">
                Awaiting Approval
              </h1>
              <p className="text-slate-600 text-lg font-medium">
                Registration received. Your high-security profile is currently{" "}
                <strong>Pending Confirmation</strong> by our board.
              </p>
              <Link
                to="/Login"
                className="inline-block mt-10 text-blue-600 font-black border-b-2 border-blue-600 hover:text-blue-700 text-lg"
              >
                Return to Sign In
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl font-black text-slate-900 italic uppercase tracking-tighter">
                  Account Setup
                </h1>
                <p className="text-slate-500 text-base font-medium mt-2">
                  Create your high-security private banking profile.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0 }}
                    className="mb-8 p-5 bg-red-50 text-red-600 rounded-2xl flex items-center gap-3 text-sm font-bold border border-red-100"
                  >
                    <AlertCircle size={20} /> {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSignup} className="space-y-8">
                <div className="flex flex-col items-center mb-4">
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="w-24 h-24 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center cursor-pointer overflow-hidden relative group hover:border-blue-500 transition-colors shadow-inner"
                  >
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        className="w-full h-full object-cover"
                        alt="Preview"
                      />
                    ) : (
                      <Camera className="text-slate-400" size={32} />
                    )}
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setImage(file);
                        setImagePreview(URL.createObjectURL(file));
                      }
                    }}
                    className="hidden"
                    accept="image/*"
                  />
                  <p className="text-[10px] font-bold text-slate-400 uppercase mt-2 tracking-widest">
                    Upload Profile Photo
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                        size={18}
                      />
                      <input
                        type="text"
                        required
                        value={formData.full_name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            full_name: e.target.value,
                          })
                        }
                        className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                        size={18}
                      />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                      Mobile Contact
                    </label>
                    <div className="relative">
                      <Phone
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                        size={18}
                      />
                      <input
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={(e) =>
                          setFormData({ ...formData, mobile: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all"
                        placeholder="+44..."
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                      Country
                    </label>
                    <div className="relative">
                      <Globe
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                        size={18}
                      />
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all"
                        placeholder="UK"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2 space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                      Residential Address
                    </label>
                    <div className="relative">
                      <MapPin
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                        size={18}
                      />
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all"
                        placeholder="123 Luxury Lane, City"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                      Password
                    </label>
                    <div className="relative">
                      <Lock
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                        size={18}
                      />
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 pr-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                        size={18}
                      />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            confirmPassword: e.target.value,
                          })
                        }
                        className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 pr-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-6 bg-slate-950 text-white font-black rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-4 disabled:opacity-50 mt-6 shadow-2xl text-lg tracking-widest"
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin" size={24} />
                  ) : (
                    "FINALIZE REGISTRATION"
                  )}
                  {!isLoading && <ArrowRight size={24} />}
                </motion.button>
              </form>

              <div className="mt-10 pt-8 border-t border-slate-100 text-center">
                <p className="text-base font-medium text-slate-500">
                  Already a member?{" "}
                  <Link
                    to="/Login"
                    className="text-blue-600 font-black hover:underline underline-offset-8"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </>
          )}
        </motion.div>
        <p className="mt-12 text-[10px] font-bold text-slate-300 uppercase tracking-[0.5em]">
          Crown Summit Bank Institutional Portal v4.2
        </p>
      </section>
    </main>
  );
};

export default SignupPage;
