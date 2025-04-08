import { Song } from '../types'

interface LyricsViewProps {
  song: Song
  lyrics: string
  onClose: () => void
}

export function LyricsView({ song, lyrics, onClose }: LyricsViewProps) {
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto">
      <div className="px-4 py-3 border-b sticky top-0 bg-white/80 backdrop-blur-sm">
        <button 
          onClick={onClose}
          className="mb-2"
        >
          ← 返回
        </button>
        <h2 className="text-xl font-semibold">{song.title}</h2>
        <div className="text-sm text-gray-500">Imagine Dragons - {song.album}</div>
      </div>
      <div className="p-4 whitespace-pre-wrap leading-relaxed">
        {lyrics}
      </div>
    </div>
  )
} 