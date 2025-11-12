"use client"

import { useEffect, useState } from "react"

export default function FloatingCode() {
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  // Developer-relevant code snippets - expanded to sentences and paragraphs
  const codeSnippets = [
    "const developer = { passion: 'coding', skills: ['JavaScript', 'Python', 'React'], experience: 'building amazing applications' };",
    "function createInnovation() { const idea = 'brilliant'; const execution = 'flawless'; return idea + ' meets ' + execution; }",
    "class Portfolio { constructor() { this.projects = []; this.skills = new Set(); } addProject(project) { this.projects.push(project); } }",
    "interface Developer { name: string; expertise: string[]; passion: boolean; creativity: number; } const me: Developer = { name: 'Coder', expertise: ['Full Stack', 'AI/ML'], passion: true, creativity: Infinity };",
    "const technologies = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Docker', 'AWS', 'MongoDB']; const favorite = technologies[Math.floor(Math.random() * technologies.length)];",
    "async function buildFuture() { try { const innovation = await fetch('/api/creativity'); const result = await innovation.json(); return result.success ? 'Future built!' : 'Keep trying'; } catch (error) { console.log('Innovation never fails, only iterates'); } }",
    "const codingPhilosophy = `Code is poetry written in logic. Every function tells a story, every algorithm solves a mystery. In the dance between problem and solution, we find our true calling as developers.`;",
    "let projectIdeas = ['AI-powered portfolio', 'Real-time collaboration tool', 'Sustainable tech platform', 'Educational gaming app', 'Smart city infrastructure']; const nextBigThing = projectIdeas.shift();",
    "function optimizePerformance() { const bottlenecks = ['slow queries', 'unnecessary renders', 'memory leaks']; bottlenecks.forEach(bottleneck => { console.log(`Fixing ${bottleneck}...`); }); return 'Performance optimized!'; }",
    "const learningJourney = { start: 'Hello World', current: 'Complex Systems', goal: 'World-Changing Innovation', milestones: ['First App', 'Open Source Contributor', 'Tech Lead', 'Entrepreneur'] };",
    "export default function InnovationHub() { const [ideas, setIdeas] = useState([]); const [collaborators, setCollaborators] = useState([]); return <div>Building the future, one line at a time</div>; }",
    "const dataScience = { languages: ['Python', 'R', 'SQL'], libraries: ['pandas', 'numpy', 'scikit-learn', 'tensorflow'], applications: ['predictive analytics', 'machine learning', 'data visualization'] };",
    "while (dreaming) { const project = imagine(); if (project.isRevolutionary) { build(project); } else { iterate(); } } // Never stop dreaming, never stop coding",
    "const webDevelopment = { frontend: ['React', 'Vue', 'Angular'], backend: ['Node.js', 'Django', 'Spring'], databases: ['MongoDB', 'PostgreSQL', 'Redis'], deployment: ['Docker', 'Kubernetes', 'AWS'] };",
    "def solve_world_problems(code): problems = ['climate change', 'education', 'healthcare', 'poverty'] for problem in problems: solution = code(problem) if solution.works: deploy(solution) return 'World improved!'",
    "const creativity = { sources: ['curiosity', 'failure', 'collaboration', 'continuous learning'], outputs: ['innovative solutions', 'beautiful code', 'user experiences', 'technical excellence'] };",
    "public class DeveloperLife { private String passion; private List<String> skills; private boolean alwaysLearning; public DeveloperLife() { this.passion = 'coding'; this.alwaysLearning = true; } }",
    "const futureTech = ['Quantum Computing', 'AI Ethics', 'Sustainable Tech', 'Space Technology', 'Biotech', 'Blockchain 3.0']; const focus = futureTech.find(tech => tech.includes('AI'));",
    "let codeQuality = { readability: 10, maintainability: 9, performance: 8, security: 9 }; const improvement = () => { Object.keys(codeQuality).forEach(key => codeQuality[key]++); }; improvement();",
    "const collaboration = { tools: ['Git', 'GitHub', 'Slack', 'Figma'], practices: ['code reviews', 'pair programming', 'agile methodology', 'continuous integration'], benefits: ['better code', 'team growth', 'innovation'] };",
    "function debugLife() { const bugs = ['logic errors', 'syntax mistakes', 'integration issues']; bugs.forEach(bug => { console.log(`Found ${bug}, fixing...`); }); return 'Bug-free code achieved!'; }",
    "const openSource = { contributions: ['bug fixes', 'features', 'documentation', 'mentoring'], benefits: ['learning', 'networking', 'giving back', 'portfolio building'], philosophy: 'Code should be free like speech' };",
    "let innovation = 0; do { const idea = generateIdea(); const prototype = buildPrototype(idea); const feedback = getUserFeedback(prototype); innovation += feedback.score; } while (innovation < 100);",
    "const techStack = { language: 'JavaScript', framework: 'React', styling: 'Tailwind CSS', backend: 'Node.js', database: 'MongoDB', deployment: 'Vercel', testing: 'Jest' };",
    "async function learnForever() { while (true) { const topic = ['AI', 'Blockchain', 'Quantum Computing', 'Bioinformatics'][Math.floor(Math.random() * 4)]; await study(topic); await apply(topic); await teach(topic); } }"
  ]

  // Create a continuous stream of code
  const fullCode = codeSnippets.join("\n") + "\n"

  useEffect(() => {
    let currentIndex = 0
    let cursorInterval: NodeJS.Timeout

    const typeCode = () => {
      if (currentIndex < fullCode.length) {
        setTypedText(fullCode.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        // Reset when finished
        currentIndex = 0
        setTypedText("")
      }
    }

    const typingInterval = setInterval(typeCode, 50) // Type speed

    // Cursor blinking
    cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      <div className="absolute top-1/4 left-10 w-full h-1/2 opacity-28">
        <pre className="text-gray-400 text-xs font-mono leading-loose whitespace-pre-wrap">
          {typedText}
          <span className={`inline-block w-1 h-4 bg-gray-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
        </pre>
      </div>
    </div>
  )
}
