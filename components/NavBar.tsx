"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, Mountain, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

// Define routes array
const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-background text-foreground sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 font-bold text-primary"
          prefetch={false}
        >
          <Mountain className="h-6 w-6 text-accent" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6">
          {routes.map((route, index) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm font-medium text-foreground hover:text-[hsl(var(--chart-1))] transition-colors duration-200"
              prefetch={false}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-muted-foreground hover:text-secondary"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-background">
                <div className="grid gap-4 p-6">
                  {routes.map((route, index) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`text-lg font-medium text-foreground hover:text-[hsl(var(--chart-${
                        index + 1
                      }))] transition-colors duration-200`}
                      prefetch={false}
                    >
                      {route.label}
                    </Link>
                  ))}
                </div>
                <div className="flex justify-center mt-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="text-muted-foreground hover:text-accent hover:bg-secondary/20"
                    aria-label="Toggle theme"
                  >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="ml-2">Toggle Theme</span>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-accent hover:bg-secondary/20"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
