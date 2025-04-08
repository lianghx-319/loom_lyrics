import type { Song } from "../types";

interface SongItemProps {
  song: Song;
}

export function SongItem({ song }: SongItemProps) {
  return (
    <div className="grid grid-cols-[min-content,1fr] grid-rows-[min-content,1fr] gap-2 py-2 cursor-pointer active:bg-gray-100">
      <img
        className="w-5 h-5"
        src={song.coverImage}
        alt={song.album}
        onError={(e) => {
          // 图片加载失败时显示颜色块
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          target.parentElement!.style.backgroundColor =
            song.album === "LOOM"
              ? "#ff4d4d"
              : song.album === "Evolve"
                ? "#4a90e2"
                : song.album === "Origins (Deluxe)"
                  ? "#50c878"
                  : "#9b9b9b";
        }}
      />
      <div className="font-medium text-base truncate">{song.title}</div>
      <div className="text-sm text-gray-500 truncate">
        Imagine Dragons - {song.album}
      </div>
    </div>
  );
}
