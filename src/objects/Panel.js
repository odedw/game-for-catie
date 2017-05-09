/// <reference path="../../typings/phaser.d.ts" />
const animalOuterMargin = 40;
const animalInnerMargin = 10;
const btnMargin = 30;
const btnWidth = 210;
const btnHeight = 200;
class Panel {
  constructor(game, animalImages, group) {
    this.game = game;
    this.group = game.add.group();
    group.add(this.group);

    const panelHeight = animalImages.map(i => i.height).max() + animalInnerMargin * 2 + animalOuterMargin * 2;
    this.frontPanel = new Phaser.NinePatchImage(this.game, this.game.world.centerX, this.game.world.height - panelHeight / 2, 'panel');
    this.frontPanel.anchor.setTo(0.5, 0.5);
    this.frontPanel.targetWidth = animalImages.map(i => i.width).sum() +
      (animalImages.length - 1) * animalOuterMargin +
      animalImages.length * 2 * animalInnerMargin +
      (btnWidth + btnMargin * 2) * 2;
    
    this.frontPanel.targetHeight = panelHeight;
    this.frontPanel.UpdateImageSizes();
    this.frontPanel.tint = Math.random() * 0xfeffff;
    this.group.add(this.frontPanel);
    this.animalContainers = {};
    let x = this.frontPanel.x - this.frontPanel.targetWidth / 2 + animalInnerMargin + btnMargin * 2 + btnWidth;
    for (let i = 0; i < animalImages.length; i++) {
      const image = animalImages[i];
      const container = new Phaser.NinePatchImage(this.game,
        x + image.width / 2,
        this.frontPanel.y,
        'panel-dark');
      container.anchor.setTo(0.5, 0.5);
      container.targetWidth = animalInnerMargin * 2 + image.width;
      container.targetHeight = panelHeight - animalOuterMargin * 2;
      this.group.add(container);
      this.animalContainers[image.name] = container;
      x += container.targetWidth + animalOuterMargin;
    }

    this.hintButton = game.add.button(this.frontPanel.x - this.frontPanel.targetWidth / 2 + btnMargin + btnWidth / 2,
    this.frontPanel.y,
    'button',
    undefined, this, 0, 0, 1);
    this.hintButton.anchor.setTo(0.5, 0.5);
    this.hintButton.width = btnWidth;
    this.hintButton.height = btnHeight;
    this.group.add(this.hintButton);

    this.pauseButton = game.add.button(this.frontPanel.x + this.frontPanel.targetWidth / 2 - btnMargin - btnWidth / 2,
      this.frontPanel.y, 'button', undefined, this, 2, 2, 5);
    this.pauseButton.anchor.setTo(0.5, 0.5);
    this.pauseButton.width = btnWidth;
    this.pauseButton.height = btnHeight;
    this.group.add(this.pauseButton);

    const animalWidth = animalImages.map(image => image.width).sum();
    this.margin = (this.frontPanel.targetWidth - animalWidth) / (animalImages.length + 1);
    this.currentX = this.frontPanel.x + this.margin - (this.frontPanel.targetWidth / 2);
  }
}

export default Panel;
