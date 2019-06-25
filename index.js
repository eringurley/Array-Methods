//mapped array
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
// It returns a number
// 2. Iterate over array if the item is good, return index
// 3. Else, continue
// 4. Return -1 if no matches found

module.exports = { map, filter, find };
