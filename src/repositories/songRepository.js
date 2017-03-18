import Song from '../objects/Song';
import Repository from './Repository';

class SceneRepository extends Repository {
  constructor() {
    super([
      new Song('clock', 110),
    ]);
  }
}

export default new SceneRepository();
