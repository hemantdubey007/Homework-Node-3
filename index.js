const sum = arr => arr.reduce((acc, val) => acc + val, 0);

const average = arr => sum(arr) / arr.length;

const removeDuplicates = arr => [...new Set(arr)];

const sortByAsc = arr => arr.slice().sort((a, b) => a - b);

const sortByDesc = arr => arr.slice().sort((a, b) => b - a);

const filterByGreaterThan = (arr, value) => arr.filter(num => num > value);

const filterByLessThan = (arr, value) => arr.filter(num => num < value);

const mapToSquare = arr => arr.map(num => num * num);

const mapToDouble = arr => arr.map(num => num * 2);

const reverse = arr => arr.slice().reverse();

module.exports = {
  sum,
  average,
  removeDuplicates,
  sortByAsc,
  sortByDesc,
  filterByGreaterThan,
  filterByLessThan,
  mapToSquare,
  mapToDouble,
  reverse
};
