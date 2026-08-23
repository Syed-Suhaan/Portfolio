"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/data/profile";

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="mx-auto flex max-w-[920px] items-center justify-between gap-4 px-7 pt-6 pb-2">
      <Link
        href="/"
        className="font-serif text-xl tracking-tight text-foreground no-underline hover:opacity-80"
      >
        SS
      </Link>

      <nav className="hidden items-center gap-1 md:flex">
        {navLinks.map((link) => (
          <Button key={link.href} variant="ghost" size="sm" asChild>
            <a href={link.href} className="text-muted-foreground hover:text-foreground">
              {link.label}
            </a>
          </Button>
        ))}
      </nav>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="outline" size="sm">
            Menu
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px]">
          <nav className="mt-10 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-serif text-2xl text-foreground no-underline hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
