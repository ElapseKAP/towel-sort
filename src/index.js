
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!Array.isArray(matrix) || matrix.length == 0) {
    return [];
  }

  let newArr = [],
    sortArr;

  for (let i = 0; i < matrix.length; i++) {

    if (i%2 !== 0) {
      sortArr = matrix[i].sort(function(a, b) {
        return b - a;
      });
      newArr = newArr.concat(sortArr);
      continue;
    }

    newArr = newArr.concat(matrix[i]);
  }

  return newArr;
}
