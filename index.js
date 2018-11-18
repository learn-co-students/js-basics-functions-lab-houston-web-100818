// Code your solution in this file!

function distanceFromHqInBlocks (block) {
    //returns the number of blocks given a value
    const hqBlock = 42;
    return Math.abs(block - hqBlock);
} 

function distanceFromHqInFeet (location) {
    return distanceFromHqInBlocks(location)* 264;   
}

function distanceTravelledInFeet (startBlock , endBlock) {
    //returns the number of blocks given a value
    return Math.abs(startBlock - endBlock) * 264;
}

function calculatesFarePrice(start, destination) {

    disTrav = distanceTravelledInFeet(start, destination)

    if (disTrav < 400){
        return 0;
    }
    else if (disTrav >= 400 && disTrav <=2000){
       return (disTrav - 400) * 0.02;
    }
    else if (disTrav >= 2000 && disTrav <=2500){
       return 25;
    }
    else {
       return 'cannot travel that far';
    }
}