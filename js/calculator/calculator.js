const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

function divide(a, b){
  if (b === 0) {              // TAREA 3
    throw new Error('No se puede dividir por cero');  // TAREA 3
  }               // TAREA 3
  return a / b;
}

function multiply(a, b){
  return a * b;
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {
  add: add, 
  subtract: subtract,
  divide: divide, // TEAREA 1
  multiply: multiply // TAREA 1
};

