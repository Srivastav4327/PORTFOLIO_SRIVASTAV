"use client"

const skills = [
  { name: "Python", level: 70 },
  { name: "Java (DSA)", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React.js", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 75 },
  { name: "Express.js", level: 75 },
  { name: "HTML & CSS", level: 85 },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 gradient-text text-center">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Professional Bio</h3>
            <p className="text-muted-foreground leading-relaxed">
              I’m Srivastav — a B.Tech student specializing in AI & Data Science (class of 2025). I build
              end-to-end web applications using the MERN stack and apply data analysis to validate ideas.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Currently I focus on practical ML and data-driven features: preprocessing pipelines, model
              prototyping, and integrating results into usable interfaces. I enjoy clean code and iterate
              quickly from concept to demo.
            </p>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Education & Learning</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <p className="text-primary font-semibold">B.Tech — AI & Data Science</p>
                <p className="text-sm text-muted-foreground">2021 - 2025</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="text-primary font-semibold">MERN Stack Development</p>
                <p className="text-sm text-muted-foreground">Full-stack web apps and APIs</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <p className="text-primary font-semibold">Data Structures & Algorithms</p>
                <p className="text-sm text-muted-foreground">Problem solving and efficient code</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="glass-card p-6">
                <div className="mb-3">
                  <span className="text-primary font-semibold">{skill.name}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-cyan-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
