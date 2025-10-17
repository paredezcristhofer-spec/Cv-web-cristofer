"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Certificates from "@/components/certificates"
import Contact from "@/components/contact"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="flex-1 flex flex-col">
        <Hero />

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28 space-y-32">
            {activeSection === "about" && <About />}
            {activeSection === "skills" && <Skills />}
            {activeSection === "experience" && <Experience />}
            {activeSection === "projects" && <Projects />}
            {activeSection === "education" && <Education />}
            {activeSection === "certificates" && <Certificates />}
            {activeSection === "contact" && <Contact />}
          </div>
        </div>
      </main>
    </div>
  )
}
