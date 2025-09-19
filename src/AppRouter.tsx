import { BrowserRouter, Routes, Route, Navigate, Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loadLyricsData } from './utils/lyricsScanner';
import { Artist } from './utils/lyricsScanner';
import { SongList } from './components/SongList';
import { LyricsView } from './components/LyricsView';

function ArtistList({ artists, isDark }: { artists: Artist[], isDark: boolean }) {
  return (
    <div className="space-y-4">
      <h2 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Artists
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {artists.map((artist) => (
          <Link
            key={artist.id}
            to={`/artist/${artist.id}`}
            className={`p-3 sm:p-4 rounded-lg border transition-colors active:scale-95 ${
              isDark 
                ? 'bg-gray-800 border-gray-700 hover:bg-gray-700 text-white' 
                : 'bg-white border-gray-200 hover:bg-gray-50 text-gray-900'
            }`}
          >
            {artist.coverImage && (
              <img 
                src={artist.coverImage} 
                alt={artist.name}
                className="w-full h-24 sm:h-32 object-cover rounded-lg mb-2 sm:mb-3"
              />
            )}
            <h3 className="font-semibold text-base sm:text-lg">{artist.name}</h3>
            <p className="text-sm opacity-75">{artist.songs.length} songs</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ArtistPage({ artist, isDark }: { artist: Artist, isDark: boolean }) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <Link 
        to="/"
        className={`inline-flex items-center text-sm mb-2 sm:mb-4 ${
          isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
        }`}
      >
        ← Back to Artists
      </Link>
      
      <div className={`p-4 sm:p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        {artist.coverImage && (
          <img 
            src={artist.coverImage} 
            alt={artist.name}
            className="w-full h-32 sm:h-48 object-cover rounded-lg mb-3 sm:mb-4"
          />
        )}
        <h1 className={`text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {artist.name}
        </h1>
        <p className={`text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {artist.songs.length} songs
        </p>
      </div>
      
      <SongList artist={artist} isDark={isDark} />
    </div>
  );
}

export default function AppRouter() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDark(initialTheme);

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
      }
    };

    darkModeMediaQuery.addEventListener('change', handleChange);
    
    loadLyricsData().then((data: { artists: Artist[] }) => {
      setArtists(data.artists);
      setLoading(false);
    });

    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto py-4 px-4 sm:py-6 sm:px-6 lg:py-8 lg:px-8 pt-safe">
          <Routes>
            <Route 
              path="/" 
              element={<ArtistList artists={artists} isDark={isDark} />} 
            />
            <Route 
              path="/artist/:artistId" 
              element={
                <ArtistRoute artists={artists} isDark={isDark} />
              } 
            />
            <Route 
              path="/artist/:artistId/song/:songId" 
              element={
                <SongRoute artists={artists} isDark={isDark} />
              } 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

function ArtistRoute({ artists, isDark }: { artists: Artist[], isDark: boolean }) {
  const { artistId } = useParams<{ artistId: string }>();
  const artist = artists.find((a: Artist) => a.id === artistId);
  
  if (!artist) {
    return <Navigate to="/" replace />;
  }
  
  return <ArtistPage artist={artist} isDark={isDark} />;
}

function SongRoute({ artists, isDark }: { artists: Artist[], isDark: boolean }) {
  const { artistId, songId } = useParams<{ artistId: string, songId: string }>();
  const artist = artists.find((a: Artist) => a.id === artistId);
  const song = artist?.songs.find((s: any) => s.id === songId);
  
  if (!artist || !song) {
    return <Navigate to="/" replace />;
  }
  
  return (
    <div className="space-y-4 sm:space-y-6">
      <Link 
        to={`/artist/${artist.id}`}
        className={`inline-flex items-center text-sm mb-2 sm:mb-4 ${
          isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
        }`}
      >
        ← Back to {artist.name}
      </Link>
      
      <div className={`p-4 sm:p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <h1 className={`text-xl sm:text-2xl font-bold mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {song.title}
        </h1>
        <p className={`text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          by {song.artist}
        </p>
      </div>
      
      <LyricsView song={song} isDark={isDark} />
    </div>
  );
}