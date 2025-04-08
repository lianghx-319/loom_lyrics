// 导入封面图片
import loomCover from "./assets/covers/loom.png";
import evolveCover from "./assets/covers/evolve.jpg";
import originsCover from "./assets/covers/origins.png";
import bonesCover from "./assets/covers/bones.jpg";
import tiptoeCover from "./assets/covers/tiptoe.jpg";
import shotsCover from "./assets/covers/shots.jpeg";

export interface Song {
  id: string;
  title: string;
  album:
    | "LOOM"
    | "Evolve"
    | "Mercury"
    | "Night Visions"
    | "Origins(Deluxe)"
    | "Smoke + Mirros";
  lyricsFile: string;
  coverImage: string;
}

export function createSong(song: Omit<Song, "id">): Song {
  const id = song.title.toLowerCase().replace(/\s+/g, "-");
  return { ...song, id };
}

export function createLoomSong(
  song: Omit<Song, "album" | "coverImage" | "id">,
): Song {
  return createSong({ ...song, album: "LOOM", coverImage: loomCover });
}

export function createEvolveSong(
  song: Omit<Song, "album" | "coverImage" | "id">,
): Song {
  return createSong({ ...song, album: "Evolve", coverImage: evolveCover });
}

export function createMercurySong(
  song: Omit<Song, "album" | "coverImage" | "id">,
): Song {
  return createSong({ ...song, album: "Mercury", coverImage: bonesCover });
}

export function createNightVisionsSong(
  song: Omit<Song, "album" | "coverImage" | "id">,
): Song {
  return createSong({
    ...song,
    album: "Night Visions",
    coverImage: tiptoeCover,
  });
}

export function createOriginsSong(
  song: Omit<Song, "album" | "coverImage" | "id">,
): Song {
  return createSong({
    ...song,
    album: "Origins(Deluxe)",
    coverImage: originsCover,
  });
}

export function createSmokeMirrosSong(
  song: Omit<Song, "album" | "coverImage" | "id">,
): Song {
  return createSong({
    ...song,
    album: "Smoke + Mirros",
    coverImage: shotsCover,
  });
}
