import Scene from '../objects/Scene';
import Repository from './Repository';

class SceneRepository extends Repository {
  constructor() {
    super([
      new Scene('a', [{x: 14, y:25}, {x: 25, y:74}, {x: 43, y:19}, {x: 45, y:62}, {x: 58, y:24}, {x: 58, y:65}, {x: 68, y:26}, {x: 82, y:69}, {x: 90, y:24}]),
      new Scene('b', [{x: 14, y:25}, {x: 25, y:74}, {x: 43, y:19}, {x: 45, y:62}, {x: 58, y:24}, {x: 58, y:65}, {x: 68, y:26}, {x: 82, y:69}, {x: 90, y:24}]),
      new Scene('c', [{x: 14, y:25}, {x: 25, y:74}, {x: 43, y:19}, {x: 45, y:62}, {x: 58, y:24}, {x: 58, y:65}, {x: 68, y:26}, {x: 82, y:69}, {x: 90, y:24}]),
    ]);
  }
}

export default new SceneRepository();
