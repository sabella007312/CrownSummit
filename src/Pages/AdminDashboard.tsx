import { useState } from "react";
// Import useNavigate for routing
import { useNavigate } from "react-router-dom";
import DashboardComponent from "../Components/dashboardcomponent";
import TransferPinsView from "../Components/pincode";
// Import icons for the sidebar
import { LayoutDashboard, Send, LogOut, Menu, X } from "lucide-react";

export const AdminDashboard = () => {
  // Initialize the navigate function
  const navigate = useNavigate();

  // 1. Dynamic State for Navigation
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // 2. Navigation Configuration
  const navItems = [
    {
      id: "dashboard",
      label: "Overview",
      icon: <LayoutDashboard size={20} />,
      component: <DashboardComponent />,
    },
    {
      id: "transfer",
      label: "Transfers Pins",
      icon: <Send size={20} />,
      component: (
        <TransferPinsView
          isOpen={false}
          onClose={() => {
            console.log("Closed");
          }}
          currentBalance={0}
          onSuccess={(amount: number, recipient: string) => {
            console.log(amount, recipient);
          }}
        />
      ),
    },
  ];

  // 3. Helper to render the selected component
  const renderContent = () => {
    const activeItem = navItems.find((item) => item.id === activeTab);
    return activeItem ? activeItem.component : <DashboardComponent />;
  };

  // 4. Handle Logout Confirmation
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      navigate("/admin-login");
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-900 relative text-slate-100">
      {/* Mobile Overlay - Closes sidebar when clicking outside on small screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`
          fixed top-0 bottom-0 left-0 z-40 bg-slate-800 border-r border-slate-700 transition-all duration-300 flex flex-col justify-between h-screen
          ${isSidebarOpen ? "w-64 translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"}
        `}
      >
        {/* Top Section: Brand & Navigation Items */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="p-6 flex items-center justify-between">
            <span
              className={`font-bold text-xl text-blue-500 transition-opacity duration-200 ${
                !isSidebarOpen
                  ? "lg:opacity-0 lg:w-0 overflow-hidden"
                  : "opacity-100"
              }`}
            >
              AdminPanel
            </span>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 lg:block hidden"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 lg:hidden block"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 px-4 space-y-2 mt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (window.innerWidth < 1024) setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all mt-10 ${
                  activeTab === item.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/50 "
                    : "text-slate-400 hover:bg-slate-700/50 hover:text-slate-200"
                }`}
              >
                <span className="shrink-0">{item.icon}</span>
                <span
                  className={`font-medium transition-opacity duration-200 ${
                    !isSidebarOpen
                      ? "lg:opacity-0 lg:w-0 overflow-hidden"
                      : "opacity-100"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom Section: Logout Footer */}
        <div className="p-4 border-t border-slate-700 bg-slate-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-3 text-rose-400 hover:bg-rose-950/30 hover:text-rose-300 rounded-xl transition-all"
          >
            <span className="shrink-0">
              <LogOut size={20} />
            </span>
            <span
              className={`font-medium transition-opacity duration-200 ${
                !isSidebarOpen
                  ? "lg:opacity-0 lg:w-0 overflow-hidden"
                  : "opacity-100"
              }`}
            >
              Logout
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main
        className={`flex-1 transition-all duration-300 p-4 md:p-8 min-h-screen
          ${isSidebarOpen ? "lg:ml-64" : "lg:ml-20"}
        `}
      >
        <header className="mb-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className={`lg:hidden p-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 ${
                isSidebarOpen ? "hidden" : "block"
              }`}
            >
              <Menu size={20} />
            </button>

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-100 capitalize">
                {activeTab}
              </h1>
              <p className="text-slate-400 text-xs md:text-sm hidden sm:block">
                Welcome back, Administrator
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-blue-900/50 border border-blue-700 flex items-center justify-center text-blue-400 font-bold">
              AD
            </div>
          </div>
        </header>

        {/* Dynamic Component Rendering */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-x-hidden text-slate-300">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
