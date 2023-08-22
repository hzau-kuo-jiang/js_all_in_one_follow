export class Beverage {
  constructor(size, temperature) {
    this.size = size;
    this.temperature = temperature;
  }
  drink() {
    this.temperature !== "scalding"
      ? console.log("Mmmmm...")
      : console.log("OUCH!!!");
  }
}
