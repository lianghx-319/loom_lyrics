import { parseLRCFile } from '../src/utils/lyricsParser';
import { assignCoverImages } from '../src/utils/coverManager';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ArtistData {
  id: string;
  name: string;
  songs: SongData[];
}

interface SongData {
  id: string;
  title: string;
  artist: string;
  lyrics: string;
}

function generateId(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

function scanLyricsDirectory(): ArtistData[] {
  const lyricsDir = path.join(__dirname, '../lyrics');
  const artists: ArtistData[] = [];
  
  if (!fs.existsSync(lyricsDir)) {
    console.warn('Lyrics directory not found:', lyricsDir);
    return artists;
  }
  
  const artistDirs = fs.readdirSync(lyricsDir).filter(item => {
    const fullPath = path.join(lyricsDir, item);
    return fs.statSync(fullPath).isDirectory();
  });
  
  for (const artistDir of artistDirs) {
    const artistPath = path.join(lyricsDir, artistDir);
    const files = fs.readdirSync(artistPath).filter(file => file.endsWith('.lrc'));
    
    const songs: SongData[] = [];
    
    for (const file of files) {
      const filePath = path.join(artistPath, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const parsedLyrics = parseLRCFile(content, file);
      
      songs.push({
        id: generateId(parsedLyrics.title),
        title: parsedLyrics.title,
        artist: parsedLyrics.artist || artistDir,
        lyrics: content
      });
    }
    
    if (songs.length > 0) {
      artists.push({
        id: generateId(artistDir),
        name: artistDir,
        songs: songs
      });
    }
  }
  
  return artists.sort((a, b) => a.name.localeCompare(b.name));
}

function generateDataFile(artists: ArtistData[]) {
  const artistsWithCovers = assignCoverImages(artists);
  
  const dataContent = `// Auto-generated file - DO NOT EDIT MANUALLY
import { Artist } from '../utils/lyricsScanner';

export const ARTISTS_DATA: Artist[] = ${JSON.stringify(artistsWithCovers, null, 2)};
`;
  
  const outputPath = path.join(__dirname, '../src/data/artistsData.ts');
  fs.writeFileSync(outputPath, dataContent);
  console.log('Generated artists data file:', outputPath);
}

function main() {
  console.log('Scanning lyrics directory...');
  const artists = scanLyricsDirectory();
  console.log(`Found ${artists.length} artists with ${artists.reduce((acc, artist) => acc + artist.songs.length, 0)} songs`);
  
  generateDataFile(artists);
  console.log('Build script completed successfully!');
}

main();