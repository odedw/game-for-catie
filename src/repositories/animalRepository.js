import Animal from '../objects/Animal';

class AnimalRepository {
  constructor() {
    this.animals = [
      new Animal('1', 100, 100),
      new Animal('2', 150, 75),
      new Animal('3', 75, 150),
      new Animal('4', 150, 200),
      new Animal('5', 150, 150),
    ];
  }

  random(n) {
    return this.animals.sort(() => 0.5 - Math.random()).slice(0, n);
  }
}

export default new AnimalRepository();
