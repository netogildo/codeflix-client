import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import { Bell, Boxes, DollarSign, FolderKanban, Home, ReceiptText, Truck, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]">
          <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                {/* <Link href="/" className="flex items-center gap-2 font-semibold">
                  <Truck className="h-6 w-6" />
                  <span className="">Pegasus</span>
                </Link>
                <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Toggle notifications</span>
                </Button> */}
                <Link
                      href="#"
                      className="flex items-center justify-start h-10 w-full transition-colors relative"
                    >
                      <div className="absolute inset-y-0 left-0 flex">
                        <div className="flex items-center justify-center -z-10 h-10 w-10 bg-[#1d44b8] rounded-tl-lg rounded-br-lg">
                          <Icons.pegasus className="h-9 w-9"/>
                        </div>
                      </div>
                      <span className={`font-exo ml-14 text-4xl uppercase font-bold opacity-100 transition-opacity duration-200 ease-in-out text-[#1d44b8]`}>Pegasus</span>                      
                    </Link>
              </div>
              <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Home className="h-4 w-4" />
                    Início
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Users className="h-4 w-4" />
                    Organizações
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                  >
                    <ReceiptText className="h-4 w-4" />
                    Contratos
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <DollarSign className="h-4 w-4" />
                    Financeiro
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <FolderKanban className="h-4 w-4" />
                    Planos
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Boxes className="h-4 w-4" />
                    Tenants
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          <main className="flex flex-1 flex-col gap-4">
              {children}
          </main>
        </div>
      )
    }