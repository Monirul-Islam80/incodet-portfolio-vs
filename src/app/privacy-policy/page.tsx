import React from "react";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Incodet",
  description: "Incodet Privacy Policy and Data Governance Framework for Enterprise and Public Sector Systems.",
  robots: { index: true, follow: false }, // Search engines should index this page, but don't need to follow outbound links
};

export default function PrivacyPolicy() {
  const lastUpdated = "May 27, 2026";

  return (
<main id="privacy-policy">
        <section className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-slate-800 antialiased">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-slate-900">
        Privacy Policy & Data Governance
      </h1>
      <p className="text-sm text-slate-500 mb-8 font-mono">Last Updated: {lastUpdated}</p>

      <div className="prose prose-slate max-w-none space-y-8">
        <section>
          <p className="text-lg leading-relaxed text-slate-600">
            Incodet (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates incodet.com (the &ldquo;Site&rdquo;) and designs secure, compliant Software-as-a-Service (SaaS) platforms and custom system architectures. This Privacy Policy details how we handle information across our public corporate infrastructure, with dedicated emphasis on the strict separation of public website analytics and institutional client production data environments.
          </p>
        </section>

        <hr className="border-slate-200" />

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">1. Information We Collect</h2>
          <p className="leading-relaxed">
            Depending on how you interact with our Site and services, we collect information across two distinct categories:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Direct Communications:</strong> Information submitted voluntarily via our contact forms or RFP portals, including your name, institutional/agency email address, corporate telephone number, agency or business name, and project scope details.
            </li>
            <li>
              <strong>Automated Telemetry:</strong> Technical data collected automatically via system logs and hosting infrastructure, including IP addresses, browser types, operating systems, referring URLs, and engagement metrics.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">2. Institutional Data Isolation & Processing Roles</h2>
          <p className="leading-relaxed">
            When constructing systems or serving public-sector applications, Incodet differentiates our data management principles based on legal status:
          </p>
          <blockquote className="border-l-4 border-slate-900 pl-4 italic my-4 text-slate-600">
            <strong>Data Processor Designation:</strong> For all sovereign government platforms and custom enterprise instances, Incodet operates strictly as a <em>Data Processor</em>. The client agency or institution remains the absolute <em>Data Controller</em> and retains 100% legal ownership of all transactional, operational, and citizen datasets processed inside the application environment.
          </blockquote>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Zero Commercial Cross-Contamination:</strong> Institutional, production-level, or system-metadata datasets are strictly isolated. We do not engage in, nor do our systems allow, data brokerage or commercial advertising profiling.
            </li>
            <li>
              <strong>No AI Model Training:</strong> Client production datasets are never used to train public or commercial AI models, ensuring absolute intellectual property preservation and data confidentiality.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">3. Infrastructure Security & Data Sovereignty</h2>
          <p className="leading-relaxed">
            To fulfill the strict data preservation rules required by public-sector procurement boards, our underlying architectural stack utilizes the following constraints:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Geographic Localization:</strong> All core client systems and databases are hosted on localized cloud partitions (such as AWS GovCloud or equivalent domestic sovereign partitions) restricted to the client's home national jurisdiction.
            </li>
            <li>
              <strong>Cryptographic Protection:</strong> Data is protected continuously utilizing Advanced Encryption Standard (AES)-256 protocols while at rest, and transport-layer security (TLS) 1.3 frameworks when in transit.
            </li>
            <li>
              <strong>Audit Logging:</strong> Production database instances record chronological, immutable logging of all administrator and user access read/write queries to provide legal audit readiness during security reviews.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">4. Third-Party Framework Sub-Processors</h2>
          <p className="leading-relaxed">
            To safely deliver our public marketing Site, we integrate with trusted infrastructure vendors who follow strict security practices. Your website metadata is safely distributed across:
          </p>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-sm border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-3 font-semibold text-slate-900">Provider</th>
                  <th className="p-3 font-semibold text-slate-900">Core Purpose</th>
                  <th className="p-3 font-semibold text-slate-900">Compliance Frameworks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3 font-medium">Vercel Inc.</td>
                  <td className="p-3">Edge-Network Website Hosting & Deployment Infrastructure</td>
                  <td className="p-3">SOC 2 Type II, ISO 27001</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Google Analytics</td>
                  <td className="p-3">Anonymized Visitor Telemetry & Performance Optimization</td>
                  <td className="p-3">EU-US Data Privacy Framework</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">5. International Data Rights (GDPR / CCPA Alignment)</h2>
          <p className="leading-relaxed">
            Regardless of geographic location, we grant users comprehensive authority over their website contact information. You retain full entitlement to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request a transparent overview or copy of your contact form data stored within our administrative logs.</li>
            <li>Request the immediate, permanent erasure (&ldquo;Right to be Forgotten&rdquo;) of your contact record from our databases.</li>
            <li>Object to or opt out of any marketing distributions or company news updates.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">6. Governance Inquiries & Contacts</h2>
          <p className="leading-relaxed">
            For formal institutional inquiries regarding data processing addendums (DPAs), architectural compliance frameworks (SOC 2 / NIST), or privacy exercises, please contact our administrative data desk:
          </p>
          <p className="font-mono bg-slate-50 p-4 rounded border border-slate-100 inline-block text-sm">
            Incodet Security & Data Governance<br />
            Email: legal@incodet.com
          </p>
        </section>
      </div>
    </section>
    <Footer/>
</main>
  );
}