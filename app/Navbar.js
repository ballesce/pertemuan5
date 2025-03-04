"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold text-white">MyCvOnline</div>

        {/* Toggle Button for Mobile */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navbar Links */}
        <div
          className={`absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-4 py-4 lg:static lg:flex lg:flex-row lg:items-center lg:justify-center lg:py-0 lg:w-auto transition-transform duration-300 lg:translate-x-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <Link href="/" className="text-white hover:text-blue-500">Home</Link>
          <Link href="/about" className="text-white hover:text-blue-500">About</Link>
          <Link href="/skills" className="text-white hover:text-blue-500">Skills</Link>
          <Link href="/services" className="text-white hover:text-blue-500">Services</Link>
          <Link href="/portofolio" className="text-white hover:text-blue-500">Portfolio</Link>
          <Link href="/contact" className="text-white hover:text-blue-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
