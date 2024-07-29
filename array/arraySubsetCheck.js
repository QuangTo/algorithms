function compareArrays(arrayA, arrayB) {
  return arrayA.every((element) => arrayB.includes(element));
}

// Test the function
const testA = [
  "2018.01.19_UpdateBillingReportingEncryption.sql",
  "2018.02.27_AddSSNInboundValidation.sql",
  "2018.03.13_UpdateSSNFormatSetting.sql",
];
const testB = [
  "2018.03.13_UpdateSSNFormatSetting.sql",
  "2018.02.27_AddSSNInboundValidation.sql",
  "link.text",
  "huhu.bac",
  "return",
];

console.log(compareArrays(testA, testB));
