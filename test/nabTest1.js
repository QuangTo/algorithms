// console.log('this is a debug message');

let array1 = [100, 100, -10];
let array2 = ["2022-12-3", "2022-12-4", "2022-11-3"];

function solution(A, D) {
  // Implement your solution here
  // calculate total amount of credit card
  let totalBalance = A.reduce((a, b) => a + b);

  const listOfTransactionBYMonth = D.map((month) => {
    return parseInt(month.split("-").at(1));
  });

  const validMonths = [];

  for (let i = 1; i <= 12; i++) {
    const count = 0;
    if (i === listOfTransactionBYMonth[i]) {
      count++;
    }
  }

  // create a new array and push
  // x = [12,1; 12,3] ...

  let totalExpenses = totalExpenses(A);

  //calculate numberOfExpensesPerMonth ;
  // return array

  // calculate number of payment per month
  // if(numberOfExpensesPerMonth <3 && totalExpenses < 100){
  //     5 * 12
  // }else (
  //     5 * other month;
  // )
}

// filter. by month ??
function totalExpenses(array) {
  let expenses = 0;
  arr.filter((item) => {
    if (item < 0) {
      count += item;
    }
  });
  return expenses;
}
