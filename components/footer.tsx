"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { href: "mailto:hazelwu@ad.unc.edu", icon: Mail, label: "Email", hoverColor: "hover:text-primary hover:bg-primary/10" },
    { href: "https://www.linkedin.com/in/hazel-w-a23593239/", icon: Linkedin, label: "LinkedIn", hoverColor: "hover:text-[#0077b5] hover:bg-[#0077b5]/10" },
    { href: "https://github.com/hazelwusy", icon: Github, label: "GitHub", hoverColor: "hover:text-foreground hover:bg-muted" },
  ]

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#cases", label: "Cases" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gradient-to-t from-warm/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-primary-foreground font-bold">HW</span>
              </div>
              <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">Hazel Wu</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Health tech enthusiast passionate about building products that make healthcare work better for people.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-4 h-px bg-gradient-to-r from-primary to-transparent" />
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-4 h-px bg-gradient-to-r from-warm to-transparent" />
              Connect
            </h3>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground transition-all ${social.hoverColor}`}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-warm" />
              Chapel Hill, NC
            </p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-warm fill-warm" /> by Shuyan (Hazel) Wu
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
