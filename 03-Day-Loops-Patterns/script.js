// Core Concept Focus
// Nested Loops
// Pattern Printing with Logic and Symmetry
// Understanding iteration depth for shapes and designs

// Print Right-Angled Star Triangle

// Output:

// *
// **
// ***
// ****
// *****

// const row = 5;

// for(let i = 1; i <= row; i++){
//      let str = '';

//      for(let j = 1; j <= i; j++){
//         str = str + '*'
//      }
//      console.log(str)
// }

// Print Inverted Right-Angled Triangle

// const row = 8;

// for(let i = row; i >= 1; i--){
//      let str = '';

//      for(let j = i; j >= 1; j--){
//         str = str + '*'
//      }
//      console.log(str)
// }

// Print Pyramid Pattern

// Output:

//     *
//    ***
//   *****
//  *******
// *********

// const row = 5;

// for(let i = 1; i <= 2 * row - 1; i += 2){
//     let str = '';
//     const currentRow = (i + 1) / 2;

//     for(let j = 1; j <= row + (currentRow - 1); j++){
//         if(j <= row - currentRow){
//             str += ' ';
//         }else {
//             str += '*';
//         }
//     }

//     console.log(str);
// }

// Print Hollow Square Pattern

// Output:

// *****
// *   *
// *   *
// *   *
// *****

// const row = 6;

// for (let i = 1; i <= row; i++) {
//     let str = '';

//     for (let j = 1; j <= row; j++) {
//         if(i === 1 || i === row || j === 1 || j === row){
//             str = str + '*'
//         } else {
//             str = str + ' '
//         }
//     }

//     console.log(str);
// }

// Print Hollow Pyramid Pattern

// Output:

//     *
//    * *
//   *   *
//  *     *
// *********

// const row = 5;

// for (let i = 1; i <= 2 * row - 1; i += 2) {
//   let str = "";
//   const currentRow = (i + 1) / 2;

//   for (let j = 1; j <= row + (currentRow - 1); j++) {
//     if (
//       j <= row - currentRow ||
//       (j > row - currentRow + 1 &&
//         j < row + currentRow - 1 &&
//         i !== 2 * row - 1)
//     ) {
//       str += " ";
//     } else {
//       str += "*";
//     }
//   }

//   console.log(str);
// }



// Print Alternating Binary Triangle

// Output:

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

// const row = 5;

// for(let i = 1; i <= row; i++){
//      let str = '';

//      for(let j = 1; j <= i; j++){
//         str = str + (i % 2 === 1 ? j % 2 : (j + 1) % 2)
//      }
//      console.log(str)
// }