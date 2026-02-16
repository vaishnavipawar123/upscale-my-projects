import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Index from "./pages/Index";
import AIMentor from "./pages/AIMentor";
import PYQPractice from "./pages/PYQPractice";
import CurrentAffairs from "./pages/CurrentAffairs";
import NotesGenerator from "./pages/NotesGenerator";
import MainsEvaluator from "./pages/MainsEvaluator";
import MockInterview from "./pages/MockInterview";
import PerformanceAnalytics from "./pages/PerformanceAnalytics";
import SettingsPage from "./pages/SettingsPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import RefundPage from "./pages/RefundPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/ai-mentor" element={<AIMentor />} />
            <Route path="/pyq-practice" element={<PYQPractice />} />
            <Route path="/current-affairs" element={<CurrentAffairs />} />
            <Route path="/notes-generator" element={<NotesGenerator />} />
            <Route path="/mains-evaluator" element={<MainsEvaluator />} />
            <Route path="/mock-interview" element={<MockInterview />} />
            <Route path="/analytics" element={<PerformanceAnalytics />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/refund" element={<RefundPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
