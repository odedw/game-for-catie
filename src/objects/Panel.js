/// <reference path="../../typings/phaser.d.ts" />

class Panel {
  constructor(game, animalImages, group) {
    this.game = game;
    const backPanel = new Phaser.NinePatchImage(game, game.world.centerX, game.world.height - 80, 'panel');
    backPanel.anchor.setTo(0.5, 0.5);
    backPanel.targetWidth = game.width / 2;
    backPanel.targetHeight = 200;
    backPanel.UpdateImageSizes();
    group.add(backPanel);
    this.frontPanel = new Phaser.NinePatchImage(game, game.world.centerX, game.world.height - 100, 'panel-dark');
    this.frontPanel.anchor.setTo(0.5, 0.5);
    this.frontPanel.targetWidth = game.width / 3;
    this.frontPanel.targetHeight = 300;
    this.frontPanel.UpdateImageSizes();
    this.frontPanel.tint = Math.random() * 0xfeffff;
    group.add(this.frontPanel);
    

    const animalWidth = animalImages.map(image => image.width).sum();
    this.margin = (this.frontPanel.targetWidth - animalWidth) / (animalImages.length + 1);
    this.currentX = this.frontPanel.x + this.margin - (this.frontPanel.targetWidth / 2);
  }

  getNextAnimalPlace(animalImage) {
    const result = { x: this.currentX + (animalImage.width / 2), y: this.frontPanel.y };
    this.currentX += animalImage.width + this.margin;
    return result;
  }
}

export default Panel;
