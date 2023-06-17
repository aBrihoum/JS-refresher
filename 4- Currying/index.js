/*
currying is a technique that allows us to take a FCT that have N ARGS to a single ARG
N => 1
[#] - https://miro.medium.com/v2/resize:fit:557/1*aTHu_4UDNiKH-0S_fu-Ddg.png
*/

function addOld(a, b) {
  return a + b;
}
addOld(1, 2); // output 3

// [#] applying curry's method :

function add(a) {
  return function (b) {
    return a + b;
  };
}

let add_a = add(1);
let add_a_b = add_a(2); // output 3

// [#] we can also call it this way :

add(1)(2); // output 3

// [#] we can convert add() to an arrow fct :

const add2 = (a) => (b) => a + b;

add2(1)(2); // output 3

// --------- # another ex # ---------

function trimer(str) {
  return str.trim();
}
function wrapperOld(type, str) {
  return `<${type}>${str}</${type}>`;
}
// applying curry's method :
function wrapper(type) {
  return function (str) {
    return `<${type}>${str}</${type}>`;
  };
}
wrapper("span")("this is a test");

// [#] converting to an arrow fct :

const wrapper2 = (type) => (str) => `<${type}>${str}</${type}>`;
