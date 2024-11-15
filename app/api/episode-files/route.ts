import { getEpisodeFiles } from '@/data/episode-files/index';
import { NextResponse } from 'next/server';

// Pre-generate all possible episode file data
const episodeData = Array.from({ length: 8 }, (_, i) => ({
  episode: (i + 1).toString(),
  files: getEpisodeFiles((i + 1).toString())
}));

// Return static data instead of using request.url
export async function GET() {
  return NextResponse.json(episodeData);
}

// Add config for static export
export const dynamic = 'force-static'; 