class Song {
  constructor(name, bpm, intro, dance) {
    this.name = name;
    this.segments = [];
    this.segments.push(`${name}-full`);
    for (let i = 1; i <= 4; i++) {
      this.segments.push(`${name}-${i}`);
    }
    this.bpm = bpm;
    this.beat = 60000 / bpm;
    console.log(this.beat);
    this.intro = intro;
    this.dance = dance;
  }
}

export default Song;
