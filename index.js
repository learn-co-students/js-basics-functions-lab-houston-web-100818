function distanceFromHqInBlocks(block) {
  let b;
  if (block >= 42) {
    b = block - 42;
  } else {
    b = 42 - block;
  }
  return b;
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
    // if(400 < distance && distance < 2000)
  } else if (distance > 400 && distance < 2000) {
    return 0.02 * (distance - 400);
  } else if (distance >= 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
