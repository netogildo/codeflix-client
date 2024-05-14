import { Icons } from "@/components/Icons";

export interface DashNavModule {
    title: string;
    href: string;
    icon?: keyof typeof Icons;
}

export interface DashNavItem {
    title: string;
    href?: string;
    disabled?: boolean;
    icon?: keyof typeof Icons;
    label?: string;
    description?: string;   
}

export interface DashNavGroup {
    title: string;
    items: DashNavItem[];
}

