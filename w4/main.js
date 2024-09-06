const cfpData = [];

function determineHouseSizePts(size) {
    console.log("inside block scope")
    let houseHoldPointts = 0;
    if (size === "Large") {
        houseHoldPointts = + 10;
    } else if (size === "Medium") {
        houseHoldPointts = + 7;
    } else if (size === "Small") {
        houseHoldPointts = + 4;
    } else if (size === "Apt") {
        houseHoldPointts = + 2;
    }
    return houseHoldPointts;
}

function determineHouseHoldPts(numberInHousehold) {
    console.log("inside the block scope")
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
        houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
        houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
        houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
        houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
        houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
        houseHoldPoints = 2;
    }

    return houseHoldPoints;
}


console.log("global scope");

function start(numberInHousehold, size) {
    const houseHoldPTS = determineHouseHoldPts(numberInHousehold);
    const houseHoldPTTS = determineHouseSizePts(size);
    const total = houseHoldPTS + houseHoldPTTS;
    cfpData.push([numberInHousehold, size, houseHoldPTS, houseHoldPTTS, total]);
}

function displayOutput() {
    for (arr of cfpData){
        console.log(arr) 
        const output = document.getElementById("output");
        const newP = document.createElement("p");
        newP.textContent = `Your CFP total is ${arr [4]} because you have ${arr [0]} people living in your household and a ${arr [1]} size house. You score ${arr [3]} house size points, and ${arr [2]} house hold points`;
        output.appendChild(newP)
    }
}

start(5, "Apt");
start(5, "small");
start(5, "Large");
start(5, "Medium");

start(4, "Large");
start(4, "Medium");
start(4, "Small");
start(4, "Apt");

start(3, "Large");
start(3, "Medium");
start(3, "Small");
start(3, "Apt");

start(2, "Large");
start(2, "Medium");
start(2, "Small");
start(2, "Apt");

start(1, "Large");
start(1, "Medium");
start(1, "Small");
start(1, "Apt");

start(6, "Large");
start(6, "Medium");
start(6, "Small");
start(6, "Apt");

displayOutput()
