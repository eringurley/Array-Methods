const { map, filter, find } = require('./index');

//describe map
describe('map array method function test', () => {
  it('returns mapped array awith same length as array', () => {
    const array = [1, 2, 3];
    const squared = map(array, numbers => numbers * numbers);
    expect(squared).toEqual(expect.any(Array));
  });

  it('returns mapped array awith same length as array', () => {
    const array = [1, 2, 3];
    const squared = map(array, numbers => numbers * numbers);
    expect(squared).toEqual([1, 4, 9]);
  });

});


//describe filtered
describe('filter function', () => {
  it('returns an array', () => {
    const numbers = [1, 2, 3];
    const filtered = filter(
      numbers,
      number => number % 2 === 0
    );

    expect(filtered).toEqual(expect.any(Array));
  });
});

it('filters out odd numbers', () => {
  const numbers = [1, 2, 3, 4];
  const evens = filter(
    numbers,
    number => number % 2 === 0
  );

  expect(evens).toEqual([2, 4]);
});


//describe findIndex
describe('find index', () => {
  it('returns a number', () => {
    const colors = ['blue', 'red', 'green'];
    const index = find(colors, color => color == 'red');
    expect(index).toEqual(expect.any(Number));
  });
});

it('returns the index of a matching item', () => {
  const colors = ['blue', 'red', 'green'];
  const index = find(colors, color => color == 'red');
  expect(index).toEqual(1);
});

it('returns -1 if no match', () => {
  const colors = ['blue', 'red', 'green'];
  const index = find(colors, color => color == 'red');
  expect(index).toEqual(-1);
});


// It returns a number
// 2. Iterate over array if the item is good, return index
// 3. Else, continue
// 4. Return -1 if no matches found


