"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Globe, Building2, Loader2, Lock } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "../hooks/supabase";

interface TransferModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentBalance: number;
  onSuccess: (amount: number, recipient: string) => void;
}

const TransferModal: React.FC<TransferModalProps> = ({
  isOpen,
  onClose,
  currentBalance,
  onSuccess,
}) => {
  const [step, setStep] = useState(1);
  const [type, setType] = useState<"local" | "international" | null>(null);
  const [progress, setProgress] = useState(0);
  const [pin, setPin] = useState("");
  const [activeLayerIndex, setActiveLayerIndex] = useState<number | null>(null);
  const [isNotifying, setIsNotifying] = useState(false);
  const [dbPins, setDbPins] = useState<any>(null);

  const [formData, setFormData] = useState({
    recipient: "",
    beneficiaryAddress: "",
    accountNumber: "",
    bankName: "",
    routingNumber: "",
    swift: "",
    iban: "",
    bankAddress: "",
    amount: "",
    description: "",
  });

  const SECURITY_LAYERS = [
    { threshold: 35, label: "Transfer PIN", key: "transfer_pin" },
    { threshold: 65, label: "COT Hash", key: "cot_code" },
    { threshold: 85, label: "Clearance/Tax Key", key: "tax_code" },
    { threshold: 95, label: "Auth Token", key: "auth_code" },
  ];

  useEffect(() => {
    const fetchPins = async () => {
      try {
        const { data, error } = await supabase
          .from("pincodes")
          .select("*")
          .single();

        if (error) throw error;
        setDbPins(data);
      } catch (err) {
        console.error("Error fetching security keys:", err);
      }
    };

    if (isOpen) fetchPins();
  }, [isOpen]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (step === 3 && activeLayerIndex === null && progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const increment = Math.floor(Math.random() * 3) + 2;
          const next = prev + increment;

          const layerToTrigger = SECURITY_LAYERS.findIndex(
            (layer) => next >= layer.threshold && prev < layer.threshold,
          );

          if (layerToTrigger !== -1) {
            setActiveLayerIndex(layerToTrigger);
            if (interval) clearInterval(interval);
            return SECURITY_LAYERS[layerToTrigger].threshold;
          }

          if (next >= 100) {
            if (interval) clearInterval(interval);
            setTimeout(() => setStep(4), 800);
            return 100;
          }
          return next;
        });
      }, 150);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [step, progress, activeLayerIndex]);

  // function handling the initial notification and starting the security sequence
  const handleStartSequence = async () => {
    if (!dbPins) {
      toast.error("Security System Offline. Try again.");
      return;
    }

    setIsNotifying(true);
    const loadingToast = toast.loading(
      "Security notification sent to your email...",
    );

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      const token = session?.access_token;

      if (!token) throw new Error("Authentication required.");

      // Trigger the Edge Function (Email notification)
      const { error } = await supabase.functions.invoke("quick-task", {
        method: "POST",
        body: {
          recipient: formData.recipient,
          beneficiaryAddress: formData.beneficiaryAddress,
          amount: formData.amount,
          type: type,
          description: formData.description,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (error) throw error;

      // SUCCESS: Move to Step 3 (The Pincode progress bar)
      toast.success("Notification sent. Please follow security prompts.", {
        id: loadingToast,
      });

      setStep(3);
      setProgress(5); // This starts the useEffect progress bar logic
    } catch (err: any) {
      console.error("Alert failed:", err.message);
      toast.error("Failed to send security alert. Please try again.", {
        id: loadingToast,
      });
      // We stay on Step 2 so they can try again.
    } finally {
      setIsNotifying(false);
    }
  };

  const handlePinSubmit = () => {
    if (activeLayerIndex === null || !dbPins) return;
    const pinKey = SECURITY_LAYERS[activeLayerIndex].key;
    const correctPin = String(dbPins[pinKey]);

    if (pin === correctPin) {
      if (activeLayerIndex === SECURITY_LAYERS.length - 1) {
        onSuccess(Number(formData.amount), formData.recipient);
      }
      setPin("");
      setActiveLayerIndex(null);
    } else {
      toast.error("SECURITY VIOLATION: Invalid Credentials");
      setPin("");
    }
  };

  const resetAndClose = () => {
    setStep(1);
    setType(null);
    setProgress(0);
    setPin("");
    setActiveLayerIndex(null);
    setFormData({
      recipient: "",
      beneficiaryAddress: "",
      accountNumber: "",
      bankName: "",
      routingNumber: "",
      swift: "",
      iban: "",
      bankAddress: "",
      amount: "",
      description: "",
    });
    onClose();
  };

  const isFormValid = () => {
    const { recipient, beneficiaryAddress, accountNumber, bankName, amount } =
      formData;
    const base =
      recipient &&
      beneficiaryAddress &&
      accountNumber &&
      bankName &&
      Number(amount) > 0 &&
      Number(amount) <= currentBalance;
    if (type === "local") return base;
    return base && formData.bankAddress; // swift, iban, and routingNumber are now optional, so they are omitted here
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-150 flex items-center justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30 }}
            className="relative w-full max-w-xl h-full bg-white shadow-2xl p-10 flex flex-col overflow-y-auto"
          >
            <button
              onClick={resetAndClose}
              className="absolute top-8 right-8 p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            <div className="mt-12 flex-1">
              {step < 3 && (
                <div className="mb-10">
                  <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                    Security Portal
                  </h2>
                  <p className="text-slate-400 text-[10px] font-bold tracking-[0.3em] uppercase mt-2">
                    Crown Summit Bank Institutional Wire
                  </p>
                </div>
              )}

              {step === 1 && (
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => {
                      setType("local");
                      setStep(2);
                    }}
                    className="p-8 border-2 border-slate-100 rounded-3xl hover:border-blue-600 text-left group transition-all"
                  >
                    <Building2
                      className="mb-4 text-slate-400 group-hover:text-blue-600"
                      size={32}
                    />
                    <span className="block font-black uppercase text-xs">
                      Domestic
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      setType("international");
                      setStep(2);
                    }}
                    className="p-8 border-2 border-slate-100 rounded-3xl hover:border-blue-600 text-left group transition-all"
                  >
                    <Globe
                      className="mb-4 text-slate-400 group-hover:text-blue-600"
                      size={32}
                    />
                    <span className="block font-black uppercase text-xs">
                      International
                    </span>
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      placeholder="Beneficiary Name"
                      className="w-full border-2 border-slate-100 p-4 rounded-xl font-bold focus:border-blue-600 outline-none"
                      value={formData.recipient}
                      onChange={(e) =>
                        setFormData({ ...formData, recipient: e.target.value })
                      }
                    />
                    <input
                      placeholder="Account Number"
                      className="w-full border-2 border-slate-100 p-4 rounded-xl font-bold focus:border-blue-600 outline-none"
                      value={formData.accountNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          accountNumber: e.target.value,
                        })
                      }
                    />
                  </div>

                  <input
                    placeholder="Beneficiary Full Address"
                    className="w-full border-2 border-slate-100 p-4 rounded-xl font-bold focus:border-blue-600 outline-none"
                    value={formData.beneficiaryAddress}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        beneficiaryAddress: e.target.value,
                      })
                    }
                  />

                  <input
                    placeholder="Bank Name"
                    className="w-full border-2 border-slate-100 p-4 rounded-xl font-bold focus:border-blue-600 outline-none"
                    value={formData.bankName}
                    onChange={(e) =>
                      setFormData({ ...formData, bankName: e.target.value })
                    }
                  />

                  <input
                    placeholder="Routing Number (Optional)"
                    className="w-full border-2 border-slate-100 p-4 rounded-xl font-bold focus:border-blue-600 outline-none"
                    value={formData.routingNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        routingNumber: e.target.value,
                      })
                    }
                  />

                  {type === "international" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          placeholder="SWIFT/BIC Code (Optional)"
                          className="w-full border-2 border-slate-100 p-4 rounded-xl font-bold focus:border-blue-600 outline-none"
                          value={formData.swift}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              swift: e.target.value || "",
                            })
                          }
                        />
                        <input
                          placeholder="IBAN Number (Optional)"
                          className="w-full border-2 border-slate-100 p-4 rounded-xl font-bold focus:border-blue-600 outline-none"
                          value={formData.iban}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              iban: e.target.value || "",
                            })
                          }
                        />
                      </div>
                      <input
                        placeholder="Bank Full Address"
                        className="w-full border-2 border-slate-100 p-4 rounded-xl font-bold focus:border-blue-600 outline-none"
                        value={formData.bankAddress}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            bankAddress: e.target.value,
                          })
                        }
                      />
                    </motion.div>
                  )}

                  <input
                    placeholder="Description / Reference"
                    className="w-full border-2 border-slate-100 p-4 rounded-xl font-bold focus:border-blue-600 outline-none"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />

                  <div className="pt-6 border-t-2 border-slate-100">
                    <label className="text-[10px] font-black text-blue-600 uppercase mb-2 block">
                      Transfer Amount (USD)
                    </label>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full text-5xl font-black outline-none mb-2"
                      value={formData.amount}
                      onChange={(e) =>
                        setFormData({ ...formData, amount: e.target.value })
                      }
                    />
                  </div>

                  <button
                    disabled={!isFormValid() || !dbPins || isNotifying}
                    onClick={handleStartSequence}
                    className="w-full py-5 bg-slate-950 text-white font-black rounded-2xl uppercase text-xs tracking-[0.2em] hover:bg-blue-700 transition-all disabled:opacity-50 flex items-center justify-center"
                  >
                    {isNotifying ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : dbPins ? (
                      "Initiate Security Sequence"
                    ) : (
                      "Syncing Security..."
                    )}
                  </button>
                </div>
              )}

              {step === 3 && (
                <div className="h-full flex flex-col items-center justify-center space-y-8">
                  {activeLayerIndex === null ? (
                    <div className="w-full text-center space-y-8">
                      <div className="relative w-32 h-32 mx-auto">
                        <Loader2
                          className="animate-spin text-blue-600 absolute inset-0"
                          size={128}
                          strokeWidth={1}
                        />
                        <div className="absolute inset-0 flex items-center justify-center font-black text-2xl italic text-slate-900">
                          {progress}%
                        </div>
                      </div>
                      <div className="space-y-4">
                        <p className="font-black uppercase tracking-[0.3em] text-xs text-blue-600 animate-pulse">
                          Routing via Encrypted Tunnel...
                        </p>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <motion.div
                            className="bg-blue-600 h-full"
                            animate={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-full max-w-sm p-10 bg-slate-950 text-white rounded-[3rem] text-center shadow-2xl border-b-12 border-blue-600"
                    >
                      <Lock className="mx-auto mb-6 text-blue-400" size={48} />
                      <div className="mb-8">
                        <h3 className="font-black uppercase italic text-2xl mb-1">
                          Provide Code
                        </h3>
                        <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">
                          Kindly Provide your{" "}
                          {SECURITY_LAYERS[activeLayerIndex].label}
                        </p>
                      </div>
                      <input
                        type="password"
                        maxLength={6}
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        className="w-full text-center text-4xl tracking-[0.5em] font-black p-5 bg-slate-900 border-2 border-slate-800 rounded-3xl outline-none focus:border-blue-500 mb-8"
                        autoFocus
                      />
                      <button
                        onClick={handlePinSubmit}
                        className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl uppercase text-xs tracking-widest hover:bg-blue-500 transition-colors"
                      >
                        Verify Identity
                      </button>
                    </motion.div>
                  )}
                </div>
              )}

              {step === 4 && (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/40"
                  >
                    <ShieldCheck size={64} />
                  </motion.div>
                  <div className="space-y-3">
                    <h3 className="text-5xl font-black text-slate-900 uppercase italic">
                      Successful Transfer
                    </h3>
                    <p className="text-slate-500 font-medium max-w-xs">
                      Institutional wire of{" "}
                      <span className="text-slate-900 font-black">
                        USD {Number(formData.amount).toLocaleString()}
                      </span>{" "}
                      has been dispatched to {formData.recipient}.
                    </p>
                  </div>
                  <button
                    onClick={resetAndClose}
                    className="px-16 py-5 bg-slate-900 text-white font-black rounded-2xl uppercase text-xs tracking-widest"
                  >
                    Exit Secure Portal
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TransferModal;
