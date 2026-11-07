import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./Components/Navigation";
import Footer from "./Components/Footer";
import useScrollToTop from "./hooks/useScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { TranslationProvider } from "./i18n/TranslationProvider";
import PageTranslator from "./i18n/PageTranslator";

import Home from "./Pages/Home";
import About from "./Pages/Aboutus";
import Services from "./Pages/Services";
import Login from "./Pages/LoginPage";
import ClientDashboard from "./Pages/ClientDashboard";
import AdminDashboard from "./Pages/AdminDashboard";
import CorporatePage from "./Pages/Corperate";
import SignupPage from "./Pages/Signup";
import ContactPage from "./Pages/ContactPage";
import Forgotpassword from "./Pages/Forgotpassword";
import UpdatePassword from "./Pages/UpdatePassword";
import WealthManagement from "./Pages/wealthmanagement";
import InsuranceServices from "./Pages/insuranceservices";
import AdminLoginPage from "./Pages/AdminLoginPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfService from "./Pages/TermsOfService";
import CookieSettings from "./Pages/CookieSettings";
import EmailConfirmedPage from "./Pages/EmailConfirmedPage";

function App() {
  return (
    <TranslationProvider>
      <Router>
        {/* Scroll hook must be inside Router */}
        <ScrollToTopWrapper>
          <Toaster position="top-right" richColors />
          <Navbar />
          <PageTranslator />
          <main className="min-h-screen pt-24 md:pt-32">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/login" element={<Login />} />
              <Route path="/client" element={<ClientDashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/corporate" element={<CorporatePage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/forgot-password" element={<Forgotpassword />} />
              <Route path="/update-password" element={<UpdatePassword />} />
              <Route path="/wealth-management" element={<WealthManagement />} />
              <Route path="/email-confirmed" element={<EmailConfirmedPage />} />
              <Route
                path="/insurance-services"
                element={<InsuranceServices />}
              />
              <Route path="/admin-login" element={<AdminLoginPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookie-settings" element={<CookieSettings />} />
              <Route path="/terms&service" element={<TermsOfService />} />
              {/* <Route
              path="*"
              element={
                <h1 className="text-center text-3xl mt-20 text-gray-700">
                  404 - Page Not Found
                </h1>
              }
            /> */}

              <Route
                path="*"
                element={
                  <div className="flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[80vh] px-4 text-center select-none">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-200">
                      404 - Page Not Found
                    </h1>
                    <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-xs sm:max-w-sm">
                      The page you are looking for doesn't exist or has been
                      moved.
                    </p>
                  </div>
                }
              />
            </Routes>
          </main>
          <Footer />
        </ScrollToTopWrapper>
        <Analytics />
      </Router>
    </TranslationProvider>
  );
}

// Wrapper component to use the hook correctly
function ScrollToTopWrapper({ children }: { children: React.ReactNode }) {
  useScrollToTop();
  return <>{children}</>;
}

export default App;
