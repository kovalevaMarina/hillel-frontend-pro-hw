class MammalSquirrel extends Mammal {
  constructor(specie, favoriteMeals, speed, hasTail, fluffyWool) {
    super(specie, favoriteMeals, speed, hasTail);
    this.fluffyWool = fluffyWool;
  }
  jump() {
    return "Squirrel can jump three to four meters forward!";
  }
}
