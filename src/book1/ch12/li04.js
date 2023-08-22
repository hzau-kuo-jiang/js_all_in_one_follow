document.querySelector("button").addEventListener("click", () => {
  import("./li03.js").then((info) => {
    console.log(info.default());
    console.log(`${info.stateBird} is the state bird of ${info.stateName}`);
  });
});
