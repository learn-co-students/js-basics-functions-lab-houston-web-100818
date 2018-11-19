// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, dest) {
  return Math.abs(start - dest) * 264
}

function calculatesFarePrice(start, dest) {
  let feet = distanceTravelledInFeet(start, dest);
  let fare;
  switch (true) {
    case feet <= 400:
      fare = 0;
      break;
    case feet > 2500:
      fare = 'cannot travel that far';
      break;
    case feet > 2000:
      fare = 25;
      break;
    case feet > 400:
      fare = (feet - 400) * 0.02
      break;
  }
  return fare;
}
