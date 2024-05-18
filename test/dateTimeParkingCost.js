// function solution(E, L) {
//   // Implement your solution here
//   const entryTime = E.split(":");
//   const exitTime = L.split(":");

//   const entryTimeHour = parseInt(entryTime[0]);
//   const entryTimeMin = parseInt(entryTime[1]);
//   const exitTimeHour = parseInt(exitTime[0]);
//   const exitTimeMin = parseInt(exitTime[1]);

//   const parkingTime = Math.ceil(
//     exitTimeHour - entryTimeHour + (exitTimeMin - entryTimeMin) / 60
//   );

//   console.log("Time:", parkingTime);

//   // 5 + 4 * 3 = 17
//   let parkingCost = 2 + 3;
//   if (parkingTime > 1) {
//     console.log("Cost:", parkingCost + 4 * (parkingTime - 1));
//     return parkingCost + 4 * (parkingTime - 1);
//   } else {
//     console.log("Cost:", parkingCost);
//     return parkingCost;
//   }
// }

// solution("10:00", "14:21");

// // (11:30, 12:40)
function solution(E, L) {
  const entranceFee = 2;
  const firstHour = 3;

  const entranceTime = E.split(":");
  const hour1 = parseInt(entranceTime.slice(0, 1));
  const min1 = parseInt(entranceTime.slice(1));
  const leftTime = L.split(":");
  const hour2 = parseInt(leftTime.slice(0, 1));
  const min2 = parseInt(leftTime.slice(1));
  //   console.log(hour2, min2, hour1, min1);
  //    conver min to hour ??
  let totalTime = Math.ceil(hour2 - hour1 + (min2 - min1) / 60);
  //4
  console.log(totalTime);

  if (totalTime > 1) {
    return entranceFee + firstHour + (totalTime - 1) * 4;
  } else {
    return entranceFee + firstHour;
  }
}

console.log(solution("10:00", "15:21"));
