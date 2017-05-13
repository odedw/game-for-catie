/// <reference path="../../typings/phaser.d.ts" />

class PauseMenu {
  constructor(game, backgroundGroup, foregroundGroup) {
    this.game = game;
    this.container = game.add.group();
    this.panel = new Phaser.NinePatchImage(game, game.world.centerX, game.world.centerY, 'panel');
    this.panel.anchor.setTo(0.5, 0.5);
    this.panel.targetWidth = 200;
    this.panel.targetHeight = 200;
    this.panel.UpdateImageSizes();
    this.container.add(this.panel);
    this.container.visible = false;
    this.container.alpha = 0;
    this.tweenTime = 200;
    this.backgroundGroup = backgroundGroup;
    this.foregroundGroup = foregroundGroup;
    this.menuRect = new Phaser.Rectangle(this.panel.x - this.panel.targetWidth / 2,
      this.panel.y - this.panel.targetHeight / 2,
      this.panel.targetWidth,
      this.panel.targetHeight);
  }

  show() {
    this.showing = true;
    this.container.visible = true;
    this.game.add.tween(this.backgroundGroup).to({ alpha: 0.1 }, this.tweenTime, Phaser.Easing.Cubic.Out, true);
    this.game.add.tween(this.foregroundGroup).to({ alpha: 0.1 }, this.tweenTime, Phaser.Easing.Cubic.Out, true);
    this.game.add.tween(this.container).to({ alpha: 1 }, this.tweenTime, Phaser.Easing.Cubic.Out, true);
    this.backgroundGroup.inputEnabled = true;
    this.game.input.onDown.add(this.onClick, this);
  }

  onClick() {
    if (!this.menuRect.contains(this.game.input.mousePointer.x, this.game.input.mousePointer.y)) {
      this.hide();
    }
  }

  hide() {
    this.game.input.onDown.remove(this.onClick, this);
    this.showing = false;
    this.game.add.tween(this.backgroundGroup).to({ alpha: 1 }, this.tweenTime, Phaser.Easing.Cubic.Out, true);
    this.game.add.tween(this.foregroundGroup).to({ alpha: 1 }, this.tweenTime, Phaser.Easing.Cubic.Out, true);
    const t = this.game.add.tween(this.container).to({ alpha: 0 }, this.tweenTime, Phaser.Easing.Cubic.Out, true);
    t.onComplete.add(() => this.container.visible = false);
  }
}

export default PauseMenu;
