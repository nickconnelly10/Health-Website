import type { Metadata } from 'next';
import LegalPageLayout from '../../src/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy - Health & Wellness',
  description: 'Privacy policy for the Health & Wellness website.',
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout>
      <h1 className="text-2xl md:text-[2.5rem] font-semibold text-[#1f2937] mb-4 text-center">
        Privacy Policy
      </h1>
      <p className="mb-6">
        <strong>Last updated:</strong> May 2026
      </p>

      <div className="bg-[#fef3c7] border-l-4 border-[#d97706] p-4 my-4 rounded">
        <strong>IMPORTANT DISCLAIMER:</strong> This website provides educational and
        informational content only. It does not provide medical advice, treatment
        recommendations, or diagnosis. All information is for educational purposes only.
        Always consult qualified healthcare professionals for medical decisions.
      </div>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          This site is an educational resource for health and wellness. We collect minimal
          information:
        </p>
        <ul className="list-disc ml-8 mb-4 space-y-2">
          <li>
            <strong>Usage Data:</strong> Basic analytics to understand how our educational
            content is used
          </li>
          <li>
            <strong>Contact Information:</strong> Only when you voluntarily reach out to us
          </li>
          <li>
            <strong>No Personal Health Data:</strong> We do not collect, store, or process
            personal health information
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          2. How We Use Information
        </h2>
        <p className="mb-4">Any information we collect is used solely for:</p>
        <ul className="list-disc ml-8 mb-4 space-y-2">
          <li>Improving our educational content</li>
          <li>Responding to user inquiries</li>
          <li>Website analytics and performance monitoring</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          3. Health Content Disclaimer
        </h2>
        <div className="bg-[#fef3c7] border-l-4 border-[#d97706] p-4 my-4 rounded">
          <strong>EDUCATION GUIDANCE ONLY:</strong> Content on this site is for educational
          and informational purposes only. It is not medical advice, does not provide
          treatment recommendations, and does not constitute diagnosis. Always consult
          qualified healthcare professionals before making health decisions.
        </div>
        <ul className="list-disc ml-8 mb-4 space-y-2">
          <li>Content is not a substitute for professional medical advice</li>
          <li>We do not diagnose, treat, or cure any medical conditions</li>
          <li>Individual results may vary</li>
          <li>Consult healthcare professionals for medical decisions</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          4. Data Security
        </h2>
        <p className="mb-4">
          We implement reasonable security measures to protect any information we collect.
          However, no internet transmission is completely secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          5. Third-Party Links
        </h2>
        <p className="mb-4">
          Our website may contain links to third-party websites. We are not responsible for
          the privacy practices of these external sites.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          6. Children&apos;s Privacy
        </h2>
        <p className="mb-4">
          We do not knowingly collect information from children under 13. If you are under
          13, please do not use this site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          7. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this privacy policy from time to time. We will notify users of any
          material changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          8. Contact Us
        </h2>
        <p className="mb-4">
          If you have questions about this privacy policy, contact us at:{' '}
          <a href="mailto:nickconnelly10@gmail.com" className="text-[#d97706] underline">
            nickconnelly10@gmail.com
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          9. Legal Jurisdiction
        </h2>
        <p className="mb-4">
          This privacy policy is governed by applicable laws. By using this site, you agree
          to resolve any disputes in the appropriate jurisdiction.
        </p>
      </section>
    </LegalPageLayout>
  );
}
