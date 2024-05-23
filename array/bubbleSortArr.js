const arr = [1, 23, 12, 34, 6, 45, 0];

function originalSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(originalSort(arr));

// arr = [1, -67, 3, 4, 2, 67, 0];

// const slove = arr.sort((a, b) => {
//   return a - b;
// });

// console.log(slove);
