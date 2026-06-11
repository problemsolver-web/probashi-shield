"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { useI18n } from "@/lib/i18n";

export default function DestinationsPage() {
  const { t, lang } = useI18n();
  const [destinations, setDestinations] = useState<any[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .getDestinations()
      .then((d) => setDestinations(d.destinations))
      .catch((e) => setError(e.message));
  }, []);

  // Show a translated warning for known countries (by code); otherwise show the
  // original text stored in the database.
  function warningText(d: any): string {
    const key = `dest.redflag.${d.countryCode}`;
    const translated = t(key);
    if (lang === "bn" && translated !== key) return translated;
    return d.redFlagsSpecific;
  }

  return (
    <div className="container-page">
      <h1 className="mb-1 text-2xl font-extrabold text-slate-800">{t("dest.title")}</h1>
      <p className="mb-6 max-w-2xl text-sm text-slate-500">{t("dest.subtitle")}</p>

      {error && <div className="card border-red-200 bg-red-50 text-red-700">{error}</div>}

      <div className="grid gap-4 md:grid-cols-2">
        {destinations.map((d) => (
          <div key={d.id} className="card">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-800">{d.countryName}</h2>
              <span className="badge bg-brand-light text-brand-dark">{d.countryCode}</span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs uppercase text-slate-400">{t("dest.officialFee")}</p>
                <p className="text-lg font-bold text-brand-dark">
                  ৳{d.officialRecruitmentFee?.toLocaleString() || "N/A"}
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs uppercase text-slate-400">{t("dest.monthlySalary")}</p>
                <p className="text-lg font-bold text-slate-700">
                  ৳{d.salaryRangeLow?.toLocaleString()}–{d.salaryRangeHigh?.toLocaleString()}
                </p>
              </div>
            </div>

            {d.commonJobTypes?.length > 0 && (
              <div className="mt-3">
                <p className="text-xs uppercase text-slate-400">{t("dest.commonJobs")}</p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {d.commonJobTypes.map((j: string) => (
                    <span key={j} className="badge bg-slate-100 text-slate-600">
                      {j}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {d.redFlagsSpecific && (
              <p className="mt-3 rounded-lg bg-amber-50 p-2 text-xs text-amber-800">
                ⚠ {warningText(d)}
              </p>
            )}

            <div className="mt-3 border-t border-slate-100 pt-3 text-xs text-slate-500">
              <p>{d.embassyName}</p>
              <p>
                ☎ {d.embassyPhone} · {t("dest.processing")} ~{d.avgProcessingDays} {t("dest.days")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
