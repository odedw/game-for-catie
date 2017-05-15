class Song {
  constructor(name, bpm, intro, dance, introEveryBeat = false) {
    this.name = name;
    this.segments = [];
    this.segments.push(`${name}-full`);
    for (let i = 1; i <= 4; i++) {
      this.segments.push(`${name}-${i}`);
    }
    this.bpm = bpm;
    this.beat = 60000 / bpm;
    this.intro = intro;
    this.dance = dance;
    this.introEveryBeat = introEveryBeat;
  }
}

export default Song;
