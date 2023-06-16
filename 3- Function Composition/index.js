const input = "              TEST                   ";
function trimer(str) {
  return str.trim();
}

function toLower(str) {
  return `<h1>${str}<h1/>`;
}
function toLower(str) {
  return str.toLowerCase();
}
// this is called Function Composition :
const result = toLower(toLower(trimer(input)));

console.log(result);
