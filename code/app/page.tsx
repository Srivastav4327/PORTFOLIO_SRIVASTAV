"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Dashboard from "@/components/dashboard"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-gradient-to-b dark:from-background dark:via-[#0f1825] dark:to-background">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Dashboard />
      <Contact />
    </div>
  )
}
