import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    console.log('Fetching projects...')
    const projects = await prisma.project.findMany({
      where: {
        published: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    console.log('Found projects:', projects.length)
    return NextResponse.json(projects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json({ error: 'Failed to fetch projects', details: error.message }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, image, technologies, github, demo, featured, published } = body

    // For now, we'll use a default user ID. In a real app, you'd get this from authentication
    const defaultUserId = 'default-user-id'

    const project = await prisma.project.create({
      data: {
        title,
        description,
        image,
        technologies,
        github,
        demo,
        featured: featured || false,
        published: published || false,
        userId: defaultUserId,
      },
    })

    return NextResponse.json(project)
  } catch (error) {
    console.error('Error creating project:', error)
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
  }
}
