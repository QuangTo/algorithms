var removeElement = function (nums, val) {
  let array = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      array.push(nums[i]);
    }
  }
  return array;
};

const array = [3, 2, 2, 3];

console.log(removeElement(array, 3));

// const removeElement = function (nums, val) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   return nums;
// };
// console.log(removeElement([3, 2, 2, 3], 3));
