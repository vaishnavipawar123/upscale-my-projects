import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function RefundPage() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp} className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Refund & Cancellation Policy</h1>
      <p className="text-xs text-muted-foreground">Last updated: February 16, 2026</p>

      <div className="glass-card p-6 space-y-5 text-sm text-foreground leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">1. Free Trial</h2>
          <p className="text-muted-foreground">UPSC AI offers a 3-day free trial for new users. During the trial period, you have full access to trial-eligible features. No payment is required during the trial. If you do not cancel before the trial ends, your subscription will automatically begin, and you will be charged the applicable plan fee.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">2. Cancellation Policy</h2>
          <p className="text-muted-foreground">You may cancel your subscription at any time from your account settings. Upon cancellation, you will retain access until the end of your current billing period. No further charges will be applied after cancellation. Cancellation does not entitle you to a refund for the current billing period.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">3. Refund Eligibility</h2>
          <p className="text-muted-foreground"><strong>Within 7 days of first payment:</strong> If you are unsatisfied with the service, you may request a full refund within 7 days of your first payment. This is a one-time courtesy applicable only to your first subscription. <strong>After 7 days:</strong> Refunds are generally not provided after the 7-day window. Exceptions may be considered on a case-by-case basis for technical issues that prevented access to the platform.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">4. How to Request a Refund</h2>
          <p className="text-muted-foreground">Send an email to refunds@upscai.in with your registered email address, reason for refund, and transaction details. Refund requests are processed within 5-7 business days. Approved refunds will be credited to the original payment method within 7-10 business days.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">5. Plan Changes</h2>
          <p className="text-muted-foreground">You can upgrade your plan at any time. The price difference will be prorated. Downgrades take effect at the start of the next billing cycle. No refunds are provided for downgrades during an active billing period.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">6. Non-Refundable Scenarios</h2>
          <p className="text-muted-foreground">Refunds will not be issued for: failure to cancel before auto-renewal; dissatisfaction with exam results; temporary service interruptions; violation of Terms & Conditions leading to account suspension.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">7. Contact</h2>
          <p className="text-muted-foreground">For refund or cancellation queries, reach us at refunds@upscai.in or support@upscai.in</p>
        </section>
      </div>
    </motion.div>
  );
}
