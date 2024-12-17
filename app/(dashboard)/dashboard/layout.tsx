import "@/app/globals.css";
import type { Metadata } from "next";
import { font } from "@/lib/fonts";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import DashboardSidebar from "./_components/sidebar/dashboard-sidebar";

export const metadata: Metadata = {
  title: "Dashboard | LMS Website",
};

export default function DashboardLayout({
  admin,
  student,
  teacher,
}: Readonly<{
  admin: React.ReactNode;
  student: React.ReactNode;
  teacher: React.ReactNode;
}>) {
  const role: "ADMIN" | "STUDENT" | "TEACHER" = "ADMIN";

  const renderNode = {
    ADMIN: admin,
    STUDENT: student,
    TEACHER: teacher,
  };

  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <SidebarProvider>
          <DashboardSidebar />
          <SidebarInset>
            <header className="sticky top-0 bg-background z-50 border-b">
              <div className="h-12 flex items-center px-6">
                <SidebarTrigger />
              </div>
            </header>
            <main className="px-6">
              <section className="pt-[2.5rem] pb-[3rem]">
                {renderNode[role]}
              </section>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
