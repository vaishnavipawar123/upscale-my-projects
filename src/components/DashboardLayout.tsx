import { Outlet } from "react-router-dom";
import AppSidebar, { useSidebarCollapsed } from "./AppSidebar";

function LayoutContent() {
  // We can't use useSidebarCollapsed here because AppSidebar provides its own context.
  // Instead, we use a simple approach with CSS transition.
  return (
    <main className="ml-[72px] min-h-screen transition-all duration-300">
      <Outlet />
    </main>
  );
}

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <LayoutContent />
    </div>
  );
}
