//  Print Numbers from 1 to N 

// const num = parseInt(prompt("Enter your Number"));
// const num = 20;

// for (let i = 1; i <= num; i++) {
//     console.log(i)
// }


// 2 Print Numbers from N to 1 without changing the loop condition of above question 

// const num = 20;

// for (let i = 1; i <= num; i++) {
//     console.log(num-i+1)
// }


// 3 Print All Even Numbers from 1 to N 

// const num = 20;

// for (let i = 1; i <= num; i++) {
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }


//  4 Sum of First N Natural Numbers 

// Brute force solution 
// Time complexity 0(n)
// it takes 9 second

// console.time()
// const num = 100000000000000000000;

// let sum = 0

// for (let i = 1; i <= num; i++) {
//     sum += i
// }
// console.log(sum)
// console.timeEnd()


// Optimize solution
// Time complexity 0(1)
// it takes less than 0.1 milisecond

// console.time()
// const numb = 100000000000000000000;

// let sum = (numb * (numb + 1)) / 2

// console.log(sum)
// console.timeEnd()


// 5 Product (Factorial) of N 

// console.time()
// const num = 5n;

// let product = 1n;

// for (let i = 1n; i <= num; i++) {
//     product *= i
// }
// console.log(product)
// console.timeEnd()

// Print Squares of Numbers from 1 to N


// const num = 10n;

// for(let i = 1n; i <= num; i++){
//     // console.log(i ** 2n);
//     console.log(i * i);
// } 