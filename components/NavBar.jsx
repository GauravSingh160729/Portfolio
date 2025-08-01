'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/project" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Function to check if link is active
  const isActive = (href) => href === pathname || (href === "/" && pathname === "/");

  return (
    <header className="bg-gradient-to-r from-[#0b1e36]/90 to-[#1a2c47]/90 backdrop-blur-lg shadow-lg sticky top-0 z-50 transition">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Branding */}
        <h1 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
          ✨ <span className="text-blue-300">Gaurav Singh</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative transition after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:origin-left after:transition
                ${
                  isActive(link.href)
                    ? "text-blue-300 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-400 after:scale-x-100"
                    : "hover:text-blue-300 hover:after:bg-gradient-to-r hover:after:from-cyan-500 hover:after:to-blue-400 after:bg-transparent after:scale-x-0"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            // Close (X) Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden px-6 pb-4 space-y-4 text-white font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block transition ${
                isActive(link.href) ? "text-blue-300 font-semibold" : "hover:text-blue-300"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
