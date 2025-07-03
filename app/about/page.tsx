"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, Users, Clock } from "lucide-react"
import { Button } from "react-day-picker"
import { Link } from "react-router-dom"

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const stats = [
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: Users, label: "Happy Clients", value: "150+" },
    { icon: Clock, label: "Years Experience", value: "8+" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
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
            className="absolute left-1/2 transform -translate-x-1/2"
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
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6">ABOUT ME</h1>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            {/* Left Column - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="aspect-square bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-lg flex items-center justify-center">
                <div className="text-6xl text-amber-400">JM</div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-light text-amber-400 mb-4">Creative Director & Digital Artist</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                With over 8 years of experience in the creative industry, I specialize in crafting unique digital
                experiences that blend artistry with functionality. My passion lies in creating visually stunning
                designs that tell compelling stories.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe that great design is not just about aesthetics—it's about creating meaningful connections
                between brands and their audiences. Every project I undertake is an opportunity to push creative
                boundaries and deliver exceptional results.
              </p>
              <div className="pt-6">
                <Button className="bg-amber-400 text-black hover:bg-amber-500">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-8 border border-gray-800 rounded-lg hover:border-amber-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <div className="text-3xl font-light mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h3 className="text-3xl font-light text-center mb-12">EXPERTISE</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Brand Identity", "Web Design", "Digital Art", "Creative Direction"].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="p-6 bg-gray-900 rounded-lg text-center hover:bg-gray-800 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-lg font-light">{skill}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
