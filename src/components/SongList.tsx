import { Link } from 'react-router-dom';
import { Artist } from '../utils/lyricsScanner';

interface SongListProps {
  artist: Artist;
  isDark: boolean;
}

export function SongList({ artist, isDark }: SongListProps) {
  return (
    <div className="space-y-2 sm:space-y-3">
      <h3 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Songs
      </h3>
      {artist.songs.map((song) => (
        <Link
          key={song.id}
          to={`/artist/${artist.id}/song/${song.id}`}
          className={`block p-3 sm:p-4 rounded-lg border transition-colors active:scale-95 ${
            isDark 
              ? 'bg-gray-800 border-gray-700 hover:bg-gray-700 text-white' 
              : 'bg-white border-gray-200 hover:bg-gray-50 text-gray-900'
          }`}
        >
          <h4 className="font-medium text-sm sm:text-base">{song.title}</h4>
          <p className="text-xs sm:text-sm opacity-75 mt-1">{song.artist}</p>
        </Link>
      ))}
    </div>
  );
}