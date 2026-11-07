"use client";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Phone,
  Globe,
  Lock,
  UserPlus,
  Building2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "../i18n/TranslationProvider";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { t } = useTranslation();

  const navLinks = [
    { name: t("nav_home"), path: "/" },
    { name: t("nav_about"), path: "/about" },
    { name: t("nav_services"), path: "/services" },
    { name: t("nav_corporate"), path: "/corporate" },
    { name: t("nav_contact"), path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* TOP UTILITY BAR (Corporate / Security Strip) */}
      <div className="w-full bg-slate-950 text-slate-300 border-b border-slate-800/60 text-xs font-medium tracking-wide transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-10 px-4 sm:px-8">
          {/* Email & Contact Info */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@crownsummitbnk.com"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              title="Email us at info@doksanlarb.com"
            >
              <MdEmail className="text-blue-500 text-sm shrink-0" />
              <span className="hidden sm:inline font-mono text-[11px] tracking-wider text-slate-300">
                info@crownsummitbnk.com
              </span>
            </a>

            <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-400 border-l border-slate-800 pl-6">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>256-Bit Encrypted Banking Portal</span>
            </div>
          </div>

          {/* Language Switcher & Direct VIP Support */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-[11px] text-slate-400 pr-4 border-r border-slate-800">
              <Phone className="w-3 h-3 text-blue-400" />
              <span>24/7 VIP Concierge</span>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-md py-3"
            : "bg-white border-b border-slate-100 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* BRAND LOGO */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="relative">
              {/* <img
                src="favicon.jpg"
                alt="Crown Summit Bank Logo"
                className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              /> */}
              <img
                src="favicon.jpg"
                alt="Crown Summit Bank Logo"
                className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full mix-blend-multiply"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center font-black tracking-tight uppercase italic text-lg md:text-2xl leading-none">
                <span className="bg-linear-to-r from-slate-950 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                  Crown Summit
                </span>
                <span className="ml-1.5 bg-linear-to-rrom-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Bank
                </span>
              </div>
              <span className="text-[9px] font-semibold tracking-[0.25em] text-slate-400 uppercase mt-0.5">
                Private & Commercial
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION LINKS */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-xs font-bold uppercase tracking-[0.18em] py-2 transition-colors ${
                      isActive
                        ? "text-blue-700 font-extrabold"
                        : "text-slate-600 hover:text-slate-950"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* DESKTOP CTA BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/login"
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-blue-700 transition-colors flex items-center gap-2 rounded-lg hover:bg-slate-50"
            >
              <Lock size={14} className="text-slate-500" />
              Sign In
            </Link>

            <Link
              to="/signup"
              className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2 transform active:scale-95"
            >
              <UserPlus size={14} />
              Open Account
            </Link>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-900 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Slide-out Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 w-full max-w-sm h-full bg-white z-50 lg:hidden shadow-2xl flex flex-col justify-between"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-700" />
                  <span className="font-black tracking-tight text-slate-900 uppercase text-sm">
                    Crown Summit Bank
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="p-6 overflow-y-auto flex-1">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-4 block">
                  Menu Navigation
                </span>

                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between p-3.5 rounded-xl font-bold uppercase text-xs tracking-widest transition-all ${
                          isActive
                            ? "bg-blue-50 text-blue-700"
                            : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                        }`
                      }
                    >
                      <span>{link.name}</span>
                      <ChevronRight size={16} className="text-slate-300" />
                    </NavLink>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                    <Phone size={15} className="text-blue-600 shrink-0" />
                    <span>+1 (800) CROWN-VIP</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                    <Globe size={15} className="text-blue-600 shrink-0" />
                    <span>Global Banking Concierge</span>
                  </div>
                </div>
              </div>

              {/* Mobile Drawer Footer CTAs */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-3">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <Lock size={14} />
                  Account Login
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <UserPlus size={14} />
                  Open An Account
                </Link>

                <p className="text-[10px] text-center text-slate-400 font-semibold tracking-wider uppercase pt-2">
                  Member FDIC • Equal Housing Lender
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
