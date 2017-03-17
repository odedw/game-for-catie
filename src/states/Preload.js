import sceneRepository from '../repositories/sceneRepository';
import animalRepository from '../repositories/animalRepository';

class Preload extends Phaser.State {
  preload() {
    sceneRepository.items.forEach(item => this.game.load.image(item.name, `static/assets/images/scenes/${item.name}.png`));
    animalRepository.items.forEach(item => this.game.load.image(item.name, `static/assets/images/animals/${item.name}.png`));
    
    // this.game.load.audio('myAudio', 'assets/my-audio.wav');
    // this.game.load.atlas('myAtlas', 'assets/my-atlas.png', 'assets/my-atlas.json');
  }

  create() {
    this.game.state.start('Main');
  }

}

export default Preload;
