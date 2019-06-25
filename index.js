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

// var arr = [ "a", "b", "c" ];
//     for(var i=0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }


// Skips any holes in the Array, and mapped Array should have hole in 
// same spot. The mapped Array should have the same .length value as the original Array.

// Returns the "mapped" new array.

