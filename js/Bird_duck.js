class Bird_duck extends Bird {
  constructor(specie, favoriteMeals, maxHeight, hasCrest) {
    super(specie, favoriteMeals, maxHeight, hasCrest);
    this.hasCrest = hasCrest;
  }

  dive(seconds) {
    setTimeout(function () {
      console.log("Сome up to the surface.");
    }, seconds);
    return "Gurgling...";
  }
}
