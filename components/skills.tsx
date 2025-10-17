"use client"

import { Code2, Palette, Cog, Brain, Wrench, Database } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      category: "Lenguajes",
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "C++", "C#","Go","Kotlin","Rust", "Dart(Flutter)"], 
      icon: Code2,
      color: "from-blue-500 to-blue-600",
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
      icon: Palette,
      color: "from-purple-500 to-purple-600",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB"],
      icon: Cog,
      color: "from-green-500 to-green-600",
    },
    {
      category: "IA/ML",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenAI", "Seaborn", "Matplotlib","SciPy"],
      icon: Brain,
      color: "from-orange-500 to-orange-600",
    },
    {
      category: "DevOps",
      skills: ["Docker", "Git", "Linux", "AWS", "Vercel", "GitHub Actions"],
      icon: Wrench,
      color: "from-red-500 to-red-600",
    },
    {
      category: "Bases de Datos",
      skills: ["PostgreSQL", "MongoDB", "Firebase", "Redis", "Supabase"],
      icon: Database,
      color: "from-cyan-500 to-cyan-600",
    },
  ]

  return (
    <section id="skills" className="md:ml-72">
      <div className="space-y-16">
        <div className="animate-fade-in-up">
          <h2 className="text-6xl font-bold mb-6 text-foreground">Habilidades</h2>
          <div className="h-2 w-24 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <div
                key={category.category}
                className="group bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-4 bg-gradient-to-br ${category.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-xl text-foreground">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-accent/10 text-accent border border-accent/30 rounded-full text-sm font-medium hover:bg-accent/20 hover:border-accent/60 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
