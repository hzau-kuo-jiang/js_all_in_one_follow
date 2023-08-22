import { Beverage } from "./li01.js";

class Coffee extends Beverage {
  constructor(size, temperature, hasCaffeine, howYouTakeIt) {
    super(size, temperature);
    this.hasCaffeine = hasCaffeine;
    this.howYouTakeIt = howYouTakeIt;
  }
  drink() {
    this.temperature !== "scalding"
      ? console.log("now that's good coffee!")
      : console.log("OUCH!!!");
  }
}

const coffee = new Coffee("large", "hot", true, "black");
console.log(coffee);
