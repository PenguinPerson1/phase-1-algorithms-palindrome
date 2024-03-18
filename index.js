function isPalindrome(word) {
  if(word.length<2){
    return true;
  } else if(word[0]===word[word.length-1]){
    return isPalindrome(word.slice(1,-1))
  } else{
    return false;
  }
}

/* 
  Add your pseudocode here
*/

/*
  Each loop compares the first and last letters
  If there aren't letters left to compare, it sends true back up the layers
  if the first and last letters don't match, it sends false back up the layers
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
