'use client'

import { DashNavModule } from "@/types/dashboard";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";


interface DashboardModuleNavProps {
    modules: DashNavModule[];
    setOpen?: Dispatch<SetStateAction<boolean>>;
    isExpanded: boolean;
}

export function DashboardModuleNav({ modules, setOpen, isExpanded }: DashboardModuleNavProps) {
    const path = usePathname();

    return (
        <>
        {
            modules.map((module, index) => {
                const Icon = Icons[module.icon || "arrowRight"];
                return (
                    <div key={index} className="flex items-center w-full relative">
                        <Link
                            href={module.href}
                            className={cn("flex items-center justify-start w-full h-9 rounded-lg text-muted-foreground transition-colors hover:bg-gray-200 hover:bg-opacity-50 hover:text-accent-foreground md:h-8 overflow-hidden",
                                path === module.href ? "bg-accent bg-gray-400 bg-opacity-10 font-medium text-accent-foreground" : "transparent"
                            )} 
                        >
                            {/* Ícone com posicionamento absoluto para garantir sobreposição */}
                            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <Icon className="h-5 w-5" />
                            </div>
                            {/* O texto é deslocado para não sobrepor o ícone */}
                            <span className={`ml-10 text-sm font-medium ${isExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ease-in-out`}>{module.title}</span>
                        </Link>
                    </div>
                )
            })
        }
        </>
    );
}