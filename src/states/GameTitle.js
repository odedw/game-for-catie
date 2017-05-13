import sceneRepo from '../repositories/sceneRepository';

class GameTitle extends Phaser.State {

  create() {
    this.game.stage.backgroundColor = '#e6e6e6';
    const imagesPerRow = 4;

    const rows = Math.ceil(sceneRepo.items.length / imagesPerRow);
    const imageWidth = this.game.width / (imagesPerRow + 2);
    const imageHeight = 9 * imageWidth / 16;
    const margin = (this.game.width - (imageWidth * imagesPerRow)) / 5;
    const yMargin = (this.game.height - ((rows * imageHeight) + (rows - 1) * margin)) / 2;
    this.graphics = this.game.add.graphics(0, 0);
    const mask = this.game.add.graphics(0, 0);

    for (let index = 0; index < sceneRepo.items.length; index++) {
      const scene = sceneRepo.items[index];
      const x = index % imagesPerRow;
      const y = Math.floor(index / imagesPerRow);
      const image = this.game.add.sprite((x + 1) * margin + x * imageWidth,
        yMargin + y * margin + y * imageHeight,
        scene.name);
      image.width = imageWidth;
      image.height = imageHeight;
      image.inputEnabled = true;
      image.events.onInputDown.add(() => this.startGame(scene), this);
      mask.beginFill(0xffffff);
      mask.drawRoundedRect(image.x, image.y, image.width, image.height, 50);
      image.mask = mask;
      mask.endFill();

      this.graphics.beginFill(0);
      this.graphics.drawRoundedRect(image.x - 1, image.y - 1, image.width + 2, image.height + 2, 50);
      this.graphics.endFill();
    }
  }

  startGame(scene) {
    this.game.state.start('Main', {
      ease: Phaser.Easing.Exponential.InOut,
      duration: 500,
      intro: false,
      props: { alpha: 0 },
    }, {
      ease: Phaser.Easing.Exponential.InOut,
      duration: 500,
      intro: true,
      props: { alpha: 1 },
    }, true, false, scene);
  }

}

export default GameTitle;
