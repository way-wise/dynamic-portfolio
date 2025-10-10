import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Simple hardcoded check for admin user
    if (email === 'admin@example.com' && password === 'admin123') {
      // Create a simple token (in production, use proper JWT)
      const token = 'admin-token-' + Date.now()
      
      return NextResponse.json({ 
        token, 
        user: { 
          id: 'admin', 
          email: 'admin@example.com', 
          name: 'Admin User' 
        } 
      })
    } else {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }
  } catch (error) {
    console.error('Error during login:', error)
    return NextResponse.json({ error: 'Login failed' }, { status: 500 })
  }
}
