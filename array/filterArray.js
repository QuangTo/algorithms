const months = ["January", "February", "March", "April", "a", "B"];

// filter array that item length is > to 2
function filterArray(arr) {
  //   arr.forEach((item) => {
  //     if (item.length > 2) {
  //       console.log(item);
  //     }
  //   });
  arr.filter((item) => {
    if (item.length > 2) {
      console.log(item);
    }
  });
}

filterArray(months);
