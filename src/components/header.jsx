"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/constants";
import Button from "./ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white/60 fixed w-full backdrop-blur-xs">
      <div className="max-w-7xl mx-auto">
        <div className="py-4 items-center flex justify-end">
          {/* Tampilan Desktop */}
          <div className="hidden md:flex space-x-6 font-semibold">
            {navItems.map((item) => (
              <a 
              key={item.href} 
              href={item.href} 
              className={pathname === item.href 
                ? "text-orange-500"
                :  "text-black hover:text-orange-500"
                }
              > {item.label}
              </a>
            ))}
          </div>

          {/* tombol burger dan close */}
          <div className="md:hidden px-4 bg-gray">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Tampilan mobile */}
        {isMenuOpen && (
          <div className="md:hidden px-4">
            <div className="w-auto flex flex-col items-end font-semibold space-y-4">
              {navItems.map((item) => (
              <a 
              key={item.href} 
              href={item.href} 
              className={pathname === item.href 
                ? "text-orange-500"
                :  "text-black hover:text-orange-500"
                }
              > {item.label}
              </a>
            ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
