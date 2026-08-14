// Split Number into Digits 

// function splitIntoDigits(num) {
//     const digits = [];
//     while (num > 0) {
//      digits.unshift(num % 10);
//      num = Math.floor(num / 10); 
//     }
//     return digits
// }

// console.log(splitIntoDigits(1234))


// Reverse a Number

// function reverseDigits(num) {
//     const digits = [];
//     while (num > 0) {
//      digits.unshift(num % 10);
//      num = Math.floor(num / 10); 
//     }
//     let reverseNumber = 0;

//     for(let i = 0; i < digits.length; i++){
//         reverseNumber += digits[i] * 10 ** i;
//     }
//     return reverseNumber;
// }

// console.log(reverseDigits(1234))


// Remove the Decimal Point Mathematically

// function removeDecimal(num){
//     while(!Number.isInteger(num)){
//         num = num * 10
//     }
//     return num
// }
// console.log(removeDecimal(12.65))


// Separate Whole and Fractional Parts of a Number 

// function separateParts(num){
//     const fractionPart = Number((num % 1).toFixed(10));
//     const wholePart = Number((num - fractionPart).toFixed(10));
//     return {wholePart, fractionPart};
// }

// console.log(separateParts(12.23))

