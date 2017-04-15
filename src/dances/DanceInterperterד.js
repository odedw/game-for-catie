class DanceInterperter {
  constructor(game) {
    this.game = game;
  }

  createAnimalFoundDance(image, song, target) {
    return this.game.add.tween(image)
    .to({ angle: 20 }, song.beat, Phaser.Easing.Cubic.Out, false, song.intro * song.beat)
    .to({ angle: -20 }, song.beat, Phaser.Easing.Cubic.Out)
    .to({ angle: 20 }, song.beat, Phaser.Easing.Cubic.Out)
    .to({ angle: -20 }, song.beat, Phaser.Easing.Cubic.Out)
    .to({ ...target, angle: 0 }, 100, Phaser.Easing.Linear.None);
  }

  createAnimalPeekDance(image) {
    const maxAngle = 5;
    let tween = this.game.add.tween(image);
    const firstTween = tween;
    let direction = 1;
    for (let i = maxAngle; i >= 0; i--) {
      tween = tween.to({ angle: i * direction }, i * 15, Phaser.Easing.Cubic.Out, false);
      direction *= -1;
    }
    firstTween.start();
  }

  createAllAnimalsFoundDance(image, index, song, x, autoStart = false) {
    let tween = this.game.add.tween(image).to({ x, y: this.game.height / 2, angle: 0 }, song.intro * song.beat, Phaser.Easing.Cubic.Out, false);
    let delay = 0;
    song.dance.map(step => step[index]).forEach((step) => {
      if (step === 'r') {
        tween = tween.to({ angle: -20, y: this.game.height / 2 }, song.beat, Phaser.Easing.Cubic.Out, false, delay);
        delay = 0;
      } else if (step === 'l') {
        tween = tween.to({ angle: 20, y: this.game.height / 2 }, song.beat, Phaser.Easing.Cubic.Out, false, delay);
        delay = 0;
      } else if (step === 'u') {
        tween = tween.to({ angle: 0, y: (this.game.height / 2) - 20 }, song.beat, Phaser.Easing.Cubic.Out, false, delay);
        delay = 0;
      } else if (step === 'd') {
        tween = tween.to({ angle: 0, y: this.game.height / 2 }, song.beat, Phaser.Easing.Cubic.Out, false, delay);
        delay = 0;
      } else if (step === '-') {
        delay += song.beat;
      }
    });
    if (autoStart) tween.start();
    return tween;
  }
}

export default DanceInterperter;
