import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle, XCircle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const questions = [
  {
    id: 1,
    question: "Which article of the Indian Constitution deals with the abolition of untouchability?",
    options: ["Article 15", "Article 16", "Article 17", "Article 18"],
    correct: 2,
    explanation: "Article 17 abolishes untouchability and forbids its practice in any form. The enforcement of any disability arising out of untouchability shall be an offence punishable in accordance with law.",
    year: 2020,
    subject: "Polity",
  },
  {
    id: 2,
    question: "The Preamble to the Constitution of India was amended by which Constitutional Amendment?",
    options: ["42nd Amendment", "44th Amendment", "52nd Amendment", "73rd Amendment"],
    correct: 0,
    explanation: "The 42nd Amendment Act, 1976 added three new words – Socialist, Secular and Integrity – to the Preamble.",
    year: 2019,
    subject: "Polity",
  },
  {
    id: 3,
    question: "Which among the following is not a Greenhouse Gas?",
    options: ["Carbon Dioxide", "Methane", "Nitrogen", "Nitrous Oxide"],
    correct: 2,
    explanation: "Nitrogen (N₂) is not a greenhouse gas. The major greenhouse gases are CO₂, CH₄, N₂O, and fluorinated gases.",
    year: 2021,
    subject: "Geography",
  },
];

export default function PYQPractice() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const q = questions[currentQ];

  const handleAnswer = (idx: number) => {
    setSelectedAnswer(idx);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCurrentQ((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-primary" /> PYQ Practice
        </h1>
        <p className="text-sm text-muted-foreground">Practice Previous Year Questions with AI explanations</p>
      </motion.div>

      {/* Filters */}
      <div className="flex gap-3">
        <Select defaultValue="all">
          <SelectTrigger className="w-[160px] bg-card"><SelectValue placeholder="Subject" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subjects</SelectItem>
            <SelectItem value="polity">Polity</SelectItem>
            <SelectItem value="geography">Geography</SelectItem>
            <SelectItem value="history">History</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-[120px] bg-card"><SelectValue placeholder="Year" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            <SelectItem value="2021">2021</SelectItem>
            <SelectItem value="2020">2020</SelectItem>
            <SelectItem value="2019">2019</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Question Card */}
      <motion.div key={q.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6 space-y-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full">{q.subject}</span>
          <span>UPSC {q.year}</span>
          <span>Q{currentQ + 1}/{questions.length}</span>
        </div>
        <h2 className="text-lg font-semibold text-foreground">{q.question}</h2>
        <div className="space-y-2">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => !showExplanation && handleAnswer(i)}
              disabled={showExplanation}
              className={`w-full text-left p-3 rounded-lg text-sm transition-all border ${
                selectedAnswer === null
                  ? "border-border hover:border-primary/30 hover:bg-primary/5"
                  : i === q.correct
                  ? "border-green-500 bg-green-50 text-green-800"
                  : i === selectedAnswer
                  ? "border-red-500 bg-red-50 text-red-800"
                  : "border-border opacity-50"
              }`}
            >
              <div className="flex items-center gap-2">
                {showExplanation && i === q.correct && <CheckCircle className="w-4 h-4 text-green-600" />}
                {showExplanation && i === selectedAnswer && i !== q.correct && <XCircle className="w-4 h-4 text-red-600" />}
                <span>{opt}</span>
              </div>
            </button>
          ))}
        </div>

        {showExplanation && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-primary/5 rounded-lg border border-primary/10">
            <div className="flex items-center gap-2 text-primary font-medium text-sm mb-2">
              <Lightbulb className="w-4 h-4" /> AI Explanation
            </div>
            <p className="text-sm text-foreground">{q.explanation}</p>
          </motion.div>
        )}

        <div className="flex justify-end">
          <Button onClick={nextQuestion} className="gradient-bg text-primary-foreground">
            Next Question
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
