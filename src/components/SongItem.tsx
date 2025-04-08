import type { Song } from "../types";

interface SongItemProps {
  song: Song;
}

export function SongItem({ song }: SongItemProps) {
  return (
    <a href={`#${song.id}`} className="items-center grid grid-cols-[max-content_1fr] grid-rows-[max-content_1fr] gap-x-2 gap-y-1 cursor-pointer active:bg-gray-100 bg-white rounded-lg shadow p-2">
      <img
        className="w-12 h-12 row-span-full"
        src={song.coverImage}
        alt={song.album}
      />
      <div className="font-medium text-base truncate">{song.title}</div>
      <div className="text-sm text-gray-500 truncate">
        Imagine Dragons - {song.album}
      </div>
    </a>
  );
}
