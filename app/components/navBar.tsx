'use client';

import React, { useState } from "react";
import { Logo } from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { AlignRight, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const links = [
    { text: "Portfólio", href: "/portfolio" },
    { text: "Projetos", href: "/projetos" },
    { text: "Blog", href: "/blog" },
    { text: "Contato", href: "/contato" },
  ];
  const pathname = usePathname();

  return (
    <nav className="bg-[#F0EEEF] relative z-10 border-2 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
              <Logo />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className={clsx(
                    "px-3 py-2 rounded-md text-sm font-medium",
                    pathname === link.href
                      ? "bg-gray-900 text-white"
                      : "text-gray-700 hover:bg-gray-700 hover:text-white"
                  )}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden border-none">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <AlignRight className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className={clsx(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  pathname === link.href
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-700 hover:text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

