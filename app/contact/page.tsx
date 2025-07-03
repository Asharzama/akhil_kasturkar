"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import { Button } from "react-day-picker"
import { Link } from "react-router-dom"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@jimmymistry.com",
      href: "mailto:hello@jimmymistry.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New York, NY",
      href: "#",
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
            <Link to="/">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-black font-bold text-xl">
                JM
              </div>
            </Link>
          </motion.div>

          <div className="w-10"></div>
        </div>
      </motion.nav>

      {/* Add the full page navigation menu */}
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
            <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6">CONTACT</h1>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to start your next creative project? Let's discuss how we can bring your vision to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-light mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-amber-400"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-amber-400"
                      required
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-amber-400"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-amber-400 resize-none"
                    required
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full bg-amber-400 text-black hover:bg-amber-500 py-3 flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-light mb-8">Get in Touch</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to discuss new projects and creative opportunities. Whether you're looking for brand
                identity, web design, or creative direction, let's explore how we can work together.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center space-x-4 p-4 border border-gray-800 rounded-lg hover:border-amber-400 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <info.icon className="w-6 h-6 text-amber-400" />
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      <a href={info.href} className="text-white hover:text-amber-400 transition-colors duration-300">
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-12 p-6 bg-gray-900 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <h3 className="text-xl font-light mb-4">Response Time</h3>
                <p className="text-gray-300 text-sm">
                  I typically respond to all inquiries within 24 hours. For urgent projects, please mention it in your
                  message and I'll prioritize accordingly.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
