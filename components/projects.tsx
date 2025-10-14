"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Filter, Search } from "lucide-react"
import { projects, categories, Project, Category } from "@/lib/data"

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Get published projects from static data
  const publishedProjects = projects.filter(project => project.published)

  // Filter projects based on category and search
  const filteredProjects = publishedProjects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.categoryId === selectedCategory
    const matchesSearch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesCategory && matchesSearch
  })

  const getCategoryInfo = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId) || { name: 'Unknown', color: '#6B7280', icon: '📁' }
  }

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of diverse projects across different technologies and platforms
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="max-w-4xl mx-auto flex justify-center items-center gap-2 flex-wrap">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('all')}
              className={`whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all' 
                  ? 'bg-gray-800 text-white border-gray-800 hover:bg-gray-700' 
                  : 'bg-white border-gray-100 text-gray-900 hover:bg-gray-50'
              }`}
            >
              All Projects
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`whitespace-nowrap cursor-pointer ${
                  selectedCategory === category.id 
                    ? '!bg-gray-800 text-white border-gray-800 hover:bg-gray-700' 
                    : '!bg-white !border-gray-100 !text-gray-900 hover:!bg-gray-50'
                }`}
              >
                <span className="mr-1">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const categoryInfo = getCategoryInfo(project.categoryId)
            return (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow bg-white border-gray-200" data-aos="fade-up" data-aos-delay="100">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 flex gap-1">
                    {project.featured && (
                      <Badge variant="default" className="text-xs">
                        Featured
                      </Badge>
                    )}
                    <Badge 
                      variant="secondary" 
                      className="text-xs"
                      style={{ backgroundColor: categoryInfo.color + '20', color: categoryInfo.color }}
                    >
                      <span className="mr-1">{categoryInfo.icon}</span>
                      {categoryInfo.name}
                    </Badge>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-black">{project.title}</h3>
                  <p className="text-gray-700 leading-relaxed line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.split(', ').map((tech, techIndex) => {
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
                          <Badge key={tech} className={`px-2 py-1 text-xs ${colorClass}`}>
                            {tech}
                          </Badge>
                        )
                      })}
                    </div>
                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild className="!bg-transparent !text-black">
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
            )
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              {searchTerm || selectedCategory !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'No projects available at the moment'
              }
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
