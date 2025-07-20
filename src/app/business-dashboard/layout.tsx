import { ReactNode } from "react";

interface BusinessDashboardLayoutProps {
  children: ReactNode;
}

export default function BusinessDashboardLayout({
  children,
}: BusinessDashboardLayoutProps) {
  // No navbar for business dashboard pages - they use their own DashboardLayout component with sidebar
  return <div className="min-h-screen bg-gray-50">{children}</div>;
}
