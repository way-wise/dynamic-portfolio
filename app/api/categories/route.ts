import { NextRequest, NextResponse } from 'next/server'

// NOTE: This API route is no longer used since we moved to static data
// The categories data is now managed in lib/data.ts
// Keeping this file for reference or future database integration

// Mock data for categories
const mockCategories = [
  {
    id: '1',
    name: 'Frontend',
    description: 'User interface and client-side development',
    color: '#3B82F6', // Blue
    icon: '🎨',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    name: 'Backend',
    description: 'Server-side development and APIs',
    color: '#10B981', // Green
    icon: '⚙️',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '3',
    name: 'Full-Stack',
    description: 'Complete web applications with frontend and backend',
    color: '#8B5CF6', // Purple
    icon: '🚀',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '4',
    name: 'Mobile',
    description: 'Mobile application development',
    color: '#F59E0B', // Orange
    icon: '📱',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '5',
    name: 'API',
    description: 'Application Programming Interfaces and integrations',
    color: '#EF4444', // Red
    icon: '🔌',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '6',
    name: 'No-Code',
    description: 'Platform-based solutions without traditional coding',
    color: '#06B6D4', // Cyan
    icon: '🛠️',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '7',
    name: 'AI/ML',
    description: 'Artificial Intelligence and Machine Learning projects',
    color: '#EC4899', // Pink
    icon: '🤖',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '8',
    name: 'Blockchain',
    description: 'Decentralized applications and Web3 projects',
    color: '#84CC16', // Lime
    icon: '⛓️',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '9',
    name: 'DevOps',
    description: 'Development operations and infrastructure',
    color: '#6B7280', // Gray
    icon: '🔧',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '10',
    name: 'Data Science',
    description: 'Data analysis, visualization, and insights',
    color: '#8B5CF6', // Purple
    icon: '📊',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  }
]

export async function GET() {
  try {
    console.log('Fetching categories...')
    return NextResponse.json(mockCategories)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, description, color, icon } = body

    const newCategory = {
      id: Date.now().toString(),
      name,
      description: description || '',
      color: color || '#6B7280',
      icon: icon || '📁',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    mockCategories.push(newCategory)
    return NextResponse.json(newCategory)
  } catch (error) {
    console.error('Error creating category:', error)
    return NextResponse.json({ error: 'Failed to create category' }, { status: 500 })
  }
}
