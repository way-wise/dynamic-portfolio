import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "2024 — Present",
    title: "Senior Full-Stack Engineer",
    company: "TechCorp",
    link: "https://techcorp.com",
    description:
      "Build and maintain critical components used to construct the frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    period: "2022 — 2024",
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    link: "https://startupxyz.com",
    description:
      "Developed and shipped highly interactive web applications for both internal and external stakeholders. Collaborated with designers to implement pixel-perfect UI components and worked on backend APIs to support frontend features.",
    technologies: ["JavaScript", "React", "Express", "MongoDB", "AWS"],
  },
  {
    period: "2020 — 2022",
    title: "Frontend Developer",
    company: "Digital Agency",
    link: "https://digitalagency.com",
    description:
      "Built responsive websites and web applications for various clients across different industries. Focused on creating accessible, performant, and visually appealing user interfaces.",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "Tailwind CSS"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions across diverse industries and technologies
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/20 via-accent/40 to-accent/20 hidden lg:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline dot */}
                <div className="hidden lg:flex items-center justify-center w-16 h-16 bg-background border-4 border-accent/20 rounded-full z-10 flex-shrink-0">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                </div>
                
                <Card className="flex-1 p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent/20 hover:border-l-accent">
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-2 text-lg font-medium"
                        >
                          {exp.company}
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      <div className="bg-accent/10 px-4 py-2 rounded-full">
                        <span className="text-sm font-medium text-accent">{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
