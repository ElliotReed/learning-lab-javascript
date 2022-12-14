
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

function whileLoop(array) {
  let i = 0;
  while (i < 3) {
    array[i] = '*';
    i++
  }
  return array
}

function doWhileLoop(array) {
  let i = 0;
  do {
    array[i] = "*";
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