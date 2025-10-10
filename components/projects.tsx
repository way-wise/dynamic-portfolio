"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string
  github?: string
  demo?: string
  featured: boolean
  published: boolean
  createdAt: string
  updatedAt: string
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects')
        const data = await response.json()
        
        // Check if the response is an array, otherwise set empty array
        if (Array.isArray(data)) {
          setProjects(data)
        } else {
          console.error('API returned non-array data:', data)
          setProjects([])
        }
      } catch (error) {
        console.error('Error fetching projects:', error)
        setProjects([])
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-muted animate-pulse" />
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-muted animate-pulse rounded" />
                  <div className="h-4 bg-muted animate-pulse rounded" />
                  <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-muted animate-pulse rounded" />
                    <div className="h-6 w-20 bg-muted animate-pulse rounded" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.isArray(projects) && projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.split(', ').map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/projects/${project.id}`}>
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Link>
                  </Button>
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
