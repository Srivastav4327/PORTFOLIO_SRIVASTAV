"use client"

import { useState } from "react"
import ProjectModal from "./project-modal"

const projects = [
  {
    id: 1,
    title: "Entrepreneur Connect",
    description: "AI-powered platform connecting entrepreneurs with influencers",
    image: "/networking-platform.jpg",
    tech: ["React", "Node.js", "MongoDB", "AI"],
    details:
      "A sophisticated matching platform using machine learning to connect entrepreneurs with the right influencers for business growth. Features include profile matching, messaging, and deal tracking.",
    github: "https://github.com/Srivastav4327/-entrepreneur-connect-",
  },
  {
    id: 2,
    title: "P2P Rental Platform",
    description: "Web app for renting and sharing items across India",
    image: "/rental-marketplace.jpg",
    tech: ["React", "Firebase", "JavaScript", "Tailwind"],
    details:
      "Full-stack rental marketplace enabling users to share and rent items locally. Built with real-time database synchronization and secure payment integration.",
    github: "https://github.com/Srivastav4327/RentMate",
  },
  {
    id: 3,
    title: "COVID-19 Sentiment Analysis",
    description: "ML-driven analysis of public sentiment using LSTM",
    image: "/data-analysis-dashboard.png",
    tech: ["Python", "LSTM", "NLP", "TensorFlow"],
    details:
      "Advanced NLP project analyzing millions of tweets to understand public sentiment trends during the pandemic using deep learning models.",
    github: "https://github.com/Srivastav4327/COVID-19-Twitter-Sentiment-Analysis",
  },
  {
    id: 4,
    title: "Airbnb Clone",
    description: "Full-stack platform with user auth and real-time CRUD",
    image: "/booking-platform.jpg",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    details:
      "Complete booking platform featuring user authentication, property listings, real-time availability updates, and integrated payment processing.",
    github: "https://github.com/Srivastav4327/Ari-bnb-Clone-WanderLust",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 gradient-text text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-card overflow-hidden cursor-pointer group hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/20 to-accent/20">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}
