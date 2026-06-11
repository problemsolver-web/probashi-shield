"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";
import { useI18n } from "@/lib/i18n";

export default function ImpactPage() {
  const { t } = useI18n();
  const [stats, setStats] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .getPublicStats()
      .then(setStats)
      .catch((e) => setError(e.message));
  }, []);

  if (error)
    return (
      <div className="container-page">
        <div className="card border-red-200 bg-red-50 text-red-700">{error}</div>
      </div>
    );

  if (!stats)
    return (
      <div className="container-page">
        <div className="card">{t("common.loading")}</div>
      </div>
    );

  const maxType = Math.max(1, ...stats.complaintsByType.map((c: any) => c.count));

  return (
    <div className="container-page space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-extrabold text-slate-800">{t("impact.title")}</h1>
        <p className="mx-auto mt-2 max-w-2xl text-slate-500">{t("impact.subtitle")}</p>
      </section>

      {/* Headline numbers */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Big label={t("impact.agenciesTracked")} value={stats.agencies.total} tone="brand" />
        <Big label={t("impact.searchesServed")} value={stats.searches.total} tone="brand" />
        <Big label={t("impact.reportsFiled")} value={stats.reports.total} tone="amber" />
        <Big label={t("impact.verifiedFraudCases")} value={stats.reports.verifiedFraud} tone="red" />
        <Big label={t("impact.blacklisted")} value={stats.agencies.blacklisted} tone="red" />
        <Big label={t("impact.activeAgencies")} value={stats.agencies.active} tone="green" />
        <Big label={t("impact.viaSms")} value={stats.searches.viaSms} tone="brand" />
        <Big
          label={t("impact.lossReported")}
          value={`৳${Number(stats.moneyLossReported).toLocaleString()}`}
          tone="red"
        />
      </section>

      {/* Fraud type breakdown */}
      <section className="card">
        <h2 className="mb-4 font-bold text-slate-800">{t("impact.fraudTypeTitle")}</h2>
        {stats.complaintsByType.length === 0 && (
          <p className="text-sm text-slate-400">{t("impact.noReports")}</p>
        )}
        <div className="space-y-3">
          {stats.complaintsByType.map((c: any) => (
            <div key={c.type}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-slate-600">{t(`type.${c.type}`)}</span>
                <span className="font-semibold text-slate-700">{c.count}</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-brand"
                  style={{ width: `${(c.count / maxType) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl bg-brand-light p-6 text-center">
        <p className="text-brand-dark">{t("impact.ctaText")}</p>
        <Link href="/report" className="btn-primary mt-3 inline-flex">
          {t("impact.ctaBtn")}
        </Link>
      </section>
    </div>
  );
}

function Big({
  label,
  value,
  tone,
}: {
  label: string;
  value: string | number;
  tone: "brand" | "red" | "amber" | "green";
}) {
  const colors: Record<string, string> = {
    brand: "text-brand-dark",
    red: "text-red-600",
    amber: "text-amber-600",
    green: "text-green-600",
  };
  return (
    <div className="card text-center">
      <p className={`text-3xl font-extrabold ${colors[tone]}`}>{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{label}</p>
    </div>
  );
}
