"use client"

import { useEffect, useState } from "react"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-card backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text">V</div>
        <div className="hidden md:flex gap-8">
          {["About", "Projects", "Dashboard", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item}
            </button>
          ))}
        </div>
        <button
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSd7rgMTEL3HYyB_0aCBnxks1BbP69-IX-S5YEek_ubDjdTF2g/viewform?usp=header', '_blank')}
          className="px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-200"
        >
          Connect
        </button>
      </div>
    </nav>
  )
}
