import sceneRepository from '../repositories/sceneRepository';
import animalRepository from '../repositories/animalRepository';
import songRepository from '../repositories/songRepository';

class Preload extends Phaser.State {
  preload() {
    const game = this.game;

    // images
    sceneRepository.items.forEach(item => game.load.image(item.name, `static/assets/images/scenes/${item.name}.png`));
    animalRepository.items.forEach(item => game.load.image(item.name, `static/assets/images/animals/${item.name}.png`));
    this.loadImage('panel');
    this.loadImage('panel-dark');
    // this.loadImage('btn');
    // this.loadImage('btn-down');
    
    // sounds
    songRepository.items.forEach(item =>
      item.segments.forEach(segment => ['mp3', 'ogg']
        .forEach(format => game.load.audio(segment, `static/assets/sounds/songs/${item.name}/${segment}.${format}`),
      )));
    this.loadSound('peek1');
    this.loadSound('peek2');
    this.loadSound('peek3');
    this.loadSound('peek4');

    // atlas
    game.load.atlasJSONHash('button', 'static/assets/images/button.png', 'static/assets/images/button.json');
  }

  loadImage(name) {
    this.game.load.image(name, `static/assets/images/${name}.png`);
  }

  loadSound(name) {
    this.game.load.audio(name, `static/assets/sounds/${name}.mp3`);
    this.game.load.audio(name, `static/assets/sounds/${name}.ogg`);
  }

  create() {
    this.game.cache.addNinePatch('panel', 'panel', undefined, 7, 7, 7, 7);
    this.game.cache.addNinePatch('panel-dark', 'panel-dark', undefined, 7, 7, 7, 7);
    // this.game.cache.addNinePatch('btn', 'btn', undefined, 7, 7, 10, 30);
    // this.game.cache.addNinePatch('btn-down', 'btn-down', undefined, 7, 7, 7, 7);
    this.game.state.start('GameTitle');
  }

}

export default Preload;
