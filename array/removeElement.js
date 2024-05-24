/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 *
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums;
};

// console.log(removeElement([3, 2, 2, 3], 3));

function removeDuplicateElement(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array.splice(j, 1);
        j--;
      }
    }
  }
  return array;
}
const array = [3, 4, 5, 4, 6];
console.log(removeDuplicateElement(array));
