import sceneRepository from '../repositories/sceneRepository';
import animalRepository from '../repositories/animalRepository';
import songRepository from '../repositories/songRepository';

class Preload extends Phaser.State {
  preload() {
    const game = this.game;
    this.game.stage.backgroundColor = '#e6e6e6';

    // debugging
    this.text = game.add.text(game.world.centerX, game.world.centerY, '0%', { font: '140px', align: 'center' });
    this.text.anchor.set(0.5);

    // images
    sceneRepository.items.forEach(item => game.load.image(item.name, `static/images/scenes/${item.name}.jpg`));
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

    // progress
    const timerEvt = game.time.events.loop(100, () => {
      this.text.text = `${game.load.progress}%`;
      if (game.load.progress >= 100) {
        game.time.events.remove(timerEvt);
      }
    }, this);
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
    
    this.game.state.start('GameTitle');
  }

}

export default Preload;
