const promisifiedSetTimeout = (delay) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });

async function doProcessing() {
  await promisifiedSetTimeout(3000);
  console.log("doing first thing");
  await promisifiedSetTimeout(2500);
  console.log("step 2");
  await promisifiedSetTimeout(1000);
  console.log("step 3");
}

doProcessing();
