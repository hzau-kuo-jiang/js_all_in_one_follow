const myCar = {
  speed: 0,
  operate(speedLimit, callback) {
    const boundCallback = callback.bind(this);
    boundCallback(speedLimit);
    console.log(`The current speed is ${this.speed} km/h.`);
  },
};
function drive(speedLimit) {
  this.speed = speedLimit;
}
myCar.operate(100, drive);
