import type { Metadata } from 'next';
import LegalPageLayout from '../../src/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Terms of Service - Health & Wellness',
  description: 'Terms of service for the Health & Wellness website.',
};

export default function TermsPage() {
  return (
    <LegalPageLayout>
      <h1 className="text-2xl md:text-[2.5rem] font-semibold text-[#1f2937] mb-4 text-center">
        Terms of Service
      </h1>
      <p className="mb-6">
        <strong>Last updated:</strong> May 2026
      </p>

      <div className="bg-[#fef3c7] border-l-4 border-[#d97706] p-4 my-4 rounded">
        <strong>IMPORTANT DISCLAIMER:</strong> By using this website, you acknowledge that
        all content is for educational and informational purposes only. This site does
        not provide medical advice, treatment recommendations, or diagnosis. Use of this
        site does not create any professional or medical relationship.
      </div>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4">
          By accessing and using this Health & Wellness website, you accept and agree to be
          bound by these Terms of Service. If you do not agree to these terms, please do
          not use this site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          2. Educational Purpose Only
        </h2>
        <p className="mb-4">
          This website is an educational resource providing information about health,
          and wellness. All content is for educational purposes
          only—no medical advice, no treatment recommendations, no diagnosis.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          3. Health Content Disclaimer
        </h2>
        <div className="bg-[#fef3c7] border-l-4 border-[#d97706] p-4 my-4 rounded">
          <strong>EDUCATION GUIDANCE ONLY:</strong> Content on this site is for educational
          and informational purposes only. It is not medical advice, does not provide
          treatment recommendations, and does not constitute diagnosis. Always consult
          qualified healthcare professionals for medical decisions.
        </div>
        <ul className="list-disc ml-8 mb-4 space-y-2">
          <li>Health-related content is for educational purposes only</li>
          <li>We do not provide medical diagnosis, treatment, or cure</li>
          <li>Individual health outcomes may vary significantly</li>
          <li>Always consult qualified healthcare professionals for medical decisions</li>
          <li>We are not responsible for any health outcomes from following information on this site</li>
          <li>Users assume all risks associated with health-related decisions</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          4. No Professional Relationship
        </h2>
        <p className="mb-4">
          Use of this site does not create any professional or medical relationship
          between you and the site operator. We are not your doctors or healthcare
          providers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          5. User Responsibilities
        </h2>
        <p className="mb-4">You agree to:</p>
        <ul className="list-disc ml-8 mb-4 space-y-2">
          <li>Use this site for educational purposes only</li>
          <li>Consult appropriate healthcare professionals for medical decisions</li>
          <li>Not rely solely on this content for critical health decisions</li>
          <li>Understand that all information is provided &quot;as is&quot; without warranties</li>
          <li>Accept responsibility for your own decisions and actions</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          6. Limitation of Liability
        </h2>
        <p className="mb-4">To the maximum extent permitted by law, we shall not be liable for any:</p>
        <ul className="list-disc ml-8 mb-4 space-y-2">
          <li>Direct, indirect, incidental, or consequential damages</li>
          <li>Health outcomes from using or relying on information on this site</li>
          <li>Decisions made based on our educational content</li>
          <li>Interruption or cessation of service</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          7. Indemnification
        </h2>
        <p className="mb-4">
          You agree to indemnify and hold harmless the site operator from any claims,
          damages, or expenses arising from your use of this site or violation of these
          terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          8. Intellectual Property
        </h2>
        <p className="mb-4">
          Content on this site is provided for personal, non-commercial use. You may not
          copy, distribute, or use our content for commercial purposes without
          permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          9. Third-Party Links
        </h2>
        <p className="mb-4">
          This website may contain links to third-party websites. We are not responsible
          for the content, privacy policies, or practices of these external sites.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          10. Service Availability
        </h2>
        <p className="mb-4">
          We strive to maintain site availability but do not guarantee uninterrupted
          access. We may modify, suspend, or discontinue the site at any time.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          11. Changes to Terms
        </h2>
        <p className="mb-4">
          We may update these terms from time to time. Continued use of this site
          constitutes acceptance of any changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          12. Governing Law
        </h2>
        <p className="mb-4">
          These terms are governed by applicable laws. Any disputes shall be resolved in
          the appropriate jurisdiction.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          13. Contact Information
        </h2>
        <p className="mb-4">
          For questions about these terms, contact us at:{' '}
          <a href="mailto:nickconnelly10@gmail.com" className="text-[#d97706] underline">
            nickconnelly10@gmail.com
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          14. Severability
        </h2>
        <p className="mb-4">
          If any provision of these terms is found to be unenforceable, the remaining
          provisions will continue in full force and effect.
        </p>
      </section>
    </LegalPageLayout>
  );
}
