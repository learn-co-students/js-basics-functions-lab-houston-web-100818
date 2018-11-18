// Code your solution in this file!
function distanceFromHqInBlocks(value){
    result = 42 - value;
    if (result < 0) {
        result = result * -1;
    }
    return result;
}

function distanceFromHqInFeet(value){
    result = distanceFromHqInBlocks(value) * 264;
    return result
}

function distanceTravelledInFeet(x, y){
    result = y - x;
    if (result < 0) {
        result = result * -1
    }

    return result * 264
}

function calculatesFarePrice(x,y){
    result = distanceTravelledInFeet(x,y)

    if (result <= 400){
        cost = 0;
    }
    else if (400 <= result && result <= 2000){
        cost = (result - 400) * .02;
    }
    else if (2001 < result && result <= 2500){
        cost = 25;
    }
    else if(result > 2500){
        cost = "cannot travel that far";
    }

    return cost
}
