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
    const graphics = this.game.add.graphics(0, 0);

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
      const mask = this.game.add.graphics(0, 0);
      mask.beginFill(0xffffff);
      mask.drawRoundedRect(image.x, image.y, image.width, image.height, 50);
      image.mask = mask;
      mask.endFill();

      graphics.beginFill(0);
      graphics.drawRoundedRect(image.x - 1, image.y - 1, image.width + 2, image.height + 2, 50);
      graphics.endFill();
    }
  }

  startGame(scene) {
    this.game.state.start('Main', true, false, scene);
  }

}

export default GameTitle;
