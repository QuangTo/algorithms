function countMaxOccurrences(arr) {
  //filter array
  let numericArr = arr.filter((element) => typeof element === "number");

  let count = 0;
  let max = Math.max(...numericArr);

  for (let i = 0; i < arr.length; i++) {
    if (numericArr[i] === max) {
      count++;
    }
  }
  return count;
}

const arr = [1, 4, 5, 12, "a", "b", 8, 7, 12];
console.log(countMaxOccurrences(arr));
