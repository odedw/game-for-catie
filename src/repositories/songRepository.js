import Song from '../objects/Song';
import clockDance from '../dances/clock';
import autoDance from '../dances/auto';
import bayDance from '../dances/bay';
import Repository from './Repository';

class SceneRepository extends Repository {
  constructor() {
    super([
      // new Song('clock', 110, 0.15, clockDance),
      // new Song('auto', 110, 0.15, autoDance),
      new Song('bay', 110, 1.375, bayDance),
    ]);
  }
}

export default new SceneRepository();
