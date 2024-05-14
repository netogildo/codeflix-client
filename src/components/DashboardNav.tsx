'use client'

import { DashNavGroup } from '@/types/dashboard'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Dispatch, SetStateAction } from 'react'
import { Separator } from './ui/separator';
import { Icons } from './Icons';
import { cn } from '@/lib/utils';

interface DashboardNavProps {
    module: string;
    groups: DashNavGroup[];
    setOpen?: Dispatch<SetStateAction<boolean>>;
}

export function DashboardNav({ module, groups, setOpen }: DashboardNavProps) {
    const path = usePathname();

    if (!groups?.length) {
        return null;
    }

  return (
    <>
        <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[48px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <span className="text-lg">{module}</span>
                    </Link>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        {
                            groups.map((group, indexgroup) => {
                                return (
                                    <React.Fragment key={indexgroup}> { }
                                        {/* <> */}
                                        <div>
                                            <div className=" flex space-x-3 mb-2 font-normal px-3 mt-2">
                                                <span className="text-sm text-slate-500 w-full">
                                                    <div className="flex flex-col space-y-2 uppercase font-mono">
                                                    <span>{group.title}</span>
                                                    </div>
                                                </span>
                                            </div>
                                            {
                                                group.items.map((item, index) => {
                                                    const Icon = Icons[item.icon || "arrowRight"];
                                                    return (
                                                        <Link
                                                            href={`${item.href}`}
                                                            key={index}
                                                            onClick={() => {
                                                                if(setOpen) setOpen(false);
                                                            }}
                                                            className="flex items-center gap-3 transition-all hover:text-primary"
                                                            >
                                                                <span
                                                                    className={cn("group flex items-center px-3 py-2 rounded-lg w-full text-sm font-normal hover:bg-accent hover:text-accent-foreground",
                                                                        path === item.href ? "bg-accent bg-gray-400 bg-opacity-10 font-medium" : "transparent",
                                                                        item.disabled && "cursor-not-allowed opacity-80"
                                                                    )}>
                                                                    <Icon className="mr-2 h-4 w-4" />
                                                                    {item.title}
                                                                </span>
                                                        </Link> 
                                                    )
                                                })
                                            }
                                        </div>
                                        <Separator className='my-2' />
                                        {/* </> */}
                                        </React.Fragment>
                                )
                            })
                        }
                    </nav>
                </div>
            </div>
        </div>
    </>
  )
}
