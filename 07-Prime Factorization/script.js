// Find the Prime Factorization (Return as an Array) 

// function primeFactorization(num) {
//     const factors = [];

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         while (num % i === 0) {
//             factors.push(i);
//             num = num / i;
//         }
//     }

//     if (num > 1) {
//         factors.push(num);
//     }

//     return factors;
// }

// console.log(primeFactorization(84));


// Factorization in Exponent Form 


// function factorizationInExponentForm(num) {
//     const factors = [];

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         let count = 0;

//         while (num % i === 0) {
//             count++;
//             num = num / i;
//         }

//         if (count > 0) {
//             factors.push(`${i}^${count}`);
//         }
//     }

//     if (num > 1) {
//         factors.push(`${num}^1`);
//     }

//     return factors.join(" × ");
// }

// console.log(factorizationInExponentForm(360));



// Distinct Prime Factor Count 

// function countDistinctPrimeFactors(num) {
//     let count = 0;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             count++;

//             while (num % i === 0) {
//                 num = num / i;
//             }
//         }
//     }

//     if (num > 1) {
//         count++;
//     }

//     return count;
// }

// console.log(countDistinctPrimeFactors(100));


// Check if a Number Is a Powerful Numbe 

// function checkPowerfulNumber(num) {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             let count = 0;

//             while (num % i === 0) {
//                 count++;
//                 num = num / i;
//             }

//             if (count < 2) {
//                 return "Not a Powerful Number";
//             }
//         }
//     }

//     if (num > 1) {
//         return "Not a Powerful Number";
//     }

//     return "Powerful Number";
// }

// console.log(checkPowerfulNumber(36));