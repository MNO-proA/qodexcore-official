"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useHeader } from "@/context/HeaderContext";
import { usePathname } from "next/navigation"; // Import this to check current path

const HeaderSection = () => {
  const { isHovered, setIsHovered } = useHeader();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current path
  const isHomePage = pathname === "/"; // Check if current page is home

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about-us" },
    { title: "Services", href: "/our-services" },
    { title: "Clients", href: "/clients-payment" },
    { title: "Packages", href: "/packages" },
    { title: "Contact Us", href: "/contact-us" },
  ];

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <div
        className="fixed w-full h-20 z-50 hidden md:block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {/* Modified condition: Show header when hovered OR not on home page */}
          {(isHovered || !isHomePage) && (
            <motion.header
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full backdrop-blur-md bg-gradient-to-r from-gray-900/40 to-[#4A4A4A]"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-20">
                  <div className="flex-shrink-0">
                    <Link href="/">
                      <img
                        src="/favicon_qodexcore.svg"
                        alt="Logo"
                        className="h-10"
                      />
                    </Link>
                  </div>

                  <nav className="flex space-x-8">
                    {menuItems.map((item) => (
                      <motion.a
                        key={item.title}
                        href={item.href}
                        className="text-gray-200 hover:text-[#4EE891] transition-all duration-300 text-sm"
                        whileHover={{
                          scale: 1.1,
                          textShadow: "0 0 8px rgb(78, 232, 145)",
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.title}
                      </motion.a>
                    ))}
                  </nav>
                </div>
              </div>
            </motion.header>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Header - Always visible regardless of page */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        transition={{ duration: 0.5 }}
        className="fixed w-full z-50 md:hidden bg-gradient-to-r from-gray-900/40 to-[#4A4A4A] backdrop-blur-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              {
                !isHomePage && <Link href="/">
                <img src="/favicon_qodexcore.svg" alt="Logo" className="h-10" />
              </Link>
              }
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-[#4EE891] transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 w-64 bg-gradient-to-b from-gray-900 to-[#4A4A4A] z-40 md:hidden"
          >
            <div className="pt-20 px-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block py-3 text-gray-300 hover:text-[#4EE891] transition-colors duration-300 border-b border-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderSection;