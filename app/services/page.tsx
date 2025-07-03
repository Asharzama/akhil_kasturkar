"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Palette, Globe, Camera, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Complete brand identity design including logos, color palettes, typography, and brand guidelines.",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography Selection"],
    },
    {
      icon: Globe,
      title: "Web Design",
      description: "Modern, responsive websites that combine beautiful design with exceptional user experience.",
      features: ["Responsive Design", "User Experience", "Interactive Elements", "Performance Optimization"],
    },
    {
      icon: Camera,
      title: "Digital Art",
      description: "Custom digital artwork and illustrations for various applications and creative projects.",
      features: ["Digital Illustrations", "Abstract Art", "Custom Graphics", "Art Direction"],
    },
    {
      icon: Lightbulb,
      title: "Creative Direction",
      description: "Strategic creative direction for campaigns, projects, and brand development initiatives.",
      features: ["Creative Strategy", "Art Direction", "Campaign Development", "Brand Positioning"],
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

      {/* Add the full page navigation menu after the nav */}
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
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6">SERVICES</h1>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive creative services to elevate your brand and bring your vision to life.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="p-8 border border-gray-800 rounded-lg hover:border-amber-400 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <service.icon className="w-12 h-12 text-amber-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-light text-center mb-12">MY PROCESS</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Discovery", description: "Understanding your vision and goals" },
                { step: "02", title: "Strategy", description: "Developing creative direction and approach" },
                { step: "03", title: "Creation", description: "Bringing concepts to life with precision" },
                { step: "04", title: "Delivery", description: "Final refinements and project completion" },
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-4xl font-light text-amber-400 mb-4">{phase.step}</div>
                  <h4 className="text-xl font-light mb-2">{phase.title}</h4>
                  <p className="text-gray-400 text-sm">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center py-20 border-t border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-3xl font-light mb-6">Let's Create Something Amazing</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to elevate your brand with exceptional creative work? Let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-amber-400 text-black hover:bg-amber-500 px-8 py-3">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-8 py-3 bg-transparent"
              >
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
