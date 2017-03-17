import animalRepo from '../repositories/animalRepository';
import sceneRepo from '../repositories/sceneRepository';

class Main extends Phaser.State {
  constructor(game, numberOfAnimals = 4) {
    super(game);

    this.numberOfAnimals = numberOfAnimals;
  }
  create() {
    console.log('--------------');
    
    const game = this.game;
    let scene = sceneRepo.random();
    let animals = animalRepo.random(this.numberOfAnimals);

    // set background
    const background = game.add.image(game.world.centerX, game.world.centerY, scene.name);
    background.anchor.set(0.5);
    background.width = game.width;
    background.height = game.height;
    background.events.onInputDown.add((evt) => {
      console.log(evt);
    });
    // image = this.game.add.image(this.game.world.centerX, this.game.world.centerY, 'cat');
    // image.anchor.set(0.5);
    // image.width = 100;
    // image.height = 100;
    // image.inputEnabled = true;
    // image.events.onInputDown.add(() => {
    //   image.kill();
    // });
  }

  static update() {
  }
}

export default Main;
