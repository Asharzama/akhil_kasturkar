"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Navigation from "../components/Navigation"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />

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
