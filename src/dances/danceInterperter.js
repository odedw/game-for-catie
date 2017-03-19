class DanceInterperter {
  createAnimalFoundDance(image, song, game, autoStart = false) {
    return game.add.tween(image)
    .to({ angle: 20 }, song.beat, Phaser.Easing.Cubic.Out, autoStart, song.intro * song.beat)
    .to({ angle: -20 }, song.beat, Phaser.Easing.Cubic.Out)
    .to({ angle: 20 }, song.beat, Phaser.Easing.Cubic.Out)
    .to({ angle: -20 }, song.beat, Phaser.Easing.Cubic.Out)
    .to({ x: game.width / 2, y: -image.height }, 100, Phaser.Easing.Linear.None);
  }

  createAllAnimalsFoundDance(image, index, song, game, x, autoStart = false) {
    let tween = game.add.tween(image).to({ x, y: game.height / 2, angle: 0 }, song.intro * song.beat, Phaser.Easing.Cubic.Out, false);
    let delay = 0;
    song.dance.map(step => step[index]).forEach((step) => {
      if (step === 'r') {
        tween = tween.to({ angle: -20, y: game.height / 2 }, song.beat, Phaser.Easing.Cubic.Out, false, delay);
        delay = 0;
      } else if (step === 'l') {
        tween = tween.to({ angle: 20, y: game.height / 2 }, song.beat, Phaser.Easing.Cubic.Out, false, delay);
        delay = 0;
      } else if (step === 'u') {
        tween = tween.to({ angle: 0, y: (game.height / 2) - 20 }, song.beat, Phaser.Easing.Cubic.Out, false, delay);
        delay = 0;
      } else if (step === 'd') {
        tween = tween.to({ angle: 0, y: game.height / 2 }, song.beat, Phaser.Easing.Cubic.Out, false, delay);
        delay = 0;
      } else if (step === '-') {
        delay += song.beat;
      }
    });
    if (autoStart) tween.start();
    return tween;
  }
}

export default new DanceInterperter();
