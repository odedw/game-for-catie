import sceneRepository from '../repositories/sceneRepository';
import animalRepository from '../repositories/animalRepository';
import songRepository from '../repositories/songRepository';

class Preload extends Phaser.State {
  preload() {
    const game = this.game;
    this.game.stage.backgroundColor = '#e6e6e6';
    //progress bar
    this.preloadBar = this.add.sprite(game.world.centerX, game.world.centerY, 'preloaderBar');
    this.preloadBar.scale.x = 6;
    this.preloadBar.scale.y = 4;
    this.preloadBar.x -= this.preloadBar.width / 2;
    this.preloadBar.y -= this.preloadBar.height / 2;
    this.load.setPreloadSprite(this.preloadBar);

    // debugging
    this.text = game.add.text(10, 10, "Preload.Start", { font: "65px Arial" });

    // images
    // sceneRepository.items.forEach(item => game.load.image(item.name, `static/images/scenes/${item.name}.png`));
    animalRepository.items.forEach(item => game.load.image(item.name, `static/images/animals/${item.name}.png`));
    this.loadImage('panel');
    this.loadImage('panel-dark');
    
    // sounds
    songRepository.items.forEach(item =>
      item.segments.forEach(segment => ['mp3', 'ogg']
        .forEach(format => game.load.audio(segment, `static/sounds/songs/${item.name}/${segment}.${format}`),
      )));
    this.loadSound('peek1');
    this.loadSound('peek2');
    this.loadSound('peek3');
    this.loadSound('peek4');
    this.loadSound('button');

    // atlas
    game.load.spritesheet('button', 'static/images/buttons.png', 256, 256);
    game.load.spritesheet('buttons-long', 'static/images/buttons-long.png', 407, 256);

    this.text.text = "Preload.End";
  }

  loadImage(name) {
    this.game.load.image(name, `static/images/${name}.png`);
  }

  loadSound(name) {
    this.game.load.audio(name, `static/sounds/${name}.mp3`);
    this.game.load.audio(name, `static/sounds/${name}.ogg`);
  }

  create() {
    this.text.text = "Create.Start";

    this.preloadBar.cropEnabled = false;
    this.game.cache.addNinePatch('panel', 'panel', undefined, 7, 7, 7, 7);
    this.game.cache.addNinePatch('panel-dark', 'panel-dark', undefined, 7, 7, 7, 7);
    const buttonClickSound = this.game.add.audio('button');
    this.game.buttonClick = () => buttonClickSound.play();
    // console.log('--------------Preload.Create.End');
    this.text.text = "Create.End";
    
    this.game.state.start('GameTitle');
  }

}

export default Preload;
