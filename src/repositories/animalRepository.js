import Animal from '../objects/Animal';
import Repository from './Repository';

class AnimalRepository extends Repository {
  constructor() {
    super([
      new Animal('rudy', 152, 250),
      new Animal('monster', 188, 250),
      new Animal('bunny', 179, 200),
      new Animal('cookiemonster', 164, 250),
      new Animal('redkitty', 187, 225),
      new Animal('bunnies', 200, 237),
      new Animal('bernard', 176, 250),
      new Animal('monkey', 177, 250),
      new Animal('gerald', 178, 250),
    ]);
  }
}

export default new AnimalRepository();
