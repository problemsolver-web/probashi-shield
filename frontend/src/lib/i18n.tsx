"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "bn";

// Translation dictionary. Keys are flat dotted strings.
const dict: Record<Lang, Record<string, string>> = {
  en: {
    "brand.name": "Probashi Shield",
    "nav.verify": "Verify Agency",
    "nav.fees": "Country Fees",
    "nav.safety": "Safety Guide",
    "nav.sms": "SMS Demo",
    "nav.track": "Track Report",
    "nav.impact": "Impact",
    "nav.report": "Report Fraud",
    "nav.report.short": "Report",

    "home.title": "Before you pay, verify the agent.",
    "home.subtitle":
      "Every year thousands of Bangladeshi workers lose 3-5 lakh taka to fake recruiting agents. Check any agency against the official BMET licensed list in seconds - free.",
    "home.byName": "By Name",
    "home.byLicense": "By License #",
    "home.byPhone": "By Phone",
    "home.placeholder": "e.g. Gulf Gateway, RL-1024, 01711...",
    "home.verify": "Verify",
    "home.searching": "Searching...",
    "home.try": "Try:",
    "home.noResultTitle": "No licensed agency found matching",
    "home.noResultBody":
      "This agency is NOT in the BMET licensed list. Do not send money until you verify. If someone is using this name to collect money,",
    "home.reportItHere": "report it here",
    "home.resultsFound": "results found",
    "home.reports": "reports",
    "home.step1.t": "1. Search",
    "home.step1.d": "Enter the agency name, BMET license number, or phone number.",
    "home.step2.t": "2. See the verdict",
    "home.step2.d": "Instantly know if they are licensed and how many fraud reports exist.",
    "home.step3.t": "3. Decide safely",
    "home.step3.d": "Never hand over your land money to an unverified agent again.",

    "footer.tagline":
      "Probashi Shield - Protecting Bangladesh's migrant workers from recruitment fraud.",
    "footer.admin": "Admin",

    "common.loading": "Loading...",
    "common.back": "← Back to search",

    "safety.title": "Safety guide for migrant workers",
    "safety.subtitle": "Follow these steps before you pay any money to a recruiting agent.",
    "safety.checklist": "✅ Before you pay - checklist",
    "safety.c1": "Verify the agency on Probashi Shield (search by name or BMET license number).",
    "safety.c2": "Confirm the BMET license is active and not expired or suspended.",
    "safety.c3": "Get the job offer and contract in writing - including salary and job type.",
    "safety.c4": "Compare the fee against the official government fee for that country.",
    "safety.c5": "Never pay cash without an official receipt. Use bank or mobile transfer with records.",
    "safety.c6": "Confirm the employer name matches your visa and contract.",
    "safety.redTitle": "🚩 Red flags - walk away if you see these",
    "safety.r1": "Agent demands large cash upfront with no receipt.",
    "safety.r2": "Promises of very high salary without any interview or test.",
    "safety.r3": "Pressure to decide quickly or keep it secret from family.",
    "safety.r4": "No written contract, or contract differs from verbal promises.",
    "safety.r5": "Agent is not in the BMET licensed list.",
    "safety.r6": "Office address cannot be verified or keeps changing.",
    "safety.r7": "'Free visa' offers - these are illegal and dangerous.",
    "safety.defrauded": "📞 If you have been defrauded",
    "safety.d1": "Keep all evidence: receipts, messages, contracts, the agent's number.",
    "safety.d2": "File a report on this platform to warn others.",
    "safety.d3": "Call the Ministry / BMET hotline:",
    "safety.d4": "Visit your nearest District Employment and Manpower Office (DEMO).",
    "safety.reportNow": "Report a fraud now",

    "dest.title": "Official recruitment fees & salaries",
    "dest.subtitle":
      "These are the government-approved costs. If an agent asks for significantly more than the official fee, it is a red flag for overcharging or fraud.",
    "dest.officialFee": "Official fee",
    "dest.monthlySalary": "Monthly salary",
    "dest.commonJobs": "Common jobs",
    "dest.processing": "Processing",
    "dest.days": "days",

    "status.submitted": "Submitted",
    "status.under_review": "Under review",
    "status.contacted_for_info": "Contacted for info",
    "status.investigating": "Investigating",
    "status.verified_fraud": "Verified fraud",
    "status.resolved": "Resolved",
    "status.dismissed": "Dismissed",

    "type.money_fraud": "Took money / disappeared",
    "type.job_mismatch": "Job mismatch",
    "type.visa_false": "Fake visa",
    "type.salary_wrong": "Wrong salary",
    "type.missing_contact": "Agent unreachable",
    "type.other": "Other",

    "track.title": "Track your report",
    "track.subtitle": "Enter the tracking number you received when you submitted a report.",
    "track.check": "Check",
    "track.trackingNumber": "Tracking number",
    "track.type": "Type",
    "track.verifiedByMinistry": "Verified by Ministry",
    "track.yes": "Yes",
    "track.notYet": "Not yet",
    "track.submittedAt": "Submitted",
    "track.lastUpdated": "Last updated",

    "sms.title": "SMS verification demo",
    "sms.subtitle":
      "This simulates the SMS / USSD experience for workers with basic phones - no internet needed. The same logic powers the real SMS gateway.",
    "sms.intro": "PROBASHI SHIELD\nSend: VERIFY <agency>, FEE <country>, TIPS, or HELP",
    "sms.placeholder": "Type a message...",
    "sms.send": "Send",

    "impact.title": "Transparency & Impact",
    "impact.subtitle":
      "Public accountability is the point. Every search, report, and blacklist action is tracked so the community can see the platform working.",
    "impact.agenciesTracked": "Agencies tracked",
    "impact.searchesServed": "Searches served",
    "impact.reportsFiled": "Fraud reports filed",
    "impact.verifiedFraudCases": "Verified fraud cases",
    "impact.blacklisted": "Blacklisted agencies",
    "impact.activeAgencies": "Verified active agencies",
    "impact.viaSms": "Searches via SMS",
    "impact.lossReported": "Loss reported (BDT)",
    "impact.fraudTypeTitle": "What kind of fraud is reported?",
    "impact.noReports": "No reports yet.",
    "impact.ctaText": "Know an agency that took money for a job that never existed?",
    "impact.ctaBtn": "Report it and protect others",

    "report.title": "Report a fraudulent agent",
    "report.subtitle":
      "Help protect others. Reports are reviewed by the Ministry team before being marked verified.",
    "report.agencyNameLabel": "Agency / agent name being reported *",
    "report.agencyNamePh": "Name of the agent or agency",
    "report.knownAgency": "Reporting a known agency. Your report will be linked to it.",
    "report.typeLabel": "Type of fraud *",
    "report.type_money": "Took money / disappeared",
    "report.type_job": "Job was different than promised",
    "report.type_visa": "Fake or wrong visa",
    "report.type_salary": "Salary was wrong",
    "report.type_contact": "Cannot contact agent anymore",
    "report.type_other": "Other",
    "report.descLabel": "What happened? *",
    "report.descPh": "Describe what the agent promised, what you paid, and what went wrong.",
    "report.amountLabel": "Amount lost (BDT)",
    "report.dateLabel": "Date of incident",
    "report.contactSummary": "Your contact info (optional - reports can be anonymous)",
    "report.yourName": "Your name",
    "report.phone": "Phone",
    "report.location": "District / location",
    "report.submit": "Submit report",
    "report.submitting": "Submitting...",
    "report.disclaimer":
      "Your report helps warn other families. False reports may be removed by the Ministry review team.",
    "report.successTitle": "Report submitted",
    "report.successBody":
      "Thank you for protecting others. Save this tracking number to check your report status:",
    "report.trackStatus": "Track status",
    "report.done": "Done",
    "report.errAgency": "Please enter the agency name you are reporting.",
    "report.errDesc": "Please describe what happened (at least 10 characters).",

    "agency.blacklistedWarn": "This agency is BLACKLISTED by authorities",
    "agency.doNotPay": "Do NOT pay any money.",
    "agency.details": "Agency Details",
    "agency.licenseStatus": "License status",
    "agency.owner": "Owner",
    "agency.phone": "Phone",
    "agency.email": "Email",
    "agency.office": "Office",
    "agency.division": "Division",
    "agency.licenseExpiry": "License expiry",
    "agency.verification": "Verification",
    "agency.notVerified": "Not verified",
    "agency.badge": "badge",
    "agency.destinations": "Destinations",
    "agency.fraudReports": "Fraud Reports",
    "agency.totalReports": "Total reports",
    "agency.crowdReports": "Crowd reports",
    "agency.reportThis": "Report this agency",
    "agency.recentReports": "Recent Reports",
    "agency.na": "N/A",
  },
  bn: {
    "brand.name": "প্রবাসী শিল্ড",
    "nav.verify": "এজেন্সি যাচাই",
    "nav.fees": "দেশভিত্তিক খরচ",
    "nav.safety": "নিরাপত্তা নির্দেশিকা",
    "nav.sms": "এসএমএস ডেমো",
    "nav.track": "রিপোর্ট ট্র্যাক",
    "nav.impact": "প্রভাব",
    "nav.report": "প্রতারণা রিপোর্ট",
    "nav.report.short": "রিপোর্ট",

    "home.title": "টাকা দেওয়ার আগে এজেন্ট যাচাই করুন।",
    "home.subtitle":
      "প্রতি বছর হাজার হাজার বাংলাদেশি কর্মী ভুয়া এজেন্টের কাছে ৩-৫ লাখ টাকা হারান। যেকোনো এজেন্সিকে সরকারি বিএমইটি লাইসেন্স তালিকার সাথে সেকেন্ডেই যাচাই করুন - বিনামূল্যে।",
    "home.byName": "নাম দিয়ে",
    "home.byLicense": "লাইসেন্স নম্বর",
    "home.byPhone": "ফোন নম্বর",
    "home.placeholder": "যেমন: Gulf Gateway, RL-1024, 01711...",
    "home.verify": "যাচাই করুন",
    "home.searching": "খোঁজা হচ্ছে...",
    "home.try": "চেষ্টা করুন:",
    "home.noResultTitle": "এই নামে কোনো লাইসেন্সপ্রাপ্ত এজেন্সি পাওয়া যায়নি",
    "home.noResultBody":
      "এই এজেন্সিটি বিএমইটি লাইসেন্স তালিকায় নেই। যাচাই না করে টাকা দেবেন না। কেউ যদি এই নামে টাকা নিচ্ছে,",
    "home.reportItHere": "এখানে রিপোর্ট করুন",
    "home.resultsFound": "টি ফলাফল পাওয়া গেছে",
    "home.reports": "টি রিপোর্ট",
    "home.step1.t": "১. খুঁজুন",
    "home.step1.d": "এজেন্সির নাম, বিএমইটি লাইসেন্স নম্বর বা ফোন নম্বর লিখুন।",
    "home.step2.t": "২. ফলাফল দেখুন",
    "home.step2.d": "সাথে সাথেই জানুন তারা লাইসেন্সপ্রাপ্ত কিনা এবং কতগুলো প্রতারণার রিপোর্ট আছে।",
    "home.step3.t": "৩. নিরাপদে সিদ্ধান্ত নিন",
    "home.step3.d": "আর কখনো অযাচাইকৃত এজেন্টের হাতে আপনার জমি বিক্রির টাকা তুলে দেবেন না।",

    "footer.tagline":
      "প্রবাসী শিল্ড - বাংলাদেশের অভিবাসী কর্মীদের প্রতারণা থেকে রক্ষা করছে।",
    "footer.admin": "অ্যাডমিন",

    "common.loading": "লোড হচ্ছে...",
    "common.back": "← অনুসন্ধানে ফিরুন",

    "safety.title": "অভিবাসী কর্মীদের জন্য নিরাপত্তা নির্দেশিকা",
    "safety.subtitle": "কোনো রিক্রুটিং এজেন্টকে টাকা দেওয়ার আগে এই ধাপগুলো অনুসরণ করুন।",
    "safety.checklist": "✅ টাকা দেওয়ার আগে - চেকলিস্ট",
    "safety.c1": "প্রবাসী শিল্ডে এজেন্সিটি যাচাই করুন (নাম বা বিএমইটি লাইসেন্স নম্বর দিয়ে খুঁজুন)।",
    "safety.c2": "বিএমইটি লাইসেন্সটি সক্রিয় এবং মেয়াদোত্তীর্ণ বা স্থগিত নয় তা নিশ্চিত করুন।",
    "safety.c3": "চাকরির প্রস্তাব ও চুক্তি লিখিতভাবে নিন - বেতন ও কাজের ধরনসহ।",
    "safety.c4": "ফি টি ঐ দেশের সরকারি নির্ধারিত ফি-র সাথে মিলিয়ে দেখুন।",
    "safety.c5": "রসিদ ছাড়া কখনো নগদ টাকা দেবেন না। রেকর্ডসহ ব্যাংক বা মোবাইল ট্রান্সফার ব্যবহার করুন।",
    "safety.c6": "নিয়োগকর্তার নাম আপনার ভিসা ও চুক্তির সাথে মেলে কিনা নিশ্চিত করুন।",
    "safety.redTitle": "🚩 বিপদ সংকেত - এগুলো দেখলে সরে আসুন",
    "safety.r1": "এজেন্ট রসিদ ছাড়া আগেই বড় অঙ্কের নগদ টাকা দাবি করে।",
    "safety.r2": "কোনো ইন্টারভিউ বা পরীক্ষা ছাড়াই অত্যধিক বেতনের প্রতিশ্রুতি।",
    "safety.r3": "দ্রুত সিদ্ধান্ত নিতে বা পরিবার থেকে গোপন রাখতে চাপ দেওয়া।",
    "safety.r4": "কোনো লিখিত চুক্তি নেই, বা চুক্তি মৌখিক প্রতিশ্রুতির থেকে আলাদা।",
    "safety.r5": "এজেন্ট বিএমইটি লাইসেন্স তালিকায় নেই।",
    "safety.r6": "অফিসের ঠিকানা যাচাই করা যায় না বা বারবার বদলায়।",
    "safety.r7": "'ফ্রি ভিসা' অফার - এগুলো অবৈধ ও বিপজ্জনক।",
    "safety.defrauded": "📞 যদি আপনি প্রতারিত হন",
    "safety.d1": "সব প্রমাণ রাখুন: রসিদ, বার্তা, চুক্তি, এজেন্টের নম্বর।",
    "safety.d2": "অন্যদের সতর্ক করতে এই প্ল্যাটফর্মে একটি রিপোর্ট জমা দিন।",
    "safety.d3": "মন্ত্রণালয় / বিএমইটি হটলাইনে কল করুন:",
    "safety.d4": "আপনার নিকটস্থ জেলা কর্মসংস্থান ও জনশক্তি অফিসে (DEMO) যান।",
    "safety.reportNow": "এখনই প্রতারণা রিপোর্ট করুন",

    "dest.title": "সরকারি রিক্রুটমেন্ট ফি ও বেতন",
    "dest.subtitle":
      "এগুলো সরকার-অনুমোদিত খরচ। কোনো এজেন্ট যদি সরকারি ফি-র চেয়ে অনেক বেশি চায়, তবে এটি অতিরিক্ত আদায় বা প্রতারণার বিপদ সংকেত।",
    "dest.officialFee": "সরকারি ফি",
    "dest.monthlySalary": "মাসিক বেতন",
    "dest.commonJobs": "সাধারণ কাজ",
    "dest.processing": "প্রক্রিয়াকরণ",
    "dest.days": "দিন",

    "status.submitted": "জমা হয়েছে",
    "status.under_review": "পর্যালোচনাধীন",
    "status.contacted_for_info": "তথ্যের জন্য যোগাযোগ",
    "status.investigating": "তদন্তাধীন",
    "status.verified_fraud": "যাচাইকৃত প্রতারণা",
    "status.resolved": "নিষ্পত্তি হয়েছে",
    "status.dismissed": "বাতিল",

    "type.money_fraud": "টাকা নিয়ে উধাও",
    "type.job_mismatch": "কাজ মেলেনি",
    "type.visa_false": "ভুয়া ভিসা",
    "type.salary_wrong": "ভুল বেতন",
    "type.missing_contact": "এজেন্টের সাথে যোগাযোগ নেই",
    "type.other": "অন্যান্য",

    "track.title": "আপনার রিপোর্ট ট্র্যাক করুন",
    "track.subtitle": "রিপোর্ট জমা দেওয়ার সময় পাওয়া ট্র্যাকিং নম্বরটি লিখুন।",
    "track.check": "দেখুন",
    "track.trackingNumber": "ট্র্যাকিং নম্বর",
    "track.type": "ধরন",
    "track.verifiedByMinistry": "মন্ত্রণালয় দ্বারা যাচাইকৃত",
    "track.yes": "হ্যাঁ",
    "track.notYet": "এখনো নয়",
    "track.submittedAt": "জমা হয়েছে",
    "track.lastUpdated": "সর্বশেষ হালনাগাদ",

    "sms.title": "এসএমএস যাচাই ডেমো",
    "sms.subtitle":
      "সাধারণ ফোন ব্যবহারকারী কর্মীদের জন্য এসএমএস / ইউএসএসডি অভিজ্ঞতার অনুকরণ - ইন্টারনেট লাগে না। একই লজিক আসল এসএমএস গেটওয়ে চালায়।",
    "sms.intro": "প্রবাসী শিল্ড\nপাঠান: VERIFY <এজেন্সি>, FEE <দেশ>, TIPS, বা HELP",
    "sms.placeholder": "একটি বার্তা লিখুন...",
    "sms.send": "পাঠান",

    "impact.title": "স্বচ্ছতা ও প্রভাব",
    "impact.subtitle":
      "জনসাধারণের জবাবদিহিতাই মূল লক্ষ্য। প্রতিটি অনুসন্ধান, রিপোর্ট ও ব্ল্যাকলিস্ট পদক্ষেপ ট্র্যাক করা হয় যাতে সবাই প্ল্যাটফর্মটির কাজ দেখতে পারে।",
    "impact.agenciesTracked": "তালিকাভুক্ত এজেন্সি",
    "impact.searchesServed": "অনুসন্ধান হয়েছে",
    "impact.reportsFiled": "জমা হওয়া প্রতারণা রিপোর্ট",
    "impact.verifiedFraudCases": "যাচাইকৃত প্রতারণা",
    "impact.blacklisted": "ব্ল্যাকলিস্টেড এজেন্সি",
    "impact.activeAgencies": "যাচাইকৃত সক্রিয় এজেন্সি",
    "impact.viaSms": "এসএমএস-এ অনুসন্ধান",
    "impact.lossReported": "ক্ষতির রিপোর্ট (টাকা)",
    "impact.fraudTypeTitle": "কী ধরনের প্রতারণা রিপোর্ট হয়?",
    "impact.noReports": "এখনো কোনো রিপোর্ট নেই।",
    "impact.ctaText": "এমন কোনো এজেন্সি জানেন যে অস্তিত্বহীন চাকরির জন্য টাকা নিয়েছে?",
    "impact.ctaBtn": "রিপোর্ট করুন ও অন্যদের রক্ষা করুন",

    "report.title": "প্রতারক এজেন্ট রিপোর্ট করুন",
    "report.subtitle":
      "অন্যদের রক্ষা করতে সাহায্য করুন। যাচাই হিসেবে চিহ্নিত করার আগে রিপোর্টগুলো মন্ত্রণালয় দল পর্যালোচনা করে।",
    "report.agencyNameLabel": "যে এজেন্সি / এজেন্টের বিরুদ্ধে রিপোর্ট *",
    "report.agencyNamePh": "এজেন্ট বা এজেন্সির নাম",
    "report.knownAgency": "একটি পরিচিত এজেন্সির বিরুদ্ধে রিপোর্ট করছেন। আপনার রিপোর্ট এর সাথে যুক্ত হবে।",
    "report.typeLabel": "প্রতারণার ধরন *",
    "report.type_money": "টাকা নিয়ে উধাও",
    "report.type_job": "প্রতিশ্রুত কাজের থেকে ভিন্ন",
    "report.type_visa": "ভুয়া বা ভুল ভিসা",
    "report.type_salary": "বেতন ভুল ছিল",
    "report.type_contact": "এজেন্টের সাথে আর যোগাযোগ করা যাচ্ছে না",
    "report.type_other": "অন্যান্য",
    "report.descLabel": "কী ঘটেছে? *",
    "report.descPh": "এজেন্ট কী প্রতিশ্রুতি দিয়েছিল, আপনি কত দিয়েছেন এবং কী ভুল হয়েছে তা বর্ণনা করুন।",
    "report.amountLabel": "ক্ষতির পরিমাণ (টাকা)",
    "report.dateLabel": "ঘটনার তারিখ",
    "report.contactSummary": "আপনার যোগাযোগের তথ্য (ঐচ্ছিক - রিপোর্ট বেনামে হতে পারে)",
    "report.yourName": "আপনার নাম",
    "report.phone": "ফোন",
    "report.location": "জেলা / অবস্থান",
    "report.submit": "রিপোর্ট জমা দিন",
    "report.submitting": "জমা হচ্ছে...",
    "report.disclaimer":
      "আপনার রিপোর্ট অন্য পরিবারগুলোকে সতর্ক করতে সাহায্য করে। মিথ্যা রিপোর্ট মন্ত্রণালয় পর্যালোচনা দল সরিয়ে দিতে পারে।",
    "report.successTitle": "রিপোর্ট জমা হয়েছে",
    "report.successBody":
      "অন্যদের রক্ষা করার জন্য ধন্যবাদ। আপনার রিপোর্টের অবস্থা জানতে এই ট্র্যাকিং নম্বরটি সংরক্ষণ করুন:",
    "report.trackStatus": "অবস্থা ট্র্যাক করুন",
    "report.done": "সম্পন্ন",
    "report.errAgency": "অনুগ্রহ করে যে এজেন্সির বিরুদ্ধে রিপোর্ট করছেন তার নাম লিখুন।",
    "report.errDesc": "কী ঘটেছে তা বর্ণনা করুন (কমপক্ষে ১০ অক্ষর)।",

    "agency.blacklistedWarn": "এই এজেন্সিটি কর্তৃপক্ষ দ্বারা ব্ল্যাকলিস্টেড",
    "agency.doNotPay": "কোনো টাকা দেবেন না।",
    "agency.details": "এজেন্সির বিবরণ",
    "agency.licenseStatus": "লাইসেন্স অবস্থা",
    "agency.owner": "মালিক",
    "agency.phone": "ফোন",
    "agency.email": "ইমেইল",
    "agency.office": "অফিস",
    "agency.division": "বিভাগ",
    "agency.licenseExpiry": "লাইসেন্স মেয়াদ",
    "agency.verification": "যাচাই",
    "agency.notVerified": "যাচাই করা হয়নি",
    "agency.badge": "ব্যাজ",
    "agency.destinations": "গন্তব্য",
    "agency.fraudReports": "প্রতারণা রিপোর্ট",
    "agency.totalReports": "মোট রিপোর্ট",
    "agency.crowdReports": "জনসাধারণের রিপোর্ট",
    "agency.reportThis": "এই এজেন্সি রিপোর্ট করুন",
    "agency.recentReports": "সাম্প্রতিক রিপোর্ট",
    "agency.na": "প্রযোজ্য নয়",
  },
};

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue>({
  lang: "en",
  setLang: () => undefined,
  t: (k) => k,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("ps_lang") as Lang) : null;
    if (saved === "en" || saved === "bn") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("ps_lang", l);
  };

  const t = (key: string) => dict[lang][key] ?? dict.en[key] ?? key;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

export function LanguageToggle() {
  const { lang, setLang } = useI18n();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "bn" : "en")}
      className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-100"
      aria-label="Toggle language"
    >
      {lang === "en" ? "বাংলা" : "English"}
    </button>
  );
}
