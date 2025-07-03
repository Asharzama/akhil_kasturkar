"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import Navigation from "../components/Navigation"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import Textarea from "../components/ui/Textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

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
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
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
