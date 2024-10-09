// TWO POINTERS TECHNIQUE

/**
 * @param  {number[]} arr
 * @param  {number} target
 * @returns {number[]} resultArr
 */
/**
 * 2 for, so the complex is 0(n^2), traditional
 * */

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

// console.log(findIndicesForSum([0, 1, 4, 5, 6, 8], 7));

/**
 * using two pointers
 * */
function twoPointers(arr, target) {
  let result = [];
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      result.push([arr[left], arr[right]]);
      return result;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return result;
}

// console.log(twoPointers([0, 1, 4, 5, 6], 7));

/**
 * longer arr
 */

// arr = [ 2,4,1,5,7,3,3]
// target = 6
// output = 2-4 ,1-5, 3-3
function twoPointersLongerArray(arr, target) {
  let result = [];
  let numMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    console.log("complement", complement);

    if (numMap.has(complement)) {
      result.push([complement, arr[i]]);
      console.log("push", complement, arr[i]);
    }
    numMap.set(arr[i], i);
    console.log("set", arr[i], i);
  }
  return result;
}

console.log(twoPointersLongerArray([2, 4, 1, 5, 7, 3, 3], 6));
