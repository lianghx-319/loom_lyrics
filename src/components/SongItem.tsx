import type { Song } from "../types";

interface SongItemProps {
  song: Song;
  isDark: boolean;
}

export function SongItem({ song, isDark }: SongItemProps) {
  return (
    <a 
      href={`#${song.id}`} 
      className={`
        items-center grid grid-cols-[max-content_1fr] grid-rows-[max-content_1fr] gap-x-2 gap-y-1 
        cursor-pointer rounded-lg shadow p-2
        transition-all duration-200 ease-in-out
        ${isDark ? 'bg-gray-800 hover:bg-gray-700 active:bg-gray-600' : 'bg-white hover:bg-gray-50 active:bg-gray-100'}
        -webkit-tap-highlight-color: transparent
        touch-manipulation
      `}
    >
      <img
        className="w-12 h-12 row-span-full"
        src={song.coverImage}
        alt={song.album}
      />
      <div className={`font-medium text-base truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>{song.title}</div>
      <div className={`text-sm truncate ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        Imagine Dragons - {song.album}
      </div>
    </a>
  );
}
