// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    let result;
    
    if (someValue >= 42) {
        result = someValue - 42;
    }

    else {
        result = 42 - someValue;
    }
    return result;
    
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    let result;
    if (startBlock >= endBlock){
        result = (startBlock - endBlock) * 264
    }
    else { 
        result = (endBlock - startBlock) * 264
    }
    return result;
}   

function calculatesFarePrice(startBlock, endBlock) {
    let distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
    
        if (distanceInFeet < 400){
            return 0;
        }
        else if (distanceInFeet >= 400 && distanceInFeet <= 2000) {
            return (distanceInFeet - 400) * 0.02;
        }
        else if (distanceInFeet <= 2500) {
            return 25;
        }
        else {   
            return 'cannot travel that far';
        
        }
}