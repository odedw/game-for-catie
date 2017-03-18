/// <reference path="../../typings/phaser.d.ts" />
import animalRepo from '../repositories/animalRepository';
import sceneRepo from '../repositories/sceneRepository';
import songRepo from '../repositories/songRepository';

class Main extends Phaser.State {
  constructor(game, numberOfAnimals = 4) {
    super(game);
    this.numberOfAnimals = numberOfAnimals;
    this.animalsFound = 0;
  }
  create() {
    const game = this.game;
    this.scene = sceneRepo.random();
    this.animals = animalRepo.random(this.numberOfAnimals);
    const locations = this.scene.locations.random(this.numberOfAnimals);
    this.song = songRepo.random();

    // set background
    const background = game.add.image(game.world.centerX, game.world.centerY, this.scene.name);
    background.anchor.set(0.5);
    background.width = game.width;
    background.height = game.height;
    // background.inputEnabled = true;
    // background.events.onInputDown.add(() => {
    //   console.log('{x: '+(100 * game.input.mousePointer.x / game.width) + ', y:' + (100 * game.input.mousePointer.y / game.height) + '}');
    // });

    // place animals
    for (let i = 0; i < this.animals.length; i++) {
      const animal = this.animals[i];
      const location = locations[i];
      const image = game.add.image(game.width * (location.x / 100), game.height * (location.y / 100), animal.name);
      image.anchor.set(0.5);
      image.width = animal.w;
      image.height = animal.h;
      image.inputEnabled = true;
      image.events.onInputDown.add(this.animalFound, this);
    }
  }

  animalFound(image) {
    this.animalsFound++;
    this.game.add.audio(this.song.segments[this.animalsFound]).play();
    const tween = this.game.add.tween(image)
    .to({ angle: 20 }, this.song.beat, Phaser.Easing.Cubic.Out, false, this.song.intro * this.song.beat)
    .to({ angle: -20 }, this.song.beat, Phaser.Easing.Cubic.Out)
    .to({ angle: 20 }, this.song.beat, Phaser.Easing.Cubic.Out)
    .to({ angle: -20 }, this.song.beat, Phaser.Easing.Cubic.Out)
    .to({ x: this.game.width / 2, y: -image.height }, 100, Phaser.Easing.Linear.None);
    tween.start();

    // image.kill();
  }

  static update() {
  }
}

export default Main;
