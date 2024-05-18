let array = [1, -5, 4, 3, 2];

// s1
function s1(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
function s2(arr) {
  let sum = 0;

  arr.forEach((num) => {
    sum += num;
  });

  return sum;
}

function s3(arr) {
  return arr.reduce((a, b) => a + b);
}

console.log(s1(array));
console.log(s2(array));
console.log(s3(array));
