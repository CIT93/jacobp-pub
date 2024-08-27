console.log("Hello from inside the main.js file");

//let myVar;

const myVar = "jacob";
const myVarType = typeof(myVar);
console.log("myVarType " + myVarType);
console.log(`myVarType + ${myVarType}`);



function runNow () {
    if(myVarType === "number") {                                          
        console.log(`will 11 this one run?`);
    } else {
        console.log(`will this 13 run?`);
    }
}

runNow();
runNow();


