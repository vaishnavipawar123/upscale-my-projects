import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Mic, MicOff, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const interviewQuestions = [
  "Tell me about yourself and your motivation for civil services.",
  "What are the key challenges facing Indian agriculture today?",
  "How would you handle a situation where your senior officer asks you to do something unethical?",
  "Discuss the impact of social media on Indian democracy.",
  "What is your opinion on the One Nation One Election proposal?",
];

export default function MockInterview() {
  const [currentQ, setCurrentQ] = useState(0);
  const [started, setStarted] = useState(false);
  const [recording, setRecording] = useState(false);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-primary" /> Mock Interview
        </h1>
        <p className="text-sm text-muted-foreground">Practice your UPSC personality test with AI</p>
      </motion.div>

      {!started ? (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 text-center space-y-4">
          <div className="w-20 h-20 rounded-full gradient-bg mx-auto flex items-center justify-center glow-md">
            <Bot className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">AI Interview Panel</h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Simulate a real UPSC interview experience. The AI panel will ask you questions based on your DAF, current affairs, and optional subjects.
          </p>
          <Button onClick={() => setStarted(true)} className="gradient-bg text-primary-foreground glow-sm">
            Start Interview
          </Button>
        </motion.div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Panel */}
          <div className="glass-card p-5 space-y-4">
            <h3 className="font-semibold text-sm text-foreground">Interview Panel</h3>
            {["Chairman", "Member 1", "Member 2", "Member 3"].map((member, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <User className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{member}</p>
                  <p className="text-xs text-muted-foreground">{i === 0 ? "Leading" : "Observing"}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Question Area */}
          <div className="md:col-span-2 space-y-4">
            <motion.div key={currentQ} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6 space-y-4">
              <div className="text-xs text-muted-foreground">Question {currentQ + 1} of {interviewQuestions.length}</div>
              <p className="text-lg font-medium text-foreground">{interviewQuestions[currentQ]}</p>
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => setRecording(!recording)}
                  variant={recording ? "destructive" : "default"}
                  className={!recording ? "gradient-bg text-primary-foreground" : ""}
                >
                  {recording ? <MicOff className="w-4 h-4 mr-2" /> : <Mic className="w-4 h-4 mr-2" />}
                  {recording ? "Stop Recording" : "Record Answer"}
                </Button>
                <Button variant="outline" onClick={() => { setCurrentQ((p) => (p + 1) % interviewQuestions.length); setRecording(false); }}>
                  Next Question
                </Button>
              </div>
              {recording && (
                <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1 }} className="flex items-center gap-2 text-destructive text-sm">
                  <span className="w-2 h-2 rounded-full bg-destructive" /> Recording...
                </motion.div>
              )}
            </motion.div>

            <div className="glass-card p-5 space-y-2">
              <h3 className="font-semibold text-sm text-foreground">AI Feedback</h3>
              <p className="text-sm text-muted-foreground">Answer the question to receive detailed feedback on your response quality, body language cues, and content accuracy.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
