import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Full-Stack Developer
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Building accessible, pixel-perfect digital experiences for the web
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:hello@example.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
