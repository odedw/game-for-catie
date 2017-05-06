import Animal from '../objects/Animal';
import Repository from './Repository';

class AnimalRepository extends Repository {
  constructor() {
    super([
      new Animal('elmo', 178, 250),
      new Animal('horsey', 230, 175),
      new Animal('greenkitty', 250, 225),
      new Animal('pil', 225, 202),
      new Animal('inja', 250, 209),
      // new Animal('barney', 127, 250),
      // new Animal('rudy', 152, 250),
      // new Animal('monster', 188, 250),
      // new Animal('bunny', 179, 200),
      // new Animal('cookiemonster', 164, 250),
      // new Animal('redkitty', 187, 225),
      // new Animal('bunnies', 200, 237),
      // new Animal('bernard', 176, 250),
      // new Animal('monkey', 177, 250),
      // new Animal('gerald', 178, 250),
    ]);
  }
}

export default new AnimalRepository();
