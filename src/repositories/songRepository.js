import Song from '../objects/Song';
import clockDance from '../dances/clock';
import Repository from './Repository';

class SceneRepository extends Repository {
  constructor() {
    super([
      new Song('clock', 110, 0.15, clockDance),
    ]);
  }
}

export default new SceneRepository();
