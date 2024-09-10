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
    for (arr of cfpData) {
        const output = document.getElementById("output");
        const newH2 = document.createElement("h2");
        newH2.textContent = `Carbon Footprint ${arr[4]}`;
        const newH3 = document.createElement("h3");
        newH3.textContent = `Based on number in and size of home`
        const newP = document.createElement("p");
        newP.textContent = `This number is based on the number of people in the house of ${arr[0]} (score: ${arr[3]}),`;
        newP.textContent += ` and a ${arr[1]} size of home (score:${arr[2]}).`;
        output.appendChild(newH2);
        output.appendChild(newH3);
        output.appendChild(newP);
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
