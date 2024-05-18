// const arr = [1, 23, 12, 34, 6, 45, 0];

// function sortArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
// if (arr[i] > arr[j]) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }
//       sort(arr[i], arr[j]);
//     }
//   }
//   return arr;
// }

// const points = [40, 100, 1, 5, 25, 10, 35];
// points.sort(function (a, b) {
//   return a - b;
// });
// console.log(points);

// sortArr(arr);
// console.log(sortArr(arr));

// function sortArr(a, b) {
//   return a - b;
// }

sortAereaySimple = [1, 1, 3, 4, 2, 67, 0];
const newSort = sortAereaySimple.sort((a, b) => {
  return a - b;
});
console.log(newSort);
