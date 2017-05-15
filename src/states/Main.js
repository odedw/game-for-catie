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
    console.log('--------------');
    
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
      const image = animalGroup.create(0, 0, animal.name);
      image.anchor.set(0.5);
      image.width = animal.w * game.width / 3200;
      image.height = animal.h * game.width / 3200;
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
    const maxAnimalHeight = this.animalImages.map(i => i.height).max();
    const maxAnimalWidth = this.animalImages.map(i => i.width).max();
    const locations = this.scene.locations
    .filter((location) => {
      const pos = this.getLocationPosition(location);
      return pos.x - maxAnimalWidth / 2 > 0 && pos.y - maxAnimalHeight / 2 > 0 && pos.y - maxAnimalHeight / 2 < game.height &&
          pos.x - maxAnimalWidth / 2 < this.panel.container.x - (this.panel.container.width / 2);
    })
    .random(this.numberOfAnimals);
    for (let i = 0; i < this.animals.length; i++) {
      const pos = this.getLocationPosition(locations[i]);
      this.animalImages[i].x = pos.x;
      this.animalImages[i].y = pos.y;
    }
    
    // menu
    this.menu = new PauseMenu(game, this.backgroundGroup, animalGroup, this.onExit, this);

    // peek repeat
    game.time.events.repeat(Phaser.Timer.SECOND * 10, 10, this.onHint, this);

    const btnWidth = this.game.width * 0.08;
    const btnHeight = btnWidth * 0.63;
    const margin = btnWidth / 3;
   
    this.playBtn = this.game.add.button(this.game.world.centerX + margin / 2, 
      this.game.world.centerY + margin + maxAnimalHeight / 2, 
      'buttons-long', undefined, this, 13, 13, 14);
    this.playBtn.width = btnWidth;
    this.playBtn.height = btnHeight;
    this.playBtn.visible = false;
    this.playBtn.alpha = 0;
    this.playBtn.events.onInputUp.add(this.newScene, this);

    this.exitBtn = this.game.add.button(this.game.world.centerX - btnWidth - margin / 2, 
      this.game.world.centerY + margin + maxAnimalHeight / 2, 
      'buttons-long', undefined, this, 8, 8, 9);
    this.exitBtn.width = btnWidth;
    this.exitBtn.height = btnHeight;
    this.exitBtn.visible = false;
    this.exitBtn.alpha = 0;
    this.exitBtn.events.onInputUp.add(this.onExit, this);    

    // this.locationsCollected = [];
    // this.background.inputEnabled = true;
    // this.background.events.onInputDown.add(() => {
    //   const x = (this.game.input.mousePointer.x - (this.background.x - this.background.width / 2)) * 100 / this.background.width;
    //   const y = (this.game.input.mousePointer.y - (this.background.y - this.background.height / 2)) * 100 / this.background.height;
    //   this.animalImages[0].x = this.game.input.mousePointer.x;
    //   this.animalImages[0].y = this.game.input.mousePointer.y;
    //   this.locationsCollected.push({x, y});
    //   console.log(`${this.locationsCollected.length} locations`);
    // });
  }

  
  getLocationPosition(location) {
    return {
      x: this.background.x - (this.background.width / 2) + (this.background.width * (location.x / 100)),
      y: this.background.y - (this.background.height / 2) + (this.background.height * (location.y / 100)),
    };
  }

  create() {

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
    const c = this.panel.animalContainers[image.name];
    this.currentTween = this.danceInterperter.createAnimalFoundDance(image, this.song,
      { x: c.container.x + c.container.targetWidth / 2, 
        y: c.container.y + c.container.targetHeight / 2,  
        width: image.width * c.scale, 
        height: image.height * c.scale }, this.animalImagesFound.length);
    if (this.animalImagesFound.length === this.numberOfAnimals) {
      this.currentTween.onComplete.add(this.allFound, this);
    }
    this.currentTween.onComplete.add(() => this.currentTween = undefined, this);
    this.currentTween.start();
  }

  allFound() {
    const rowWidth = this.animalImagesFound
      .map(image => image.width / this.panel.animalContainers[image.name].scale).sum() + ((this.numberOfAnimals - 1) * this.rowMargin);
    let currentX = (this.game.width / 2) - (rowWidth / 2);
    this.audio = this.game.add.audio(this.song.segments[0]).play();
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
    this.exitBtn.visible = true;
    this.playBtn.visible = true;
    tweens.push(this.game.add.tween(this.exitBtn).to({ alpha: 1 }, this.song.beat, Phaser.Easing.Cubic.Out));
    tweens.push(this.game.add.tween(this.playBtn).to({ alpha: 1 }, this.song.beat, Phaser.Easing.Cubic.Out));
    tweens.forEach(t => t.start());
  }

  newScene() {
    if (this.audio) this.audio.stop();
    this.game.buttonClick();
    this.game.state.start('Main');    
  }

  onHint() {
    if (this.menu.showing || this.currentTween || this.animalImagesFound.length === this.numberOfAnimals) return;
    
    const image = this.animalImages.random();
    if (image) this.danceInterperter.createAnimalPeekDance(image);
    this.game.add.audio(`peek${(Math.floor(Math.random() * 4) + 1)}`).play();
  }

  onPause() {      
    // console.log('[' + this.locationsCollected.map(l => `{x: ${l.x.toFixed(2)}, y:${l.y.toFixed(2)}}`).join(', ') + ']');
    if (this.currentTween || this.animalImagesFound.length === this.numberOfAnimals) return;
    this.game.buttonClick();
    this.menu.show();
  }

  onExit() {
    this.game.buttonClick();
    if (this.audio) this.audio.stop();
    this.game.add.audio(this.song.segments[0]).stop();
    this.game.state.start('GameTitle');    
  }

  static update() {
  }
}

export default Main;
