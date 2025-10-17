"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Desarrollador Full Stack Junior",
      company: "Tech Startup XYZ",
      location: "Remoto",
      period: "2024 - Presente",
      description:
        "Desarrollo de aplicaciones web con React y Node.js. Implementación de modelos de IA para análisis de datos. Colaboración en arquitectura de microservicios.",
      technologies: ["React", "Node.js", "Python", "PostgreSQL", "Docker"],
      featured: true,
    },
    {
      title: "Freelancer - Desarrollo Web",
      company: "Proyectos Independientes",
      location: "Remoto",
      period: "2023 - 2024",
      description:
        "Desarrollo de sitios web y aplicaciones personalizadas para clientes. Implementación de soluciones con Next.js y bases de datos. Optimización de rendimiento y SEO.",
      technologies: ["Next.js", "Tailwind CSS", "Firebase", "Vercel"],
      featured: false,
    },
    {
      title: "Asistente de Investigación - IA",
      company: "Universidad",
      location: "Campus",
      period: "2023 - 2024",
      description:
        "Investigación en machine learning aplicado. Desarrollo de modelos de clasificación y análisis de datos. Publicación de resultados en conferencias académicas.",
      technologies: ["Python", "TensorFlow", "Jupyter", "Pandas"],
      featured: false,
    },
  ]

  return (
    <section id="experience" className="md:ml-72">
      <div className="space-y-16">
        <div className="animate-fade-in-up">
          <h2 className="text-6xl font-bold mb-6 text-foreground">Experiencia</h2>
          <div className="h-2 w-24 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`group rounded-xl border transition-all duration-300 overflow-hidden ${
                exp.featured
                  ? "bg-gradient-to-br from-card via-card to-card/50 border-accent/40 hover:border-accent/70 hover:shadow-2xl hover:-translate-y-2"
                  : "bg-card border-border hover:border-accent/30 hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-accent font-semibold mt-1">{exp.company}</p>
                  </div>
                  {exp.featured && <Briefcase className="text-accent flex-shrink-0 animate-glow" size={28} />}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-foreground/60 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                </div>

                <p className="text-foreground/70 mb-6 leading-relaxed font-light">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 bg-secondary/10 text-secondary border border-secondary/30 rounded-full font-medium hover:bg-secondary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
