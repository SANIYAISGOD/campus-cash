"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full h-auto flex items-center justify-center bg-black-500">
  <Navbar className="absolute top-2" />
  
</div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem href="/" setActive={setActive} active={active} item="Home">
        
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/dashboard">Dashboard</HoveredLink>
            <HoveredLink href="/budgets">Budgets</HoveredLink>
            <HoveredLink href="/groupPay">GroupPay</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Profile">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">View Profile</HoveredLink>
            <HoveredLink href="/individual">Logout</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
