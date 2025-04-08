import type { Song } from "../types";

interface SongItemProps {
  song: Song;
  isDark: boolean;
}

export function SongItem({ song, isDark }: SongItemProps) {
  return (
    <a href={`#${song.id}`} className={`items-center grid grid-cols-[max-content_1fr] grid-rows-[max-content_1fr] gap-x-2 gap-y-1 cursor-pointer active:bg-gray-100 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-lg shadow p-2`}>
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
