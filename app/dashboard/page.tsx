"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react'
import { toast } from 'sonner'

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

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    technologies: '',
    github: '',
    demo: '',
    featured: false,
    published: false,
  })

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects')
      const data = await response.json()
      setProjects(data)
    } catch (error) {
      toast.error('Failed to fetch projects')
    }
  }

  const handleImageUpload = async (file: File) => {
    try {
      const formData = new FormData()
      formData.append('file', file)
      
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
      
      const data = await response.json()
      
      if (data.success) {
        setFormData({ ...formData, image: data.filename })
        toast.success('Image uploaded successfully')
      } else {
        toast.error('Failed to upload image')
      }
    } catch (error) {
      toast.error('Failed to upload image')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const projectData = {
      ...formData,
      technologies: formData.technologies,
    }

    try {
      if (editingProject) {
        await fetch(`/api/projects/${editingProject.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(projectData),
        })
        toast.success('Project updated successfully')
      } else {
        await fetch('/api/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(projectData),
        })
        toast.success('Project created successfully')
      }
      
      setIsDialogOpen(false)
      setEditingProject(null)
      setFormData({
        title: '',
        description: '',
        image: '',
        technologies: '',
        github: '',
        demo: '',
        featured: false,
        published: false,
      })
      fetchProjects()
    } catch (error) {
      toast.error('Failed to save project')
    }
  }

  const handleEdit = (project: Project) => {
    setEditingProject(project)
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image || '',
      technologies: project.technologies,
      github: project.github || '',
      demo: project.demo || '',
      featured: project.featured,
      published: project.published,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return

    try {
      await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      })
      toast.success('Project deleted successfully')
      fetchProjects()
    } catch (error) {
      toast.error('Failed to delete project')
    }
  }

  const togglePublished = async (project: Project) => {
    try {
      await fetch(`/api/projects/${project.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...project, published: !project.published }),
      })
      toast.success(`Project ${!project.published ? 'published' : 'unpublished'}`)
      fetchProjects()
    } catch (error) {
      toast.error('Failed to update project')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Project Dashboard</h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => setEditingProject(null)}>
                <Plus className="mr-2 h-4 w-4" />
                Add Project
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  {editingProject ? 'Edit Project' : 'Add New Project'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="image">Project Image</Label>
                  <div className="space-y-2">
                    <Input
                      id="image"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      placeholder="Image URL or upload a file"
                    />
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          handleImageUpload(file)
                        }
                      }}
                      className="text-sm"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="technologies">Technologies (comma-separated)</Label>
                  <Input
                    id="technologies"
                    value={formData.technologies}
                    onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                    placeholder="React, Next.js, TypeScript"
                  />
                </div>
                <div>
                  <Label htmlFor="github">GitHub URL</Label>
                  <Input
                    id="github"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="demo">Demo URL</Label>
                  <Input
                    id="demo"
                    value={formData.demo}
                    onChange={(e) => setFormData({ ...formData, demo: e.target.value })}
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="featured"
                      checked={formData.featured}
                      onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                    />
                    <Label htmlFor="featured">Featured</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="published"
                      checked={formData.published}
                      onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
                    />
                    <Label htmlFor="published">Published</Label>
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingProject ? 'Update' : 'Create'} Project
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              {project.image && (
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => togglePublished(project)}
                    >
                      {project.published ? (
                        <Eye className="h-4 w-4" />
                      ) : (
                        <EyeOff className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(project)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(project.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.split(', ').map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  {project.featured && <Badge variant="default">Featured</Badge>}
                  <span>{project.published ? 'Published' : 'Draft'}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
