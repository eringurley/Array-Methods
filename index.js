// Takes an Array and callback of signature item => {} and creates 
// a new Array with the return value of each called callback.
function map(array, callback) {
  let newArray = [];
  for(var i = 0; i < array.length;i++) {
    newArray[i] = callback(array[i]);
  }
  return newArray;
}
let array = [1, 2, 3];
console.log(map(array, numbers => numbers * numbers));

module.exports = { map };
