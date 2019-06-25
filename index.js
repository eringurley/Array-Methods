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
function find(array, callback) {
  for(let i = 0; i < array.length; i ++) {
    if(callback(array[i])) return i; 
  }
  return -1;
}

module.exports = { map, filter, find };
