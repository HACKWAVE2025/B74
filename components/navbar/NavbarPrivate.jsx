"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function NavbarPrivate() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/dashboard" className="text-2xl font-bold tracking-wide">
          🌿 Beeja
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/dashboard" className="hover:text-gray-200">
            Dashboard
          </Link>
          <Link href="/fertilizers" className="hover:text-gray-200">
            Fertilizers
          </Link>
          <Link href="/analyses" className="hover:text-gray-200">
            Analyses
          </Link>
          <Link href="/profile" className="hover:text-gray-200">
            Profile
          </Link>

          <UserButton afterSignOutUrl="/" />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 focus:outline-none"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-green-800 text-center space-y-4 py-4">
          <Link href="/dashboard" className="block hover:text-gray-300">
            Dashboard
          </Link>
          <Link href="/fertilizers" className="block hover:text-gray-300">
            Fertilizers
          </Link>
          <Link href="/analyses" className="block hover:text-gray-300">
            Analyses
          </Link>
          <Link href="/profile" className="block hover:text-gray-300">
            Profile
          </Link>

          <div className="flex justify-center">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      )}
    </nav>
  );
}
