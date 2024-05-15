'use client'

import { DropdownMenuRadioGroup } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { DropdownMenuRadioItem } from './ui/dropdown-menu'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes';

export default function ChangeThemeUserNav() {
    const { theme, setTheme } = useTheme();


    return (
        <>
        <DropdownMenuRadioGroup value={theme}>
                <span className="px-2 py-1.5 text-[10px] text-slate-400">Tema</span>
                <DropdownMenuRadioItem className="text-xs cursor-pointer" value="system" onClick={() => setTheme("system")}>
                    <Monitor className="mr-2 h-3 w-3"/>
                    Sistema
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="text-xs cursor-pointer" value="dark" onClick={() => setTheme("dark")}>
                    <Moon className="mr-2 h-3 w-3"/>
                    Escuro
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="text-xs cursor-pointer" value="light" onClick={() => setTheme("light")}>
                    <Sun className="mr-2 h-3 w-3"/>
                    Claro
                </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>

        </>
  );
}
