// components/navigation/MobileNav.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { href: "#about", label: "about us" },
  { href: "#portfolio", label: "portfolio" },
  { href: "#team", label: "team" },
  { href: "#contact", label: "contact" },
  { href: "/blog", label: "blog" },
  { href: "/process", label: "process" },
  { href: "/comingsoon", label: "coming soon" },
  { href: "/offers", label: "offers" },
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen((prev) => !prev);
  const closeNav = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="sm:hidden">
      <button
        onClick={toggleNav}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="relative flex place-self-end p-4 text-3xl w-14 h-14 items-center justify-center"
      >
        <HiMenu
          className={`absolute transition-all duration-150 ease-in-out ${
            isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
        />
        <HiX
          className={`absolute transition-all duration-150 ease-in-out ${
            isOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 rotate-45"
          }`}
        />
      </button>

      <nav
        aria-label="Mobile navigation"
        className={`fixed inset-0 top-18 bg-background z-40 transition-all duration-150 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 pt-10 text-lg">
          {links.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={closeNav}
                className="hover:text-rose-600 transition-colors duration-150"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};