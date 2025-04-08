import { useState, useEffect } from "react";
import { Song } from "./types";
import { SongItem } from "./components/SongItem";
import { SONGS } from "./data/songs";
import "./index.css";
import { LyricsView } from "./components/LyricsView";

function App() {
  const [songs] = useState<Song[]>(SONGS);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // 检测系统主题
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(darkModeMediaQuery.matches);

    // 监听系统主题变化
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto py-8 px-4 pt-safe">
        <h1 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Imagine Dragons LOOM 2025 ShenZhen
        </h1>
        <div className="space-y-3">
          {songs.map((song) => (
            <SongItem key={song.id} song={song} isDark={isDark} />
          ))}
        </div>
        <div className="space-y-3 mt-3">
          {songs.map((song) => (
            <LyricsView key={song.id} song={song} isDark={isDark} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
