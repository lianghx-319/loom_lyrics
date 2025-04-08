import { Song } from '../types';

// 导入歌词文件
import loomLyrics from '../assets/lyrics/loom.txt?raw';
import evolveLyrics from '../assets/lyrics/evolve.txt?raw';
import originsLyrics from '../assets/lyrics/origins.txt?raw';

// 导入封面图片
import loomCover from '../assets/covers/loom.png?base64';
import evolveCover from '../assets/covers/evolve.jpg?base64';
import originsCover from '../assets/covers/origins.png?base64';

export const SONGS: Song[] = [
  {
    id: '1',
    title: 'Loom',
    album: 'LOOM',
    lyricsFile: loomLyrics,
    coverImage: loomCover,
  },
  {
    id: '2',
    title: 'Evolve',
    album: 'Evolve',
    lyricsFile: evolveLyrics,
    coverImage: evolveCover,
  },
  {
    id: '3',
    title: 'Origins',
    album: 'Origins (Deluxe)',
    lyricsFile: originsLyrics,
    coverImage: originsCover,
  },
  {
    id: '4',
    title: 'Bad Liar',
    album: 'Origins (Deluxe)',
    lyricsFile: '/lyrics/bad-liar.txt',
    coverImage: '/covers/origins.png',
  },
  {
    id: '5',
    title: 'Nice to Meet You',
    album: 'LOOM',
    lyricsFile: '/lyrics/nice-to-meet-you.txt',
    coverImage: '/covers/loom.jpg',
  },
  {
    id: '6',
    title: 'Believer',
    album: 'Evolve',
    lyricsFile: '/lyrics/believer.txt',
    coverImage: '/covers/evolve.jpg',
  },
  {
    id: '7',
    title: 'Radioactive',
    album: 'Continued Silence EP',
    lyricsFile: '/lyrics/radioactive.txt',
    coverImage: '/covers/continued-silence.jpg',
  },
  {
    id: '8',
    title: 'Bones',
    album: 'Bones',
    lyricsFile: '/lyrics/bones.txt',
    coverImage: '/covers/bones.jpg',
  },
  {
    id: '9',
    title: 'Sharks',
    album: 'Sharks',
    lyricsFile: '/lyrics/sharks.txt',
    coverImage: '/covers/sharks.jpg',
  },
  {
    id: '10',
    title: 'Demons',
    album: 'Night Visions',
    lyricsFile: '/lyrics/demons.txt',
    coverImage: '/covers/night-visions.jpg',
  },
  {
    id: '11',
    title: 'Shots',
    album: 'Shots',
    lyricsFile: '/lyrics/shots.txt',
    coverImage: '/covers/shots.jpg',
  },
  {
    id: '12',
    title: "Don't Forget Me",
    album: 'LOOM',
    lyricsFile: '/lyrics/dont-forget-me.txt',
    coverImage: '/covers/loom.jpg',
  },
  {
    id: '13',
    title: 'Take Me to the Beach',
    album: 'LOOM',
    lyricsFile: '/lyrics/take-me-to-the-beach.txt',
    coverImage: '/covers/loom.jpg',
  },
  {
    id: '14',
    title: 'Enemy',
    album: 'Enemy',
    lyricsFile: '/lyrics/enemy.txt',
    coverImage: '/covers/enemy.jpg',
  },
  {
    id: '15',
    title: 'Thunder',
    album: 'Evolve',
    lyricsFile: '/lyrics/thunder.txt',
    coverImage: '/covers/evolve.jpg',
  },
  {
    id: '16',
    title: 'Eyes Closed',
    album: 'Eyes Closed',
    lyricsFile: '/lyrics/eyes-closed.txt',
    coverImage: '/covers/eyes-closed.jpg',
  },
  {
    id: '17',
    title: 'Tiptoe',
    album: 'Night Visions',
    lyricsFile: '/lyrics/tiptoe.txt',
    coverImage: '/covers/night-visions.jpg',
  },
  {
    id: '18',
    title: 'Fire in These Hills',
    album: 'LOOM',
    lyricsFile: '/lyrics/fire-in-these-hills.txt',
    coverImage: '/covers/loom.jpg',
  },
  {
    id: '19',
    title: 'Wake Up',
    album: 'LOOM',
    lyricsFile: '/lyrics/wake-up.txt',
    coverImage: '/covers/loom.jpg',
  },
  {
    id: '20',
    title: 'In Your Corner',
    album: 'LOOM',
    lyricsFile: '/lyrics/in-your-corner.txt',
    coverImage: '/covers/loom.jpg',
  },
  {
    id: '21',
    title: 'Walking The Wire',
    album: 'Evolve',
    lyricsFile: '/lyrics/walking-the-wire.txt',
    coverImage: '/covers/evolve.jpg',
  },
  {
    id: '22',
    title: "It's Time",
    album: "It's Time EP",
    lyricsFile: '/lyrics/its-time.txt',
    coverImage: '/covers/its-time.jpg',
  },
  {
    id: '23',
    title: 'Whatever It Takes',
    album: 'Evolve',
    lyricsFile: '/lyrics/whatever-it-takes.txt',
    coverImage: '/covers/evolve.jpg',
  },
  {
    id: '24',
    title: 'Natural',
    album: 'Origins (Deluxe)',
    lyricsFile: '/lyrics/natural.txt',
    coverImage: '/covers/origins.jpg',
  },
]; 