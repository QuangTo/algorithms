function findIndicesForSum(arr, target) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        resultArr.push(arr[i], arr[j]);
      }
    }
  }
  return resultArr;
}

const result = findIndicesForSum([0, 1, 2, 3, 4, 2, 5], 5);
console.log(result);
