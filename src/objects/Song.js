class Song {
  constructor(name, bpm) {
    this.name = name;
    this.segments = [];
    this.segments.push(`${name}-full`);
    for (let i = 1; i <= 4; i++) {
      this.segments.push(`${name}-${i}`);
    }
    this.bpm = bpm;
  }
}

export default Song;
