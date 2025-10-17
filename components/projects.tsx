"use client"

import { ExternalLink, Github, Zap, ArrowRight, Star } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Clasificador de Imágenes con IA",
      description:
        "Modelo de deep learning para clasificación de imágenes usando CNN. Entrenado con TensorFlow y desplegado en una aplicación web con interfaz intuitiva. Precisión del 96% en dataset de prueba.",
      tags: ["Python", "TensorFlow", "React", "FastAPI"],
      links: { github: "#", demo: "#" },
      featured: true,
      rating: 5,
    },
    {
      title: "Chatbot Inteligente con NLP",
      description:
        "Asistente conversacional basado en NLP avanzado. Utiliza procesamiento de lenguaje natural para entender y responder consultas de usuarios en tiempo real. Integración con múltiples plataformas.",
      tags: ["Python", "NLP", "Node.js", "MongoDB"],
      links: { github: "#", demo: "#" },
      featured: true,
      rating: 5,
    },
    {
      title: "Dashboard de Análisis de Datos",
      description:
        "Plataforma interactiva para visualización y análisis de datos en tiempo real. Incluye predicciones con machine learning y reportes automáticos. Manejo de millones de registros.",
      tags: ["React", "Next.js", "Python", "PostgreSQL"],
      links: { github: "#", demo: "#" },
      featured: false,
      rating: 4,
    },
    {
      title: "Sistema de Recomendación",
      description:
        "Algoritmo colaborativo de filtrado para recomendaciones personalizadas. Implementado con Scikit-learn y optimizado para escalabilidad. Mejora de CTR del 35%.",
      tags: ["Python", "Scikit-learn", "FastAPI", "Redis"],
      links: { github: "#", demo: "#" },
      featured: false,
      rating: 4,
    },
  ]

  return (
    <section id="projects" className="md:ml-72">
      <div className="space-y-16">
        <div className="animate-fade-in-up">
          <h2 className="text-6xl font-bold mb-6 text-foreground">Proyectos Destacados</h2>
          <div className="h-2 w-24 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-xl border transition-all duration-300 overflow-hidden ${
                project.featured
                  ? "bg-gradient-to-br from-card via-card to-card/50 border-accent/40 hover:border-accent/70 hover:shadow-2xl hover:-translate-y-2"
                  : "bg-card border-border hover:border-accent/30 hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 flex-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 ml-4">
                    {project.featured && <Zap className="text-accent animate-glow flex-shrink-0" size={24} />}
                    <div className="flex gap-1">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-foreground/70 mb-6 leading-relaxed font-light text-lg">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-4 py-2 bg-secondary/10 text-secondary border border-secondary/30 rounded-full font-medium hover:bg-secondary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.links.github}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-all duration-200 group/link"
                  >
                    <Github size={18} /> Código
                    <ArrowRight size={16} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href={project.links.demo}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-all duration-200 group/link"
                  >
                    <ExternalLink size={18} /> Demo
                    <ArrowRight size={16} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
