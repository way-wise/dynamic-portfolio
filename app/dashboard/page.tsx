
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Calendar,
  ExternalLink,
  Github,
  Filter,
  Search,
  Download,
  Upload
} from 'lucide-react'
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
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<'all' | 'published' | 'draft' | 'featured'>('all')
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

  // Calculate dashboard statistics
  const stats = {
    total: projects.length,
    published: projects.filter(p => p.published).length,
    draft: projects.filter(p => !p.published).length,
    featured: projects.filter(p => p.featured).length,
  }

  // Filter projects based on search and status
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = filterStatus === 'all' ||
                         (filterStatus === 'published' && project.published) ||
                         (filterStatus === 'draft' && !project.published) ||
                         (filterStatus === 'featured' && project.featured)
    
    return matchesSearch && matchesFilter
  })

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

  const addSeedData = async () => {
    const seedProjects = [
      {
        title: 'AI-Powered Chat Application',
        description: 'A modern chat application with AI integration, real-time messaging, and advanced features like message encryption and file sharing.',
        image: '/placeholder.svg',
        technologies: 'React, Node.js, Socket.io, OpenAI API, MongoDB',
        github: 'https://github.com/example/ai-chat',
        demo: 'https://ai-chat-demo.vercel.app',
        featured: true,
        published: true,
      },
      {
        title: 'Blockchain Voting System',
        description: 'A secure voting system built on blockchain technology ensuring transparency and immutability of votes.',
        image: '/placeholder.svg',
        technologies: 'Solidity, Web3.js, React, Ethereum',
        github: 'https://github.com/example/blockchain-voting',
        demo: 'https://voting-demo.vercel.app',
        featured: true,
        published: true,
      },
      {
        title: 'Machine Learning Dashboard',
        description: 'A comprehensive dashboard for machine learning model training, monitoring, and deployment with real-time analytics.',
        image: '/placeholder.svg',
        technologies: 'Python, TensorFlow, React, D3.js, FastAPI',
        github: 'https://github.com/example/ml-dashboard',
        demo: 'https://ml-dashboard.vercel.app',
        featured: false,
        published: true,
      },
      {
        title: 'IoT Home Automation',
        description: 'Smart home automation system controlling lights, temperature, and security through IoT devices and mobile app.',
        image: '/placeholder.svg',
        technologies: 'React Native, Arduino, MQTT, Node.js',
        github: 'https://github.com/example/iot-home',
        demo: 'https://iot-demo.vercel.app',
        featured: false,
        published: false,
      },
      {
        title: 'Cryptocurrency Tracker',
        description: 'Real-time cryptocurrency price tracking with portfolio management, price alerts, and market analysis tools.',
        image: '/placeholder.svg',
        technologies: 'Vue.js, Chart.js, CoinGecko API, PWA',
        github: 'https://github.com/example/crypto-tracker',
        demo: 'https://crypto-tracker.vercel.app',
        featured: false,
        published: true,
      },
      {
        title: 'Social Media Analytics',
        description: 'Advanced analytics platform for social media performance tracking with sentiment analysis and engagement metrics.',
        image: '/placeholder.svg',
        technologies: 'Next.js, Python, Twitter API, PostgreSQL',
        github: 'https://github.com/example/social-analytics',
        demo: 'https://social-analytics.vercel.app',
        featured: false,
        published: false,
      }
    ]

    try {
      for (const project of seedProjects) {
        await fetch('/api/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(project),
        })
      }
      toast.success('Seed data added successfully!')
      fetchProjects()
    } catch (error) {
      toast.error('Failed to add seed data')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Portfolio Dashboard</h1>
              <p className="text-muted-foreground">Manage your projects and showcase your work</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={addSeedData}>
                <Download className="mr-2 h-4 w-4" />
                Add Sample Data
              </Button>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={() => setEditingProject(null)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Project
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
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
                        rows={3}
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
                        <div className="flex items-center gap-2">
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0]
                              if (file) {
                                handleImageUpload(file)
                              }
                            }}
                            className="text-sm flex-1"
                          />
                          <Upload className="h-4 w-4 text-muted-foreground" />
                        </div>
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
                        placeholder="https://github.com/username/repo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="demo">Demo URL</Label>
                      <Input
                        id="demo"
                        value={formData.demo}
                        onChange={(e) => setFormData({ ...formData, demo: e.target.value })}
                        placeholder="https://your-demo.vercel.app"
                      />
                    </div>
                    <div className="flex items-center space-x-6">
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
                    <div className="flex justify-end space-x-2 pt-4">
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
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Projects</p>
                <p className="text-2xl font-bold">{stats.total}</p>
              </div>
              <BarChart3 className="h-8 w-8 text-muted-foreground" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Published</p>
                <p className="text-2xl font-bold text-green-600">{stats.published}</p>
              </div>
              <Eye className="h-8 w-8 text-green-600" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Drafts</p>
                <p className="text-2xl font-bold text-orange-600">{stats.draft}</p>
              </div>
              <EyeOff className="h-8 w-8 text-orange-600" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Featured</p>
                <p className="text-2xl font-bold text-blue-600">{stats.featured}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={filterStatus === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterStatus('all')}
            >
              All
            </Button>
            <Button
              variant={filterStatus === 'published' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterStatus('published')}
            >
              Published
            </Button>
            <Button
              variant={filterStatus === 'draft' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterStatus('draft')}
            >
              Drafts
            </Button>
            <Button
              variant={filterStatus === 'featured' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterStatus('featured')}
            >
              Featured
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {project.image && (
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 flex gap-1">
                    {project.featured && (
                      <Badge variant="default" className="text-xs">
                        Featured
                      </Badge>
                    )}
                    <Badge variant={project.published ? "default" : "secondary"} className="text-xs">
                      {project.published ? 'Published' : 'Draft'}
                    </Badge>
                  </div>
                </div>
              )}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold line-clamp-2">{project.title}</h3>
                  <div className="flex items-center space-x-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => togglePublished(project)}
                      title={project.published ? 'Unpublish' : 'Publish'}
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
                      title="Edit"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(project.id)}
                      title="Delete"
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
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(project.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {project.github && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Live Demo">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm || filterStatus !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'Get started by adding your first project'
              }
            </p>
            <Button onClick={() => setIsDialogOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Project
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
