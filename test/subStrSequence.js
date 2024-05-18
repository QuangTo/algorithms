function substringFrequency(string, substring, conjunction) {
  let index;
  let occurenceFrequency = 0;
  for (let i = 0; i < string.length; i++) {
    index = string.indexOf(substring, i);
    if (index != -1) {
      if (substring.length == 1 || conjunction == true) {
        i = index;
      } else {
        i = index + 1;
      }
      occurenceFrequency++;
    } else {
      break;
    }
  }
  return occurenceFrequency;
}

console.log(substringFrequency("vvvv", "v"));
console.log(substringFrequency("vvvv", "vv"));
console.log(substringFrequency("vvvv", "vv", true));
