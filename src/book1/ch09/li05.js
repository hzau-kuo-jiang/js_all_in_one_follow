class Cat {
  static species = "Felis catus";
  #isSleeping = false;
  paws = 4;
  sound = "Meow";

  constructor(name, favoriteToy) {
    this.name = name;
    this.favoriteToy = favoriteToy;
  }

  static herd() {
    throw new Error("You cannot herd cats!");
  }

  play() {
    console.log(`The ${this.name} plays with the ${this.favoriteToy}.`);
    this.#takeANap();
  }

  #takeANap() {
    this.#isSleeping = true;
  }
}

const cat = new Cat("Fluffy", "Yarn");
console.log(cat);
/*console.log(cat.#isSleeping);
console.log(Cat.herd());*/
cat.play();
