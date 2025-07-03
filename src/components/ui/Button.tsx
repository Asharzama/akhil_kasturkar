"use client"

import type React from "react"
import { motion } from "framer-motion"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  children: React.ReactNode
}

export default function Button({ variant = "default", className = "", children, ...props }: ButtonProps) {
  const baseClasses =
    "px-6 py-2 rounded font-medium transition-all duration-300 inline-flex items-center justify-center"

  const variantClasses = {
    default: "bg-amber-400 text-black hover:bg-amber-500",
    outline: "border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black bg-transparent",
  }

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
