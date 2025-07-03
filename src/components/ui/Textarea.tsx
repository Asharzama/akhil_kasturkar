import type React from "react"

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none rounded resize-none transition-colors duration-300 ${className}`}
      {...props}
    />
  )
}
