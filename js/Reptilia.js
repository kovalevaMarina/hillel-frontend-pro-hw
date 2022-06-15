class Reptilia extends Animal {
  constructor(specie, favoriteMeals, amountPaws, isHunter) {
    super(specie, favoriteMeals);
    this.amountPaws = amountPaws;
    this.isHunter = isHunter;
  }
  plantEggs() {
    const min = 1;
    const max = 5;
    let quantityEggs = Math.floor(Math.random() * (max - min + 1)) + min;
    return `The ${this.specie} lay ${quantityEggs} eggs in year.`;
  }
}
