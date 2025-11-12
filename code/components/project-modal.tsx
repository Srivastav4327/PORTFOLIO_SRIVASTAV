"use client"

export default function ProjectModal({ project, onClose }: any) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground transition-colors"
        >
          ✕
        </button>

        <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-64 object-cover" />

        <div className="p-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">{project.title}</h2>
          <p className="text-muted-foreground mb-6">{project.details}</p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-lg bg-primary/20 text-primary border border-primary/30 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-200"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
