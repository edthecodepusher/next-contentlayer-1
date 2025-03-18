"use client";
// components/Header.tsx
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex items-center justify-between">
      <ModeToggle />
      {/* Hamburger button for small screens */}
      <button
        className="md:hidden text-slate-900 dark:text-slate-50"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation - Hidden on small screens unless toggled */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:block absolute md:static top-16 left-0 right-0 bg-white dark:bg-slate-950 md:bg-transparent md:dark:bg-transparent p-4 md:p-0 z-10`}
      >
        <ul className="flex flex-col md:flex-row md:ml-auto text-sm font-medium space-y-4 md:space-y-0 md:space-x-6">
          <li>
            <Link
              href="/"
              className="text-slate-900 dark:text-slate-50 hover:text-slate-700 dark:hover:text-slate-300"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-slate-900 dark:text-slate-50 hover:text-slate-700 dark:hover:text-slate-300"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
