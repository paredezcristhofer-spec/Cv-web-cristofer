"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Sparkles, ArrowRight } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative bg-gradient-to-br from-primary via-primary to-primary/95 text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/4 left-10 text-accent/10 font-mono text-sm opacity-50">
          &lt;div className="tech"&gt;
        </div>
        <div className="absolute bottom-1/4 right-20 text-accent/10 font-mono text-sm opacity-50">&lt;/div&gt;</div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 py-32 md:py-48">
        <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full hover:border-accent/60 transition-all duration-300 group">
            <Sparkles size={16} className="text-accent group-hover:animate-spin" />
            <span className="text-sm font-semibold text-accent tracking-widest uppercase">
              Bienvenido a mi portafolio
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="text-7xl md:text-8xl font-bold text-balance leading-tight tracking-tight">
              Ingeniero de
              <span className="block bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent animate-pulse-slow">
                Software + IA
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-primary-foreground/90 text-balance max-w-2xl leading-relaxed font-light">
            Desarrollador apasionado por crear soluciones innovadoras combinando software de calidad con inteligencia
            artificial. Especializado en machine learning, desarrollo full-stack y arquitectura de sistemas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button className="px-8 py-4 bg-gradient-to-r from-accent to-secondary text-primary font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 hover:from-accent/90 hover:to-secondary/90 flex items-center gap-2 group">
              Ver Proyectos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-primary-foreground/40 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all duration-300 hover:border-primary-foreground/80 hover:shadow-lg">
              Descargar CV
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-primary-foreground/60" size={28} />
      </div>
    </div>
  )
}
