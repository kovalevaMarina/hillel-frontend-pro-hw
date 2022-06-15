class Mammal extends Animal {
  constructor(specie, favoriteMeals, speed, hasTail) {
    super(specie, favoriteMeals);
    this.speed = speed;
    this.hasTail = hasTail;
  }
  run(distance) {
    return `The ${this.specie} runs ${distance} in ${
      distance / this.speed
    } hours.`;
  }
}
