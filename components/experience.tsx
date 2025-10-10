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
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline inline-flex items-center gap-1"
                    >
                      {exp.company}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
