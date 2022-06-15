class Bird extends Animal {
  constructor(specie, favoriteMeals, maxHeight) {
    super(specie, favoriteMeals);
    this.maxHeight = maxHeight;
  }
  fly(height) {
    return this.maxHeight <= height
      ? `The ${this.specie} can fly up to a height of ${height} `
      : `The ${this.specie} can not fly up to a height of ${height} `;
  }
}
