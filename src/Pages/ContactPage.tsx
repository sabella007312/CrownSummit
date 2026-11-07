"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  Globe,
  ShieldCheck,
  // Landmark,
} from "lucide-react";
import { Link } from "react-router-dom";
import GlobalTicker from "../Components/Locations";
// Importing your supabase setup/hook context as requested
import { supabase } from "../hooks/supabase";
import { toast } from "sonner";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    inquiryType: "Private Wealth Management",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     // Invoke your Supabase Edge Function
  //     const { error } = await supabase.functions.invoke("smooth-endpoint", {
  //       body: formData,
  //     });

  //     if (error) throw error;

  //     toast.success(
  //       "Inquiry transmitted successfully!, Our team will be in touch shortly.",
  //     );
  //     // Reset Form
  //     setFormData({
  //       fullName: "",
  //       email: "",
  //       inquiryType: "Private Wealth Management",
  //       message: "",
  //     });
  //   } catch (error) {
  //     toast.error("Failed to send inquiry. Please try again later.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        inquiryType: formData.inquiryType,
        message: formData.message,
      };

      const { error } = await supabase.functions.invoke("smooth-endpoint", {
        body: payload, // <-- JSON
      });

      if (error) throw error;

      toast.success(
        "Inquiry transmitted successfully!, Our team will be in touch shortly.",
      );

      setFormData({
        fullName: "",
        email: "",
        inquiryType: "Private Wealth Management",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send inquiry. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* HERO SECTION: Human Banking Visual */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974"
            className="w-full h-full object-cover opacity-60"
            alt="Private Banker"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <span className="text-blue-500 font-black tracking-[0.3em] uppercase text-sm mb-4 block">
              Institutional Support
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
              PERSONALIZED <br />
              <span className="italic text-slate-300 underline decoration-blue-600 underline-offset-8">
                PARTNERSHIP.
              </span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
              Our dedicated asset managers are available globally to ensure your
              institutional needs are met with precision and absolute
              discretion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-20 lg:py-32 container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LEFT: Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic mb-4">
                Connect with us
              </h2>
              <div className="h-1.5 w-16 bg-blue-600 rounded-full mb-8"></div>
              <p className="text-slate-500 font-medium max-w-md">
                Whether you are looking for private equity advice or daily
                account management, our team is ready to assist.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* <div className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div> */}
              {/* <div>
                  <h4 className="font-black text-slate-900 text-sm uppercase">
                    24/7 Priority Line
                  </h4>
                  <a
                    href="tel:+1 800 123 4567"
                    className="text-slate-500 text-sm mt-1 hover:text-blue-600 transition-colors block"
                  >
                    +1 800 123 4567
                  </a> */}
              {/* <a
                    href="tel:+44 70580267955"
                    className="text-slate-500 text-sm mt-1 hover:text-blue-600 transition-colors block"
                  >
                    +44 70580267955
                  </a> */}
              {/* </div> */}
              {/* </div> */}

              <div className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm uppercase">
                    Secure Email
                  </h4>
                  <a
                    href="mailto:info@crownsummitbnk.com"
                    className="text-slate-500 text-sm mt-1 hover:text-blue-600 transition-colors block"
                  >
                    info@crownsummitbnk.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm uppercase">
                    123 Financial District New York, NY 10001
                  </h4>
                  <p className="text-slate-500 text-sm mt-1">USA</p>
                  {/* <p className="text-slate-500 text-sm mt-1">
                    England, United Kingdom.
                  </p> */}
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm uppercase">
                    Encrypted Email Chat
                  </h4>
                  <p className="text-slate-500 text-sm mt-1">
                    Available via Portal
                  </p>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="pt-10">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6">
                Our Global Presence
              </h3>

              {/* Location component component imported */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 font-bold text-slate-900">
                <GlobalTicker />
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-black text-slate-900 uppercase italic">
                Inquiry Form
              </h3>
              <p className="text-slate-500 text-sm font-medium mt-1">
                Typical response time: Under 15 minutes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm focus:border-blue-600 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm focus:border-blue-600 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                  Inquiry Type
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm focus:border-blue-600 outline-none transition-all"
                >
                  <option>Private Wealth Management</option>
                  <option>Corporate Liquidity</option>
                  <option>Digital Assets & Escrow</option>
                  <option>Institutional Lending</option>
                  <option>Login Issues</option>
                  <option>Privacy Concerns</option>
                  <option>Others</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm focus:border-blue-600 outline-none transition-all"
                  placeholder="How can our management team assist you?"
                ></textarea>
              </div>

              <button
                disabled={isSubmitting}
                className="w-full py-5 bg-slate-950 text-white font-black rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl group"
              >
                {isSubmitting ? "TRANSMITTING..." : "SEND INQUIRY"}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <img
            src="/favicon.jpg"
            alt="Company Logo"
            className="mx-auto text-blue-600 rounded mb-6 w-12 h-12 sm:w-15 sm:h-15 md:w-20 md:h-20 lg:w-25 lg:h-25"
          />
          {/* <Landmark className="mx-auto text-blue-600 w-12 h-12 mb-6" /> */}
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-4">
            Secure your assets today.
          </h2>
          <Link
            to="/Signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-950 font-black rounded-xl hover:bg-slate-950 hover:text-white transition-all uppercase tracking-widest text-sm"
          >
            Become a Member <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
