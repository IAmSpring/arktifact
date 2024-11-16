import { getEpisodeFiles } from '../../../data/episode-files';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const episode = searchParams.get('episode');

  if (!episode) {
    return NextResponse.json({ error: 'Episode parameter is required' }, { status: 400 });
  }

  try {
    const files = await getEpisodeFiles(episode);
    return NextResponse.json(files);
  } catch (error) {
    console.error('Error fetching episode files:', error);
    return NextResponse.json({ error: 'Failed to fetch episode files' }, { status: 500 });
  }
}

// Add config for static export
export const dynamic = 'force-static'; 