import { NextRequest, NextResponse } from 'next/server'

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

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const category = mockCategories.find(c => c.id === params.id)

    if (!category) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 })
    }

    return NextResponse.json(category)
  } catch (error) {
    console.error('Error fetching category:', error)
    return NextResponse.json({ error: 'Failed to fetch category' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { name, description, color, icon } = body

    const categoryIndex = mockCategories.findIndex(c => c.id === params.id)
    
    if (categoryIndex === -1) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 })
    }

    // Update the category
    mockCategories[categoryIndex] = {
      ...mockCategories[categoryIndex],
      name,
      description,
      color,
      icon,
      updatedAt: new Date().toISOString(),
    }

    return NextResponse.json(mockCategories[categoryIndex])
  } catch (error) {
    console.error('Error updating category:', error)
    return NextResponse.json({ error: 'Failed to update category' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const categoryIndex = mockCategories.findIndex(c => c.id === params.id)
    
    if (categoryIndex === -1) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 })
    }

    mockCategories.splice(categoryIndex, 1)

    return NextResponse.json({ message: 'Category deleted successfully' })
  } catch (error) {
    console.error('Error deleting category:', error)
    return NextResponse.json({ error: 'Failed to delete category' }, { status: 500 })
  }
}
