function validatePIN(pin) {

    if (!/^\d+$/.test(pin)) {
      return false;
    }
  
    return pin.length === 4 || pin.length === 6;
  }
  console.log(validatePIN("1234")); 
console.log(validatePIN("12345")); 
console.log(validatePIN("123456")); 
console.log(validatePIN("1a23")); 
console.log(validatePIN("1234567")); 
