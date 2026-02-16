import { motion } from "framer-motion";
import { Flame, Trophy, BookOpen, BarChart3, Target, Clock, ArrowRight, Star, Check, Shield, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const quickStats = [
  { icon: Flame, label: "Streak", value: "12 Days", color: "text-orange-500" },
  { icon: Trophy, label: "Predicted AIR", value: "52", color: "text-yellow-500" },
  { icon: BookOpen, label: "Mock Tests", value: "8 Done", color: "text-primary" },
  { icon: Target, label: "Revisions", value: "24 Topics", color: "text-accent" },
];

const studyTasks = [
  { task: "Polity: Fundamental Rights Revision", time: "45 min", done: false },
  { task: "Modern History: National Movement", time: "60 min", done: true },
  { task: "Solve 25 PYQ MCQs – Geography", time: "30 min", done: false },
  { task: "Current Affairs Reading", time: "20 min", done: true },
];

const weakSubjects = [
  { subject: "Economy", progress: 42 },
  { subject: "Science & Tech", progress: 55 },
  { subject: "Polity", progress: 68 },
];

const newsItems = [
  "India's GDP growth projected at 7.2% for FY26",
  "New education policy updates for competitive exams",
  "Supreme Court landmark judgment on Article 370",
  "ISRO's Gaganyaan mission update",
];

const feedbacks = [
  { name: "Aarav S.", rank: "AIR 45", text: "This AI platform transformed my preparation. The PYQ analysis is incredibly accurate." },
  { name: "Priya M.", rank: "AIR 112", text: "The mains evaluator gave me insights no coaching could. Highly recommend!" },
  { name: "Rohit K.", rank: "AIR 78", text: "Daily study plans and weak area tracking kept me on schedule throughout." },
  { name: "Sneha D.", rank: "AIR 203", text: "The mock interview feature helped me build confidence for the personality test." },
  { name: "Vikram P.", rank: "AIR 34", text: "Best investment in my UPSC journey. The AI mentor is like having a personal guide." },
];

const reviews = [
  { name: "Ananya R.", location: "Delhi", rating: 5, text: "Switched from traditional coaching to this. My prelims score jumped by 40 marks in just 2 months.", avatar: "A" },
  { name: "Karthik V.", location: "Chennai", rating: 5, text: "The AI-generated study plans are spot-on. It knows exactly where I'm weak and pushes me there.", avatar: "K" },
  { name: "Meera J.", location: "Pune", rating: 5, text: "Mock interviews felt incredibly real. The AI feedback on body language tips was a game-changer.", avatar: "M" },
  { name: "Siddharth G.", location: "Lucknow", rating: 4, text: "Current affairs summaries save me 2 hours daily. Worth every rupee of the subscription.", avatar: "S" },
  { name: "Ritu P.", location: "Jaipur", rating: 5, text: "My answer writing improved drastically with the Mains Evaluator. Got consistent 10+ marks in GS papers.", avatar: "R" },
  { name: "Arjun M.", location: "Bangalore", rating: 5, text: "The PYQ pattern analysis helped me predict 3 questions correctly in Prelims 2025!", avatar: "A" },
];

const plans = [
  {
    name: "Free Trial",
    price: "₹0",
    duration: "3 Days",
    description: "Experience the full platform risk-free",
    features: ["AI Study Planner", "PYQ Practice (limited)", "Current Affairs Daily", "Basic Analytics"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Mains + Prelims",
    price: "₹499",
    originalPrice: "₹999",
    duration: "/month",
    description: "Complete preparation for both stages",
    features: ["Everything in Trial", "Unlimited PYQ Practice", "Mains Answer Evaluator", "Notes Generator", "Full Analytics Dashboard", "Mock Tests"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "IAS Complete",
    price: "₹1,299",
    originalPrice: "₹2,499",
    duration: "/month",
    description: "End-to-end IAS preparation with interview prep",
    features: ["Everything in Mains+Prelims", "AI Mock Interviews", "Personality Test Prep", "1-on-1 AI Mentor", "Priority Support", "Custom Study Roadmap"],
    cta: "Go Premium",
    popular: false,
  },
];

export default function Index() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="p-6 max-w-6xl mx-auto space-y-8"
    >
      {/* Greeting */}
      <motion.div variants={fadeUp}>
        <h1 className="text-3xl font-bold text-foreground">
          Good evening, Aspirant 👋
        </h1>
        <p className="text-muted-foreground mt-1">Let's continue your UPSC journey today.</p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickStats.map((stat) => (
          <div key={stat.label} className="glass-card-hover p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="text-lg font-bold text-foreground">{stat.value}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Study Plan & Weak Subjects */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={fadeUp} className="glass-card p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Today's Study Plan</h2>
            <span className="text-xs font-medium gradient-bg px-2 py-1 rounded-full text-primary-foreground">AI Generated</span>
          </div>
          <div className="space-y-3">
            {studyTasks.map((item, i) => (
              <div
                key={i}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  item.done ? "bg-primary/5 line-through text-muted-foreground" : "bg-secondary"
                }`}
              >
                <span className="text-sm">{item.task}</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {item.time}
                </span>
              </div>
            ))}
          </div>
          <Button className="w-full gradient-bg text-primary-foreground glow-sm hover:opacity-90">
            Start Studying <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

        <motion.div variants={fadeUp} className="glass-card p-6 space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Weak Subjects Tracker</h2>
          <div className="space-y-4">
            {weakSubjects.map((s) => (
              <div key={s.subject} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground">{s.subject}</span>
                  <span className="text-muted-foreground">{s.progress}%</span>
                </div>
                <Progress value={s.progress} className="h-2" />
              </div>
            ))}
          </div>
          <div className="glass-card p-4 gradient-bg-subtle">
            <h3 className="font-semibold text-sm text-foreground">Daily MCQ Challenge</h3>
            <p className="text-xs text-muted-foreground mt-1">25 questions across all subjects</p>
            <Button size="sm" variant="outline" className="mt-3">
              Start Quiz <ArrowRight className="w-3 h-3 ml-1" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Current Affairs */}
      <motion.div variants={fadeUp} className="glass-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Current Affairs Summary</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {newsItems.map((item, i) => (
            <div key={i} className="flex items-start gap-2 p-3 bg-secondary rounded-lg">
              <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-2 flex-shrink-0" />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Pricing Section */}
      <motion.div variants={fadeUp} className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground">Choose Your Plan</h2>
          <p className="text-muted-foreground mt-1">Start free, upgrade when you're ready</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card p-6 space-y-4 relative ${
                plan.popular ? "border-primary/50 glow-md" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{plan.description}</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.duration}</span>
                {plan.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through ml-2">{plan.originalPrice}</span>
                )}
              </div>
              <ul className="space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular
                    ? "gradient-bg text-primary-foreground glow-sm hover:opacity-90"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Reviews Section */}
      <motion.div variants={fadeUp} className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground">What Our Students Say</h2>
          <p className="text-muted-foreground mt-1">Real feedback from real aspirants</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <div key={i} className="glass-card-hover p-5 space-y-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className={`w-3.5 h-3.5 ${j < r.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-primary-foreground text-xs font-bold">
                  {r.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Topper Marquee */}
      <motion.div variants={fadeUp} className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Topper Testimonials</h2>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]">
            {[...feedbacks, ...feedbacks].map((f, i) => (
              <div key={i} className="glass-card p-4 min-w-[280px] flex-shrink-0 space-y-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground">{f.text}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-foreground">{f.name}</span>
                  <span className="text-xs text-primary font-medium">{f.rank}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer variants={fadeUp} className="border-t border-border pt-8 pb-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold gradient-text text-lg">UPSC AI</h3>
            <p className="text-xs text-muted-foreground mt-2">AI-powered UPSC preparation platform for serious aspirants.</p>
          </div>
          {[
            { title: "Platform", links: [
              { label: "PYQ Practice", href: "/pyq-practice" },
              { label: "Mains Evaluator", href: "/mains-evaluator" },
              { label: "Mock Interview", href: "/mock-interview" },
            ]},
            { title: "Resources", links: [
              { label: "Current Affairs", href: "/current-affairs" },
              { label: "Notes Generator", href: "/notes-generator" },
              { label: "Analytics", href: "/analytics" },
            ]},
            { title: "Legal", links: [
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Refund Policy", href: "/refund" },
            ]},
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm text-foreground">{section.title}</h4>
              <ul className="mt-2 space-y-1">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-8">© 2026 UPSC AI. All rights reserved.</p>
      </motion.footer>
    </motion.div>
  );
}
