"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 gradient-text text-center">Get In Touch</h2>
  <p className="text-center text-muted-foreground mb-12">Interested in collaborating? Tell me about your idea and timeline.</p>

        <div className="glass-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="glass-input w-full px-4 py-3"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="glass-input w-full px-4 py-3"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="glass-input w-full px-4 py-3 resize-none h-32"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-200"
            >
              Send Message
            </button>
          </form>

          {submitted && (
            <div className="mt-4 p-4 rounded-lg bg-primary/20 border border-primary/30 text-primary text-center">
              Message sent! I'll get back to you soon.
            </div>
          )}
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <a href="https://github.com/Srivastav4327" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sri-vastav-4baa42214" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="mailto:srisrivastav863@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
