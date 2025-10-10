import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData()
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Create a unique filename
    const timestamp = Date.now()
    const filename = `${timestamp}-${file.name}`
    const path = join(process.cwd(), 'public', 'uploads', filename)

    // Ensure uploads directory exists
    const uploadsDir = join(process.cwd(), 'public', 'uploads')
    try {
      await writeFile(join(uploadsDir, '.gitkeep'), '')
    } catch {
      // Directory might already exist
    }

    await writeFile(path, buffer)

    return NextResponse.json({ 
      success: true, 
      filename: `/uploads/${filename}` 
    })
  } catch (error) {
    console.error('Error uploading file:', error)
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 })
  }
}
