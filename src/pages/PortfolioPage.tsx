"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ExternalLink } from "lucide-react"
import Navigation from "../components/Navigation"
import Button from "../components/ui/Button"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Branding",
      description: "Complete brand identity for luxury fashion brand",
    },
    {
      id: 2,
      title: "Digital Art Collection",
      category: "Art",
      description: "Abstract digital art series exploring modern themes",
    },
    {
      id: 3,
      title: "Web Experience",
      category: "Web Design",
      description: "Interactive website for creative agency",
    },
    {
      id: 4,
      title: "Creative Campaign",
      category: "Campaign",
      description: "Multi-platform creative campaign for tech startup",
    },
    {
      id: 5,
      title: "Visual Identity",
      category: "Branding",
      description: "Modern visual identity for architecture firm",
    },
    {
      id: 6,
      title: "Digital Installation",
      category: "Art",
      description: "Interactive digital installation for gallery",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

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
            <Button className="bg-amber-400 text-black hover:bg-amber-500 px-8 py-3">
              <Link to="/contact">Start a Project</Link>
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
