'use client'

import React, { useState } from 'react';
import Link from 'next/link';

import {
    Settings,
    Truck,
} from "lucide-react"

import { DashboardModuleNav } from '@/components/DashboardModuleNav';
import { DashNavModule } from '@/types/dashboard';
import { DashboardUserNav } from '@/components/DashboardUserNav';
import { cn } from '@/lib/utils';

const navModules: DashNavModule[] = [
  {
    title: "Início",
    href: "#",
    icon: "home"
  },
  {
    title: "Administração",
    href: "#",
    // icon: 
  },
  {
    title: "Clientes",
    href: "#"
  }, 
  {
    title: "Financeiro",
    href: "/dashboard/financeiro/cadastros",
    icon: "dollarSign"
  }
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [userDropdownActive, setUserDropdownActive] = useState(false);


    return (
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
              <aside 
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => {
                    console.log(`mouse leave: ${isExpanded} ${userDropdownActive}`)
                    if (!userDropdownActive) {
                        setIsExpanded(false);
                    }
                }}
                className={cn("fixed inset-y-0 left-0 z-10 hidden flex-col border-r bg-background sm:flex transition-all duration-200 ease-in-out group",
                  (!isExpanded && !userDropdownActive) ? "w-14" : "w-60"
              )}
                >
                <nav className="flex flex-col items-center gap-4 px-2 py-4">
                  <Link
                    href="#"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                  >
                    <Truck className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">Pegasus</span>
                  </Link>
                  <DashboardModuleNav modules={navModules} isExpanded={isExpanded} />
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
                  {/* Ajuste para manter o ícone na parte inferior e o texto aparecer ao lado no hover */}
                  <div className="flex items-center justify-center w-full">
                    <Link
                      href="#"
                      className="flex items-center justify-start w-full h-9 rounded-lg text-muted-foreground transition-colors hover:bg-gray-200 hover:bg-opacity-50 hover:text-accent-foreground md:h-8 relative"
                    >
                      <div className="absolute inset-y-0 py-1 left-0 flex items-center pl-2">
                          <Settings className="h-5 w-5" />
                      </div>
                            {/* O texto é deslocado para não sobrepor o ícone */}
                      <span className={`ml-10 text-sm font-medium ${isExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ease-in-out`}>Configurações</span>
                    </Link>
                  </div>
                  <div className={cn("w-full inset-y-0 py-1 transition-opacity duration-200 ease-in-out hover:bg-gray-200 hover:bg-opacity-50 hover:text-accent-foreground rounded-lg",
                    userDropdownActive ? "bg-gray-200 bg-opacity-50 text-accent-foreground" : ""
                  )}>
                    <DashboardUserNav isExpanded={isExpanded} setIsExpanded={setIsExpanded} userDropdownActive={userDropdownActive} setUserDropdownActive={setUserDropdownActive}/>
                  </div>
                </nav>
              </aside>
              <div className="flex flex-col sm:pl-8">
                <main className="grid flex-1 items-start sm:px-6 sm:py-0">
                    {children}
                </main>
              </div>
            </div>
    )
}