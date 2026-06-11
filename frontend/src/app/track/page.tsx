"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { api } from "@/lib/api";
import { useI18n } from "@/lib/i18n";

const statusColors: Record<string, string> = {
  submitted: "bg-slate-100 text-slate-700",
  under_review: "bg-blue-100 text-blue-700",
  contacted_for_info: "bg-blue-100 text-blue-700",
  investigating: "bg-amber-100 text-amber-700",
  verified_fraud: "bg-red-100 text-red-700",
  resolved: "bg-green-100 text-green-700",
  dismissed: "bg-slate-100 text-slate-500",
};

function TrackInner() {
  const { t } = useI18n();
  const searchParams = useSearchParams();
  const [ref, setRef] = useState(searchParams.get("ref") || "");
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function check(e?: React.FormEvent) {
    e?.preventDefault();
    if (!ref.trim()) return;
    setLoading(true);
    setError("");
    setData(null);
    try {
      const res = await api.trackComplaint(ref.trim());
      setData(res);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (searchParams.get("ref")) check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-page max-w-xl">
      <h1 className="mb-1 text-2xl font-extrabold text-slate-800">{t("track.title")}</h1>
      <p className="mb-6 text-sm text-slate-500">{t("track.subtitle")}</p>

      <form onSubmit={check} className="flex gap-2">
        <input
          className="input"
          value={ref}
          onChange={(e) => setRef(e.target.value)}
          placeholder="e.g. PS-2026-AB12CD"
        />
        <button className="btn-primary" disabled={loading}>
          {loading ? "..." : t("track.check")}
        </button>
      </form>

      {error && <div className="card mt-4 border-red-200 bg-red-50 text-red-700">{error}</div>}

      {data && (
        <div className="card mt-6 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-800">{data.agencyName}</h2>
            <span className={`badge ${statusColors[data.status] || "bg-slate-100 text-slate-700"}`}>
              {t(`status.${data.status}`)}
            </span>
          </div>
          <Row label={t("track.trackingNumber")} value={data.trackingNumber} />
          <Row label={t("track.type")} value={t(`type.${data.complaintType}`)} />
          <Row label={t("track.verifiedByMinistry")} value={data.isVerified ? t("track.yes") : t("track.notYet")} />
          <Row label={t("track.submittedAt")} value={new Date(data.submittedAt).toLocaleString()} />
          <Row label={t("track.lastUpdated")} value={new Date(data.lastUpdated).toLocaleString()} />
        </div>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-slate-100 pb-2 text-sm last:border-0">
      <span className="text-slate-500">{label}</span>
      <span className="font-medium text-slate-700">{value}</span>
    </div>
  );
}

export default function TrackPage() {
  return (
    <Suspense fallback={<div className="container-page"><div className="card">Loading...</div></div>}>
      <TrackInner />
    </Suspense>
  );
}
