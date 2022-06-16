class MammalCat extends Mammal {
  constructor(specie, favoriteMeals, speed, hasTail, isSleep, color) {
    super(specie, favoriteMeals, speed, hasTail);
    this.isSleep = isSleep;
    this.color = color;
  }
  sleep(hours) {
    return this.isSleep
      ? `Can not touch me! I am sleeping only ${hours} hours.`
      : `I slept ${hours} hours. It's enough for me. Play with me!`;
  }
}
