import { Sidebar } from "@/components/ui/sidebar";
import DashboardSidebarHeader from "./dashboard-sidebar-header";
import DashboardSidebarContent from "./dashboard-sidebar-content";

const DashboardSidebar = () => {
  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <DashboardSidebarHeader />
      <DashboardSidebarContent />
    </Sidebar>
  );
};

export default DashboardSidebar;
