const { map, filter } = require('./index');

//describe map
describe('map array method function test', () => {
  it('returns mapped array awith same length as array', () => {
    const array = [1, 2, 3];
    const squared = map(array, numbers => numbers * numbers);
    expect(squared).toEqual([1, 4, 9]);
    //expect(mapped).toEqual(expect.any(Array));
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



