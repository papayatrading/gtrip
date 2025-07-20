import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  // No navbar for dashboard pages - they use their own DashboardLayout component with sidebar
  return <div className="min-h-screen bg-gray-50">{children}</div>;
}
