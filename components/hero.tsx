import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Twitter, Download } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                Available for new opportunities
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                  Firoz Bari
                </span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                Full-Stack Developer & AI/ML Specialist
              </h2>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-balance leading-relaxed">
                Seasoned Full-Stack Developer and AI/ML Specialist with 12+ years of experience delivering cutting-edge digital solutions across web, mobile, and AI-driven platforms.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <Button variant="ghost" size="icon" asChild className="hover:bg-accent/10 hover:text-accent transition-colors">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-accent/10 hover:text-accent transition-colors">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-accent/10 hover:text-accent transition-colors">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-accent/10 hover:text-accent transition-colors">
                <a href="mailto:hello@example.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/5 rounded-full blur-3xl scale-110"></div>
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl">
                <Image
                  src="/firoz_bari.svg"
                  alt="Firoz Bari - Full-Stack Developer & AI/ML Specialist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/20">
                <div className="text-2xl">💻</div>
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/20">
                <div className="text-xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
