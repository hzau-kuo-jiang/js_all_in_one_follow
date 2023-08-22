const count = (maxNumber) => {
  let i = 0;
  while (i < maxNumber) {
    console.log(i);
    i++;
  }
};

const countToTen = count.bind(null, 10);
countToTen();
