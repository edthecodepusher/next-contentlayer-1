// components/Header.tsx
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex items-center justify-between sticky top-0 z-20 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <ModeToggle />
      <button
        className="md:hidden text-slate-900 dark:text-slate-50"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation with animation */}
      <nav
        className={`${
          isOpen
            ? "block translate-y-0 opacity-100"
            : "hidden -translate-y-full opacity-0 md:translate-y-0 md:opacity-100"
        } md:block absolute md:static top-16 left-0 right-0 bg-white dark:bg-slate-950 md:bg-transparent md:dark:bg-transparent p-4 md:p-0 z-10 transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col md:flex-row md:ml-auto text-sm font-medium space-y-4 md:space-y-0 md:space-x-6">
          <li>
            <Link
              href="/"
              className="text-slate-900 dark:text-slate-50 hover:text-slate-700 dark:hover:text-slate-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-slate-900 dark:text-slate-50 hover:text-slate-700 dark:hover:text-slate-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
