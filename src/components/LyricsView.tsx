import { parseLRCFile } from '../utils/lyricsParser';

interface LyricsViewProps {
  song: {
    id: string;
    title: string;
    artist: string;
    lyrics: string;
  };
  isDark: boolean;
}

export function LyricsView({ song, isDark }: LyricsViewProps) {
  const parsedLyrics = parseLRCFile(song.lyrics, song.title);
  
  return (
    <div className={`p-4 sm:p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {song.title} - Lyrics
      </h2>
      <div className={`space-y-1 sm:space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        {parsedLyrics.lines.map((line, index) => (
          <div key={index} className="flex items-start space-x-2 sm:space-x-3">
            <span className="text-xs sm:text-sm opacity-60 min-w-12 sm:min-w-16">
              {Math.floor(line.time / 60)}:{(line.time % 60).toFixed(2).padStart(5, '0')}
            </span>
            <span className="flex-1 text-sm sm:text-base">{line.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
