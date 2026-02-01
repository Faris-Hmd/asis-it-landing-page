"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowLeft,
  ChevronDown,
  ShieldCheck,
  Activity,
  Briefcase,
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { motion } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSoftwareOpen, setIsSoftwareOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if we are on a page that has a dark hero when transparent
  const isDarkHeroPage =
    pathname === "/about" ||
    pathname === "/software" ||
    pathname.includes("/erp") ||
    pathname.includes("/hospital-management") ||
    pathname.includes("/access-control") ||
    pathname.includes("/software/") ||
    pathname.includes("/privacy-policy") ||
    pathname.includes("/terms-of-service");

  const softwareSubLinks = [
    {
      name: "ERP Systems",
      href: "/software/erp",
      icon: Activity,
      desc: "Resource planning for all sizes",
    },
    {
      name: "Hospital Management",
      href: "/software/hospital-management",
      icon: Briefcase,
      desc: "Care-focused digital systems",
    },
    {
      name: "Access Control",
      href: "/software/access-control",
      icon: Lock,
      desc: "Secure facility management",
    },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Products", href: "/#services" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/5 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled || isMobileMenuOpen
            ? "bg-white/90 backdrop-blur-md shadow-md py-1"
            : "bg-transparent py-2",
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <img
              src="/images/logos/logo.png"
              alt="ASIS IT"
              className={cn(
                "h-12 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105",
                !isScrolled &&
                  isDarkHeroPage &&
                  !isMobileMenuOpen &&
                  "brightness-0 invert",
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors",
                isScrolled
                  ? "text-slate-600 hover:text-primary"
                  : isDarkHeroPage
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-700 hover:text-primary",
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium transition-colors",
                isScrolled
                  ? "text-slate-600 hover:text-primary"
                  : isDarkHeroPage
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-700 hover:text-primary",
              )}
            >
              About
            </Link>

            <Link
              href="/faq"
              className={cn(
                "text-sm font-medium transition-colors",
                isScrolled
                  ? "text-slate-600 hover:text-primary"
                  : isDarkHeroPage
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-700 hover:text-primary",
              )}
            >
              FAQ
            </Link>

            {/* Software Dropdown */}
            <div
              className="relative group py-4"
              onMouseEnter={() => setIsSoftwareOpen(true)}
              onMouseLeave={() => setIsSoftwareOpen(false)}
            >
              <Link
                href="/software"
                className={cn(
                  "text-sm font-medium transition-colors flex items-center gap-1",
                  isScrolled || isSoftwareOpen
                    ? "text-slate-600 hover:text-primary"
                    : isDarkHeroPage
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-700 hover:text-primary",
                )}
              >
                Software{" "}
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform duration-300",
                    isSoftwareOpen && "rotate-180",
                  )}
                />
              </Link>

              {/* Dropdown Menu */}
              <div
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 transition-all duration-300 origin-top overflow-hidden",
                  isSoftwareOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none",
                )}
              >
                <div className="grid gap-2">
                  {softwareSubLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                    >
                      <div className="mt-1 w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:text-primary group-hover/item:bg-primary/10 transition-colors">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 group-hover/item:text-primary transition-colors">
                          {item.name}
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1">
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-slate-50">
                    <Link
                      href="/software"
                      className="group/all flex items-center justify-center gap-2 p-2 text-xs font-bold text-primary hover:text-primary/80 transition-all"
                      onClick={() => setIsSoftwareOpen(false)}
                    >
                      View All Software Solutions
                      <ArrowLeft
                        size={12}
                        className="rotate-180 group-hover/all:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/#services"
              className={cn(
                "text-sm font-medium transition-colors",
                isScrolled
                  ? "text-slate-600 hover:text-primary"
                  : isDarkHeroPage
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-700 hover:text-primary",
              )}
            >
              Products
            </Link>
            <Link
              href="/#contact"
              className={cn(
                "text-sm font-medium transition-colors",
                isScrolled
                  ? "text-slate-600 hover:text-primary"
                  : isDarkHeroPage
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-700 hover:text-primary",
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "md:hidden p-2 transition-colors",
              isScrolled || isMobileMenuOpen
                ? "text-slate-700"
                : isDarkHeroPage
                  ? "text-white"
                  : "text-slate-700",
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              height: "auto",
              display: "block",
              transition: { duration: 0.3, ease: "easeOut" },
            },
            closed: {
              opacity: 0,
              height: 0,
              transitionEnd: { display: "none" },
              transition: { duration: 0.2, ease: "easeIn" },
            },
          }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 overflow-hidden"
        >
          <div className="flex flex-col p-3 gap-1 max-h-[85vh] overflow-y-auto">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={
                  isMobileMenuOpen
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -10 }
                }
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-primary py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between group transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Mobile Software Sub-menu */}
            <div className="py-1 px-1">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 px-2">
                Software Solutions
              </div>
              <div className="grid gap-0.5">
                {softwareSubLinks.map((item, idx) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-all text-slate-600 font-medium text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon size={16} className="text-slate-400" />
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/software"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-all text-primary font-bold text-xs mt-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ArrowLeft size={14} className="rotate-180" />
                  View All Software
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={
                isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
              }
              transition={{ delay: 0.2 }}
              className="pt-2 mt-1 border-t border-slate-100"
            >
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 px-2">
                  <Link
                    href="/privacy-policy"
                    className="text-[10px] text-slate-500 hover:text-primary font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms-of-service"
                    className="text-[10px] text-slate-500 hover:text-primary font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </header>
    </>
  );
}
