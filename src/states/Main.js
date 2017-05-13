/// <reference path="../../typings/phaser.d.ts" />
import animalRepo from '../repositories/animalRepository';
import sceneRepo from '../repositories/sceneRepository';
import songRepo from '../repositories/songRepository';
import DanceInterperter from '../dances/DanceInterperter';
import Panel from '../objects/Panel';
import PauseMenu from '../objects/PauseMenu';


class Main extends Phaser.State {
  constructor(game, params, numberOfAnimals = 4) {
    super(game);
    this.numberOfAnimals = numberOfAnimals;
    this.rowMargin = 50;
    this.danceInterperter = new DanceInterperter(game);
  }

  init(scene) {
    this.scene = scene || sceneRepo.random();

    const game = this.game;
    this.animals = animalRepo.random(this.numberOfAnimals);
    this.animalImagesFound = [];
    this.song = songRepo.random();

    this.backgroundGroup = game.add.group();
    const animalGroup = game.add.group();

    // set background
    this.background = this.backgroundGroup.create(game.world.centerX, game.world.centerY, this.scene.name);
    this.background.anchor.set(0.5);
    this.game.stage.backgroundColor = '#000000';

    // create animals
    this.animalImages = [];
    for (let i = 0; i < this.animals.length; i++) {
      const animal = this.animals[i];
      const image = animalGroup.create(0, 0, /*game.width * (location.x / 100), game.height * (location.y / 100),*/ animal.name);
      image.anchor.set(0.5);
      image.width = animal.w;
      image.height = animal.h;
      image.inputEnabled = true;
      image.events.onInputDown.add(this.animalFound, this);
      this.animalImages.push(image);
      image.name = animal.name;
    }

    // panel
    this.panel = new Panel(game, this.animalImages, this.backgroundGroup);
    this.panel.hintButton.events.onInputUp.add(this.onHint, this);
    this.panel.pauseButton.events.onInputUp.add(this.onPause, this);

    // reposition background according to panel
    const gameRatio = (game.width - this.panel.container.width) / game.height;
    const backgroundRatio = this.background.width / this.background.height;
    if (gameRatio > backgroundRatio) {
      this.background.width = game.width - this.panel.container.width;
      this.background.height = this.background.width / backgroundRatio;
    } else {
      this.background.height = game.height;
      this.background.width = game.height * backgroundRatio;
    }
    this.background.x = game.world.centerX - this.panel.container.width / 2;
  
    // position animals
    const locations = this.scene.locations
    .filter((location) => {
      const pos = this.getLocationPosition(location);
      return pos.x > 0 && pos.y > 0 && pos.x < pos.y < game.height &&
          this.panel.container.x - (this.panel.container.width / 2);
    })
    .random(this.numberOfAnimals);
    for (let i = 0; i < this.animals.length; i++) {
      this.animalImages[i].x = this.background.x - (this.background.width / 2) + (this.background.width * (locations[i].x / 100));
      this.animalImages[i].y = this.background.y - (this.background.height / 2) + (this.background.height * (locations[i].y / 100));
    }
    
    // menu
    this.menu = new PauseMenu(game);

    // peek repeat
    game.time.events.repeat(Phaser.Timer.SECOND * 10, 10, this.onHint, this);
  }

  
  getLocationPosition(location) {
    return {
      x: this.background.x - (this.background.width / 2) + (this.background.width * (location.x / 100)),
      y: this.background.y - (this.background.height / 2) + (this.background.height * (location.y / 100)),
    }
  }

  create() {

  }

  animalFound(image) {
    // this.allFound(); return;
    if (this.currentTweens) return;

    // remove from live images
    this.animalImagesFound.push(image);
    this.animalImages.splice(this.animalImages.indexOf(image), 1);
    image.inputEnabled = false;
    image.events.onInputDown.removeAll();

    this.game.add.audio(this.song.segments[this.animalImagesFound.length]).play();
    const c = this.panel.animalContainers[image.name];
    this.currentTweens = this.danceInterperter.createAnimalFoundDance(image, this.song,
      { x: c.container.x, y: c.container.y, width: image.width * c.scale, height: image.height * c.scale }, c.scale);
    if (this.animalImagesFound.length === this.numberOfAnimals) {
      this.currentTweens[0].onComplete.add(this.allFound, this);
    }
    this.currentTweens[0].onComplete.add(() => this.currentTweens = undefined, this);
    this.currentTweens.forEach(t => t.start());
  }

  allFound() {
    const rowWidth = this.animalImagesFound
      .map(image => image.width / this.panel.animalContainers[image.name].scale).sum() + ((this.numberOfAnimals - 1) * this.rowMargin);
    let currentX = (this.game.width / 2) - (rowWidth / 2);
    this.game.add.audio(this.song.segments[0]).play();
    const tweens = [];
    for (let i = 0; i < this.animalImagesFound.length; i++) {
      const currentImage = this.animalImagesFound[i];
      const scale = this.panel.animalContainers[currentImage.name].scale;
      currentX += currentImage.width / (2 * scale);
      tweens.push(this.danceInterperter.createAllAnimalsFoundDance(currentImage, i, this.song, currentX, scale));
      currentX += (this.animalImagesFound[i].width / (scale * 2)) + this.rowMargin;
    }

    this.game.time.events.removeAll();
    tweens.push(this.game.add.tween(this.background).to({ alpha: 0.1 }, this.song.beat, Phaser.Easing.Cubic.Out));
    tweens.push(this.game.add.tween(this.panel.group).to({ alpha: 0 }, this.song.beat, Phaser.Easing.Cubic.Out));
    tweens.forEach(t => t.start());
  }

  onHint() {
    if (this.currentTweens || this.animalImagesFound.length === this.numberOfAnimals) return;
    
    const image = this.animalImages.random();
    if (image) this.danceInterperter.createAnimalPeekDance(image);
    this.game.add.audio(`peek${(Math.floor(Math.random() * 4) + 1)}`).play();
  }

  onPause() {
    if (this.currentTweens || this.animalImagesFound.length === this.numberOfAnimals) return;
    
    this.menu.show();
  }
  static update() {
  }
}

export default Main;
