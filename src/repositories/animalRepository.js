import Animal from '../objects/Animal';
import Repository from './Repository';

class AnimalRepository extends Repository {
  constructor() {
    super([
      new Animal('1', 100, 100),
      new Animal('2', 150, 75),
      new Animal('bunnies', 200, 237),
      new Animal('bernard', 176, 250),
    ]);
  }
}

export default new AnimalRepository();
