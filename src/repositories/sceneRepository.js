import Scene from '../objects/Scene';

class SceneRepository {
  constructor() {
    this.scenes = [
      new Scene('a', []),
      new Scene('b', []),
      new Scene('c', []),
    ];
  }

  random() {
    return this.scenes[Math.floor(Math.random() * this.scenes.length)];
  }
}

export default new SceneRepository();
