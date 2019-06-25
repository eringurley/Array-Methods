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

module.exports = { map, filter };
