import { createLoomSong, Song } from "../types";

// 导入歌词文件
import aidetaichi from "../assets/lyrics/aidetaichi.txt?raw";
import aidexiguan from "../assets/lyrics/aidexiguan.txt?raw";
import aiyucheng from "../assets/lyrics/aiyucheng.txt?raw";
import baole from "../assets/lyrics/baole.txt?raw";
import bishaji from "../assets/lyrics/bishaji.txt?raw";
import haoren from "../assets/lyrics/haoren.txt?raw";
import haoxianghaoxiang from "../assets/lyrics/haoxianghaoxiang.txt?raw";
import kgezhiwang from "../assets/lyrics/kgezhiwang.txt?raw";
import kong from "../assets/lyrics/kong.txt?raw";
import meilizhizui from "../assets/lyrics/meilizhizui.txt?raw";
import mingying from "../assets/lyrics/mingying.txt?raw";
import monica from "../assets/lyrics/monica.txt?raw";
import nanrenktv from "../assets/lyrics/nanrenktv.txt?raw";
import qingge from "../assets/lyrics/qingge.txt?raw";
import qinggewang from "../assets/lyrics/qinggewang.txt?raw";
import qingyongluo from "../assets/lyrics/qingyongluo.txt?raw";
import sanshiri from "../assets/lyrics/sanshiri.txt?raw";
import woyoujinri from "../assets/lyrics/woyoujinri.txt?raw";
import xuyuan from "../assets/lyrics/xuyuan.txt?raw";
import yanjingbunengmeiyanlei from "../assets/lyrics/yanjingbunengmeiyanlei.txt?raw";

export const SONGS: Song[] = [
  createLoomSong({
    title: "爱得太迟",
    lyricsFile: aidetaichi,
  }),
  createLoomSong({
    title: "爱的习惯",
    lyricsFile: aidexiguan,
  }),
  createLoomSong({
    title: "爱与诚",
    lyricsFile: aiyucheng,
  }),
  createLoomSong({
    title: "爆了",
    lyricsFile: baole,
  }),
  createLoomSong({
    title: "必杀技",
    lyricsFile: bishaji,
  }),
  createLoomSong({
    title: "好人",
    lyricsFile: haoren,
  }),
  createLoomSong({
    title: "好想好想",
    lyricsFile: haoxianghaoxiang,
  }),
  createLoomSong({
    title: "K歌之王",
    lyricsFile: kgezhiwang,
  }),
  createLoomSong({
    title: "Kong",
    lyricsFile: kong,
  }),
  createLoomSong({
    title: "美丽之最",
    lyricsFile: meilizhizui,
  }),
  createLoomSong({
    title: "命硬",
    lyricsFile: mingying,
  }),
  createLoomSong({
    title: "Monica",
    lyricsFile: monica,
  }),
  createLoomSong({
    title: "男人KTV",
    lyricsFile: nanrenktv,
  }),
  createLoomSong({
    title: "情歌",
    lyricsFile: qingge,
  }),
  createLoomSong({
    title: "情歌王",
    lyricsFile: qinggewang,
  }),
  createLoomSong({
    title: "情永落",
    lyricsFile: qingyongluo,
  }),
  createLoomSong({
    title: "三十日",
    lyricsFile: sanshiri,
  }),
  createLoomSong({
    title: "我有今日",
    lyricsFile: woyoujinri,
  }),
  createLoomSong({
    title: "许愿",
    lyricsFile: xuyuan,
  }),
  createLoomSong({
    title: "眼睛不能没眼泪",
    lyricsFile: yanjingbunengmeiyanlei,
  }),
];
