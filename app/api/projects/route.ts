import { NextRequest, NextResponse } from 'next/server'

// Mock data for now - replace with actual Prisma calls later
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

export async function GET() {
  try {
    console.log('Fetching projects...')
    // Return only published projects
    const publishedProjects = mockProjects.filter(project => project.published)
    console.log('Found projects:', publishedProjects.length)
    return NextResponse.json(publishedProjects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json({ error: 'Failed to fetch projects', details: error.message }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, image, technologies, github, demo, featured, published } = body

    // Create a new project with a simple ID
    const newProject = {
      id: Date.now().toString(),
      title,
      description,
      image,
      technologies,
      github,
      demo,
      featured: featured || false,
      published: published || false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // Add to mock data (in a real app, this would be saved to database)
    mockProjects.push(newProject)

    return NextResponse.json(newProject)
  } catch (error) {
    console.error('Error creating project:', error)
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
  }
}
