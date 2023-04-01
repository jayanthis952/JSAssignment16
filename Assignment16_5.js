function removeLeadingTrailing(numStr) {
    
    let num = Number(numStr).toString();
  
    if (num.includes('.')) {
      
      let [integerPart, decimalPart] = num.split('.');
       integerPart = parseInt(integerPart).toString();
      
       if (/^0+$/.test(decimalPart)) {
        return integerPart;
      } else {
        
        return `${integerPart}.${decimalPart.replace(/0+$/, '')}`;
      }
    } else {
      
      return parseInt(num).toString();
    }
  }
  console.log(removeLeadingTrailing("230.000")); 
  console.log(removeLeadingTrailing("00402")); 
  console.log(removeLeadingTrailing("3.4000")); 
  console.log(removeLeadingTrailing("000234")); 
  console.log(removeLeadingTrailing("0.0")); 
