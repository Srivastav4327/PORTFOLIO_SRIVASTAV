"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts"

const skillEvolution = [
  { month: "Jan", MERN: 65, AI: 50, Python: 60 },
  { month: "Feb", MERN: 72, AI: 58, Python: 65 },
  { month: "Mar", MERN: 78, AI: 65, Python: 70 },
  { month: "Apr", MERN: 85, AI: 75, Python: 78 },
  { month: "May", MERN: 90, AI: 85, Python: 85 },
]

const radarData = [
  { skill: "React", value: 95 },
  { skill: "Node.js", value: 90 },
  { skill: "AI/ML", value: 85 },
  { skill: "Design", value: 80 },
  { skill: "Leadership", value: 88 },
]

export default function Dashboard() {
  return (
    <section id="dashboard" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 gradient-text text-center">Insights & Analytics</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-8">
            <div className="text-4xl font-bold gradient-text mb-2">2500+</div>
            <p className="text-muted-foreground">Coding Hours</p>
          </div>
          <div className="glass-card p-8">
            <div className="text-4xl font-bold gradient-text mb-2">15+</div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="glass-card p-8">
            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
            <p className="text-muted-foreground">GitHub Repositories</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Skill Evolution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={skillEvolution}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(31, 81, 255, 0.2)" />
                <XAxis stroke="rgba(192, 192, 192, 0.5)" />
                <YAxis stroke="rgba(192, 192, 192, 0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(26, 31, 58, 0.9)",
                    border: "1px solid rgba(31, 81, 255, 0.3)",
                    borderRadius: "8px",
                  }}
                />
                <Line type="monotone" dataKey="MERN" stroke="#1f51ff" strokeWidth={2} />
                <Line type="monotone" dataKey="AI" stroke="#00d4ff" strokeWidth={2} />
                <Line type="monotone" dataKey="Python" stroke="#c0c0c0" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Skills Radar</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="rgba(31, 81, 255, 0.2)" />
                <PolarAngleAxis dataKey="skill" stroke="rgba(192, 192, 192, 0.5)" />
                <PolarRadiusAxis stroke="rgba(192, 192, 192, 0.5)" />
                <Radar name="Skills" dataKey="value" stroke="#1f51ff" fill="#1f51ff" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
