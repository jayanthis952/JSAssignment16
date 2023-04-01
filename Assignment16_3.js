function isPrimeNumber(numStr) {
    // Convert the string to a number
    const num = parseInt(numStr);
  
    // If the number is less than 2, it's not prime
    if (num < 2) {
      return false;
    }
  
    // Check if the number is divisible by any integer from 2 to its square root
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    // If the number is not divisible by any integer from 2 to its square root, it's prime
    return true;
  }
  
  // Test the function with some examples
  console.log(isPrimeNumber("7"));   
  console.log(isPrimeNumber("134")); 
  