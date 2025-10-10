import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create a default admin user
  const hashedPassword = await bcrypt.hash('admin123', 12)
  
  const user = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: hashedPassword,
      name: 'Admin User',
    },
  })

  console.log('Created user:', user)

  // Create sample projects
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, shopping cart, checkout, and payment integration. Built with modern web technologies for optimal performance.",
      image: "/modern-ecommerce-interface.png",
      technologies: "Next.js, TypeScript, Stripe, PostgreSQL, Tailwind CSS",
      github: "https://github.com",
      demo: "https://example.com",
      featured: true,
      published: true,
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team workspaces, and project tracking. Features drag-and-drop interface and advanced filtering.",
      image: "/task-management-dashboard.png",
      technologies: "React, Node.js, Socket.io, MongoDB, Redux",
      github: "https://github.com",
      demo: "https://example.com",
      featured: true,
      published: true,
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that displays current conditions, forecasts, and historical data. Includes interactive charts and location-based weather alerts.",
      image: "/weather-dashboard.png",
      technologies: "Vue.js, Chart.js, Weather API, Vuex, SCSS",
      github: "https://github.com",
      demo: "https://example.com",
      featured: false,
      published: true,
    },
    {
      title: "Portfolio CMS",
      description: "A headless CMS built specifically for portfolio websites. Features a user-friendly admin panel, image optimization, and markdown support for blog posts.",
      image: "/cms-admin-panel-interface.jpg",
      technologies: "Next.js, Prisma, PostgreSQL, AWS S3, NextAuth.js",
      github: "https://github.com",
      demo: "https://example.com",
      featured: true,
      published: true,
    },
  ]

  for (const projectData of projects) {
    const project = await prisma.project.upsert({
      where: { id: `project-${projectData.title.toLowerCase().replace(/\s+/g, '-')}` },
      update: {},
      create: {
        ...projectData,
        userId: user.id,
      },
    })
    console.log('Created project:', project.title)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
