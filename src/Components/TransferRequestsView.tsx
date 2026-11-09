import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Check, RefreshCw, RotateCcw, X } from "lucide-react";
import { supabase } from "../hooks/supabase";

type TransferStatus = "approved" | "pending" | "reversed" | "failed";

interface TransferRequest {
  id: string;
  user_id: string;
  client_name: string;
  client_account_number: string;
  transfer_type: "local" | "international";
  recipient: string;
  beneficiary_address: string;
  account_number: string;
  bank_name: string;
  amount: number;
  description: string | null;
  status: TransferStatus;
  created_at: string;
}

interface TransferStatusResult {
  email: string;
  full_name: string;
  amount: number;
  balance: number;
  transaction_id: string;
  alert_type: "withdrawal" | "deposit";
  alert_required: boolean;
}

const statuses: TransferStatus[] = [
  "pending",
  "approved",
  "reversed",
  "failed",
];

const getAdminCredentials = () => {
  const credentials = sessionStorage.getItem("admin-transfer-credentials");
  return credentials ? JSON.parse(credentials) : {};
};

const statusStyles: Record<TransferStatus, string> = {
  pending: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  approved: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  reversed: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  failed: "bg-rose-500/15 text-rose-300 border-rose-500/30",
};

const TransferRequestsView = () => {
  const [requests, setRequests] = useState<TransferRequest[]>([]);
  const [activeStatus, setActiveStatus] = useState<TransferStatus | "all">(
    "all",
  );
  const [loading, setLoading] = useState(true);
  const [workingId, setWorkingId] = useState<string | null>(null);

  const fetchRequests = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase.functions.invoke(
      "admin-transfer-management",
      {
        body: { action: "list", ...getAdminCredentials() },
      },
    );

    if (error || data?.error) {
      toast.error("Unable to load transfer requests. Confirm admin access.");
      console.error("Transfer request fetch failed:", error || data?.error);
    } else {
      setRequests((data?.requests || []) as TransferRequest[]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    void fetchRequests();
  }, [fetchRequests]);

  const updateStatus = async (
    request: TransferRequest,
    status: TransferStatus,
  ) => {
    setWorkingId(request.id);
    try {
      const { data, error } = await supabase.functions.invoke(
        "admin-transfer-management",
        {
          body: {
            action: "status",
            transferId: request.id,
            status,
            ...getAdminCredentials(),
          },
        },
      );

      if (error || data?.error) throw error || new Error(data.error);

      const result = data as {
        result: TransferStatusResult;
        alert_failed: boolean;
      };

      await fetchRequests();
      if (result.alert_failed) {
        toast.error(
          "Transfer status updated, but the transaction alert failed.",
        );
      } else {
        toast.success(`Transfer marked ${status}.`);
      }
    } catch (error: any) {
      toast.error(error.message || "Unable to update transfer status.");
    } finally {
      setWorkingId(null);
    }
  };

  const filteredRequests = requests.filter(
    (request) => activeStatus === "all" || request.status === activeStatus,
  );

  return (
    <section className="space-y-6 text-slate-200">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* <div>
          <h2 className="text-2xl font-black text-white">Transfer Requests</h2>
          <p className="mt-1 text-sm text-slate-400">
            Review requests and manage their status.
          </p>
        </div> */}
        <button
          onClick={() => void fetchRequests()}
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold text-slate-200 hover:bg-slate-800 disabled:opacity-50"
        >
          <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
          Refresh
        </button>
      </div>

      <div className="flex flex-wrap gap-2 border-b border-slate-700 pb-4">
        {(["all", ...statuses] as const).map((status) => (
          <button
            key={status}
            onClick={() => setActiveStatus(status)}
            className={`rounded-lg px-3 py-2 text-xs font-bold uppercase transition-colors ${
              activeStatus === status
                ? "bg-blue-600 text-white"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="py-10 text-center text-sm text-slate-400">
          Loading transfer requests...
        </p>
      ) : filteredRequests.length === 0 ? (
        <p className="py-10 text-center text-sm text-slate-400">
          No {activeStatus === "all" ? "transfer" : activeStatus} requests.
        </p>
      ) : (
        <div className="space-y-3">
          {filteredRequests.map((request) => (
            <article
              key={request.id}
              className="rounded-xl border border-slate-700 bg-slate-800 p-4 sm:p-5"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-bold text-white">
                      {request.recipient}
                    </h3>
                    <span
                      className={`rounded-full border px-2.5 py-1 text-[10px] font-black uppercase ${statusStyles[request.status]}`}
                    >
                      {request.status}
                    </span>
                    <span className="text-xs uppercase text-slate-400">
                      {request.transfer_type}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-slate-200">
                    Client: {request.client_name}
                  </p>
                  <p className="break-all text-xs text-slate-400">
                    Client account: {request.client_account_number}
                  </p>
                  <p className="break-all text-xs text-slate-400">
                    Beneficiary account: {request.account_number} ·{" "}
                    {request.bank_name}
                  </p>
                  <p className="text-sm text-slate-300">
                    {request.beneficiary_address}
                  </p>
                  {request.description && (
                    <p className="text-sm text-slate-400">
                      Reference: {request.description}
                    </p>
                  )}
                  <p className="text-xs text-slate-500">
                    Submitted {new Date(request.created_at).toLocaleString()}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 lg:justify-end">
                  <span className="mr-2 text-lg font-black text-white">
                    $
                    {Number(request.amount).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                  <button
                    onClick={() => void updateStatus(request, "pending")}
                    disabled={
                      workingId === request.id || request.status === "pending"
                    }
                    className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/40 px-3 py-2 text-xs font-bold text-amber-300 hover:bg-amber-500/10 disabled:opacity-50"
                  >
                    Pending / Hold
                  </button>
                  <button
                    onClick={() => void updateStatus(request, "approved")}
                    disabled={
                      workingId === request.id || request.status === "approved"
                    }
                    className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white hover:bg-emerald-500 disabled:opacity-50"
                  >
                    <Check size={15} /> Approve
                  </button>
                  <button
                    onClick={() => void updateStatus(request, "failed")}
                    disabled={
                      workingId === request.id || request.status === "failed"
                    }
                    className="inline-flex items-center gap-1.5 rounded-lg border border-rose-500/40 px-3 py-2 text-xs font-bold text-rose-300 hover:bg-rose-500/10 disabled:opacity-50"
                  >
                    <X size={15} /> Failed / On Hold
                  </button>
                  <button
                    onClick={() => void updateStatus(request, "reversed")}
                    disabled={
                      workingId === request.id || request.status === "reversed"
                    }
                    className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/40 px-3 py-2 text-xs font-bold text-blue-300 hover:bg-blue-500/10 disabled:opacity-50"
                  >
                    <RotateCcw size={15} /> Reverse
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default TransferRequestsView;
