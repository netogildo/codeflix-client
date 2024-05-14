import { DashboardNav } from '@/components/DashboardNav';
import { DashNavGroup, DashNavItem } from '@/types/dashboard';
import React from 'react';

const navGroups: DashNavGroup[] = [
    {
        title: "Cadastros",
        items: [
    
            {
                title: "Clientes",
                href: "/dashboard/comercial/clientes",
                label: "Clientes label"
            },
            {
                title: "Clientes2",
                href: "/dashboard/comercial/clientes2",
                label: "Clientes 2 label"
            }
        ]
    }
];

export default function ComercialLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <DashboardNav module="Comercial" groups={navGroups} />
            <div className="flex flex-col">
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                {children}
                </main>
            </div>
        </div>
    );

}