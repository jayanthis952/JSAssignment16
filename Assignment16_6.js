function doubleLetters(word) {
    for (let i = 0; i < word.length - 1; i++) {
      if (word[i] === word[i + 1]) {
        return true;
      }
    }
    return false;
  }
  console.log(doubleLetters("loop")); 
  console.log(doubleLetters("yummy")); 
  console.log(doubleLetters("world")); 
  console.log(doubleLetters("javascript")); 
    