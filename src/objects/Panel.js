/// <reference path="../../typings/phaser.d.ts" />

class Panel {
  constructor(game, animalImages, group) {
    this.game = game;
    this.group = game.add.group();
    group.add(this.group);
    const backPanel = new Phaser.NinePatchImage(game, game.world.centerX, game.world.height - 80, 'panel-dark');
    backPanel.anchor.setTo(0.5, 0.5);
    backPanel.targetWidth = game.width / 2;
    backPanel.targetHeight = 200;
    backPanel.UpdateImageSizes();
    this.group.add(backPanel);
    this.frontPanel = new Phaser.NinePatchImage(game, game.world.centerX, game.world.height - 100, 'panel');
    this.frontPanel.anchor.setTo(0.5, 0.5);
    this.frontPanel.targetWidth = game.width / 3;
    this.frontPanel.targetHeight = 300;
    this.frontPanel.UpdateImageSizes();
    this.frontPanel.tint = Math.random() * 0xfeffff;
    this.group.add(this.frontPanel);

    const btnMargin = 30;
    const btnWidth = (backPanel.targetWidth - this.frontPanel.targetWidth) / 2 - btnMargin * 2;
    this.hintButton = game.add.button(backPanel.x - (backPanel.targetWidth / 2) + (btnWidth / 2) + btnMargin,
    backPanel.y - 5,
    'button',
    undefined, this, 'btn.png', 'btn.png', 'btn-down.png');
    this.hintButton.anchor.setTo(0.5, 0.5);
    this.hintButton.width = btnWidth;
    this.hintButton.height = 100;
    this.group.add(this.hintButton);

    this.pauseButton = game.add.button(backPanel.x + (backPanel.targetWidth / 2) - (btnWidth / 2) - btnMargin,
    backPanel.y - 5,
    'button',
    undefined, this, 'btn.png', 'btn.png', 'btn-down.png');
    this.pauseButton.anchor.setTo(0.5, 0.5);
    this.pauseButton.width = btnWidth;
    this.pauseButton.height = 100;
    this.group.add(this.pauseButton);

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
