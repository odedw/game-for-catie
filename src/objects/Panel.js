/// <reference path="../../typings/phaser.d.ts" />
const outerMargin = 20;
const innerMargin = 10;
class Panel {
  constructor(game, animalImages, group) {
    this.game = game;
    this.group = game.add.group();
    group.add(this.group);

    const panelWidth = Math.min(game.width * 0.12, animalImages.map(i => i.width).max() + innerMargin * 2 + outerMargin * 2);
    this.container = new Phaser.NinePatchImage(this.game, this.game.width - panelWidth, 0, 'panel');
    this.container.targetHeight = this.game.height;
    this.container.targetWidth = panelWidth;
    this.container.UpdateImageSizes();    
    this.group.add(this.container);
    this.animalContainers = {};
    let y = outerMargin + innerMargin;
    const containerWidth = panelWidth - outerMargin * 2;
    for (let i = 0; i < animalImages.length; i++) {
      const image = animalImages[i];
      const scale = (containerWidth - innerMargin * 2) / image.width;
      const container = new Phaser.NinePatchImage(this.game,
        this.container.x + outerMargin,
        y,
        'panel-dark');
      container.targetWidth = containerWidth;
      container.targetHeight = image.height * scale + innerMargin * 2;
      this.group.add(container);
      this.animalContainers[image.name] = { container, scale };
      y += container.targetHeight + outerMargin;
    }
    
    const btnWidth = panelWidth - outerMargin * 2;    
    const btnHeight = Math.min((this.game.height - y - outerMargin * 2) / 2, btnWidth * 0.63);

    y = game.height - outerMargin - btnHeight;
    this.pauseButton = game.add.button(this.container.x + outerMargin, y, 'buttons-long', undefined, this, 10, 10, 12);
    this.pauseButton.width = btnWidth;
    this.pauseButton.height = btnHeight;
    this.group.add(this.pauseButton);

    y -= outerMargin + btnHeight;
    this.hintButton = game.add.button(this.container.x + outerMargin, y, 'buttons-long', undefined, this, 6, 6, 5);
    this.hintButton.width = btnWidth;
    this.hintButton.height = btnHeight;
    this.group.add(this.hintButton);
  }
}

export default Panel;
