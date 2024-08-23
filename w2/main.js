// How to Calculate Your Carbon Footprint - https://www.wikihow.com/Calculate-Your-Carbon-Footprint
// Method 1 

// 1. Count the members of your household.
const myHouseMembers = 14; 
// 2. Consider the size of your home
const myHouseSize = 10;
// 3. Evaluate your food choices
const mydomesMeatConsump = 10;
// 4. Examine your water comsumption
const mydishWasherRun = 9;
// 5. Determine how many household purchases you make each year.
const myHouseHoldpurch = 8;
// 6. Consider how much waste you produce
const myWasteProd = 50;
// 7. Identify the amount of waste that you recycle
const myRecylWaste = 24;
// 8. Tally up your annual transportation scores
const myTransScore = 12;
// 9. Add up your points
const cfpTotal = myHouseMembers + myHouseMembers + myHouseSize + myRecylWaste + myTransScore + myWasteProd + mydishWasherRun + mydomesMeatConsump
// 10. Write JS to update the rendered html (index.html) with total

const myHeading = document.querySelector("h1");
myHeading.textContent = "My Total";