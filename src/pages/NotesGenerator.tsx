import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Sparkles, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function NotesGenerator() {
  const [topic, setTopic] = useState("");
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    if (topic.trim()) setGenerated(true);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" /> Notes Generator
        </h1>
        <p className="text-sm text-muted-foreground">Generate comprehensive UPSC notes with AI</p>
      </motion.div>

      <div className="glass-card p-6 space-y-4">
        <Select defaultValue="polity">
          <SelectTrigger className="bg-card"><SelectValue placeholder="Select Subject" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="polity">Polity</SelectItem>
            <SelectItem value="history">History</SelectItem>
            <SelectItem value="geography">Geography</SelectItem>
            <SelectItem value="economy">Economy</SelectItem>
            <SelectItem value="ethics">Ethics</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter topic (e.g., Fundamental Rights, Green Revolution, Monsoon Mechanism)"
          className="bg-card min-h-[80px]"
        />
        <Button onClick={handleGenerate} className="gradient-bg text-primary-foreground glow-sm">
          <Sparkles className="w-4 h-4 mr-2" /> Generate Notes
        </Button>
      </div>

      {generated && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Generated Notes: {topic}</h2>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-1" /> Export
            </Button>
          </div>
          <div className="prose prose-sm max-w-none text-foreground space-y-3">
            <h3 className="text-base font-semibold">Overview</h3>
            <p className="text-sm text-muted-foreground">This topic is crucial for both Prelims and Mains. It has been asked multiple times in UPSC examinations, with recent focus on contemporary interpretations and judicial pronouncements.</p>
            <h3 className="text-base font-semibold">Key Points</h3>
            <ul className="text-sm text-foreground space-y-1 list-disc pl-4">
              <li>Constitutional provisions and their historical context</li>
              <li>Landmark Supreme Court judgments and interpretations</li>
              <li>Comparison with international practices</li>
              <li>Recent amendments and policy changes</li>
              <li>Critical analysis for answer writing</li>
            </ul>
            <h3 className="text-base font-semibold">PYQ Connection</h3>
            <p className="text-sm text-muted-foreground">This topic appeared in UPSC 2020 (Prelims Q.23), 2019 (Mains GS-II Q.4), and 2018 (Prelims Q.45). Focus on analytical dimensions.</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
