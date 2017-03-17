/// <reference path="../../typings/phaser.d.ts" />
import animalRepo from '../repositories/animalRepository';
import sceneRepo from '../repositories/sceneRepository';

class Main extends Phaser.State {
  constructor(game, numberOfAnimals = 4) {
    super(game);
    this.numberOfAnimals = numberOfAnimals;
  }
  create() {
    const game = this.game;
    const scene = sceneRepo.random();
    const animals = animalRepo.random(this.numberOfAnimals);
    const locations = scene.locations.random(this.numberOfAnimals);

    // set background
    const background = game.add.image(game.world.centerX, game.world.centerY, scene.name);
    background.anchor.set(0.5);
    background.width = game.width;
    background.height = game.height;
    // background.inputEnabled = true;
    // background.events.onInputDown.add(() => {
    //   console.log('{x: '+(100 * game.input.mousePointer.x / game.width) + ', y:' + (100 * game.input.mousePointer.y / game.height) + '}');
    // });

    // place animals
    for (let i = 0; i < animals.length; i++) {
      const animal = animals[i];
      const location = locations[i];
      const image = game.add.image(game.width * (location.x / 100), game.height * (location.y / 100), animal.name);
      image.anchor.set(0.5);
      image.width = animal.w;
      image.height = animal.h;
      image.inputEnabled = true;
      image.events.onInputDown.add(() => {
        image.kill();
      });
    }
  }

  static update() {
  }
}

export default Main;
