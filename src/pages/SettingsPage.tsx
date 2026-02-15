import { motion } from "framer-motion";
import { Settings, User, Bell, Shield, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SettingsPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Settings className="w-6 h-6 text-primary" /> Settings
        </h1>
        <p className="text-sm text-muted-foreground">Manage your account and preferences</p>
      </motion.div>

      {/* Profile */}
      <div className="glass-card p-6 space-y-4">
        <div className="flex items-center gap-2 text-foreground font-semibold">
          <User className="w-4 h-4" /> Profile
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input defaultValue="Aspirant" className="bg-card" />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input defaultValue="aspirant@upscai.com" className="bg-card" />
          </div>
          <div className="space-y-2">
            <Label>Optional Subject</Label>
            <Select defaultValue="sociology">
              <SelectTrigger className="bg-card"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="sociology">Sociology</SelectItem>
                <SelectItem value="polsci">Political Science</SelectItem>
                <SelectItem value="geography">Geography</SelectItem>
                <SelectItem value="history">History</SelectItem>
                <SelectItem value="pub-admin">Public Administration</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Attempt Number</Label>
            <Select defaultValue="1">
              <SelectTrigger className="bg-card"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1st Attempt</SelectItem>
                <SelectItem value="2">2nd Attempt</SelectItem>
                <SelectItem value="3">3rd Attempt</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="glass-card p-6 space-y-4">
        <div className="flex items-center gap-2 text-foreground font-semibold">
          <Bell className="w-4 h-4" /> Notifications
        </div>
        <div className="space-y-3">
          {[
            { label: "Daily study reminders", default: true },
            { label: "Current affairs alerts", default: true },
            { label: "Mock test notifications", default: false },
            { label: "Community replies", default: true },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <span className="text-sm text-foreground">{item.label}</span>
              <Switch defaultChecked={item.default} />
            </div>
          ))}
        </div>
      </div>

      <Button className="gradient-bg text-primary-foreground glow-sm">Save Changes</Button>
    </div>
  );
}
