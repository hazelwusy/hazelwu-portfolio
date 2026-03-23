"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, MapPin, ExternalLink, Send } from "lucide-react"

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hazelwu@ad.unc.edu",
      href: "mailto:hazelwu@ad.unc.edu",
      gradient: "from-primary to-accent",
      description: "Best way to reach me",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/hazel-w-a23593239/",
      gradient: "from-[#0077b5] to-[#00a0dc]",
      external: true,
      description: "Professional network",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my work",
      href: "https://github.com/hazelwusy",
      gradient: "from-[#333] to-[#555]",
      external: true,
      description: "Code & projects",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chapel Hill, NC",
      href: "",
      gradient: "from-[#f59e0b] to-[#d97706]",
      isText: true,
      description: "Open to relocation",
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/5 via-accent/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-sm font-mono text-primary tracking-wider uppercase">06</span>
            <span className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
            <span className="text-sm font-mono text-primary tracking-wider uppercase">Get in touch</span>
            <span className="w-12 h-px bg-gradient-to-l from-primary to-transparent" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {"I just graduated and I'm looking for my first full-time role in health tech — product management, strategy, analytics, or operations. If you're working on something interesting in this space, I'd love to chat."}
          </motion.p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <motion.div key={method.label} variants={itemVariants}>
                <motion.div
                  className="group relative h-full bg-card rounded-2xl border border-border overflow-hidden"
                  whileHover={{ 
                    y: -6,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                >
                  {/* Hover gradient border */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-[1px] bg-gradient-to-br ${method.gradient}`}>
                    <div className="absolute inset-[1px] bg-card rounded-2xl" />
                  </div>

                  <div className="relative z-10 p-6 text-center">
                    {/* Icon */}
                    <motion.div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </motion.div>
                    
                    {/* Label */}
                    <h3 className="font-bold text-foreground mb-1">{method.label}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{method.description}</p>
                    
                    {/* Value/Link */}
                    {method.isText ? (
                      <span className="text-sm text-muted-foreground font-medium">{method.value}</span>
                    ) : (
                      <a
                        href={method.href}
                        target={method.external ? "_blank" : undefined}
                        rel={method.external ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-primary focus:rounded transition-colors"
                        aria-label={method.external ? `${method.label} (opens in new window)` : undefined}
                      >
                        {method.value}
                        {method.external && <ExternalLink className="w-3 h-3" aria-hidden="true" />}
                      </a>
                    )}
                  </div>

                  {/* Decorative glow */}
                  <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-t ${method.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="mailto:hazelwu@ad.unc.edu"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-medium shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            Send me an email
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
