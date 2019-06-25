//mapped array
function map(array, callback) {
  let newArray = [];
  for(var i = 0; i < array.length;i++) {
    newArray[i] = callback(array[i]);
  }
  return newArray;
}

//filtered array
function filter(array, callback) {
  const filtered = [];
  for(var i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      filtered[filtered.length] = array[i];
    }
  }
  return filtered;
}

//findIndex
function find(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) return i;
  }
  return -1;
}

//reduce
function reduce(array, callback, initialValue) {
  let acc = initialValue;
  let i = 0;
  if(initialValue === undefined) {
    acc = array[0];
    i = 1;
  }
  for(i; i < array.length; i ++) {
    acc = callback(acc, array[i]); 
  }
  return acc;
}

module.exports = { map, filter, find, reduce };
