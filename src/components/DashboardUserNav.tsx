'use client'

import Link from "next/link";
import { Icons } from "./Icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "./ui/dropdown-menu";
import ChangeThemeUserNav from "./ChangeThemeUserNav";

interface DashboardUserNavProps {
    isExpanded: boolean;
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
    userDropdownActive: boolean;
    setUserDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export function DashboardUserNav({ isExpanded, setIsExpanded, userDropdownActive, setUserDropdownActive }: DashboardUserNavProps) {

    return (
      <DropdownMenu onOpenChange={(isOpen) => {
            setIsExpanded(isOpen);
            setUserDropdownActive(isOpen);
        }}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={"link"}
                    className="flex items-center justify-start relative h-9 w-full pl-[2px] focus-visible:ring-transparent hover:no-underline"
                    >
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div className={`flex items-start flex-col space-y-1 ml-2 ${isExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ease-in-out`}>
                        <p className="text-sm font-medium leading-none">shadcn</p>
                        <p className="text-xs leading-none text-muted-foreground">
                        m@example.com
                        </p>
                    </div>
                </Button>
            </DropdownMenuTrigger>   
        <DropdownMenuContent className="w-60 ml-4" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">shadcn</p>
              <p className="text-xs leading-none text-muted-foreground">
                m@example.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
              <Link
                href="/admin/organizacoes"
                className="flex w-full items-center gap-2">
                <Icons.bolt className="h-4 w-4" />
              Administração
              </Link>
            </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>New Team</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <ChangeThemeUserNav />
        <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }