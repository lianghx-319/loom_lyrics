export interface CoverImage {
  id: string;
  url: string;
  name: string;
}

export const COVER_IMAGES: CoverImage[] = [
  { id: 'default', url: '/covers/default.jpg', name: 'Default Cover' },
  { id: 'loom', url: '/covers/loom.png', name: 'LOOM' },
  { id: 'evolve', url: '/covers/evolve.jpg', name: 'Evolve' },
  { id: 'origins', url: '/covers/origins.png', name: 'Origins' },
  { id: 'bones', url: '/covers/bones.jpg', name: 'Bones' },
  { id: 'tiptoe', url: '/covers/tiptoe.jpg', name: 'Tiptoe' },
  { id: 'shots', url: '/covers/shots.jpeg', name: 'Shots' },
];

export function getCoverImage(artistName: string, songTitle: string): CoverImage {
  const nameLower = (artistName + ' ' + songTitle).toLowerCase();
  
  for (const cover of COVER_IMAGES) {
    if (nameLower.includes(cover.id.toLowerCase())) {
      return cover;
    }
  }
  
  return COVER_IMAGES[0];
}

export function assignCoverImages(artists: any[]): any[] {
  const usedCovers = new Set<string>();
  
  return artists.map(artist => {
    const suitableCover = getCoverImage(artist.name, '');
    
    if (!usedCovers.has(suitableCover.id)) {
      usedCovers.add(suitableCover.id);
      return {
        ...artist,
        coverImage: suitableCover.url
      };
    }
    
    const availableCovers = COVER_IMAGES.filter(cover => !usedCovers.has(cover.id));
    const selectedCover = availableCovers.length > 0 ? availableCovers[0] : COVER_IMAGES[0];
    usedCovers.add(selectedCover.id);
    
    return {
      ...artist,
      coverImage: selectedCover.url
    };
  });
}