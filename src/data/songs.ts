import {
  createEvolveSong,
  createLoomSong,
  createMercurySong,
  createNightVisionsSong,
  createOriginsSong,
  createSmokeMirrosSong,
  Song,
} from "../types";

// 导入歌词文件
import fireInTheseHillsLyrics from "../assets/lyrics/fire-in-these-hills.txt?raw";
import thunderLyrics from "../assets/lyrics/thunder.txt?raw";
import bonesLyrics from "../assets/lyrics/bones.txt?raw";
import tiptoeLyrics from "../assets/lyrics/tiptoe.txt?raw";
import takeMeToTheBeachLyrics from "../assets/lyrics/take-me-to-the-beach.txt?raw";
import whateverItTakesLyrics from "../assets/lyrics/whatever-it-takes.txt?raw";
import shotsLyrics from "../assets/lyrics/shots.txt?raw";
import badLiarLyrics from "../assets/lyrics/bad-liar.txt?raw";
import niceToMeetYouLyrics from "../assets/lyrics/nice-to-meet-you.txt?raw";
import wakeUpLyrics from "../assets/lyrics/wake-up.txt?raw";
import radioactiveLyrics from "../assets/lyrics/radioactive.txt?raw";
import dontForgetMeLyrics from "../assets/lyrics/dont-forget-me.txt?raw";
import demonsLyrics from "../assets/lyrics/demons.txt?raw";
import enemyLyrics from "../assets/lyrics/enemy.txt?raw";
import eyesClosedLyrics from "../assets/lyrics/eyes-closed.txt?raw";
import inYourCornerLyrics from "../assets/lyrics/in-your-corner.txt?raw";
import believerLyrics from "../assets/lyrics/believer.txt?raw";
import sharksLyrics from "../assets/lyrics/sharks.txt?raw";
import walkingTheWireLyrics from "../assets/lyrics/walking-the-wire.txt?raw";
import naturalLyrics from "../assets/lyrics/natural.txt?raw";
import 很需要 from "../assets/lyrics/a.txt?raw";

export const SONGS: Song[] = [
  createLoomSong({
    title: "很需要",
    lyricsFile: 很需要,
  }),
  createLoomSong({
    title: "Fire in this hills",
    lyricsFile: fireInTheseHillsLyrics,
  }),
  createEvolveSong({
    title: "Thunder",
    lyricsFile: thunderLyrics,
  }),
  createMercurySong({
    title: "Bones",
    lyricsFile: bonesLyrics,
  }),
  createNightVisionsSong({
    title: "Tiptoe",
    lyricsFile: tiptoeLyrics,
  }),
  createLoomSong({
    title: "Take me to the beach",
    lyricsFile: takeMeToTheBeachLyrics,
  }),
  createEvolveSong({
    title: "Whatever it takes",
    lyricsFile: whateverItTakesLyrics,
  }),
  createSmokeMirrosSong({
    title: "Shots",
    lyricsFile: shotsLyrics,
  }),
  createOriginsSong({
    title: "Bad liar",
    lyricsFile: badLiarLyrics,
  }),
  createLoomSong({
    title: "Nice to meet you",
    lyricsFile: niceToMeetYouLyrics,
  }),
  createLoomSong({
    title: "Wake up",
    lyricsFile: wakeUpLyrics,
  }),
  createNightVisionsSong({
    title: "Radioactive",
    lyricsFile: radioactiveLyrics,
  }),
  createNightVisionsSong({
    title: "Demons",
    lyricsFile: demonsLyrics,
  }),
  createOriginsSong({
    title: "Natural",
    lyricsFile: naturalLyrics,
  }),
  createEvolveSong({
    title: "Walking the wire",
    lyricsFile: walkingTheWireLyrics,
  }),
  createMercurySong({
    title: "Sharks",
    lyricsFile: sharksLyrics,
  }),
  createMercurySong({
    title: "Enemy",
    lyricsFile: enemyLyrics,
  }),
  createLoomSong({
    title: "Eyes closed",
    lyricsFile: eyesClosedLyrics,
  }),
  createLoomSong({
    title: "In your corner",
    lyricsFile: inYourCornerLyrics,
  }),
  createLoomSong({
    title: "Don't forget me",
    lyricsFile: dontForgetMeLyrics,
  }),
  createEvolveSong({
    title: "Believer",
    lyricsFile: believerLyrics,
  }),
];
