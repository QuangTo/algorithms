function test(arr) {
  //   let min = 1;
  let current = 1;
  let income = 0;

  let sellIncome = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] <= current) {
      if (i == 0) {
        sellIncome = arr[i];
      } else {
        sellIncome = arr[i] - current;
      }
      let buyExpense = arr[i + 1];
      income += sellIncome - buyExpense;
      current = arr[i + 1];
    }
  }
  return income;
}

let array = [4, 1, 2, 3];

console.log(test(array));
