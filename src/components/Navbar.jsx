"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    // { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav
      // className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
      //   isScrolled
      //     ? "bg-[#0a0a0f] backdrop-blur-md bg-opacity-95 border-b border-[#222] shadow-xl"
      //     : "bg-gradient-to-b from-[#111117] to-[#0d0d12] border-b border-[#222]"
      // }`}
      className={` backdrop-blur-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>


      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 group transition-transform hover:scale-105"
          >
            <div className="relative flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Divine Miracle Logo"
                className="h-12 w-12 object-contain"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent tracking-tight">
              Divine Miracle
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative text-sm font-medium transition-all duration-300 px-2 py-1 rounded-lg ${isActive(item.path)
                  ? "text-[#FBD051] bg-gradient-to-r from-yellow-500/10 to-yellow-600/10"
                  : "text-[#FEF2CD] hover:text-[#FBD051] hover:bg-white/5"
                  }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></span>
                )}
              </Link>
            ))}
            <Link
              href="/appointment"
              className="bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#b8860b] text-[#3a0d1e] font-semibold py-3 px-5 rounded-lg hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300"
            >
              <span className="relative z-10">Book Session</span>
              {/* <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700] via-[#f6e27a] to-[#b8860b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
            </Link>

          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-[#FEF2CD] bg-gradient-to-r from-[#222] to-[#333] p-2 rounded-lg hover:from-[#333] hover:to-[#444] transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#222] bg-gradient-to-b from-[#111117] to-[#0a0a0f]">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-sm font-medium transition-all duration-300 px-4 py-3 rounded-lg mx-2 ${isActive(item.path)
                    ? "text-[#FBD051] bg-gradient-to-r from-yellow-500/10 to-yellow-600/10"
                    : "text-[#FEF2CD] hover:text-[#FBD051] hover:bg-white/5"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link
                  href="/appointment"
                  className="relative group w-full bg-[#5210AD] text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 overflow-hidden text-center"
                  onClick={() => setIsOpen(false)} // closes menu after click
                >
                  <span className="relative z-10">Book Session</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5210AD] to-[#6B21A8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[#5210AD]/50 group-hover:shadow-[#5210AD]/80 group-hover:shadow-2xl"></div>
                </Link>

              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
