//  Print All Factors of a Number   with minimum loop count 

// function getAllFactors(num) {

//     const factors = [];
//     let loopCount = 0;
//     for (let i = 1; i <= Math.sqrt(num); i++){
//         loopCount++;
//         if(num % i === 0){
//             factors.splice(factors.length / 2, 0, i)
//             const otherValue = num / i
//             if(i !== otherValue) factors.splice(factors.length / 2 + 1, 0, otherValue)
//         }

//     }
//     console.log({num, loopCount});
//     return factors
    
// }
// console.log(getAllFactors(100));


// Print All Multiples of a Number up to N 


// function getAllMultiples(num, limit){
//     const multiples = []
//     for(let i = num; i <= limit; i+=num){
//         multiples.push(i)
//     }
//     return multiples;
// }

// console.log(getAllMultiples(4, 30))



// Find the HCF (Highest Common Factor) or GCD of Two Numbers

// function findHCF(a, b) {
//     while (b !== 0) {
//         let remainder = a % b;
//         a = b;
//         b = remainder;
//     }

//     return a;
// }

// console.log(findHCF(48, 18)); // 6


// Find the LCM (Least Common Multiple) of Two Numbers

// function findLCM(a, b) {
//     const originalA = a;
//     const originalB = b;

//     while (b !== 0) {
//         let remainder = a % b;
//         a = b;
//         b = remainder;
//     }

//     const hcf = a;

//     return (originalA * originalB) / hcf;
// }

// console.log(findLCM(48, 18)); // 144