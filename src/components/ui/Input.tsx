import type React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none rounded transition-colors duration-300 ${className}`}
      {...props}
    />
  )
}
