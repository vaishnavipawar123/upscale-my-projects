import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

const studyHours = [
  { day: "Mon", hours: 6 },
  { day: "Tue", hours: 8 },
  { day: "Wed", hours: 5 },
  { day: "Thu", hours: 7 },
  { day: "Fri", hours: 9 },
  { day: "Sat", hours: 4 },
  { day: "Sun", hours: 6 },
];

const progressData = [
  { week: "W1", score: 55 },
  { week: "W2", score: 60 },
  { week: "W3", score: 58 },
  { week: "W4", score: 67 },
  { week: "W5", score: 72 },
  { week: "W6", score: 75 },
];

const subjectStrength = [
  { subject: "Polity", score: 80 },
  { subject: "History", score: 65 },
  { subject: "Geography", score: 70 },
  { subject: "Economy", score: 50 },
  { subject: "Science", score: 60 },
  { subject: "Ethics", score: 75 },
];

export default function PerformanceAnalytics() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-primary" /> Performance Analytics
        </h1>
        <p className="text-sm text-muted-foreground">Track your preparation progress</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Study Hours */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-5">
          <h3 className="font-semibold text-sm text-foreground mb-4">Weekly Study Hours</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={studyHours}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} className="text-xs" />
              <YAxis axisLine={false} tickLine={false} className="text-xs" />
              <Tooltip />
              <Bar dataKey="hours" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Score Progress */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-5">
          <h3 className="font-semibold text-sm text-foreground mb-4">Score Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={progressData}>
              <XAxis dataKey="week" axisLine={false} tickLine={false} className="text-xs" />
              <YAxis axisLine={false} tickLine={false} className="text-xs" />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="hsl(262, 83%, 58%)" strokeWidth={2} dot={{ fill: "hsl(262, 83%, 58%)" }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Radar */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-5 md:col-span-2">
          <h3 className="font-semibold text-sm text-foreground mb-4">Subject Strengths</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={subjectStrength}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" className="text-xs" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar dataKey="score" stroke="hsl(217, 91%, 60%)" fill="hsl(217, 91%, 60%)" fillOpacity={0.2} />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}
