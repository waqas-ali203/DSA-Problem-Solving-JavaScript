// // Reverse a String (Manual Method Only) 

// function reverseString(str){
//     let reveredString = "";

//     for (let i = str.length - 1; i >= 0; i--){
//         reveredString += str[i];
//     }
//     return reverseString;
// }

// console.log(reverseString("abcd"));


// Check if a String is a Palindrome

// function isPalindrome(str){
//     let leftIndex = 0;
//     let rightIndex = str.length - 1;

//     while ( leftIndex < rightIndex){
//         if ( str[leftIndex] !== str[rightIndex]) return false;
//         leftIndex++;
//         rightIndex--;
//     }
//     return true
// }

// console.log(isPalindrome("racecar"));


// Count Frequency of Each Character

// function countFrequency(str){
//     const Frequency = {};

//     for (let i = 0; i < str.length; i++){
//         Frequency[str[i]] = (Frequency[str[i]] || 0) + 1;
//     }
//     return Frequency;
// }

// console.log(countFrequency("banana"));


//  Find the Most Frequent Character in a String 


// function mostFrequentCharacter(str) {
//     let mostFrequent = "";
//     let maxCount = 0;

//     for (let i = 0; i < str.length; i++) {
//         let count = 0;

//         for (let j = 0; j < str.length; j++) {
//             if (str[i] === str[j]) {
//                 count++;
//             }
//         }

//         if (count > maxCount) {
//             maxCount = count;
//             mostFrequent = str[i];
//         }
//     }

//     return mostFrequent;
// }

// console.log(mostFrequentCharacter("programming"));


// Check if Two Strings Are Anagrams (Without Sorting) 


// function areAnagrams(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     const frequency = new Array(26).fill(0);

//     for (let i = 0; i < str1.length; i++) {
//         frequency[str1.charCodeAt(i) - 97]++;
//         frequency[str2.charCodeAt(i) - 97]--;
//     }

//     for (let i = 0; i < frequency.length; i++) {
//         if (frequency[i] !== 0) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(areAnagrams("listen", "silent"));


//  Find the First Non-Repeating Character 

// function firstNonRepeatingCharacter(str) {
//     const frequency = new Array(26).fill(0);

//     for (let i = 0; i < str.length; i++) {
//         const index = str.charCodeAt(i) - 97;
//         frequency[index]++;
//     }

//     for (let i = 0; i < str.length; i++) {
//         const index = str.charCodeAt(i) - 97;

//         if (frequency[index] === 1) {
//             return str[i];
//         }
//     }

//     return null;
// }

// console.log(firstNonRepeatingCharacter("swiss"));