'use client'

import { Organization } from "@/types/admin/Organization";
import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action";

export const columns: ColumnDef<Organization>[] = [
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />,
    },
  ]