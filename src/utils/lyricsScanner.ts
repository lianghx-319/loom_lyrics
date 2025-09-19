import { parseLRCFile } from './lyricsParser';

export interface Artist {
  id: string;
  name: string;
  songs: Song[];
  coverImage?: string;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  lyrics: string;
  coverImage?: string;
}

export interface LyricsData {
  artists: Artist[];
}

function generateId(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

async function scanLyricsDirectory(): Promise<LyricsData> {
  const artists: Artist[] = [];
  
  try {
    const lyricsContext = import.meta.glob('/lyrics/**/*.lrc', { 
      as: 'raw',
      eager: true 
    });
    
    const artistMap = new Map<string, Song[]>();
    
    for (const [filePath, content] of Object.entries(lyricsContext)) {
      const pathParts = filePath.split('/');
      const artistName = pathParts[pathParts.length - 2];
      const fileName = pathParts[pathParts.length - 1];
      
      const parsedLyrics = parseLRCFile(content, fileName);
      const songId = generateId(parsedLyrics.title);
      
      const song: Song = {
        id: songId,
        title: parsedLyrics.title,
        artist: parsedLyrics.artist || artistName,
        lyrics: content
      };
      
      if (!artistMap.has(artistName)) {
        artistMap.set(artistName, []);
      }
      artistMap.get(artistName)!.push(song);
    }
    
    for (const [artistName, songs] of artistMap) {
      const artistId = generateId(artistName);
      artists.push({
        id: artistId,
        name: artistName,
        songs: songs
      });
    }
    
    artists.sort((a, b) => a.name.localeCompare(b.name));
    
  } catch (error) {
    console.error('Error scanning lyrics directory:', error);
  }
  
  return { artists };
}

export async function loadLyricsData(): Promise<LyricsData> {
  try {
    const { ARTISTS_DATA } = await import('../data/artistsData');
    return { artists: ARTISTS_DATA };
  } catch (error) {
    console.warn('Could not load generated data, falling back to dynamic scanning');
    return await scanLyricsDirectory();
  }
}