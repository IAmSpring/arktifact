import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filePath = searchParams.get('path');

  if (!filePath) {
    return NextResponse.json({ error: 'No file path provided' }, { status: 400 });
  }

  try {
    // Ensure the path is within the scripts directory
    const fullPath = path.join(process.cwd(), 'scripts', filePath);
    if (!fullPath.startsWith(path.join(process.cwd(), 'scripts'))) {
      return NextResponse.json({ error: 'Invalid path' }, { status: 403 });
    }

    const fileContent = await fs.promises.readFile(fullPath, 'utf-8');
    return NextResponse.json({ content: fileContent });
  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
} 