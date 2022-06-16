class MammalSquirrel extends Mammal {
  constructor(specie, favoriteMeals, speed, hasTail, isHungry) {
    super(specie, favoriteMeals, speed, hasTail);
    this.isHungry = isHungry;
  }
  hideNut() {
    return this.isHungry
      ? `The ${this.specie} is eating the nut.`
      : `The ${this.specie} is not hungry.`;
  }
}
