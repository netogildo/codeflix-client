import { DashboardNav } from '@/components/DashboardNav';
import { DashNavGroup } from '@/types/dashboard';
import React from 'react';

const navGroups: DashNavGroup[] = [
  {
    title: "Cadastros",
    items: [
      {
          title: "Modal/Serviços",
          href: "/dashboard/operacional/modal-servicos",
          label: "Modal/Serviços",
          // icon: "" BaggageClaim
      },
      {
        title: "Polo/Área Operacional",
        href: "/dashboard/operacional/polo-area-operacional",
        label: "Polo/Área Operacional",
        // icon: "" Warehouse
      },
      {
        title: "Seguradoras",
        href: "/dashboard/operacional/seguradoras",
        label: "Seguradoras",
        // icon: Shield
      },
      {
        title: "Veículos",
        href: "/dashboard/operacional/veiculos",
        label: "Veículos",
        // icon: "" Truck
      },
      {
        title: "Tipos de Ocorrência",
        href: "/dashboard/operacional/tipos-ocorrencia",
        label: "Tipos de Ocorrência",
        // icon: "" ReplaceAll
      }
    ]
  },
  {
    title: "Entregas",
    items: [
      {
        title: "Ocorrências/Entregas",
        href: "#",
        label: "Ocorrências/Entregas",
        // icon: Replace
      }
    ]
  },
  {
    title: "Expedição Nacional",
    items: [
      {
        title: "Averbação",
        href: "#",
        label: "",
        // icon: FileLock2
      },
      {
        title: "Coletas",
        href: "#",
        label: "",
        // icon: Group
      },
      {
        title: "Cotações de Frete",
        href: "#",
        label: "",
        // icon: BadgeDollarSign
      },
      {
        title: "Documentos",
        href: "#",
        label: "",
        // icon: FileInput
      },
      {
        title: "Conhecimentos",
        href: "#",
        label: "",
        // icon: FileCheck2
      },
      {
        title: "Manifestos",
        href: "#",
        label: "",
        // icon: "Files"
      },
      {
        title: "Registro de Sinistros",
        href: "#",
        label: "",
        // icon: TrafficCone
      }
    ]
  }
];

export default function OperacionalLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <DashboardNav module="Operacional" groups={navGroups} />
            <div className="flex flex-col">
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                {children}
                </main>
            </div>
        </div>
      )
    }