const array = ["a", "2", "c", "e", "4"];

function filterNumber(array) {
  // return array.
}
const arr = [1];
const a = 1;
const b = 2;
const arr2 = [];
// console.log(isFinite(arr));
// console.log(arr2.map(Number));

function solution(S) {
  // Create an object to store the count of each letter
  let letterCount = {
    B: 0,
    A: 0,
    N: 0,
  };

  // Count the occurrences of B, A, and N in the string
  for (let char of S) {
    if (char in letterCount) {
      letterCount[char]++;
    }
  }

  // Calculate the maximum number of "BANANA"s that can be formed
  return Math.min(
    letterCount["B"],
    Math.floor(letterCount["A"] / 3),
    Math.floor(letterCount["N"] / 2)
  );
}

console.log(solution("NAABXXANBANANA"));
