/**
 * time complexity is O(n^2)
 * array accept number only
 */
const arr = [1, 23, 12, 34, 6, 45, 0];

function bubbleSort(arr) {
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

// other solution to reduce time complexity  o(n^2) to O(n) ?

/**
 * Advance
 * Array has string inside
 */

const randomArr = ["ABC", 0, 67, 5, 3, -67];
