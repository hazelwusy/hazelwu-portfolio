"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface HeaderProps {
  isDark: boolean
  toggleDarkMode: () => void
}

export default function Header({ isDark, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCasesOpen, setIsCasesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const casesRef = useRef<HTMLDivElement>(null)

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  const caseLinks = [
    { href: "/cases/well", label: "Well" },
    { href: "/cases/strutt", label: "Strutt" },
    { href: "/cases/corewell", label: "Corewell" },
  ]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (casesRef.current && !casesRef.current.contains(event.target as Node)) {
        setIsCasesOpen(false)
      }
    }
    
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    window.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:p-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
      >
        Skip to main content
      </a>

      <motion.header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo with hover effect - green to orange gradient */}
            <Link
              href="/"
              className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:rounded group"
            >
              <motion.div 
                className="relative w-9 h-9 bg-primary rounded-xl flex items-center justify-center overflow-hidden shadow-md"
                whileHover={{ scale: 1.05, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-primary-foreground font-bold text-sm relative z-10">HW</span>
              </motion.div>
              <span className="font-bold text-lg hidden sm:inline text-foreground group-hover:text-primary transition-colors">
                Hazel
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.slice(0, 2).map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </span>
                </motion.a>
              ))}
              
              {/* Cases Dropdown */}
              <div ref={casesRef} className="relative">
                <motion.button
                  onClick={() => setIsCasesOpen(!isCasesOpen)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded group"
                  aria-expanded={isCasesOpen}
                  aria-haspopup="true"
                  whileHover={{ y: -2 }}
                >
                  <span className="relative">
                    Cases
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </span>
                  <motion.span
                    animate={{ rotate: isCasesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </motion.button>
                
                <AnimatePresence>
                  {isCasesOpen && (
                    <motion.div 
                      className="absolute top-full left-0 mt-2 w-48 bg-card/98 backdrop-blur-xl border border-border rounded-xl shadow-lg overflow-hidden"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                    >
                      {caseLinks.map((link, index) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors border-b border-border/50 last:border-b-0 group"
                          onClick={() => setIsCasesOpen(false)}
                        >
                          <motion.span
                            initial={{ x: 0 }}
                            whileHover={{ x: 4 }}
                            className="flex items-center gap-3"
                          >
                            <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                            {link.label}
                          </motion.span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(2).map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <motion.button
                onClick={toggleDarkMode}
                className="relative p-2.5 hover:bg-muted rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-primary overflow-hidden"
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-5 h-5 text-warm" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-5 h-5 text-primary" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2.5 hover:bg-muted rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav 
                className="md:hidden pb-4 flex flex-col gap-1" 
                aria-label="Mobile navigation"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                {navLinks.slice(0, 2).map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                
                {/* Cases section in mobile */}
                <div className="px-4 py-2 text-xs font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
                  <span className="w-6 h-px bg-primary/40" />
                  Cases
                </div>
                {caseLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-primary flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {link.label}
                  </Link>
                ))}
                
                {navLinks.slice(2).map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + 5) * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  )
}
