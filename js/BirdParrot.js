class BirdParrot extends Bird {
  constructor(specie, favoriteMeals, maxHeight, canSpeak) {
    super(specie, favoriteMeals, maxHeight);
    this.canSpeak = canSpeak;
  }
  speak(word) {
    return this.canSpeak
      ? `The ${this.specie} can speak "${word}".`
      : `Unfortunately the ${this.specie} does not speak.`;
  }
}
