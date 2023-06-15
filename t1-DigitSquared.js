// Digit * Digit

function squareDigits(num){
    return Number(
              num.toString()  // 3212 -> "3212"
  
              .split("") // 3212 -> ["3", "2", "1", "2"]
  
              .map(e => e * e) // ["3", "2", "1", "2"] -> ["9", "4", "1", "4"]
  
              .join('') // ["9", "4", "1", "4"] -> "9414"
  
      );
  }

console.log(squareDigits(555));