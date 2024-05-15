'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useTheme } from "next-themes";

export function AdminUserNav() {
    const { theme, setTheme } = useTheme();


    return (
      <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={"link"}
                    className="flex items-center justify-start relative h-9 w-full pl-[2px] focus-visible:ring-transparent hover:no-underline"
                    >
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div className={`flex items-start flex-col space-y-1 ml-2 'opacity-100' transition-opacity duration-200 ease-in-out`}>
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
          <DropdownMenuRadioGroup value={theme}>
            <span className="px-2 py-1.5 text-xs text-gray-100 text-opacity-60">Tema</span>
            <DropdownMenuRadioItem value="system" onClick={() => setTheme("system")}>System</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark" onClick={() => setTheme("dark")}>Dark</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="light" onClick={() => setTheme("light")}>Light</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }