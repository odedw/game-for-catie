/// <reference path="../../typings/phaser.d.ts" />
import animalRepo from '../repositories/animalRepository';
import sceneRepo from '../repositories/sceneRepository';
import songRepo from '../repositories/songRepository';
import DanceInterperter from '../dances/DanceInterperter';
import Panel from '../objects/Panel';


class Main extends Phaser.State {
  constructor(game, numberOfAnimals = 4) {
    super(game);
    this.numberOfAnimals = numberOfAnimals;
    this.rowMargin = 50;
    this.danceInterperter = new DanceInterperter(game);
  }
  create() {
    const game = this.game;
    this.scene = sceneRepo.random();
    this.animals = animalRepo.random(this.numberOfAnimals);
    this.animalImagesFound = [];
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

    // remove from live images
    this.animalImagesFound.push(image);
    this.animalImages.splice(this.animalImages.indexOf(image), 1);
    image.inputEnabled = false;
    image.events.onInputDown.removeAll();

    this.game.add.audio(this.song.segments[this.animalImagesFound.length]).play();
    this.currentTween = this.danceInterperter.createAnimalFoundDance(image, this.song, this.panel.getNextAnimalPlace(image));
    if (this.animalImagesFound.length === this.numberOfAnimals) {
      this.currentTween.onComplete.add(this.allFound, this);
    }
    this.currentTween.onComplete.add(() => this.currentTween = undefined, this);
    this.currentTween.start();
    // image.kill();
  }

  allFound() {
    const rowWidth = this.animalImagesFound.map(image => image.width).sum() + ((this.numberOfAnimals - 1) * this.rowMargin);
    let currentX = (this.game.width / 2) - (rowWidth / 2);
    this.game.add.audio(this.song.segments[0]).play();
    const tweens = [];
    for (let i = 0; i < this.animalImagesFound.length; i++) {
      const currentImage = this.animalImagesFound[i];
      currentX += currentImage.width / 2;
      tweens.push(this.danceInterperter.createAllAnimalsFoundDance(currentImage, i, this.song, currentX));
      currentX += (this.animalImagesFound[i].width / 2) + this.rowMargin;
    }

    tweens.forEach(t => t.start());
  }
  
  onHint() {
    const image = this.animalImages.random();
    this.danceInterperter.createAnimalPeekDance(image);
  }

  onPause() {

  }
  static update() {
  }
}

export default Main;
