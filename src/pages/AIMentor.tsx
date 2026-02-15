import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestedPrompts = [
  "Explain Article 370 in simple terms",
  "Compare parliamentary vs presidential systems",
  "Important current affairs for this month",
  "Tips for ethics answer writing",
];

export default function AIMentor() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I'm your AI UPSC Mentor. Ask me anything about your preparation – from concepts to strategy. 🎯" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      { role: "assistant", content: "That's a great question! Let me break it down for you. This topic frequently appears in Prelims and Mains both. I'd recommend focusing on the constitutional provisions first, then look at recent judicial interpretations. Would you like me to create a detailed note on this?" },
    ]);
    setInput("");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto h-[calc(100vh-2rem)] flex flex-col">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-primary" /> AI Mentor
        </h1>
        <p className="text-sm text-muted-foreground">Your personal UPSC preparation guide</p>
      </motion.div>

      {/* Suggested prompts */}
      <div className="flex flex-wrap gap-2 mb-4">
        {suggestedPrompts.map((p) => (
          <button
            key={p}
            onClick={() => setInput(p)}
            className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                msg.role === "user"
                  ? "gradient-bg text-primary-foreground rounded-br-md"
                  : "glass-card text-foreground rounded-bl-md"
              }`}
            >
              {msg.content}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2 items-end">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything about UPSC..."
          className="resize-none min-h-[48px] max-h-32 bg-card"
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSend())}
        />
        <Button onClick={handleSend} className="gradient-bg text-primary-foreground h-12 w-12 p-0 glow-sm">
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
