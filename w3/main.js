function determineHouseHoldPts(numberInHousehold) {
    console.log("Inside the function")
    if (numberInHousehold === 1) {
        carbonFootprintpoints = carbonFootprintpoints + 14;
    } else if (numberInHousehold === 2) {
        carbonFootprintpoints = carbonFootprintpoints + 12;
    } else if (numberInHousehold === 3) {
        carbonFootprintpoints = carbonFootprintpoints + 10;
    } else if (numberInHousehold === 4) {
        carbonFootprintpoints = carbonFootprintpoints + 8;
    } else if (numberInHousehold === 5) {
        carbonFootprintpoints = carbonFootprintpoints + 6;
    } else if (numberInHousehold === 6) {
        carbonFootprintpoints = carbonFootprintpoints + 4;
    } else if (numberInHousehold > 6) {
        carbonFootprintpoints = carbonFootprintpoints + 2;
    }
    console.log(`Based on the number of members in the household of ${numberInHousehold} the points would be ${carbonFootprintpoints}. `);
}

let carbonFootprintpoints = 0;
//const numberInHousehold = 3;


// global scope



determineHouseHoldPts(3)
determineHouseHoldPts(4)