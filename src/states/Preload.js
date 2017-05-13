import sceneRepository from '../repositories/sceneRepository';
import animalRepository from '../repositories/animalRepository';
import songRepository from '../repositories/songRepository';

class Preload extends Phaser.State {
  preload() {
    const game = this.game;

    // images
    sceneRepository.items.forEach(item => game.load.image(item.name, `static/images/scenes/${item.name}.png`));
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
  }

  loadImage(name) {
    this.game.load.image(name, `static/images/${name}.png`);
  }

  loadSound(name) {
    this.game.load.audio(name, `static/sounds/${name}.mp3`);
    this.game.load.audio(name, `static/sounds/${name}.ogg`);
  }

  create() {
    this.game.cache.addNinePatch('panel', 'panel', undefined, 7, 7, 7, 7);
    this.game.cache.addNinePatch('panel-dark', 'panel-dark', undefined, 7, 7, 7, 7);
    const buttonClickSound = this.game.add.audio('button');
    this.game.buttonClick = () => buttonClickSound.play();

    // this.game.cache.addNinePatch('btn', 'btn', undefined, 7, 7, 10, 30);
    // this.game.cache.addNinePatch('btn-down', 'btn-down', undefined, 7, 7, 7, 7);
    this.game.state.start('GameTitle');
  }

}

export default Preload;
