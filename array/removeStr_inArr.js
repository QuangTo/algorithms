const array = ["0CS", "0CR", "C2R", "1A4"];

//return str only

// function removeStr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].replace(/\d/g, "");
//   }
//   return arr;
// }
function removeStr(arr) {
  return arr.map((str) => str.replaceAll(/[0-9]/g, ""));
}

console.log(removeStr(array));
