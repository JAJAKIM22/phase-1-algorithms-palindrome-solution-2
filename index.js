function isPalindrome(word) {
  // Write your algorithm here
  // move through the word from the beginning to the middle
  for (let i = 0; i < word.length / 2; i++) 
  {
    // check each letter to the correponding letter from the end of the name
    const j = word.length - 1 - i;
    // if any letters don't match, return false
    if (word[i] !== word[j]) return false;
  }

  return true;
}
/* FOR EXAMPLE IN THE WORD ABBA 
a b b a
i     j
a b b a
  i j
*/

/* 
}

/* 
  Add your pseudocode here
  If the first letter is the same as the last letter and the second letter is equal to the second last letter 
 and so on, hence return true , otherwise, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
