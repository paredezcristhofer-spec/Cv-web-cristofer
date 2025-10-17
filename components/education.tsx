"use client"

import { BookOpen, Calendar, CheckCircle2, Trophy } from "lucide-react"

export default function Education() {
  const certifications = [
    "Machine Learning Specialization - Coursera",
    "Deep Learning with TensorFlow - Udemy",
    "Full Stack Web Development - Bootcamp",
    "Natural Language Processing - Coursera",
    "Advanced Python Programming - DataCamp",
    "Cloud Architecture - AWS Certified",
  ]

  return (
    <section id="education" className="md:ml-72">
      <div className="space-y-16">
        <div className="animate-fade-in-up">
          <h2 className="text-6xl font-bold mb-6 text-foreground">Educación</h2>
          <div className="h-2 w-24 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-card to-card/50 border border-accent/40 rounded-xl p-8 hover:border-accent/70 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-accent to-secondary group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="text-primary" size={32} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-foreground">Ingeniería de Software con IA</h3>
                <p className="text-accent font-semibold text-lg mt-2">Institución[Senarti]</p>
                <div className="flex items-center gap-2 text-foreground/60 text-sm mt-4">
                  <Calendar size={18} />
                  <span>4to Ciclo • 2024 - Presente</span>
                </div>
                <p className="text-foreground/70 mt-6 leading-relaxed font-light text-lg">
                  Estudiando ingeniería de software con enfoque especializado en inteligencia artificial, machine
                  learning, desarrollo web full-stack y arquitectura de sistemas escalables.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
            <div className="flex gap-4 mb-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-secondary to-accent">
                  <Trophy className="text-primary" size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-foreground">Certificaciones & Cursos</h3>
                <p className="text-foreground/60 text-sm mt-1 font-light">Formación continua en tecnologías clave</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 bg-muted/50 rounded-lg hover:bg-muted hover:border-accent/30 border border-transparent transition-all duration-200 group cursor-default"
                >
                  <CheckCircle2
                    className="text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                    size={22}
                  />
                  <span className="text-foreground/80 text-sm font-light">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
