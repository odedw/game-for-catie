import sceneRepository from '../repositories/SceneRepository';

class Preload extends Phaser.State {
  preload() {
    sceneRepository.scenes.forEach(scene => this.game.load.image(scene.name, `/static/assets/images/scenes/${scene.name}.png`));
    // this.game.load.audio('myAudio', 'assets/my-audio.wav');
    // this.game.load.atlas('myAtlas', 'assets/my-atlas.png', 'assets/my-atlas.json');
  }

  create() {
    this.game.state.start('Main');
  }

}

export default Preload;
