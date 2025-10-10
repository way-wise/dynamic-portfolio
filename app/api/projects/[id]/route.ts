import { NextRequest, NextResponse } from 'next/server'

// Mock data - same as in projects route
const mockProjects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, shopping cart, checkout, and payment integration. Built with modern web technologies for optimal performance.",
    image: "/modern-ecommerce-interface.png",
    technologies: "Next.js, TypeScript, Stripe, PostgreSQL, Tailwind CSS",
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    published: true,
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team workspaces, and project tracking. Features drag-and-drop interface and advanced filtering.",
    image: "/task-management-dashboard.png",
    technologies: "React, Node.js, Socket.io, MongoDB, Redux",
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    published: true,
    createdAt: "2024-01-02T00:00:00.000Z",
    updatedAt: "2024-01-02T00:00:00.000Z",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard that displays current conditions, forecasts, and historical data. Includes interactive charts and location-based weather alerts.",
    image: "/weather-dashboard.png",
    technologies: "Vue.js, Chart.js, Weather API, Vuex, SCSS",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
    published: true,
    createdAt: "2024-01-03T00:00:00.000Z",
    updatedAt: "2024-01-03T00:00:00.000Z",
  },
  {
    id: "4",
    title: "Portfolio CMS",
    description: "A headless CMS built specifically for portfolio websites. Features a user-friendly admin panel, image optimization, and markdown support for blog posts.",
    image: "/cms-admin-panel-interface.jpg",
    technologies: "Next.js, Prisma, PostgreSQL, AWS S3, NextAuth.js",
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    published: true,
    createdAt: "2024-01-04T00:00:00.000Z",
    updatedAt: "2024-01-04T00:00:00.000Z",
  },
]

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const project = mockProjects.find(p => p.id === params.id)

    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    return NextResponse.json(project)
  } catch (error) {
    console.error('Error fetching project:', error)
    return NextResponse.json({ error: 'Failed to fetch project' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { title, description, image, technologies, github, demo, featured, published } = body

    const projectIndex = mockProjects.findIndex(p => p.id === params.id)
    
    if (projectIndex === -1) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    // Update the project
    mockProjects[projectIndex] = {
      ...mockProjects[projectIndex],
      title,
      description,
      image,
      technologies,
      github,
      demo,
      featured,
      published,
      updatedAt: new Date().toISOString(),
    }

    return NextResponse.json(mockProjects[projectIndex])
  } catch (error) {
    console.error('Error updating project:', error)
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const projectIndex = mockProjects.findIndex(p => p.id === params.id)
    
    if (projectIndex === -1) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    mockProjects.splice(projectIndex, 1)

    return NextResponse.json({ message: 'Project deleted successfully' })
  } catch (error) {
    console.error('Error deleting project:', error)
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 })
  }
}
