/// capitalize sentence / string / word

const sentence = "The quick brown Fox jumps over the lAzy dog.";

// capitalize ALL words
function capitalizeFirstLetter(sentence) {
  // split sentence
  let words = sentence.split(" ");
  //>> output : [ 'The', 'quick', 'brown', 'Fox', 'jumps', 'over', 'the', 'lazy', 'dog.' ]
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].at(0).toUpperCase() + words[i].slice(1).toLowerCase();

    // capitalize last word
    // words[i] =
    // words[i].slice(0, -1).toLowerCase() + words[i].slice(-1).toUpperCase();
  }
  const newSentence = words.join(" ");
  console.log(newSentence);
}

capitalizeFirstLetter(sentence);
