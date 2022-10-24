// ? Copy app.starter.js to app.js

// * Using forLoop(), add a value to every value in an array of numbers and return it.
function forLoop(array, value) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + value;
  }
  return array;
}

// * Using forLoopBreak(), return an array with " Reed" added to all names before "Becky"
function forLoopBreak(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Becky") break;
    array[i] = array[i] + " Reed";
  }
  return array;
}

// * Using whileLoop(), create a program that returns an array of items with the first 3 items replaced with '*'.
function whileLoop(array) {
  let i = 0;
  while (i < 3) {
    array[i] = '*';
    i++
  }
  return array;
}

// * Using doWhileLoop(), create a program that returns an array of items with the first 3 items replaced with '*'.
function doWhileLoop(array) {
  let i = 0;
  do {
    array[i] = '*';
    i++;
  } while (i < 3);
  return array;
}

module.exports = {
  forLoop,
  forLoopBreak,
  whileLoop,
  doWhileLoop,
}