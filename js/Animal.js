class Animal {
  constructor(specie, favoriteMeals) {
    this.specie = specie;
    this.favoriteMeals = favoriteMeals;
  }

  eat(meal) {
    return this.favoriteMeals.includes(meal)
      ? `The ${this.specie} eat ${meal}`
      : `The ${this.specie} do not eat ${meal}`;
  }

  makeNoise(sound) {
    return `The ${this.specie} makes noise - ${sound}.`;
  }
}
