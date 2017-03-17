class Repository {
  constructor(items) {
    this.items = items;
  }

  random(n) {
    return this.items.random(n);
  }
}

export default Repository;
