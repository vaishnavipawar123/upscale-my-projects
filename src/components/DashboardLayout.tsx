import { useState } from "react";
import { Outlet } from "react-router-dom";
import AppSidebar, { SidebarContext } from "./AppSidebar";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      <div className="min-h-screen bg-background">
        <AppSidebar />
        <main
          className="min-h-screen transition-all duration-300"
          style={{ marginLeft: collapsed ? 72 : 240 }}
        >
          <Outlet />
        </main>
      </div>
    </SidebarContext.Provider>
  );
}
