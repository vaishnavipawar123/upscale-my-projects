import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PenTool, Clock, RotateCcw, Sparkles, CheckCircle, XCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function MainsEvaluator() {
  const [answer, setAnswer] = useState("");
  const [evaluated, setEvaluated] = useState(false);
  const [evaluating, setEvaluating] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (!timerRunning) return;
    const interval = setInterval(() => setTimer((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, [timerRunning]);

  const wordCount = answer.trim() ? answer.trim().split(/\s+/).length : 0;

  const handleEvaluate = () => {
    setEvaluating(true);
    setTimeout(() => {
      setEvaluating(false);
      setEvaluated(true);
      setTimerRunning(false);
    }, 2000);
  };

  const handleReset = () => {
    setAnswer("");
    setEvaluated(false);
    setTimer(0);
    setTimerRunning(false);
  };

  const formatTime = (s: number) => `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <PenTool className="w-6 h-6 text-primary" /> Mains Answer Evaluator AI
        </h1>
        <p className="text-sm text-muted-foreground">Write, evaluate, and improve your UPSC mains answers</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left – Writing Panel */}
        <div className="glass-card p-6 space-y-4">
          <div className="flex gap-2">
            <Select defaultValue="polity">
              <SelectTrigger className="bg-card text-xs"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="polity">Polity</SelectItem>
                <SelectItem value="history">History</SelectItem>
                <SelectItem value="ethics">Ethics</SelectItem>
                <SelectItem value="geography">Geography</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="250">
              <SelectTrigger className="bg-card text-xs w-[100px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="150">10 Marker</SelectItem>
                <SelectItem value="250">15 Marker</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{wordCount} words</span>
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3" />
              <span>{formatTime(timer)}</span>
              <button onClick={() => setTimerRunning(!timerRunning)} className="text-primary text-xs font-medium">
                {timerRunning ? "Pause" : "Start"}
              </button>
            </div>
          </div>

          <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
            <p className="text-sm font-medium text-foreground">"Discuss the role of federalism in strengthening Indian democracy."</p>
          </div>

          <Textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Write your answer here..."
            className="min-h-[300px] bg-card resize-none text-sm"
            onFocus={() => !timerRunning && setTimerRunning(true)}
          />

          <div className="flex gap-2">
            <Button onClick={handleEvaluate} disabled={evaluating || wordCount < 10} className="flex-1 gradient-bg text-primary-foreground glow-sm">
              {evaluating ? (
                <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  Evaluating...
                </motion.span>
              ) : (
                <>Evaluate Answer</>
              )}
            </Button>
            <Button variant="outline" size="icon" onClick={handleReset}>
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Center – Evaluation */}
        <div className="space-y-4">
          {evaluated ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              {/* Score */}
              <div className="glass-card p-5 text-center">
                <p className="text-xs text-muted-foreground mb-1">Overall Score</p>
                <p className="text-4xl font-bold gradient-text">7.5<span className="text-lg text-muted-foreground">/10</span></p>
                <Progress value={75} className="mt-3 h-2" />
              </div>
              {/* Structure */}
              <div className="glass-card p-5 space-y-3">
                <h3 className="font-semibold text-sm text-foreground">Structure Analysis</h3>
                {[
                  { label: "Introduction", pass: true },
                  { label: "Body Structure", pass: true },
                  { label: "Conclusion", pass: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{item.label}</span>
                    {item.pass ? <CheckCircle className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-500" />}
                  </div>
                ))}
              </div>
              {/* Keywords */}
              <div className="glass-card p-5 space-y-2">
                <h3 className="font-semibold text-sm text-foreground">Keywords Coverage</h3>
                <div className="flex flex-wrap gap-1">
                  {["Federalism", "Cooperative", "Article 246"].map((k) => (
                    <span key={k} className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">{k}</span>
                  ))}
                  {["7th Schedule", "NITI Aayog"].map((k) => (
                    <span key={k} className="text-xs px-2 py-0.5 bg-red-100 text-red-700 rounded-full">{k}</span>
                  ))}
                </div>
              </div>
              {/* Suggestions */}
              <div className="glass-card p-5 space-y-2">
                <h3 className="font-semibold text-sm text-foreground">Improvement Suggestions</h3>
                <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4">
                  <li>Add examples from recent committee reports</li>
                  <li>Strengthen conclusion with a futuristic outlook</li>
                  <li>Include a diagram or flow for better marks</li>
                  <li>Reference the Sarkaria Commission</li>
                </ul>
              </div>
              {/* Model Answer */}
              <div className="glass-card p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-sm text-foreground">Model Topper Answer</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Federalism in India, as enshrined in the Constitution, provides a dual polity with division of powers between the Centre and States under Article 246 and the Seventh Schedule. India follows a cooperative federalism model where institutions like NITI Aayog, GST Council, and Inter-State Council foster dialogue. Recent judicial pronouncements have reinforced federal principles while maintaining national unity...
                </p>
              </div>
            </motion.div>
          ) : (
            <div className="glass-card p-6 flex flex-col items-center justify-center h-[400px] text-center">
              <Sparkles className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-muted-foreground text-sm">Write your answer and click Evaluate to get AI feedback</p>
            </div>
          )}
        </div>

        {/* Right – Performance */}
        <div className="space-y-4">
          <div className="glass-card p-5 text-center">
            <p className="text-xs text-muted-foreground">Writing Streak</p>
            <p className="text-3xl font-bold text-foreground mt-1">🔥 7 Days</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs text-muted-foreground mb-2">Average Score</p>
            <p className="text-2xl font-bold gradient-text">7.2/10</p>
            <Progress value={72} className="mt-2 h-2" />
          </div>
          <div className="glass-card p-5 space-y-3">
            <p className="text-xs text-muted-foreground">Weak Subjects</p>
            {[
              { subject: "Ethics", progress: 45 },
              { subject: "Economy", progress: 52 },
              { subject: "Geography", progress: 60 },
            ].map((s) => (
              <div key={s.subject} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-foreground">{s.subject}</span>
                  <span className="text-muted-foreground">{s.progress}%</span>
                </div>
                <Progress value={s.progress} className="h-1.5" />
              </div>
            ))}
          </div>
          <div className="glass-card p-5 space-y-2">
            <p className="text-xs text-muted-foreground">Recent Evaluations</p>
            {["Polity – 8/10", "Ethics – 6.5/10", "History – 7/10"].map((e, i) => (
              <div key={i} className="text-xs text-foreground p-2 bg-secondary rounded-lg">{e}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
