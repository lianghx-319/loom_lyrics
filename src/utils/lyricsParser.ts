export interface LyricLine {
  time: number;
  text: string;
  originalTime: string;
}

export interface ParsedLyrics {
  title: string;
  artist: string;
  lines: LyricLine[];
}

function parseTimeString(timeStr: string): number {
  const match = timeStr.match(/\[(\d+):(\d+\.?\d*)\]/);
  if (!match) return 0;
  
  const minutes = parseInt(match[1]);
  const seconds = parseFloat(match[2]);
  return minutes * 60 + seconds;
}

function mergeDuplicateLines(lines: LyricLine[]): LyricLine[] {
  const textMap = new Map<string, LyricLine[]>();
  
  lines.forEach(line => {
    if (!textMap.has(line.text)) {
      textMap.set(line.text, []);
    }
    textMap.get(line.text)!.push(line);
  });
  
  const mergedLines: LyricLine[] = [];
  textMap.forEach((duplicates) => {
    if (duplicates.length === 1) {
      mergedLines.push(duplicates[0]);
    } else {
      const earliestLine = duplicates.reduce((earliest, current) => 
        current.time < earliest.time ? current : earliest
      );
      mergedLines.push(earliestLine);
    }
  });
  
  return mergedLines.sort((a, b) => a.time - b.time);
}

export function parseLRCFile(content: string, fileName: string): ParsedLyrics {
  const lines = content.split('\n');
  const lyricLines: LyricLine[] = [];
  
  let title = fileName.replace(/\.lrc$/, '').replace(/_/g, ' ');
  let artist = '';
  
  lines.forEach(line => {
    line = line.trim();
    
    if (line.startsWith('[ti:')) {
      const titleMatch = line.match(/\[ti:(.*?)\]/);
      if (titleMatch) title = titleMatch[1];
      return;
    }
    
    if (line.startsWith('[ar:')) {
      const artistMatch = line.match(/\[ar:(.*?)\]/);
      if (artistMatch) artist = artistMatch[1];
      return;
    }
    
    const timeMatches = line.match(/\[(\d+:\d+\.?\d*)\]/g);
    const textMatch = line.replace(/\[.*?\]/g, '').trim();
    
    if (timeMatches && textMatch) {
      timeMatches.forEach(timeMatch => {
        const time = parseTimeString(timeMatch);
        lyricLines.push({
          time,
          text: textMatch,
          originalTime: timeMatch
        });
      });
    }
  });
  
  const mergedLines = mergeDuplicateLines(lyricLines);
  
  return {
    title,
    artist,
    lines: mergedLines
  };
}