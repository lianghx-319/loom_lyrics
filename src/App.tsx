import { useState, useEffect } from 'react'
import { Song } from './types'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [songs, setSongs] = useState<Song[]>([])
  const [selectedSong, setSelectedSong] = useState<Song | null>(null)
  const [newSongTitle, setNewSongTitle] = useState('')
  const [newSongLyrics, setNewSongLyrics] = useState('')

  useEffect(() => {
    // Load songs from local storage on initial load
    const savedSongs = localStorage.getItem('songs')
    if (savedSongs) {
      setSongs(JSON.parse(savedSongs))
    }
  }, [])

  const handleSongClick = (song: Song) => {
    setSelectedSong(song)
  }

  const handleAddSong = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newSongTitle.trim() || !newSongLyrics.trim()) return

    const newSong: Song = {
      id: Date.now().toString(),
      title: newSongTitle,
      lyrics: newSongLyrics,
    }
    const updatedSongs = [...songs, newSong]
    setSongs(updatedSongs)
    localStorage.setItem('songs', JSON.stringify(updatedSongs))
    
    // Reset form
    setNewSongTitle('')
    setNewSongLyrics('')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Song Playlist</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Song List */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Songs</h2>
              <ul className="space-y-2">
                {songs.map((song) => (
                  <li
                    key={song.id}
                    className="p-3 hover:bg-gray-100 rounded cursor-pointer"
                    onClick={() => handleSongClick(song)}
                  >
                    {song.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Add New Song Form */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Add New Song</h2>
              <form onSubmit={handleAddSong} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={newSongTitle}
                    onChange={(e) => setNewSongTitle(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lyrics" className="block text-sm font-medium text-gray-700">
                    Lyrics
                  </label>
                  <textarea
                    id="lyrics"
                    value={newSongLyrics}
                    onChange={(e) => setNewSongLyrics(e.target.value)}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add Song
                </button>
              </form>
            </div>
          </div>

          {/* Song Details */}
          <div className="bg-white rounded-lg shadow p-6">
            {selectedSong ? (
              <div>
                <h2 className="text-xl font-semibold mb-4">{selectedSong.title}</h2>
                <div className="whitespace-pre-wrap">{selectedSong.lyrics}</div>
              </div>
            ) : (
              <p className="text-gray-500">Select a song to view lyrics</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
