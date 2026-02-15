import { motion } from "framer-motion";
import { Users, MessageCircle, ThumbsUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const discussions = [
  { title: "Best strategy for Ethics paper?", author: "Aarav S.", replies: 24, likes: 45, time: "2h ago", tag: "Strategy" },
  { title: "How to cover current affairs daily in 30 min?", author: "Priya M.", replies: 18, likes: 32, time: "4h ago", tag: "Current Affairs" },
  { title: "Optional subject: Sociology vs Political Science", author: "Rohit K.", replies: 31, likes: 28, time: "6h ago", tag: "Optional" },
  { title: "Answer writing practice group – daily challenge", author: "Sneha D.", replies: 56, likes: 89, time: "8h ago", tag: "Mains" },
  { title: "CSAT preparation tips for non-math background", author: "Vikram P.", replies: 12, likes: 19, time: "12h ago", tag: "Prelims" },
];

export default function Community() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" /> Community
          </h1>
          <p className="text-sm text-muted-foreground">Connect with fellow aspirants</p>
        </div>
        <Button className="gradient-bg text-primary-foreground">New Discussion</Button>
      </motion.div>

      <div className="space-y-3">
        {discussions.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card-hover p-5 cursor-pointer"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">{d.tag}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {d.time}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground">{d.title}</h3>
                <p className="text-xs text-muted-foreground">by {d.author}</p>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> {d.replies}</span>
                <span className="flex items-center gap-1"><ThumbsUp className="w-3.5 h-3.5" /> {d.likes}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
