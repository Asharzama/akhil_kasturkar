"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Branding",
      description: "Complete brand identity for luxury fashion brand",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Digital Art Collection",
      category: "Art",
      description: "Abstract digital art series exploring modern themes",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Web Experience",
      category: "Web Design",
      description: "Interactive website for creative agency",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Creative Campaign",
      category: "Campaign",
      description: "Multi-platform creative campaign for tech startup",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Visual Identity",
      category: "Branding",
      description: "Modern visual identity for architecture firm",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Digital Installation",
      category: "Art",
      description: "Interactive digital installation for gallery",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 p-6 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-amber-400 z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              <motion.span
                className="w-6 h-0.5 bg-current block"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-current block mt-1.5"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-current block mt-1.5"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Button>

          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-black font-bold text-xl">
                JM
              </div>
            </Link>
          </motion.div>

          <div className="w-10"></div>
        </div>
      </motion.nav>

      {/* Full Page Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-amber-400 rounded-full"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-amber-400 rounded-full"></div>
            </div>

            <div className="relative z-10 text-center">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Portfolio", href: "/portfolio" },
                  { name: "Services", href: "/services" },
                  { name: "Contact", href: "/contact" },
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-5xl md:text-7xl font-light text-white hover:text-amber-400 transition-all duration-500 tracking-wider"
                      onClick={() => setIsMenuOpen(false)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateX(20px)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateX(0px)"
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-16 space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <p className="text-amber-400 text-lg">Get in touch</p>
                <p className="text-gray-300">hello@jimmymistry.com</p>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6">PORTFOLIO</h1>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A curated selection of my creative work spanning branding, digital art, and web experiences.
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-900">
                  <div className="aspect-[4/3] bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center">
                    <div className="text-4xl text-amber-400 opacity-50">{project.category.charAt(0)}</div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-6">
                      <ExternalLink className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                      <h3 className="text-xl font-light mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-light mb-1">{project.title}</h3>
                      <p className="text-amber-400 text-sm">{project.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-light mb-6">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your creative vision to life with innovative design solutions.
            </p>
            <Button asChild className="bg-amber-400 text-black hover:bg-amber-500 px-8 py-3">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
