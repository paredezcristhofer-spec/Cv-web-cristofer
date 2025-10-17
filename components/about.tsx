"use client"

import { Zap, Target, Lightbulb, Rocket } from "lucide-react"

export default function About() {
  const stats = [
    { icon: Zap, label: "Ciclo Actual", value: "4to", color: "from-blue-500 to-blue-600" },
    { icon: Target, label: "Proyectos", value: "15+", color: "from-purple-500 to-purple-600" },
    { icon: Lightbulb, label: "Tecnologías", value: "20+", color: "from-orange-500 to-orange-600" },
    { icon: Rocket, label: "Experiencia", value: "2+ años", color: "from-pink-500 to-pink-600" },
  ]

  return (
    <section id="about">
      <div className="space-y-16">
        <div className="animate-fade-in-up">
          <h2 className="text-6xl font-bold mb-6 text-foreground">Acerca de Mí</h2>
          <div className="h-2 w-24 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <p className="text-xl text-foreground/80 leading-relaxed font-light">
              Soy un ingeniero de software (tecnico) en formación con una pasión especial por la{" "}
              <span className="text-accent font-semibold">inteligencia artificial</span> y el{" "}
              <span className="text-accent font-semibold">machine learning</span>. Actualmente estoy estudiando voy en el 4to ciclo de mi
              carrera, he estado desarrollando proyectos que combinan desarrollo backend, frontend y modelos de IA
              avanzados.
            </p>

            <p className="text-xl text-foreground/80 leading-relaxed font-light">
              Me interesa especialmente la aplicación práctica de algoritmos de machine learning en problemas del mundo
              real. Disfruto trabajar en equipos colaborativos, aprender nuevas tecnologías constantemente y contribuir
              a soluciones innovadoras que generen impacto.
            </p>

            <p className="text-xl text-foreground/80 leading-relaxed font-light">
              Cuando no estoy codificando, me encuentro explorando nuevos frameworks, leyendo sobre avances en IA,
              contribuyendo a proyectos open source, o mentorando a otros desarrolladores.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 h-fit">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-card to-card/50 border border-accent/20 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                >
                  <div
                    className={`p-3 bg-gradient-to-br ${stat.color} rounded-lg mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="text-white" size={24} />
                  </div>
                  <p className="text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="text-xs text-foreground/60 mt-2 font-medium">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
