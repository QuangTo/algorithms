const D = [
  "2020-12-2",
  "2020-12-3",
  "2020-11-2",
  "2020-10-5",
  "2021-01-10",
  "2021-01-15",
  "2021-02-20",
];

function X(D) {
  const listOfTransactionBYMonth = D.map((month) => {
    return parseInt(month.split("-").at(1));
  });
  return listOfTransactionBYMonth;
}
console.log(X(D));
