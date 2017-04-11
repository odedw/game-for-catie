/// <reference path="../../typings/phaser.d.ts" />
import animalRepo from '../repositories/animalRepository';
import sceneRepo from '../repositories/sceneRepository';
import songRepo from '../repositories/songRepository';
import danceInterperter from '../dances/danceInterperter';
import Panel from '../objects/Panel';


class Main extends Phaser.State {
  constructor(game, numberOfAnimals = 4) {
    super(game);
    this.numberOfAnimals = numberOfAnimals;
    this.animalsFound = 0;
    this.rowMargin = 50;
  }
  create() {
    const game = this.game;
    this.scene = sceneRepo.random();
    this.animals = animalRepo.random(this.numberOfAnimals);
    const locations = this.scene.locations.random(this.numberOfAnimals);
    this.song = songRepo.random();

    const backgroundGroup = game.add.group();
    const animalGroup = game.add.group();

    // set background
    const background = backgroundGroup.create(game.world.centerX, game.world.centerY, this.scene.name);
    background.anchor.set(0.5);
    background.width = game.width;
    background.height = game.height;
    // background.inputEnabled = true;
    // background.events.onInputDown.add(() => {
    //   console.log('{x: '+(100 * game.input.mousePointer.x / game.width) + ', y:' + (100 * game.input.mousePointer.y / game.height) + '}');
    // });

    

    // place animals
    this.animalImages = [];
    for (let i = 0; i < this.animals.length; i++) {
      const animal = this.animals[i];
      const location = locations[i];
      const image = animalGroup.create(game.width * (location.x / 100), game.height * (location.y / 100), animal.name);
      image.anchor.set(0.5);
      image.width = animal.w;
      image.height = animal.h;
      image.inputEnabled = true;
      image.events.onInputDown.add(this.animalFound, this);
      this.animalImages.push(image);
    }

    // panel
    this.panel = new Panel(game, this.animalImages, backgroundGroup);
    this.panel.hintButton.events.onInputUp.add(this.onHint, this);
    this.panel.pauseButton.events.onInputUp.add(this.onPause, this);
  }

  animalFound(image) {
    // this.allFound(); return;
    if (this.currentTween) return;

    this.animalsFound++;
    this.game.add.audio(this.song.segments[this.animalsFound]).play();
    this.currentTween = danceInterperter.createAnimalFoundDance(image, this.song, this.game, this.panel.getNextAnimalPlace(image));
    if (this.animalsFound === this.numberOfAnimals) {
      this.currentTween.onComplete.add(this.allFound, this);
    }
    this.currentTween.onComplete.add(() => this.currentTween = undefined, this);
    this.currentTween.start();
    // image.kill();
  }

  allFound() {
    const rowWidth = this.animalImages.map(image => image.width).sum() + ((this.numberOfAnimals - 1) * this.rowMargin);
    let currentX = (this.game.width / 2) - (rowWidth / 2);
    this.game.add.audio(this.song.segments[0]).play();
    const tweens = [];
    for (let i = 0; i < this.animalImages.length; i++) {
      const currentImage = this.animalImages[i];
      currentX += currentImage.width / 2;
      tweens.push(danceInterperter.createAllAnimalsFoundDance(currentImage, i, this.song, this.game, currentX));
      currentX += (this.animalImages[i].width / 2) + this.rowMargin;
    }

    tweens.forEach(t => t.start());


  }
  
  onHint() {
    console.log('hint');
  }

  onPause() {

  }
  static update() {
  }
}

export default Main;
