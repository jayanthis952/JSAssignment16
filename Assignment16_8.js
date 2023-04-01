function isValidHexCode(str) {
    
    if (str.match(/^#[a-fA-F0-9]{6}$/)) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isValidHexCode("#CD5C5C")); 
  console.log(isValidHexCode("#EAECEE")); 
  console.log(isValidHexCode("#CD5C&C")); 
