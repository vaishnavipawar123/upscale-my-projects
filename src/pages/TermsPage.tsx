import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TermsPage() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp} className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Terms & Conditions</h1>
      <p className="text-xs text-muted-foreground">Last updated: February 16, 2026</p>

      <div className="glass-card p-6 space-y-5 text-sm text-foreground leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">By accessing or using UPSC AI ("the Platform"), you agree to be bound by these Terms and Conditions. If you do not agree to all terms, you may not access or use the Platform.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">2. Description of Service</h2>
          <p className="text-muted-foreground">UPSC AI is an AI-powered educational platform designed to assist users in preparing for the Union Public Service Commission (UPSC) examinations. The platform provides study plans, practice questions, answer evaluation, mock interviews, and related features.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">3. User Accounts</h2>
          <p className="text-muted-foreground">You are responsible for maintaining the confidentiality of your account credentials. You must provide accurate, current, and complete information during registration. You must not share your account with third parties or allow unauthorized access.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">4. Subscription & Payments</h2>
          <p className="text-muted-foreground">Paid subscriptions are billed on a monthly basis. Prices are as displayed at the time of purchase and are subject to change with prior notice. Free trial periods, if offered, automatically convert to paid subscriptions unless cancelled before expiry.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">5. Intellectual Property</h2>
          <p className="text-muted-foreground">All content, features, and functionality on the Platform, including but not limited to text, graphics, logos, AI models, and software, are the exclusive property of UPSC AI and are protected by applicable intellectual property laws.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">6. Prohibited Conduct</h2>
          <p className="text-muted-foreground">Users shall not: reverse-engineer, decompile, or disassemble any part of the Platform; use the service for any unlawful purpose; attempt to gain unauthorized access to any systems; share, resell, or redistribute content without written permission.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">7. Disclaimer of Warranties</h2>
          <p className="text-muted-foreground">The Platform is provided "as is" without warranties of any kind. UPSC AI does not guarantee exam success or specific outcomes. AI-generated content is for educational purposes and may contain inaccuracies.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">8. Limitation of Liability</h2>
          <p className="text-muted-foreground">In no event shall UPSC AI be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">9. Governing Law</h2>
          <p className="text-muted-foreground">These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">10. Contact</h2>
          <p className="text-muted-foreground">For questions about these Terms, contact us at support@upscai.in</p>
        </section>
      </div>
    </motion.div>
  );
}
