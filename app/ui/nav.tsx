"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Ensure component only renders active states on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const isActive = (path: string) => pathname === path;

  const activeStyles = "text-blue-800 underline";
  const inactiveStyles = "font-bold hover:underline hover:text-blue-800";

  const navLinks = [
    { href: "/home", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/services", label: "SERVICES" },
    { href: "/contacts", label: "CONTACTS" },
  ];

  return (
    <nav
      className="h-16 flex items-center justify-between w-full fixed top-0 px-6 shadow-md z-50"
      style={{ backgroundColor: "#edf7f6" }}
    >
      {/* Brand */}
      <div className="flex items-center">
        <Link href="/home" className="font-bold text-2xl">
          CURRENCI
          <span className="block text-xs font-normal text-gray-500">
            Continuous Integration
          </span>
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              mounted && isActive(link.href) ? activeStyles : inactiveStyles
            }
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -40, scaleY: 0.8 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -40, scaleY: 0.8 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="absolute top-16 left-0 w-full bg-[#edf7f6] shadow-md flex flex-col items-center gap-6 py-6 md:hidden origin-top"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link
                  href={link.href}
                  className={
                    mounted && isActive(link.href) ? activeStyles : inactiveStyles
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
