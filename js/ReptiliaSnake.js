class ReptiliaSnake extends Reptilia {
  constructor(specie, favoriteMeals, amountPaws, isHunter, hasPoisson) {
    super(specie, favoriteMeals, amountPaws, isHunter);
    this.hasPoisson = hasPoisson;
  }
  bite() {
    return this.hasPoisson ? "You are died..." : "You are lucky!";
  }
}
