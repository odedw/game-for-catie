import Animal from '../objects/Animal';
import Repository from './Repository';

class AnimalRepository extends Repository {
  constructor() {
    super([
      new Animal('1', 100, 100),
      new Animal('2', 150, 75),
      new Animal('3', 75, 150),
      new Animal('4', 150, 200),
      new Animal('5', 150, 150),
    ]);
  }
}

export default new AnimalRepository();
