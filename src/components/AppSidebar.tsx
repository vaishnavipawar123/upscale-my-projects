import { createContext, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  BookOpen,
  Newspaper,
  FileText,
  BarChart3,
  Settings,
  Sparkles,
  PenTool,
  MessageSquare,
  PanelLeftClose,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarContextType {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextType>({
  collapsed: true,
  setCollapsed: () => {},
});

export const useSidebarCollapsed = () => useContext(SidebarContext);

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: BookOpen, label: "PYQ Practice", path: "/pyq-practice" },
  { icon: Newspaper, label: "Current Affairs", path: "/current-affairs" },
  { icon: FileText, label: "Notes Generator", path: "/notes-generator" },
  { icon: PenTool, label: "Mains Evaluator", path: "/mains-evaluator" },
  { icon: MessageSquare, label: "Mock Interview", path: "/mock-interview" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export default function AppSidebar() {
  const { collapsed, setCollapsed } = useSidebarCollapsed();
  const location = useLocation();
  const isMobile = useIsMobile();

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 top-0 h-screen z-50 bg-card border-r border-border flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between h-16 border-b border-border px-4">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="font-bold text-lg gradient-text whitespace-nowrap overflow-hidden"
              >
                UPSC AI
              </motion.span>
            )}
          </AnimatePresence>
        </Link>

        {!collapsed && (
          <button
            onClick={() => setCollapsed(true)}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors flex-shrink-0"
          >
            <PanelLeftClose className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Menu */}
      <nav className="flex-1 py-4 space-y-1 px-3 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          if (collapsed) {
            return (
              <button
                key={item.path}
                onClick={() => setCollapsed(false)}
                className={`w-full flex items-center justify-center h-10 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-primary/10 text-primary glow-sm"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
                title={item.label}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          }

          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => { if (isMobile) setCollapsed(true); }}
              className={`flex items-center gap-3 h-10 px-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-primary/10 text-primary glow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </motion.aside>
  );
}
