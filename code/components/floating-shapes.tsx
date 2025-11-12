"use client"

import { useEffect, useRef } from "react"

export default function FloatingShapes() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Shape {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      type: 'circle'
      rotation: number
      rotationSpeed: number

      constructor() {
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
        this.vx = (Math.random() - 0.5) * 0.8
        this.vy = (Math.random() - 0.5) * 0.8
        this.size = Math.random() * 30 + 10
        this.color = `hsl(${Math.random() * 360}, 70%, 60%)`
        this.type = 'circle' // Only circles now
        this.rotation = 0
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.rotation += this.rotationSpeed

        if (this.x < -this.size) this.x = window.innerWidth + this.size
        if (this.x > window.innerWidth + this.size) this.x = -this.size
        if (this.y < -this.size) this.y = window.innerHeight + this.size
        if (this.y > window.innerHeight + this.size) this.y = -this.size
      }

      draw() {
        if (!ctx) return
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.globalAlpha = 0.6

        // Only circles now
        ctx.beginPath()
        ctx.arc(0, 0, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()

        ctx.restore()
      }
    }

    const shapes: Shape[] = []
    for (let i = 0; i < 0; i++) {
      shapes.push(new Shape())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      shapes.forEach(shape => {
        shape.update()
        shape.draw()
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
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-40"
      style={{ zIndex: 1 }}
    />
  )
}
