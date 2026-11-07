import { NavLink, Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaPhone,
  FaUniversity,
  FaBuilding,
  FaChartLine,
  FaShieldAlt,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { MapPin, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-slate-200 border-t border-slate-800/60 overflow-hidden">
      {/* Subtle background ambient glow for a modern fintech aesthetic */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        {/* Main Grid structure - Fully responsive stack to 4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 pb-12 border-b border-slate-800/60">
          {/* Brand Identity Segment */}
          <div className="flex flex-col space-y-6 sm:col-span-2 md:col-span-1">
            <span className="flex flex-row items-center gap-3">
              <img
                src="favicon.jpg"
                alt="Crown Summit Bank Logo"
                className="w-10 h-10 drop-shadow-xl rounded-full bg-linear-to-tr from-blue-500 to-indigo-500 p-0.5"
                loading="lazy"
              />
              <h3 className="text-xl font-black tracking-tight italic bg-linear-to-tr from-white via-slate-200 to-slate-400 bg-clip-text text-transparent drop-shadow-sm">
                Crown Summit{" "}
                <span className="text-blue-500 not-italic font-light block sm:inline">
                  Bank
                </span>
              </h3>
            </span>

            <p className="text-slate-400 text-sm leading-relaxed font-normal max-w-sm">
              Combining traditional values with cutting-edge financial
              technology. Governed by Swiss-grade security and global
              excellence.
            </p>

            {/* Social Media Grid */}
            <div className="flex items-center gap-3 pt-2">
              {[
                {
                  icon: <FaLinkedinIn />,
                  path: "/login",
                  label: "LinkedIn",
                  brand: "hover:bg-[#0077B5] hover:border-[#0077B5]",
                },
                {
                  icon: <FaTwitter />,
                  path: "/signup",
                  label: "Twitter",
                  brand: "hover:bg-[#1DA1F2] hover:border-[#1DA1F2]",
                },
                {
                  icon: <FaInstagram />,
                  path: "/login",
                  label: "Instagram",
                  brand:
                    "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent",
                },
                {
                  icon: <FaFacebookF />,
                  path: "/signup",
                  label: "Facebook",
                  brand: "hover:bg-[#1877F2] hover:border-[#1877F2]",
                },
              ].map((social, idx) => (
                <Link
                  key={idx}
                  to={social.path}
                  aria-label={social.label}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white shadow-sm transition-all duration-300 group ${social.brand}`}
                >
                  <span className="text-base group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-slate-100 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/", icon: <FaHome />, label: "Home" },
                { to: "/about", icon: <FaInfoCircle />, label: "About Us" },
                {
                  to: "/services",
                  icon: <FaServicestack />,
                  label: "Services",
                },
                { to: "/contact", icon: <FaPhone />, label: "Contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `group flex items-center gap-2.5 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-blue-400"
                          : "text-slate-400 hover:text-white"
                      }`
                    }
                  >
                    <span className="text-slate-500 group-hover:text-blue-400 transition-colors duration-200">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-slate-100 uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                {
                  to: "/login",
                  icon: <FaUniversity />,
                  label: "Personal Banking",
                },
                {
                  to: "/corporate",
                  icon: <FaBuilding />,
                  label: "Corporate Banking",
                },
                {
                  to: "/wealth-management",
                  icon: <FaChartLine />,
                  label: "Wealth Management",
                },
                {
                  to: "/insurance-services",
                  icon: <FaShieldAlt />,
                  label: "Insurance Services",
                },
              ].map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `group flex items-center gap-2.5 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-blue-400"
                          : "text-slate-400 hover:text-white"
                      }`
                    }
                  >
                    <span className="text-slate-500 group-hover:text-blue-400 transition-colors duration-200">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-slate-100 uppercase">
              Contact Us
            </h4>
            <address className="not-italic text-sm text-slate-400 space-y-4">
              {/* Interactive Address Map Link */}

              {/* <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 group hover:text-slate-200 transition-colors duration-200"
              >
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">
                  21 The Orchards,Grantham, Grantham{" "}
                  <span className="text-xs text-slate-500 group-hover:text-blue-400 flex items-center gap-1 mt-0.5">
                    England, United Kingdom <ArrowUpRight className="w-3 h-3" />
                  </span>
                </span>
              </a> */}

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 group hover:text-slate-200 transition-colors duration-200"
              >
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">
                  123 Financial District New York, NY 10001
                  <span className="text-xs text-slate-500 group-hover:text-blue-400 flex items-center gap-1 mt-0.5">
                    USA <ArrowUpRight className="w-3 h-3" />
                  </span>
                </span>
              </a>

              {/* Phone */}
              {/* <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <a
                  href="tel:+905343938840"
                  className="hover:text-slate-200 transition-colors duration-200"
                >
                  +90 534 393 88 40
                </a>
              </div> */}

              {/* <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <a
                  href="tel:+44 70580267955"
                  className="hover:text-slate-200 transition-colors duration-200"
                >
                  +44 70580267955
                </a>
              </div> */}

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <a
                  href="mailto:info@crownsummitbnk.com"
                  className="hover:text-slate-200 transition-colors duration-200 break-all"
                >
                  info@crownsummitbnk.com
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Utility Bar / Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 text-xs text-slate-500">
          <p>&copy; {currentYear} Crown Summit Bank. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms&service"
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookie-settings"
              className="hover:text-slate-300 transition-colors"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
