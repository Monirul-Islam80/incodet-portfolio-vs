import type { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service | Incodet",
  description: "Terms and Conditions governing the use of the Incodet corporate website and digital portfolio.",
  robots: { index: true, follow: false },
};

export default function TermsOfService() {
  const lastUpdated = "May 27, 2026";

  return (
    <main id="terms">
         <section className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-slate-800 antialiased">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-slate-900">
        Terms of Service
      </h1>
      <p className="text-sm text-slate-500 mb-8 font-mono">Last Updated: {lastUpdated}</p>

      <div className="prose prose-slate max-w-none space-y-8">
        <section>
          <p className="text-lg leading-relaxed text-slate-600">
            Welcome to Incodet. By accessing or using incodet.com (the &ldquo;Site&rdquo;), you agree to comply with and be bound by the following terms and conditions. Please review them carefully. If you do not agree to these terms, you should not use this Site.
          </p>
        </section>

        <hr className="border-slate-200" />

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">1. Intellectual Property Rights</h2>
          <p className="leading-relaxed">
            All content, infrastructure configurations, graphics, source code, visual design elements, and case studies displayed on this Site are the exclusive intellectual property of Incodet, unless otherwise noted. You may not copy, redistribute, reproduce, or republish any part of our website portfolio without prior written consent from us.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">2. Acceptable Use Policy</h2>
          <p className="leading-relaxed">
            When interacting with our Site, contact forms, or public endpoints, you explicitly agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Site in any way that causes, or may cause, damage to the digital infrastructure or impairment of the availability or accessibility of our services.</li>
            <li>Use our contact channels to distribute automated spam, malicious code, tracking software, or phishing content.</li>
            <li>Attempt to reverse-engineer, decompile, or bypass any security configurations protecting the Site or its underlying Vercel edge networks.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">3. No Professional Relationship</h2>
          <p className="leading-relaxed">
            The information presented on this portfolio site is for informational purposes only. Submitting information via our project inquiry forms, contact blocks, or email routing aliases does <strong>not</strong> establish a formal system development or software engineering contract. Formal client engagements are governed exclusively by separate, bilaterally executed contractual frameworks (e.g., Master Services Agreements).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">4. Disclaimer of Warranties (&ldquo;As Is&rdquo;)</h2>
          <p className="leading-relaxed italic bg-slate-50 p-4 rounded border border-slate-100 text-sm">
            This Site and all its contents are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Incodet does not warrant that the website will be completely error-free or run uninterrupted.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">5. Limitation of Liability</h2>
          <p className="leading-relaxed">
            In no event shall Incodet, its founders, or directors be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or inability to access, this corporate website. This limitation applies even if we have been advised of the possibility of such damages.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">6. Governing Law</h2>
          <p className="leading-relaxed">
            These terms shall be governed by and construed in accordance with the laws of your registered business jurisdiction, without regard to its conflict of law principles. Any legal actions arising from the use of this website must be filed in the courts located within our primary corporate operational territory.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">7. Revisions and Modifications</h2>
          <p className="leading-relaxed">
            Incodet reserves the right to modify these website terms at any time without prior notice. By continuing to use the Site after updates are posted, you agree to accept the modified Terms of Service.
          </p>
        </section>
      </div>
    </section>
      <Footer/>

    </main>
   
  );
}