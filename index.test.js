const { map } = require('./index');

describe('map array method test', () => {
  it('map and return new array', () => {
    const array = [1, 2, 3];
    const squared = map(array, numbers => numbers * numbers);
    expect(squared).toEqual([1, 4, 9]);
  });
});
