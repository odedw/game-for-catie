/// <reference path="../../typings/phaser.d.ts" />

class PauseMenu {
  constructor(game) {
    this.game = game;
    this.container = game.add.group();
    this.panel = new Phaser.NinePatchImage(game, game.world.centerX, game.world.centerY, 'panel');
    this.panel.anchor.setTo(0.5, 0.5);
    this.panel.targetWidth = 200;
    this.panel.targetHeight = 200;
    this.panel.UpdateImageSizes();
    this.container.visible = false;
  }

  show() {
    this.container.visible = true;
  }
}

export default PauseMenu;
