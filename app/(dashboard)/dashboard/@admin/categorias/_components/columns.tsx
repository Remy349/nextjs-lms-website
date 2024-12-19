"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Settings } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

export type TColumn = {
  id: string;
  name: string;
  createdAt: string;
};

export const columns: ColumnDef<TColumn>[] = [
  {
    accessorKey: "name",
    header: "Categoria",
  },
  {
    accessorKey: "createdAt",
    header: "Fecha de creación",
    cell: ({ row }) => {
      const item = row.original;

      return <Badge variant="secondary">{item.createdAt}</Badge>;
    },
  },
  {
    id: "actions",
    header: "Acciones",
    cell: ({ row }) => {
      const item = row.original;

      return (
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" className="size-8" variant="ghost" asChild>
                <Link href={`/dashboard/categorias/${item.id}`}>
                  <Settings className="size-4" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Administrar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
];
