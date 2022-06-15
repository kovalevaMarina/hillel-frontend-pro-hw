class MammalCat extends Mammal {
  constructor(specie, favoriteMeals, speed, hasTail, breed, color) {
    super(specie, favoriteMeals, speed, hasTail);
    this.breed = breed;
    this.color = color;
  }
  sleep(hours) {
    return `The ${this.breed} cats can sleep about ${hours} hours every day.`;
  }
}
