import { useEffect, useState } from "react";
import { Key, ShieldAlert, RefreshCw, Save, Wand2 } from "lucide-react";
import { supabase } from "../hooks/supabase";

interface TransferPinsViewProps {
  isOpen?: boolean;
  onClose?: () => void;
  currentBalance?: number;
  onSuccess?: (amount: number, recipient: string) => void;
}

const TransferPinsView = (_props: TransferPinsViewProps) => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [codes, setCodes] = useState({
    transfer_pin: 0,
    cot_code: 0,
    tax_code: 0,
    auth_code: 0,
  });

  const generate4Digit = () => Math.floor(1000 + Math.random() * 9000);

  const handleSingleGenerate = (key: keyof typeof codes) => {
    setCodes((prev) => ({
      ...prev,
      [key]: generate4Digit(),
    }));
  };

  const fetchPins = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("pincodes")
        .select("*")
        .single();

      if (error && error.code !== "PGRST116") throw error;

      if (data) {
        setCodes({
          transfer_pin: data.transfer_pin,
          cot_code: data.cot_code,
          tax_code: data.tax_code,
          auth_code: data.auth_code,
        });
      }
    } catch (err) {
      console.error("Error fetching pincodes:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveToDatabase = async () => {
    setSaving(true);
    try {
      const { error } = await supabase.from("pincodes").upsert([
        {
          id: 1,
          ...codes,
        },
      ]);

      if (error) throw error;
      alert("Security pins updated successfully!");
    } catch (err) {
      console.error("Error saving pincodes:", err);
      alert("Failed to save pins.");
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    fetchPins();
  }, []);

  const SECURITY_LAYERS = [
    { id: "transfer_pin", threshold: 35, label: "Transfer PIN" },
    { id: "cot_code", threshold: 65, label: "COT Code" },
    { id: "tax_code", threshold: 85, label: "Clearance/Tax Key" },
    { id: "auth_code", threshold: 95, label: "Auth Token" },
  ] as const;

  return (
    <div className="text-slate-900 px-4 sm:px-0">
      {" "}
      {/* Added mobile padding */}
      {/* Header: Stacks on small screens, side-by-side on md+ */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-black italic tracking-tighter flex items-center gap-3 uppercase">
          <Key className="text-red-600 shrink-0" /> Security Configuration
        </h1>
        <div className="flex gap-2 w-full md:w-auto">
          <button
            onClick={fetchPins}
            className="p-3 md:p-2 bg-slate-100 md:bg-transparent hover:bg-slate-200 rounded-xl transition-colors text-slate-600"
            title="Reload from database"
          >
            <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
          </button>
          <button
            onClick={handleSaveToDatabase}
            disabled={saving || loading}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:py-2 rounded-xl font-bold transition-all disabled:opacity-50"
          >
            <Save size={18} />
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
      <div className="bg-white rounded-4xl md:rounded-4xl p-5 md:p-8 shadow-xl border border-slate-100">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-slate-800 mb-2">
            Multi-Layer Authentication Pins
          </h2>
          <p className="text-slate-600 text-sm">
            Generate individual pins below and click{" "}
            <strong className="whitespace-nowrap">Save Changes</strong> to
            update the database.
          </p>
        </div>

        <div className="space-y-4">
          {loading ? (
            <div className="py-10 text-center text-slate-400 font-medium animate-pulse">
              Loading security vault...
            </div>
          ) : (
            SECURITY_LAYERS.map((layer) => (
              <div
                key={layer.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200 gap-4"
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                    <Key size={20} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm md:text-base">
                      {layer.label}
                    </h3>
                    <p className="text-[10px] md:text-xs text-slate-500">
                      Required at {layer.threshold}% progress
                    </p>
                  </div>
                </div>

                {/* PIN and Button: Side by side even on mobile */}
                <div className="flex items-center justify-between sm:justify-end gap-4 md:gap-6 w-full sm:w-auto border-t sm:border-0 pt-3 sm:pt-0">
                  <div className="text-left sm:text-right">
                    <div className="font-mono font-bold text-xl md:text-2xl text-blue-600 tracking-wider">
                      {codes[layer.id as keyof typeof codes] || "----"}
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      handleSingleGenerate(layer.id as keyof typeof codes)
                    }
                    className="p-3 bg-white hover:bg-red-50 text-red-600 border border-slate-200 rounded-xl transition-all hover:border-red-200 group"
                    title="Generate New Pin"
                  >
                    <Wand2
                      size={18}
                      className="group-hover:rotate-12 transition-transform"
                    />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-2xl">
          <div className="flex items-start gap-3">
            <ShieldAlert size={20} className="text-amber-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-bold text-amber-800 text-sm md:text-base">
                Admin Authority
              </h3>
              <p className="text-xs md:text-sm text-amber-700 mt-1 leading-relaxed">
                New pins will not take effect until the{" "}
                <strong>Save Changes</strong> button is pressed. Keep these
                codes secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferPinsView;
