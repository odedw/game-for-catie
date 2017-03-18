Array.prototype.random = function (n = 1) {
  if (n === 0) return undefined;
  const res = this.sort(() => 0.5 - Math.random()).slice(0, n);
  return n === 1 ? res[0] : res;
};

Array.prototype.flatMap = function (lambda) { 
  return Array.prototype.concat.apply([], this.map(lambda));
};
