// How to Calculate Your Carbon Footprint - https://www.wikihow.com/Calculate-Your-Carbon-Footprint
// Method 1 

// 1. Count the members of your household.
const myHouseMembers = 8; 
// 2. Consider the size of your home
const myHouseSize = 7;
// 3. Evaluate your food choices
const mydomesMeatConsump = 8;
// 4. Examine your water comsumption
const mydishWasherRun = 2;
// 5. Determine how many household purchases you make each year.
const myHouseHoldpurch = 8;
// 6. Consider how much waste you produce
const myWasteProd = 40;
// 7. Identify the amount of waste that you recycle
const myRecylWaste = 22;
// 8. Tally up your annual transportation scores
const myTransScore = 12;
// 9. Add up your points
const cfpTotal = myHouseMembers + myHouseMembers + myHouseSize + myRecylWaste + myTransScore + myWasteProd + mydishWasherRun + mydomesMeatConsump
const myHeading = document.querySelector("h2");
myHeading.textContent = "107";