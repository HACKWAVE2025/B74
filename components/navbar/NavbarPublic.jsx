"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function NavbarPublic() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          🌿 Beeja
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-200">
            About
          </Link>

          <Link href="/sign-in">
            <Button className="bg-white text-green-700 hover:bg-gray-100">
              Sign In
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="bg-white text-green-700 hover:bg-gray-100">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
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
          <Link href="/" className="block hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="block hover:text-gray-300">
            About
          </Link>
          <div className="flex flex-col items-center gap-2">
            <Link href="/sign-in">
              <Button className="bg-white text-green-700 hover:bg-gray-100 w-32">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-white text-green-700 hover:bg-gray-100 w-32">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
