// can bac 2
function solution(N) {
  // console.log(Math.pow(2, 3));

  let count = 0;
  while (N % 2 === 0) {
    N = N / 2;
    count++;
  }
  return console.log(count);
}

solution(16);
