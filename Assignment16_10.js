function XO(str) {
    
    str = str.toLowerCase();
    let countX = 0;
    let countO = 0;
    
    for (let i = 0; i < str.length; i++) {
     
      if (str[i] === "x") {
        countX++;
      }
      
      if (str[i] === "o") {
        countO++;
      }
    }
    
    return countX === countO;
  }
  console.log(XO("ooxx")); 
  console.log(XO("xooxx")); 
  console.log(XO("ooxXm")); 
  console.log(XO("")); 
  console.log(XO("hello world")); 
  