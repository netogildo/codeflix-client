import { DashboardNav } from '@/components/DashboardNav';
import { DashNavGroup } from '@/types/dashboard';
import React from 'react';

const navGroups: DashNavGroup[] = [
  {
    title: "Cadastros",
    items: [
      {
          title: "Bancos",
          href: "/dashboard/financeiro/bancos",
          label: "Bancos",
          icon: "landmark"
      },
      {
          title: "Carteiras",
          href: "/dashboard/financeiro/carteiras",
          label: "Carteiras",
          icon: "wallet"
      },
      {
        title: "Centros de Custo",
        href: "/dashboard/financeiro/centros-custo",
        label: "Centros de Custo",
        icon: "handCoins"
      }
    ]
  },
  {
    title: "Contas a Pagar",
    items: [
      {
        title: "Customers",
        href: "#",
        label: "Customers"
        // icon: Users
      }
    ]
  },
  {
    title: "Contas a Receber",
    items: [
      {
        title: "Borderô de Cobrança",
        href: "#",
        icon: "receipt"
      }
    ]
  },
  {
    title: "Faturamento",
    items: [
      {
        title: "Faturamento",
        href: "#"
      }
    ]
  }
]

export default function FinanceiroLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <DashboardNav module="Financeiro" groups={navGroups} />
          <div className="flex flex-col">
              <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              {children}
              </main>
          </div>
      </div>
      )
    }