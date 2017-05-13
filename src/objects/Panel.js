/// <reference path="../../typings/phaser.d.ts" />
const animalOuterMargin = 20;
const animalInnerMargin = 10;
class Panel {
  constructor(game, animalImages, group) {
    this.game = game;
    this.group = game.add.group();
    group.add(this.group);

    const panelWidth = Math.min(game.width * 0.12, animalImages.map(i => i.width).max() + animalInnerMargin * 2 + animalOuterMargin * 2);
    this.container = new Phaser.NinePatchImage(this.game, this.game.width - panelWidth / 2, this.game.world.centerY, 'panel');
    this.container.anchor.setTo(0.5, 0.5);
    this.container.targetHeight = this.game.height;
    this.container.targetWidth = panelWidth;
    this.container.UpdateImageSizes();    
    this.group.add(this.container);
    this.animalContainers = {};
    let y = animalOuterMargin + animalInnerMargin;
    const containerWidth = panelWidth - animalOuterMargin * 2;
    for (let i = 0; i < animalImages.length; i++) {
      const image = animalImages[i];
      const scale = (containerWidth - animalInnerMargin * 2) / image.width;
      const container = new Phaser.NinePatchImage(this.game,
        this.container.x,
        y + (image.height * scale) / 2,
        'panel-dark');
      container.anchor.setTo(0.5, 0.5);
      container.targetWidth = containerWidth;
      container.targetHeight = image.height * scale + animalInnerMargin * 2;
      this.group.add(container);
      this.animalContainers[image.name] = { container, scale };
      y += container.targetHeight + animalOuterMargin;
    }
    
    const btnWidth = panelWidth - animalOuterMargin * 2;    
    const btnHeight = Math.min((this.game.height - y - animalOuterMargin * 2) / 2, btnWidth * 0.63);

    y = game.height - animalOuterMargin - btnHeight / 2;
    this.pauseButton = game.add.button(this.container.x, y, 'buttons-long', undefined, this, 10, 10, 12);
    this.pauseButton.anchor.setTo(0.5, 0.5);
    this.pauseButton.width = btnWidth;
    this.pauseButton.height = btnHeight;
    this.group.add(this.pauseButton);

    y -= animalOuterMargin + btnHeight;
    this.hintButton = game.add.button(this.container.x, y, 'buttons-long', undefined, this, 6, 6, 5);
    this.hintButton.anchor.setTo(0.5, 0.5);
    this.hintButton.width = btnWidth;
    this.hintButton.height = btnHeight;
    this.group.add(this.hintButton);

    const animalWidth = animalImages.map(image => image.width).sum();
    this.margin = (this.container.targetWidth - animalWidth) / (animalImages.length + 1);
    this.currentX = this.container.x + this.margin - (this.container.targetWidth / 2);
  }
}

export default Panel;
