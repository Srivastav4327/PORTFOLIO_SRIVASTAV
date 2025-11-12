"use client"

import { useEffect, useRef } from "react"
import FloatingShapes from "./floating-shapes"
import FloatingCode from "./floating-code"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{ x: number; y: number; vx: number; vy: number }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(31, 81, 255, 0.1)"

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />
      <FloatingShapes />
      <FloatingCode />

      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-in-left">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 gradient-text">Hi — I’m Srivastav</h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
            B.Tech student focused on AI & Data Science. I design and build full‑stack web apps (MERN) and
            simple ML prototypes that turn data into practical insights.
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-in-right">
          Currently in my final year, I’ve shipped projects like a rental marketplace and a data analysis
          dashboard — I enjoy taking an idea from a dataset to a working product and iterating fast.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#projects" className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-200 animate-glow">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 font-medium transition-all duration-200">
            Connect with Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
