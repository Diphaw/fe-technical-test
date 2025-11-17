"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "./ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="py-4 items-center flex justify-end">
          {/* Tampilan Desktop */}
          <div className="hidden md:flex space-x-6 font-semibold">
            <a href="#works" className="text-black hover:text-orange-500">
              Works
            </a>
            <a href="#blog" className="text-black hover:text-orange-500">
              Blog
            </a>
            <a href="#contact" className="text-black hover:text-orange-500">
              Contact
            </a>
          </div>

          {/* tombol burger dan close */}
          <div className="md:hidden px-4">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Tampilan mobile */}
        {isMenuOpen && (
          <div className="md:hidden px-4">
            <div className="flex flex-col items-end font-semibold space-y-6">
              <a href="#works" className="text-black hover:text-orange-500">
                Works
              </a>
              <a href="blog" className="text-black hover:text-orange-500">
                Blog
              </a>
              <a href="contact" className="text-black hover:text-orange-500">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
