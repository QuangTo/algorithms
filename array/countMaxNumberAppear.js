function countMaxOccurrences(arr) {
  //filter array
  let numericArr = numberic(arr);

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
// console.log(countMaxOccurrences(arr));

function numberic(arr) {
  return arr.filter((element) => typeof element === "number" && element > 5);
}

const arr2 = ["b3", "4v", "5", "12", "a", "b", "8", "7", "12"];
console.log("filter number array", convertStringtoNumber(arr2));

function convertStringtoNumber(arr) {
  // const numbericArray = arr.filter((el) => !isNaN(el) && el != "").map(Number);
  const numbericArray = Array.from(arr, (el) => el.split(","), Number);
  return numbericArray;
}
