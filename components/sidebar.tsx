"use client"

import { Github, Linkedin, Mail, Menu, X, Download } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const sections = [
    { id: "about", label: "Acerca de" },
    { id: "skills", label: "Habilidades" },
    { id: "experience", label: "Experiencia" },
    { id: "projects", label: "Proyectos" },
    { id: "education", label: "Educación" },
    { id: "certificates", label: "Certificados" },
    { id: "contact", label: "Contacto" },
  ]

  const handleSectionClick = (section: string) => {
    setActiveSection(section)
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:relative w-72 bg-gradient-to-b from-primary to-primary/95 text-primary-foreground flex-col h-screen p-8 border-r border-primary/20 transition-transform duration-300 z-40 overflow-y-auto`}
      >
        <div className="mb-16">
          <div className="mb-6 flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4 group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-secondary to-accent rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl border-2 border-primary-foreground/20 overflow-hidden flex items-center justify-center hover:border-accent/50 transition-all duration-300 shadow-2xl">
                <Image
                  src="/perfil.png"
                  alt="Foto de perfil"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-center">Cristhofer Ysrael Paredez Villafana</h1>
            <p className="text-sm text-primary-foreground/80 font-semibold mt-2 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent text-center">
              Software Engineer + IA
            </p>
          </div>

          <p className="text-sm text-primary-foreground/80 leading-relaxed font-light text-center">
            Especializado en IA, Machine Learning y desarrollo full-stack. Estudiante de 4to ciclo.
          </p>
        </div>

        <nav className="flex-1 space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium ${
                activeSection === section.id
                  ? "bg-accent/20 text-accent border-l-2 border-accent shadow-lg"
                  : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5"
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className="pt-8 border-t border-primary-foreground/10 space-y-4">
          <a
            href="#"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg"
          >
            <Download size={18} />
            Descargar CV
          </a>
          <p className="text-xs text-primary-foreground/60 font-medium uppercase tracking-wider">Conecta conmigo</p>
          <div className="flex gap-3">
            <a
              href="mailto:paredezcristiofer-s"
              className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-primary transition-all duration-200 flex items-center justify-center hover:scale-110 hover:shadow-lg"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-primary transition-all duration-200 flex items-center justify-center hover:scale-110 hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:paredezcristhofer@gmail.com"
              className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-primary transition-all duration-200 flex items-center justify-center hover:scale-110 hover:shadow-lg"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </aside>

      {isOpen && <div className="fixed inset-0 bg-black/50 md:hidden z-30" onClick={() => setIsOpen(false)} />}
    </>
  )
}
