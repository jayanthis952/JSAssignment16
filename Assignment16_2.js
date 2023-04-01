function findHappiness(str) {
    if (str.toLowerCase().includes("happiness")) {
      return "Hurray!";
    } else {
      return "There is no happiness.";
    }
  }
  console.log(findHappiness("Work makes me happy")); 
  console.log(findHappiness("You give me the feeling of happiness")); 
    