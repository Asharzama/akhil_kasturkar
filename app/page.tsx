"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "react-day-picker"
import { Link } from "react-router-dom"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex justify-between items-center">
          {/* Hamburger Menu Button */}
          <Button
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

          {/* Centered Logo */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-amber-400"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-black font-bold text-xl">
                JM
              </div>
            </Link>
          </motion.div>

          {/* Empty div for layout balance */}
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
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-amber-400 rounded-full"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-amber-400 rounded-full"></div>
            </div>

            {/* Navigation Items */}
            <div className="relative z-10 text-center">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <Link
                      to={item.href}
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

              {/* Contact Info */}
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

      {/* Hero Section */}
      <main className="flex items-center justify-center min-h-screen px-6">
        <div className="text-center">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-light tracking-widest mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            JIMMY
          </motion.h1>
          <motion.h2
            className="text-6xl md:text-8xl lg:text-9xl font-light tracking-widest"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            MISTRY
          </motion.h2>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <p className="text-xl md:text-2xl font-light text-gray-300 mb-8 tracking-wide">
              Creative Director & Digital Artist
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/portfolio"
                className="inline-block px-8 py-3 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 text-lg font-light tracking-wide"
              >
                View My Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Scroll Indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
