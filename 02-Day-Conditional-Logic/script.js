// Find the Maximum of Three Numbers

// function maxOfThree(a, b, c) {
//   let max;
//   if (a >= b && a >= c) {
//     max = {a};
//   } else if (b >= c) {
//     max = {b};
//   } else {
//     max = {c};
//   }
//   return max
// }

// console.log(maxOfThree(4, 14, 2));

// Check if a Number is Positive, Negative, or Zero

// function numberCheck(a){
//     var number;

//     if(a > 0){
//         console.log("Positive number")
//     }
//     else if (a < 0){
//         console.log("Negative number")
//     }
//     else {
//         console.log("Zero number")
//     }
// }
// numberCheck(0)

// Calculate Electricity Bill

// Applies multiple ranges using chained else if and cumulative logic.

// Example Logic:

// 0–100 units → ₹5 per unit
// 101–200 units → ₹7 per unit
// 201–300 units → ₹10 per unit
// Above 300 units → ₹12 per unit

// function calculateBill(units) {
//   let total = 0;

//   if (units <= 100) {
//     total = units * 5;
//   } else if (units <= 200) {
//     total = (100 * 5) + ( units -100) * 7;
//   } else if (units <= 300) {
//     total = (100 * 5) + (100 * 7) + (units - 200) * 10;
//   } else {
//     total = (100 * 5) + (100 * 7) + (100 * 10) + (units - 300) * 12;
//   }

//   return total;
// }

// console.log(calculateBill(230))

// Check if a Character is a Vowel or Consonant

// function checkVowelorConstant(character = '0') {
//   if ("aeiou".includes(character.toLowerCase()) && character !== "") {
//     return "Vowel";
//   } else if (/[a-z]/.test(character.toLowerCase())){
//     return 'Constant'
//   }
//   return 'Not a valid Alphabet'
// }
// console.log(
//     checkVowelorConstant('b')
// )