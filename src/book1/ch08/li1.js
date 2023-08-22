const favoriteFood = "pizza";

function makeDinner(whatToMake) {
  console.log(`I see you like ${favoriteFood}`);
  whatToMake = "noodles";
  console.log(`but, I've made ${whatToMake} instead`);
}

makeDinner(favoriteFood);
console.log(favoriteFood);
