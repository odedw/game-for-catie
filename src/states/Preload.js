import sceneRepository from '../repositories/sceneRepository';
import animalRepository from '../repositories/animalRepository';
import songRepository from '../repositories/songRepository';

class Preload extends Phaser.State {
  preload() {
    const game = this.game;
    sceneRepository.items.forEach(item => game.load.image(item.name, `static/assets/images/scenes/${item.name}.png`));
    animalRepository.items.forEach(item => game.load.image(item.name, `static/assets/images/animals/${item.name}.png`));
    songRepository.items.forEach(item =>
      item.segments.forEach(segment => ['mp3', 'ogg']
        .forEach(format => game.load.audio(segment, `static/assets/sounds/songs/${item.name}/${segment}.${format}`),
      )));
  }

  create() {
    this.game.state.start('Main');
  }

}

export default Preload;
