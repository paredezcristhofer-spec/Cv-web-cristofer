"use client"

import { Mail, Linkedin, Github, ExternalLink, Send, MessageSquare } from "lucide-react"

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "paredezcristhofer@gmail.com",
      href: "mailto:paredezcristhofer@gmail.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Tu Perfil",
      href: "#",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "paredezcristiofer-s",
      href: "#",
      color: "from-gray-700 to-gray-800",
    },
  ]

  return (
    <section id="contact" className="md:ml-72">
      <div className="space-y-16">
        <div className="animate-fade-in-up">
          <h2 className="text-6xl font-bold mb-6 text-foreground">Contacto</h2>
          <div className="h-2 w-24 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
        </div>

        <div className="space-y-12">
          <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl font-light">
            ¿Interesado en colaborar, tienes una pregunta o una oportunidad? ¡No dudes en contactarme! Estoy siempre
            abierto a nuevos desafíos, conexiones profesionales y conversaciones sobre tecnología e innovación.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <a
                  key={method.label}
                  href={method.href}
                  className="group flex flex-col items-center gap-4 p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div
                    className={`p-4 bg-gradient-to-br ${method.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="text-white" size={32} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-foreground/60 font-medium">{method.label}</p>
                    <p className="font-semibold text-foreground mt-2 group-hover:text-accent transition-colors duration-300">
                      {method.value}
                    </p>
                  </div>
                  <ExternalLink
                    className="text-accent/0 group-hover:text-accent transition-all opacity-0 group-hover:opacity-100 duration-300"
                    size={18}
                  />
                </a>
              )
            })}
          </div>

          <div className="mt-16 p-10 md:p-12 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border border-accent/30 rounded-2xl hover:border-accent/60 transition-all duration-300 hover:shadow-2xl group">
            <div className="flex items-start gap-4 mb-6">
              <MessageSquare
                className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform"
                size={32}
              />
              <div>
                <h3 className="text-3xl font-bold text-foreground">¿Listo para trabajar juntos?</h3>
                <p className="text-foreground/60 mt-2 font-light">Envíame un mensaje y responderé lo antes posible.</p>
              </div>
            </div>
            <p className="text-foreground/70 mb-8 font-light text-lg">
              Estoy disponible para proyectos, consultoría, mentoría o simplemente para conversar sobre tecnología e
              innovación.
            </p>
            <a
              href="mailto:paredezcristhofer@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-secondary text-primary font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Send size={20} />
              Enviar Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
