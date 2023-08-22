const estimateTripTime = (distance, swimSpeed = 2, walkSpeed = 4) => ({
  swimTime: distance / swimSpeed,
  walkTime: distance / walkSpeed,
});

const { swimTime, walkTime } = estimateTripTime(10);
console.log(`游泳需要${swimTime}小时，走路需要${walkTime}小时。`); // 游泳需要5小时，走路需要2.5小时。
