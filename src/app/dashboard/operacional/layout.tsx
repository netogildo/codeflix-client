import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ArrowUpRight, BadgeDollarSign, BaggageClaim, Combine, FileCheck2, FileInput, FileLock2, FileStack, Files, Group, Home, LineChart, Menu, NotebookTabs, Package, Package2, Replace, ReplaceAll, Shield, ShoppingCart, SquareStack, TrafficCone, Truck, Users, Warehouse } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function OperacionalLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[48px] lg:px-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <span className="text-lg">Operacional</span>
              </Link>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <div>
                  <div className=" flex space-x-3 mb-2 font-normal px-3 mt-2">
                    <span className="text-sm text-slate-500 w-full">
                      <div className="flex flex-col space-y-2 uppercase font-mono">
                        <span>Cadastros</span>
                      </div>
                    </span>
                  </div>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <BaggageClaim className="h-4 w-4" />
                    Modal/Serviços
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Warehouse className="h-4 w-4" />
                    Polo/Área Operacional
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                  >
                    <Shield className="h-4 w-4" />
                    Seguradoras
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                  >
                    <NotebookTabs className="h-4 w-4" />
                    Tipos de Operação/Serviços
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Truck className="h-4 w-4" />
                    Veículos
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <ReplaceAll className="h-4 w-4" />
                    Tipos de Ocorrência
                  </Link>
                </div>
                <Separator className='my-2' />
                <div className=" flex space-x-3 mb-2 font-normal px-3 mt-2">
                    <span className="text-sm text-slate-500 w-full">
                      <div className="flex flex-col space-y-2 uppercase font-mono">
                        <span>Entregas</span>
                      </div>
                    </span>
                  </div>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Replace className="h-4 w-4" />
                  Ocorrências/Entregas
                </Link>
                <Separator className='my-2' />
                <div className=" flex space-x-3 mb-2 font-normal px-3 mt-2">
                  <span className="text-sm text-slate-500 w-full">
                    <div className="flex flex-col space-y-2 uppercase font-mono">
                      <span>Expedição Nacional</span>
                    </div>
                  </span>
                </div>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <FileLock2 className="h-4 w-4" />
                  Averbação
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Group className="h-4 w-4" />
                  Coletas
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <BadgeDollarSign className="h-4 w-4" />
                  Cotações de Frete
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <FileInput className="h-4 w-4" />
                  Documentos
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <FileCheck2 className="h-4 w-4" />
                  Conhecimentos
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Files className="h-4 w-4" />
                  Manifestos
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <TrafficCone className="h-4 w-4" />
                  Registro de Sinistros
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[48px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Package2 className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Orders
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      6
                    </Badge>
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Package className="h-5 w-5" />
                    Products
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Users className="h-5 w-5" />
                    Customers
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <LineChart className="h-5 w-5" />
                    Analytics
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
          </main>
        </div>
      </div>
      )
    }