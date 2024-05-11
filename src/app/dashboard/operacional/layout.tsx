import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Bell, CircleUser, Home, LineChart, Menu, Package, Package2, Search, ShoppingCart, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function OperacionalLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]">
          <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link href="#" className="flex items-center gap-2 font-semibold">
                  <span className="text-lg">Operacional</span>
                </Link>
              </div>
              <div className="flex-1">
                {/* <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
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
                      Modal/Serviços
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                      Polo/Área Operacional
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                    >
                      Produtos (Transporte)
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
                    <Users className="h-4 w-4" />
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
                    Averbação CTe
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    Averbação NFe
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    Conhecimentos
                  </Link>
                </nav> */}
                <nav
                    role="menu"
                    aria-label="Sidebar"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                    >
                    <ul>
                        <div className="py-5 px-6">
                            <div className=" flex space-x-3 mb-2 font-normal  ">
                                <span className="text-xs text-slate-500 w-full">Cadastros</span>
                            </div>
                            <ul className="space-y-1">
                                <a className="block" target="_self" href="/dashboard/projects">
                                <span className="group flex max-w-full cursor-pointer items-center space-x-2 border-default py-1 font-normal outline-none ring-foreground focus-visible:z-10 focus-visible:ring-1 group-hover:border-foreground-muted">
                                    <span
                                    title="All projects"
                                    className="w-full truncate text-sm text-foreground-light transition group-hover:text-foreground"
                                    >
                                    All projects
                                    </span>
                                </span>
                                </a>
                            </ul>
                        </div>
                        <Separator />
                        <div className="py-5 px-6">
                            <div className=" flex space-x-3 mb-2 font-normal  ">
                                <span className="text-xs text-slate-500 w-full">Cadastros</span>
                            </div>
                            <ul className="space-y-1">
                                <a className="block" target="_self" href="/dashboard/projects">
                                <span className="group flex max-w-full cursor-pointer items-center space-x-2 border-default py-1 font-normal outline-none ring-foreground focus-visible:z-10 focus-visible:ring-1 group-hover:border-foreground-muted">
                                    <span
                                    title="All projects"
                                    className="w-full truncate text-sm text-foreground-light transition group-hover:text-foreground"
                                    >
                                    All projects
                                    </span>
                                </span>
                                </a>
                            </ul>
                        </div>
                        <Separator />
                        <div className="py-5 px-6">
                            <div className=" flex space-x-3 mb-2 font-normal  ">
                                <span className="text-xs text-slate-500 w-full">Expedição Nacional</span>
                            </div>
                            <ul className="space-y-1">
                                <a className="block" target="_self" href="/dashboard/projects">
                                <span className="group flex max-w-full cursor-pointer items-center space-x-2 border-default py-1 font-normal outline-none ring-foreground focus-visible:z-10 focus-visible:ring-1 group-hover:border-foreground-muted">
                                    <span
                                    title="All projects"
                                    className="w-full truncate text-sm text-foreground-light transition group-hover:text-foreground"
                                    >
                                    Averbação CTe
                                    </span>
                                </span>
                                </a>
                            </ul>
                            <ul className="space-y-1">
                                <a className="block" target="_self" href="/dashboard/projects">
                                <span className="group flex max-w-full cursor-pointer items-center space-x-2 border-default py-1 font-normal outline-none ring-foreground focus-visible:z-10 focus-visible:ring-1 group-hover:border-foreground-muted">
                                    <span
                                    title="All projects"
                                    className="w-full truncate text-sm text-foreground-light transition group-hover:text-foreground"
                                    >
                                    Conhecimentos
                                    </span>
                                </span>
                                </a>
                            </ul>
                        </div>
                        <Separator />
                    </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {/* <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
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
            </header> */}
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              {children}
            </main>
          </div>
        </div>
      )
    }