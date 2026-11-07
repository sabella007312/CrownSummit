import React, { useEffect, useState, useRef } from "react";
import { supabase } from "../hooks/supabase";
import {
  Search,
  Trash2,
  History,
  Lock,
  Unlock,
  X,
  Globe,
  Loader2,
  CheckCircle2,
  User,
  CreditCard,
  Plus,
  AlertCircle,
  Mail,
  MapPin,
  Phone,
  Camera,
  Edit,
} from "lucide-react";

interface Profile {
  id: string;
  full_name: string;
  mobile: string | null;
  email: string;
  account_number: string;
  balance: number;
  status: "active" | "locked" | "pending" | "suspended";
  country?: string | null;
  address?: string | null;
  history_date?: string;
  history_from?: string;
  history_to?: string;
  history_amount?: number;
  transfer_origin_country?: string;
  history_status?: "credit" | "debit";
}

const DashboardComponent: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [historyPanelProfile, setHistoryPanelProfile] =
    useState<Profile | null>(null);

  // New Profile Form States
  const [showNewProfileModal, setShowNewProfileModal] = useState(false);
  const [newProfileError, setNewProfileError] = useState("");
  const [newProfileData, setNewProfileData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    address: "",
    mobile: "",
    balance: "",
  });
  const [newProfileImage, setNewProfileImage] = useState<File | null>(null);
  const [newProfileImagePreview, setNewProfileImagePreview] = useState<
    string | null
  >(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // FEATURE ADDITION: Edit Profile Modal States
  const [showEditModal, setShowEditModal] = useState(false);
  const [editProfileError, setEditProfileError] = useState("");
  const [editingProfileId, setEditingProfileId] = useState<string | null>(null);
  const [editProfileData, setEditProfileData] = useState({
    full_name: "",
    mobile: "",
    country: "",
    address: "",
  });

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .order("full_name", { ascending: true });
      if (error) throw error;
      setProfiles(data || []);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "active" ? "locked" : "active";
    try {
      const { error } = await supabase
        .from("profiles")
        .update({ status: newStatus })
        .eq("id", id);

      if (error) throw error;
      await fetchProfiles();
    } catch (err: any) {
      alert(`Update Failed: ${err.message}`);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!window.confirm(`Permanently delete ${name}?`)) return;
    try {
      const { error } = await supabase.from("profiles").delete().eq("id", id);
      if (error) throw error;
      setProfiles((prev) => prev.filter((p) => p.id !== id));
    } catch (err: any) {
      alert("Delete failed: " + err.message);
    }
  };

  // FEATURE ADDITION: Trigger Edit Profile Modal setup with existing data placeholders
  const handleOpenEditModal = (profile: Profile) => {
    setEditingProfileId(profile.id);
    setEditProfileData({
      full_name: profile.full_name || "",
      mobile: profile.mobile || "",
      country: profile.country || "",
      address: profile.address || "",
    });
    setEditProfileError("");
    setShowEditModal(true);
  };

  // FEATURE ADDITION: Handle Optional Updates on Profile Details
  const handleEditProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProfileId) return;
    setIsSubmitting(true);
    setEditProfileError("");

    // Build patches payload only mapping explicitly altered/populated string values
    const updatePayload: Record<string, any> = {};
    if (editProfileData.full_name.trim())
      updatePayload.full_name = editProfileData.full_name;
    if (editProfileData.mobile.trim())
      updatePayload.mobile = editProfileData.mobile;
    if (editProfileData.country.trim())
      updatePayload.country = editProfileData.country;
    if (editProfileData.address.trim())
      updatePayload.address = editProfileData.address;

    try {
      if (Object.keys(updatePayload).length > 0) {
        const { error } = await supabase
          .from("profiles")
          .update(updatePayload)
          .eq("id", editingProfileId);

        if (error) throw error;
      }
      setShowEditModal(false);
      setEditingProfileId(null);
      await fetchProfiles();
    } catch (err: any) {
      setEditProfileError(err.message || "Failed to update profile details.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // MODIFICATION: Records history transaction entry and invokes transactional verification alert email
  const handleHistorySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!historyPanelProfile) return;
    setIsSubmitting(true);

    try {
      const amountChange = Number(historyPanelProfile.history_amount || 0);
      const isCredit = historyPanelProfile.history_status === "credit";

      const updatedBalance = isCredit
        ? Number(historyPanelProfile.balance) + amountChange
        : Number(historyPanelProfile.balance) - amountChange;

      // 1. Update rolling user profile balance row
      const { error: profileError } = await supabase
        .from("profiles")
        .update({ balance: updatedBalance })
        .eq("id", historyPanelProfile.id);

      if (profileError) throw profileError;

      // 2. Insert new ledger row event record
      const txType = isCredit ? "deposit" : "withdrawal";
      const { data: txData, error: txError } = await supabase
        .from("transactions")
        .insert({
          user_id: historyPanelProfile.id,
          name: isCredit
            ? `Wire Deposit from ${historyPanelProfile.history_from || "External Source"}`
            : `Wire Withdrawal to ${historyPanelProfile.history_to || "External Source"}`,
          amount: amountChange,
          type: txType,
          date: historyPanelProfile.history_date
            ? new Date(historyPanelProfile.history_date).toISOString()
            : new Date().toISOString(),
          source_bank: historyPanelProfile.history_from || null,
          destination_bank: historyPanelProfile.history_to || null,
          origin_country: historyPanelProfile.transfer_origin_country || null,
        })
        .select()
        .single();

      if (txError) throw txError;

      // FEATURE ADDITION: Call the Supabase Edge function for Email Alert
      try {
        await supabase.functions.invoke("send-transaction-alert", {
          body: {
            email: historyPanelProfile.email,
            fullName: historyPanelProfile.full_name,
            type: txType,
            amount: amountChange,
            balance: updatedBalance,
            transactionId: txData?.id || "N/A",
          },
        });
      } catch (emailErr) {
        // Log asynchronously to ensure UI operations remain non-blocking if Mail system errors occur
        console.error(
          "Asynchronous transactional notification pipeline failed:",
          emailErr,
        );
      }

      setHistoryPanelProfile(null);
      await fetchProfiles();
    } catch (err: any) {
      alert("Update failed: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCreateProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNewProfileError("");

    if (newProfileData.password !== newProfileData.confirmPassword) {
      setNewProfileError("Passwords do not match.");
      setIsSubmitting(false);
      return;
    }

    const generatedAccountNumber = Math.floor(
      1000000000 + Math.random() * 9000000000,
    ).toString();

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: newProfileData.email,
        password: newProfileData.password,
        options: {
          data: {
            full_name: newProfileData.full_name,
            country: newProfileData.country,
            address: newProfileData.address,
            mobile: newProfileData.mobile,
            balance: parseFloat(newProfileData.balance) || 0,
            account_number: generatedAccountNumber,
            account_status: "pending",
          },
        },
      });

      if (authError) throw authError;

      console.log(
        `NOTIFICATION: New account request from ${newProfileData.email}. Status: PENDING CONFIRMATION.`,
      );

      if (newProfileImage && authData.user) {
        const fileExt = newProfileImage.name.split(".").pop();
        const fileName = `${authData.user.id}-${Date.now()}.${fileExt}`;
        await supabase.storage
          .from("avatars")
          .upload(fileName, newProfileImage);
        await supabase.auth.updateUser({ data: { avatar_url: fileName } });
      }

      setNewProfileData({
        full_name: "",
        email: "",
        password: "",
        confirmPassword: "",
        country: "",
        address: "",
        mobile: "",
        balance: "",
      });
      setNewProfileImage(null);
      setNewProfileImagePreview(null);
      setShowNewProfileModal(false);

      await fetchProfiles();
    } catch (err: any) {
      setNewProfileError(err.message || "Registration failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredProfiles = profiles.filter(
    (p) =>
      p.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.mobile?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased rounded-2xl">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 px-4 sm:px-8 py-4 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <CreditCard size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 leading-tight">
                Admin Portal
              </h1>
              <p className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">
                Financial Operations
              </p>
            </div>
          </div>
          <div className="relative w-full md:w-80">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by name or email..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-transparent border focus:border-blue-500 focus:bg-white rounded-xl text-sm transition-all outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-sm text-slate-500 font-medium">Total Clients</p>
            <p className="text-2xl font-bold text-slate-800">
              {profiles.length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-sm text-slate-500 font-medium">
              Active Accounts
            </p>
            <p className="text-2xl font-bold text-emerald-600">
              {profiles.filter((p) => p.status === "active").length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-right flex justify-end items-center ">
            <button
              onClick={() => setShowNewProfileModal(true)}
              className=" hover:cursor-pointer  bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-slate-800 transition-colors"
            >
              <Plus size={18} /> New Profile
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-200">
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Client Details
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Account No.
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Balance
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">
                    Status
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <tr key={i} className="animate-pulse">
                        <td colSpan={5} className="px-6 py-8">
                          <div className="h-4 bg-slate-100 rounded w-full"></div>
                        </td>
                      </tr>
                    ))
                ) : filteredProfiles.length > 0 ? (
                  filteredProfiles.map((p) => (
                    <tr
                      key={p.id}
                      className="hover:bg-blue-50/30 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                            <User size={20} />
                          </div>
                          <div>
                            <div className="font-bold text-slate-700">
                              {p.full_name}
                            </div>
                            <div className="text-xs text-slate-400">
                              {p.email}
                            </div>
                            <div className="text-xs text-slate-400">
                              {p.mobile || "No phone number provided"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-mono text-sm text-slate-500 italic">
                        {p.account_number || "---"}
                      </td>
                      <td className="px-6 py-4 font-bold text-slate-900">
                        ${Number(p.balance).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border ${
                            p.status === "active"
                              ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                              : p.status === "locked"
                                ? "bg-rose-50 text-rose-600 border-rose-100"
                                : "bg-amber-50 text-amber-600 border-amber-100"
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-1">
                          <ActionButton
                            onClick={() => handleOpenEditModal(p)}
                            icon={<Edit size={16} />}
                            label="Edit Profile"
                            color="hover:text-purple-600 hover:bg-purple-50"
                          />
                          <ActionButton
                            onClick={() =>
                              setHistoryPanelProfile({
                                ...p,
                                history_status: "credit",
                              })
                            }
                            icon={<History size={16} />}
                            label="History"
                            color="hover:text-blue-600 hover:bg-blue-50"
                          />
                          <ActionButton
                            onClick={() => handleToggleStatus(p.id, p.status)}
                            icon={
                              p.status === "active" ? (
                                <Lock size={16} />
                              ) : (
                                <Unlock size={16} />
                              )
                            }
                            label="Toggle"
                            color="hover:text-amber-600 hover:bg-amber-50"
                          />
                          <ActionButton
                            onClick={() => handleDelete(p.id, p.full_name)}
                            icon={<Trash2 size={16} />}
                            label="Delete"
                            color="hover:text-rose-600 hover:bg-rose-50"
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="text-center py-20 text-slate-400"
                    >
                      No matching clients found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-slate-100">
            {filteredProfiles.map((p) => (
              <div key={p.id} className="p-4 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                      <User size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">
                        {p.full_name}
                      </div>
                      <div className="text-xs text-slate-400 italic">
                        {p.account_number}
                      </div>
                      <div className="text-xs text-slate-400 italic">
                        {p.email}
                      </div>
                      <div className="text-xs text-slate-400 italic">
                        {p.mobile || "No phone number provided"}
                      </div>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase border ${p.status === "active" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-rose-50 text-rose-600 border-rose-100"}`}
                  >
                    {p.status}
                  </span>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 flex justify-between items-center">
                  <span className="text-xs font-semibold text-slate-500 uppercase">
                    Balance
                  </span>
                  <span className="font-bold text-slate-900">
                    ${Number(p.balance).toLocaleString()}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleOpenEditModal(p)}
                    className="flex-1 flex justify-center items-center gap-2 py-2 bg-purple-50 text-purple-600 rounded-lg text-xs font-bold"
                  >
                    <Edit size={14} /> Edit
                  </button>
                  <button
                    onClick={() =>
                      setHistoryPanelProfile({ ...p, history_status: "credit" })
                    }
                    className="flex-1 flex justify-center items-center gap-2 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold"
                  >
                    <History size={14} /> History
                  </button>
                  <button
                    onClick={() => handleToggleStatus(p.id, p.status)}
                    className="flex-1 flex justify-center items-center gap-2 py-2 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold"
                  >
                    {p.status === "active" ? (
                      <Lock size={14} />
                    ) : (
                      <Unlock size={14} />
                    )}{" "}
                    Status
                  </button>
                  <button
                    onClick={() => handleDelete(p.id, p.full_name)}
                    className="p-2 bg-rose-50 text-rose-600 rounded-lg"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Side Panel Overlay: Record Transaction */}
      {historyPanelProfile && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => !isSubmitting && setHistoryPanelProfile(null)}
          />
          <div className="relative w-full max-w-lg bg-white shadow-2xl h-full flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <History size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-800 leading-none">
                    Record Transaction
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    {historyPanelProfile.full_name}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setHistoryPanelProfile(null)}
                className="p-2 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 rounded-xl transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <form
              onSubmit={handleHistorySubmit}
              className="p-6 space-y-6 flex-1 overflow-y-auto"
            >
              <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                    Current Account Balance
                  </p>
                  <p className="text-4xl font-mono font-bold">
                    ${Number(historyPanelProfile.balance).toLocaleString()}
                  </p>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <CreditCard size={80} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputGroup label="Transaction Amount">
                  <input
                    type="number"
                    step="any"
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 font-bold outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    value={historyPanelProfile.history_amount || ""}
                    onChange={(e) =>
                      setHistoryPanelProfile({
                        ...historyPanelProfile,
                        history_amount: Number(e.target.value),
                      })
                    }
                  />
                </InputGroup>
                <InputGroup label="Transaction Type">
                  <select
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 font-bold outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    value={historyPanelProfile.history_status || "credit"}
                    onChange={(e) =>
                      setHistoryPanelProfile({
                        ...historyPanelProfile,
                        history_status: e.target.value as any,
                      })
                    }
                  >
                    <option value="credit">Credit (+)</option>
                    <option value="debit">Debit (-)</option>
                  </select>
                </InputGroup>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputGroup label="Source Bank">
                  <input
                    type="text"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                    value={historyPanelProfile.history_from || ""}
                    onChange={(e) =>
                      setHistoryPanelProfile({
                        ...historyPanelProfile,
                        history_from: e.target.value,
                      })
                    }
                    placeholder="e.g. JPMorgan Chase"
                  />
                </InputGroup>
                <InputGroup label="Destination Bank">
                  <input
                    type="text"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                    value={historyPanelProfile.history_to || ""}
                    onChange={(e) =>
                      setHistoryPanelProfile({
                        ...historyPanelProfile,
                        history_to: e.target.value,
                      })
                    }
                    placeholder="e.g. Local Wallet"
                  />
                </InputGroup>
              </div>

              <InputGroup label="Transaction Timestamp">
                <input
                  type="datetime-local"
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                  value={historyPanelProfile.history_date || ""}
                  onChange={(e) =>
                    setHistoryPanelProfile({
                      ...historyPanelProfile,
                      history_date: e.target.value,
                    })
                  }
                />
              </InputGroup>

              <InputGroup label="Origin Country">
                <div className="relative">
                  <Globe
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={16}
                  />
                  <input
                    className="w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                    value={historyPanelProfile.transfer_origin_country || ""}
                    onChange={(e) =>
                      setHistoryPanelProfile({
                        ...historyPanelProfile,
                        transfer_origin_country: e.target.value,
                      })
                    }
                    placeholder="e.g. United States"
                  />
                </div>
              </InputGroup>

              <div className="pt-4 sticky bottom-0 bg-white">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-200 disabled:opacity-50 active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <CheckCircle2 size={20} />
                  )}
                  Confirm & Update Ledger
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* FEATURE ADDITION: Side Panel Overlay: Edit Profile Optional Inputs */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => !isSubmitting && setShowEditModal(false)}
          />
          <div className="relative w-full max-w-lg bg-white shadow-2xl h-full flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-600 text-white rounded-lg">
                  <Edit size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-800 leading-none">
                    Modify Profile
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Update optional account metadata safely
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => !isSubmitting && setShowEditModal(false)}
                className="p-2 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 rounded-xl transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <form
              onSubmit={handleEditProfileSubmit}
              className="p-6 space-y-5 flex-1 overflow-y-auto"
            >
              {editProfileError && (
                <div className="p-4 bg-red-50 text-red-600 rounded-2xl flex items-center gap-3 text-sm font-bold border border-red-100">
                  <AlertCircle size={20} /> {editProfileError}
                </div>
              )}

              <InputGroup label="Full Name (Optional)">
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={16}
                  />
                  <input
                    type="text"
                    className="w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Leave unchanged or enter new name"
                    value={editProfileData.full_name}
                    onChange={(e) =>
                      setEditProfileData({
                        ...editProfileData,
                        full_name: e.target.value,
                      })
                    }
                  />
                </div>
              </InputGroup>

              <InputGroup label="Mobile Number (Optional)">
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={16}
                  />
                  <input
                    type="text"
                    className="w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Leave unchanged or enter new phone number"
                    value={editProfileData.mobile}
                    onChange={(e) =>
                      setEditProfileData({
                        ...editProfileData,
                        mobile: e.target.value,
                      })
                    }
                  />
                </div>
              </InputGroup>

              <InputGroup label="Country (Optional)">
                <div className="relative">
                  <Globe
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={16}
                  />
                  <input
                    type="text"
                    className="w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Leave unchanged or enter new country"
                    value={editProfileData.country}
                    onChange={(e) =>
                      setEditProfileData({
                        ...editProfileData,
                        country: e.target.value,
                      })
                    }
                  />
                </div>
              </InputGroup>

              <InputGroup label="Residential Address (Optional)">
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={16}
                  />
                  <input
                    type="text"
                    className="w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Leave unchanged or enter new address"
                    value={editProfileData.address}
                    onChange={(e) =>
                      setEditProfileData({
                        ...editProfileData,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
              </InputGroup>

              <div className="pt-4 sticky bottom-0 bg-white flex items-center gap-3">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => setShowEditModal(false)}
                  className="hover:cursor-pointer w-1/3 border border-slate-200 hover:bg-slate-50 text-slate-700 py-4 rounded-2xl font-bold flex items-center justify-center transition-all disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="hover:cursor-pointer flex-1 bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg disabled:opacity-50 active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <CheckCircle2 size={20} />
                  )}
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Side Panel Overlay: New Profile */}
      {showNewProfileModal && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => !isSubmitting && setShowNewProfileModal(false)}
          />
          <div className="relative w-full max-w-lg bg-white shadow-2xl h-full flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600 text-white rounded-lg">
                  <Plus size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-800 leading-none">
                    Create New Profile
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Setup high-security private banking profile
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => !isSubmitting && setShowNewProfileModal(false)}
                className="p-2 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 rounded-xl transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <form
              onSubmit={handleCreateProfileSubmit}
              className="p-6 space-y-5 flex-1 overflow-y-auto"
            >
              {newProfileError && (
                <div className="p-4 bg-red-50 text-red-600 rounded-2xl flex items-center gap-3 text-sm font-bold border border-red-100">
                  <AlertCircle size={20} /> {newProfileError}
                </div>
              )}

              {/* Avatar Selector Input */}
              <div className="flex flex-col items-center mb-2">
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="relative group cursor-pointer w-24 h-24 rounded-full border-4 border-slate-100 shadow-xl overflow-hidden bg-slate-50 flex items-center justify-center transition-all hover:border-blue-500"
                >
                  {newProfileImagePreview ? (
                    <img
                      src={newProfileImagePreview}
                      className="w-full h-full object-cover"
                      alt="Preview"
                    />
                  ) : (
                    <div className="flex flex-col items-center text-slate-400 group-hover:text-blue-500 transition-colors">
                      <Camera size={24} />
                      <span className="text-[10px] font-bold uppercase mt-1">
                        Upload
                      </span>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setNewProfileImage(file);
                      setNewProfileImagePreview(URL.createObjectURL(file));
                    }
                  }}
                />
              </div>

              <InputGroup label="Full Name">
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={16}
                  />
                  <input
                    type="text"
                    required
                    className="w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="John Doe"
                    value={newProfileData.full_name}
                    onChange={(e) =>
                      setNewProfileData({
                        ...newProfileData,
                        full_name: e.target.value,
                      })
                    }
                  />
                </div>
              </InputGroup>

              <InputGroup label="Email Address">
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={16}
                  />
                  <input
                    type="email"
                    required
                    className="w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="name@example.com"
                    value={newProfileData.email}
                    onChange={(e) =>
                      setNewProfileData({
                        ...newProfileData,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
              </InputGroup>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputGroup label="Password">
                  <div className="relative">
                    <Lock
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <input
                      type="password"
                      required
                      className="w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="••••••••"
                      value={newProfileData.password}
                      onChange={(e) =>
                        setNewProfileData({
                          ...newProfileData,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                </InputGroup>
                <InputGroup label="Confirm Password">
                  <div className="relative">
                    <Lock
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <input
                      type="password"
                      required
                      className="w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="••••••••"
                      value={newProfileData.confirmPassword}
                      onChange={(e) =>
                        setNewProfileData({
                          ...newProfileData,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                </InputGroup>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputGroup label="Country">
                  <div className="relative">
                    <Globe
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <input
                      type="text"
                      required
                      className="w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="United States"
                      value={newProfileData.country}
                      onChange={(e) =>
                        setNewProfileData({
                          ...newProfileData,
                          country: e.target.value,
                        })
                      }
                    />
                  </div>
                </InputGroup>
                <InputGroup label="Mobile Number">
                  <div className="relative">
                    <Phone
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <input
                      type="text"
                      required
                      className="w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="+1 (555) 000-0000"
                      value={newProfileData.mobile}
                      onChange={(e) =>
                        setNewProfileData({
                          ...newProfileData,
                          mobile: e.target.value,
                        })
                      }
                    />
                  </div>
                </InputGroup>
              </div>

              <InputGroup label="Residential Address">
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={16}
                  />
                  <input
                    type="text"
                    required
                    className="w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="123 Financial Way, NY"
                    value={newProfileData.address}
                    onChange={(e) =>
                      setNewProfileData({
                        ...newProfileData,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
              </InputGroup>

              <div className="pt-4 sticky bottom-0 bg-white flex items-center gap-3">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => setShowNewProfileModal(false)}
                  className=" hover:cursor-pointer  w-1/3 border border-slate-200 hover:bg-slate-50 text-slate-700 py-4 rounded-2xl font-bold flex items-center justify-center transition-all disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className=" hover:cursor-pointer  flex-1 bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg disabled:opacity-50 active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <CheckCircle2 size={20} />
                  )}
                  Create Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const ActionButton = ({ onClick, icon, label, color }: any) => (
  <button
    onClick={onClick}
    title={label}
    className={`p-2 transition-all rounded-lg flex items-center gap-2 ${color} text-slate-400`}
  >
    {icon}
  </button>
);

const InputGroup = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div>
    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1.5 ml-1">
      {label}
    </label>
    {children}
  </div>
);

export default DashboardComponent;
