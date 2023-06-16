/*

Higher-order Functions are functions that : 
- [1]. takes a FCT as ARG
- [2]. returns a FCT
- [3]. both
=> instead of working with strings/numbers/booleans it goes higher to work with FCTs
*/
// ------------------
let numbers = [1, 2, 3];
let multiplier = numbers.map((nb) => nb * 2);

// here, map is a HOF, cuz it takes a FCT as ARG

setTimeout(() => {
  console.log("hi");
}, 1000);

// here too 😊
