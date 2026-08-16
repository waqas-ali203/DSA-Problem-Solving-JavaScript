// Check if a Number is Prime

// function isPrime(num){
//     const factorsCount = 0;
//     for (let i = 1; i <= Math.sqrt(num); i++){
//         if(num % i === 0){
//             factorsCount++;
//             const otherValue = num / i;
//             if(i !== otherValue) factorsCount++;
//         }
//     }
//     return factorsCount === 2;
// }

// Check if two Numbers are Co-Prime

// function isCoPrime(a,b){
//     let divisor = a < b ? a : b;
//     let dividend = a > b ? a : b;

//     while(dividend % divisor !== 0){
//         const remainder = dividend % divisor;
//         dividend = divisor;
//         divisor = remainder;
//     }
//     return divisor === 1;
// }

// Print Fibonacci Series up to N Terms

// function Fibonacci(num){

//     const Series = [0n, 1n];
//     for(let i = 2n; i < BigInt(num); i++){
//         Series.push(Series[i - 1n] + Series[i - 2n]);
//     }
//     return Series;
// }

// Find the Nth Fibonacci Number

// function nthFibonacci(num){

//     const Series = [0n, 1n];
//     for(let i = 2n; i < BigInt(num); i++){
//         Series.push(Series[i - 1n] + Series[i - 2n]);
//     }
//     return Series[Series.length - 1];
// }

// Check if a Number Belongs to the Fibonacci Series

// function belongToFibonacci(num) {
//   return (
//     Number.isInteger(Math.sqrt(5 * num ** 2 + 4)) ||
//     Number.isInteger(Math.sqrt(5 * num ** 2 - 4))
//   );
// }
