import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PrivacyPage() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp} className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
      <p className="text-xs text-muted-foreground">Last updated: February 16, 2026</p>

      <div className="glass-card p-6 space-y-5 text-sm text-foreground leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">1. Information We Collect</h2>
          <p className="text-muted-foreground"><strong>Personal Information:</strong> Name, email address, phone number, and payment details provided during registration or subscription. <strong>Usage Data:</strong> Study patterns, quiz scores, time spent on modules, device information, and IP address. <strong>AI Interaction Data:</strong> Your inputs to AI features (questions asked, answers submitted for evaluation) to improve service quality.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">2. How We Use Your Information</h2>
          <p className="text-muted-foreground">To provide and personalize AI-driven study recommendations. To process payments and manage subscriptions. To analyze usage patterns and improve platform features. To send important updates about your account or the service. To comply with legal obligations.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">3. Data Storage & Security</h2>
          <p className="text-muted-foreground">Your data is stored on secure, encrypted servers. We implement industry-standard security measures including SSL encryption, secure authentication, and regular security audits. We retain your data only as long as necessary for the purposes outlined in this policy.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">4. Data Sharing</h2>
          <p className="text-muted-foreground">We do not sell your personal data. We may share data with: payment processors for transaction handling; analytics services for platform improvement; law enforcement when required by law. All third-party partners are bound by confidentiality agreements.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">5. Cookies & Tracking</h2>
          <p className="text-muted-foreground">We use essential cookies for authentication and session management. Analytics cookies help us understand platform usage. You can manage cookie preferences through your browser settings.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">6. Your Rights</h2>
          <p className="text-muted-foreground">You have the right to: access your personal data; request correction of inaccurate data; request deletion of your account and associated data; withdraw consent for data processing; export your data in a portable format.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">7. Children's Privacy</h2>
          <p className="text-muted-foreground">The Platform is not intended for users under 16 years of age. We do not knowingly collect personal data from children under 16.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">8. Changes to This Policy</h2>
          <p className="text-muted-foreground">We may update this policy from time to time. Users will be notified of significant changes via email or in-app notification.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">9. Contact</h2>
          <p className="text-muted-foreground">For privacy-related inquiries, contact us at privacy@upscai.in</p>
        </section>
      </div>
    </motion.div>
  );
}
