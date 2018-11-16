// Code your solution in this file!
const hq = 42;
const blockFeet = 264;

function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - hq)
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * blockFeet
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * blockFeet
}

function calculatesFarePrice(start, end) {
  let price;
  let howFar = distanceTravelledInFeet(start, end);
  if (howFar <= 400) {
    price = 0;
  } else if (howFar <= 2000) {
    price = (howFar - 400) * 0.02;
  } else if (howFar <= 2500) {
    price = 25;
  } else {
    price = 'cannot travel that far';
  }
  return price;
}