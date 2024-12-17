import {
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { House, Tag } from "lucide-react";
import Link from "next/link";

const DashboardSidebarContent = () => {
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Inicio" asChild>
              <Link href="/dashboard">
                <House />
                <span>Inicio</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Categorias" asChild>
              <Link href="/dashboard/categorias">
                <Tag />
                <span>Categorias</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  );
};

export default DashboardSidebarContent;
