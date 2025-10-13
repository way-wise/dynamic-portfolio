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
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-blue-50 overflow-hidden">
      {/* Elegant Background Shapes */}
      <div className="absolute inset-0 -z-10">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Small floating elements */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-blue-400/20 rotate-45 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400/20 rotate-12 animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-green-400/20 rotate-45 animate-bounce" style={{animationDelay: '2.5s'}}></div>
        
        {/* Subtle lines */}
        <div className="absolute top-1/4 right-1/4 w-px h-20 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-px bg-gradient-to-r from-transparent via-purple-400/10 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Professional Experience</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Building impactful solutions across diverse industries and technologies
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/20 via-accent/40 to-accent/20 hidden lg:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-8" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                {/* Timeline dot */}
                <div className="hidden lg:flex items-center justify-center w-16 h-16 bg-background border-4 border-accent/20 rounded-full z-10 flex-shrink-0">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                </div>
                
                <Card className="flex-1 p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent/20 hover:border-l-accent hover:scale-[1.02] bg-white border-gray-50">
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-black">{exp.title}</h3>
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
                      {exp.technologies.map((tech, techIndex) => {
                        const colors = [
                          'bg-blue-100 text-blue-800 border-blue-200',
                          'bg-green-100 text-green-800 border-green-200',
                          'bg-purple-100 text-purple-800 border-purple-200',
                          'bg-pink-100 text-pink-800 border-pink-200',
                          'bg-yellow-100 text-yellow-800 border-yellow-200',
                          'bg-red-100 text-red-800 border-red-200',
                          'bg-indigo-100 text-indigo-800 border-indigo-200',
                          'bg-teal-100 text-teal-800 border-teal-200',
                          'bg-orange-100 text-orange-800 border-orange-200',
                          'bg-cyan-100 text-cyan-800 border-cyan-200'
                        ]
                        const colorClass = colors[techIndex % colors.length]
                        return (
                          <Badge key={tech} className={`px-3 py-1 text-sm ${colorClass}`}>
                            {tech}
                          </Badge>
                        )
                      })}
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
