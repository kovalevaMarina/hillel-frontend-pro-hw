class ReptiliaCrocodile extends Reptilia {
  constructor(specie, favoriteMeals, amountPaws, isHunter) {
    super(specie, favoriteMeals, amountPaws, isHunter);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
    return `The ${this.specie} is hidding.`;
  }
  appear() {
    this.hidden = false;
    return `The ${this.specie} is not hidding.`;
  }
}
