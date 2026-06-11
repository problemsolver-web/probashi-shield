"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function SafetyPage() {
  const { t } = useI18n();
  const checklist = ["safety.c1", "safety.c2", "safety.c3", "safety.c4", "safety.c5", "safety.c6"];
  const redFlags = [
    "safety.r1",
    "safety.r2",
    "safety.r3",
    "safety.r4",
    "safety.r5",
    "safety.r6",
    "safety.r7",
  ];

  return (
    <div className="container-page max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800">{t("safety.title")}</h1>
        <p className="mt-2 text-sm text-slate-500">{t("safety.subtitle")}</p>
      </div>

      <section className="card">
        <h2 className="mb-3 font-bold text-brand-dark">{t("safety.checklist")}</h2>
        <ul className="space-y-2 text-sm text-slate-700">
          {checklist.map((k) => (
            <li key={k} className="flex gap-2">
              <span className="text-safe">✔</span>
              <span>{t(k)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="card border-red-200">
        <h2 className="mb-3 font-bold text-danger">{t("safety.redTitle")}</h2>
        <ul className="space-y-2 text-sm text-slate-700">
          {redFlags.map((k) => (
            <li key={k} className="flex gap-2">
              <span className="text-danger">✕</span>
              <span>{t(k)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2 className="mb-3 font-bold text-brand-dark">{t("safety.defrauded")}</h2>
        <ul className="space-y-2 text-sm text-slate-700">
          <li>1. {t("safety.d1")}</li>
          <li>2. {t("safety.d2")}</li>
          <li>
            3. {t("safety.d3")} <strong>16135</strong>.
          </li>
          <li>4. {t("safety.d4")}</li>
        </ul>
        <Link href="/report" className="btn-primary mt-4 inline-flex">
          {t("safety.reportNow")}
        </Link>
      </section>
    </div>
  );
}
