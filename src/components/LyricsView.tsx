import { useMemo } from "react";
import { Song } from "../types";
import { getLyricsParts, LyricPart } from "lyrics-structure";
import { SongItem } from "./SongItem";
import { useLocalStorage } from "react-use";

interface LyricLine {
  text: string;
  index: number;
}

interface LyricSection {
  name: string;
  lines: LyricLine[];
}

interface LyricsViewProps {
  song: Song;
}

export function LyricsView({ song }: LyricsViewProps) {
  const [highlights, setHighlights] = useLocalStorage<Record<number, boolean>>(
    `lyrics-highlights-${song.id}`,
    {},
  );
  const storedHighlights = highlights || {};

  // Parse lyrics into sections using useMemo
  const sections = useMemo(() => {
    const rawLyrics = getLyricsParts(song.lyricsFile);
    const parsedSections: LyricSection[] = [];
    let currentSection: LyricSection | null = null;
    let globalLineIndex = 0;

    rawLyrics.forEach((part: LyricPart) => {
      if (part.name) {
        // This is a section header
        if (currentSection) {
          parsedSections.push(currentSection);
        }
        currentSection = {
          name: part.name,
          lines: [],
        };
      } else if (part.content && currentSection) {
        // This is lyrics content, split by newlines
        const lines = part.content.split("\n");
        lines.forEach((line) => {
          if (line.trim()) {
            currentSection!.lines.push({
              text: line.trim(),
              index: globalLineIndex,
            });
            globalLineIndex++;
          }
        });
      }
    });

    if (currentSection) {
      parsedSections.push(currentSection);
    }

    return parsedSections;
  }, [song.lyricsFile]);

  // Toggle highlight state
  const toggleHighlight = (lineIndex: number) => {
    setHighlights({
      ...storedHighlights,
      [lineIndex]: !storedHighlights[lineIndex],
    });
  };

  return (
    <div
      id={song.id}
      className="max-w-2xl mx-auto bg-white rounded-lg shadow-md"
    >
      <div className="sticky top-0 z-10 bg-white rounded-t-lg shadow-sm">
        <SongItem song={song} />
      </div>
      <div className="p-2">
        <div className="space-y-3">
          {sections.map((section, sectionIndex) => (
            <div key={`${section.name}-${sectionIndex}`} className="space-y-2">
              <div className="space-y-1">
                {section.lines.map((line) => (
                  <div
                    key={`${line.index}`}
                    onClick={() => toggleHighlight(line.index)}
                    className={`w-full font-medium text-left p-2 rounded transition-colors cursor-pointer ${
                      storedHighlights[line.index]
                        ? "bg-red-100 hover:bg-red-200 text-red-900"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {line.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
