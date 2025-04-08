import { useState } from "react";
import { Song } from "./types";
import { SongItem } from "./components/SongItem";
import { SONGS } from "./data/songs";
import "./index.css";
import { LyricsView } from "./components/LyricsView";

function App() {
  const [songs] = useState<Song[]>(SONGS);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">
          Imagine Dragons LOOM 2025 ShenZhen
        </h1>
        <div className="space-y-3">
          {songs.map((song) => (
            <SongItem key={song.id} song={song} />
          ))}
        </div>
        <div className="space-y-3 mt-3">
          {songs.map((song) => (
            <LyricsView key={song.id} song={song} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
