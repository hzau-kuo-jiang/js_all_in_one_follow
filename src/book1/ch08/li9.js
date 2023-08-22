const myTruck = {
  speed: 0,
};
const myCar = {
  speed: 0,
};
function drive(speedLimit) {
  this.speed = speedLimit;
  console.log(`I am driving at ${this.speed} km/h`);
}

drive.call(myTruck, 100);
drive.call(myCar, 120);

const drive2 = (vehicle, speedLimit) => {
  vehicle.speed = speedLimit;
  console.log(`I am driving at ${vehicle.speed} km/h`);
};

drive2(myTruck, 100);
drive2(myCar, 120);
