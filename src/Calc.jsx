function add(a,b) {
  var num1 = parseInt(a, 10);
  var num2 = parseInt(b, 10);
  let add = num1 + num2;
  return add;
}
function sub(a,b) {
    var num1 = parseInt(a, 10);
  var num2 = parseInt(b, 10);
  let sub = num1 - num2;
  return sub;
}
function div(a,b) {
    var num1 = parseInt(a, 10);
  var num2 = parseInt(b, 10);
  let div = num1 / num2;
  div = div.toFixed(1);
  return div;
}
function multi(a,b) {
    var num1 = parseInt(a, 10);
  var num2 = parseInt(b, 10);
  let multi = num1 * num2;
  return multi;
}
export { add, sub, div, multi };
