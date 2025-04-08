import { useState, useEffect } from "react";
import { Song } from "./types";
import { Workbox } from "workbox-window";
import { SongItem } from "./components/SongItem";
import { SONGS } from "./data/songs";
import "./index.css";

function App() {
  const [songs] = useState<Song[]>(SONGS);
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    const wb = new Workbox("/sw.js");
    wb.addEventListener("waiting", () => {
      setUpdateAvailable(true);
    });
    wb.register();
  }, []);

  const handleUpdate = () => {
    const wb = new Workbox("/sw.js");
    wb.addEventListener("controlling", () => {
      window.location.reload();
    });
    wb.messageSkipWaiting();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Imagine Dragons Lyrics</h1>

        {updateAvailable && (
          <div
            className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4"
            role="alert"
          >
            <p className="font-bold">Update Available</p>
            <p>
              A new version is available.{" "}
              <button onClick={handleUpdate} className="underline">
                Click here to update
              </button>
            </p>
          </div>
        )}

        <div className="space-y-6">
          {songs.map((song) => (
            <div key={song.id} className="bg-white rounded-lg shadow p-6">
              <SongItem song={song} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
