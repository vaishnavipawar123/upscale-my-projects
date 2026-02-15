import { motion } from "framer-motion";
import { Newspaper, Globe, Scale, Leaf, Cpu } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  {
    id: "national",
    label: "National",
    icon: Globe,
    articles: [
      { title: "India's GDP growth projected at 7.2% for FY26", date: "Feb 15, 2026", summary: "The Economic Survey highlights robust growth driven by domestic consumption and infrastructure investment." },
      { title: "New Education Policy updates for competitive exams", date: "Feb 14, 2026", summary: "UGC announces revised guidelines for entrance examinations under NEP 2020 framework." },
      { title: "Supreme Court landmark judgment on federalism", date: "Feb 13, 2026", summary: "A nine-judge bench delivers historic ruling clarifying Centre-State relations under Article 246." },
    ],
  },
  {
    id: "international",
    label: "International",
    icon: Globe,
    articles: [
      { title: "G20 Summit outcomes and India's role", date: "Feb 15, 2026", summary: "India proposes new framework for digital public infrastructure at the global level." },
      { title: "UN Climate Summit COP31 key takeaways", date: "Feb 14, 2026", summary: "Nations agree on enhanced climate financing mechanism for developing countries." },
    ],
  },
  {
    id: "economy",
    label: "Economy",
    icon: Scale,
    articles: [
      { title: "RBI monetary policy review highlights", date: "Feb 15, 2026", summary: "Repo rate maintained at 6.0%; focus on inflation management and financial stability." },
      { title: "India becomes 4th largest economy globally", date: "Feb 13, 2026", summary: "PPP-adjusted GDP surpasses Japan, making India the world's 4th largest economy." },
    ],
  },
  {
    id: "environment",
    label: "Environment",
    icon: Leaf,
    articles: [
      { title: "ISRO launches climate monitoring satellite", date: "Feb 15, 2026", summary: "New EOS-08 satellite will monitor air quality, forest cover, and ocean temperature." },
    ],
  },
  {
    id: "science",
    label: "Sci & Tech",
    icon: Cpu,
    articles: [
      { title: "Gaganyaan mission update – crew selection finalized", date: "Feb 14, 2026", summary: "ISRO confirms four astronauts selected for India's first manned space mission." },
    ],
  },
];

export default function CurrentAffairs() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Newspaper className="w-6 h-6 text-primary" /> Current Affairs
        </h1>
        <p className="text-sm text-muted-foreground">AI-curated daily current affairs for UPSC</p>
      </motion.div>

      <Tabs defaultValue="national">
        <TabsList className="bg-card border border-border">
          {categories.map((c) => (
            <TabsTrigger key={c.id} value={c.id} className="text-xs">{c.label}</TabsTrigger>
          ))}
        </TabsList>
        {categories.map((cat) => (
          <TabsContent key={cat.id} value={cat.id} className="space-y-3 mt-4">
            {cat.articles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-hover p-5 space-y-2 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                  <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">{cat.label}</span>
                </div>
                <h3 className="font-semibold text-foreground">{article.title}</h3>
                <p className="text-sm text-muted-foreground">{article.summary}</p>
              </motion.div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
