/// <reference path="../../typings/phaser.d.ts" />
const margin = 20;

class PauseMenu {
  constructor(game, backgroundGroup, foregroundGroup, onExit, onExitContext) {
    this.game = game;
    this.container = game.add.group();
    this.panel = new Phaser.NinePatchImage(game, game.world.centerX, game.world.centerY, 'panel');
    this.panel.anchor.setTo(0.5, 0.5);
    this.panel.targetWidth = this.game.width * 0.1;
    const btnWidth = (this.panel.targetWidth - (margin * 2));
    const btnHeight = btnWidth * 0.63;
    this.panel.targetHeight = btnHeight * 2 + margin * 3;
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
    const playBtn = game.add.button(this.panel.x - btnWidth / 2, this.panel.y - this.panel.targetHeight / 2 + margin, 
      'buttons-long', undefined, this, 13, 13, 14);
    playBtn.width = btnWidth;
    playBtn.height = btnHeight;
    playBtn.events.onInputUp.add(this.hide, this);
    this.container.add(playBtn);

    const exitBtn = game.add.button(this.panel.x - btnWidth / 2, playBtn.y + btnHeight + margin, 
      'buttons-long', undefined, this, 8, 8, 9);
    exitBtn.width = btnWidth;
    exitBtn.height = btnHeight;
    exitBtn.events.onInputUp.add(onExit, onExitContext);    
    this.container.add(exitBtn);
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
    this.game.buttonClick();
    this.game.input.onDown.remove(this.onClick, this);
    this.showing = false;
    this.game.add.tween(this.backgroundGroup).to({ alpha: 1 }, this.tweenTime, Phaser.Easing.Cubic.Out, true);
    this.game.add.tween(this.foregroundGroup).to({ alpha: 1 }, this.tweenTime, Phaser.Easing.Cubic.Out, true);
    const t = this.game.add.tween(this.container).to({ alpha: 0 }, this.tweenTime, Phaser.Easing.Cubic.Out, true);
    t.onComplete.add(() => this.container.visible = false);
  }
}

export default PauseMenu;
