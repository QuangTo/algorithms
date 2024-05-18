///

const sentence1 = "   The quick brown Fox jumps over the lAzy dog. ";

const sentence2 = "   ABC agdf ";

// remove duplciate of 2 sencentence, trim and concatenate

function concat(str1, str2) {
  str1.trim();
  // str1.trim();
  console.log(str1 + str2.trim());
}

concat(sentence1, sentence2);
