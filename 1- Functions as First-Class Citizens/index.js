/*

functions can be : 
- [1]. assigned to VARS
- [2]. passed as ARGS
- [3]. returned from other functions
=> this means functions are First-Class Citizens
*/
// --------- [1] ---------
function sayHello() {
  return "hello world";
}
let f1 = sayHello;
console.log(f1(), 1); // output : hello world
// --------- [2] ---------
function greet(f2) {
  console.log(f2(), 2);
}
greet(sayHello);
// --------- [3] ---------
function returnAFunction() {
  return () => "hello world";
}
let f3 = returnAFunction();
let msg = f3();
console.log(msg, 3);
