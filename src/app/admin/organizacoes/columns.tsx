'use client'

import { Organization } from "@/types/admin/Organization";
import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action";

export const columns: ColumnDef<Organization>[] = [
    {
      accessorKey: "name",
      header: "Nome",
    },
    {
        accessorKey: "document_type",
        header: "Tipo",
    },
    {
        accessorKey: "document_number",
        header: "Documento",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />,
    },
  ]