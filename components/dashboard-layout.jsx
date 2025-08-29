"use client";

import React from "react";

import { useState } from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

export function DashboardLayout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar collapsed={sidebarCollapsed} />
      <div className="flex">
        <main
          className={`flex-1 transition-all duration-300 ${
            sidebarCollapsed ? "ml-16" : "ml-64"
          } min-h-[calc(100vh-4rem)]`}
        >
          <Header
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
            sidebarCollapsed={sidebarCollapsed}
          />
          {children}
        </main>
      </div>
    </div>
  );
}
