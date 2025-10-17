"use client"

import { useState } from "react"
import { Award, X, ZoomIn } from "lucide-react"

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null)

  const certificates = [
    {
      id: 1,
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "2024",
      image: "/cert1.png",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Deep Learning with TensorFlow",
      issuer: "Udemy",
      date: "2024",
      image: "/cert2.png",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 3,
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "/cert3.png",
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 4,
      title: "Full Stack Web Development",
      issuer: "Bootcamp",
      date: "2023",
      image: "/cert4.jpeg",
      color: "from-green-500 to-green-600",
    },
  ]

  return (
    <section id="certificates" className="md:ml-72">
      <div className="space-y-16">
        <div className="animate-fade-in-up">
          <h2 className="text-6xl font-bold mb-6 text-foreground">Certificados</h2>
          <div className="h-2 w-24 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
        </div>

        <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl font-light">
          Certificaciones profesionales y cursos completados que demuestran mi compromiso con el aprendizaje continuo y
          el desarrollo de habilidades técnicas.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative overflow-hidden rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedCert(cert.id)}
            >
              <div className="relative h-64 md:h-72 overflow-hidden bg-muted">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                  <ZoomIn className="text-white" size={32} />
                </div>
              </div>

              <div className="p-6 bg-card border-t border-border">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`p-2 bg-gradient-to-br ${cert.color} rounded-lg flex-shrink-0`}>
                    <Award className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-foreground/60 mt-1">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-xs text-accent font-semibold">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedCert && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-up"
            onClick={() => setSelectedCert(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] bg-card rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all"
              >
                <X size={24} />
              </button>

              <div className="relative h-full">
                <img
                  src={certificates.find((c) => c.id === selectedCert)?.image || "/placeholder.svg"}
                  alt="Certificate"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 bg-card border-t border-border">
                <h3 className="text-2xl font-bold text-foreground">
                  {certificates.find((c) => c.id === selectedCert)?.title}
                </h3>
                <p className="text-accent font-semibold mt-2">
                  {certificates.find((c) => c.id === selectedCert)?.issuer}
                </p>
                <p className="text-foreground/60 mt-2">{certificates.find((c) => c.id === selectedCert)?.date}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
