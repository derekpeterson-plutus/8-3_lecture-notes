/**
 * EXERCISE 1
 *
 * Get the sum of the elements of two arrays.
 * Each array includes only integer numbers.
 *
 * Example output:
 * 276 + 351 = 627
 */

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351

function sumArray(arr_1, arr_2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr_1.length; i++) {
        sum1 += arr_1[i]
    }
    for(let j = 0; j < arr_2.length; j++) {
        sum2 += arr_2[j]
    }
    return sum1 + sum2;
}
//console.log(sumArray(arr_1, arr_2));

/**
 * EXERCISE 2
 *
 * Using a for loop print all even numbers up to and including n.
 * Don’t include 0.
 *
 *  Print each item on a new line
 *
 * Example output:
 * 2
 * 4
 * 6
 * 8
 * 10
 * 12
 * 14
 * 16
 * 18
 * 20
 * 22
 */

let n1 = 22;
    
for (let i = 2; i <= n1; i += 2) {
    //console.log(i)
} 


/**
 * EXERCISE 3
 *
 * Using a for loop output the elements in reverse order
 * with each item on a new line
 *
 * Example output:
 * true
 * 3
 * be
 * false
 * cannot
 * true
 * 9
 * what
 * 43
 *
 */

let arr = [43, 'what', 9, true, 'cannot', false, 'be', 3, true];

for (let i = arr.length - 1; i >= 0; i--) {
    //console.log(arr[i])
};


/**
 * EXERCISE 4
 *
 * Given two arrays of integers, add up each element in the same position
 * and create a new array containing the sum of each pair.
 * Assume both arrays are of the same length.
 *
 * Example output:
 * [12, 7, 16]
 *
 */

let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];

let sumArr = [];
for (let i = 0; i < arr_3.length; i++) {
    sumArr.push(arr_3[i] + arr_4[i])
}
//console.log(sumArr)

/**
 * EXERCISE 5
 * Given a string change the every second letter to an uppercase ‘Z’.
 * Assume there are no spaces.
 *
 * Example output:
 * jZvZsZrZpZ OR each letter on a new line
 *
 * HINT: You can use  if((i+1) % 2 == 0) to check for even indexes
 */

// let str1 = 'javascript';
// let newStr1 = str1.split('')
// for (let i = 0; i < newStr1.length; i++) {

//   if ((i+1)%2 == 0) console.log(newStr1.replace(/i/g, 'Z'))

// }


/**
 * EXERCISE 6
 * Check if a string contains the letter “y”. Print “yes” if it does and “no”
 * if it does not.
 *
 * Example output:
 * yes
 */

let str2 = `don't know why`;

function lookForY(str2) {
 let string = str2.split('')
 console.log(string)
    for (let i = 0; i < string.length; i++) {
        return string[i] === 'y' ? 'no' : 'yes'
    }
}
//console.log(lookForY(str2))


/**
 * EXERCISE 7
 *
 * Given a number n, calculate the factorial of the number
 *
 * EXAMPLE input: 4, output: 24
 */

let n2 = 4; //  4 * 3 * 2 * 1 = 24

function factorial(n2) {

    if (n2 === 0 || n2 === 1) return 1;
    
    for (let i = n2 - 1; i >= 1; i--) {
        n2 *= i;
    }
    return n2;
}
//console.log(factorial(n2));

/**
 * EXERCISE 8
 *
 * Write a program that will allow someone to guess a four digit pin
 * exactly 4 times. If the user guesses the number correctly.
 * It prints “That was correct!”
 *
 * Otherwise it will print “Sorry that was wrong.”
 *
 * Program stops after the 4th attempt of if they got it right.
 *
 * Example output:
 * Please make your guess:
 * 4544
 * Sorry that was wrong.
 * Please make your guess:
 * 4444
 * Sorry that was wrong.
 * Please make your guess:
 * 0704
 * That was correct!
 */

let pin = 0704;


/** EXERCISE 9
 *
 * Write a program that will check if two strings are palindromes.
 * A palindrome is a word that spells the same forward and backward.
 * Palindrome: a word, phrase, or sequence that reads the same backward as
 * forward, e.g., madam or nurses run.
 *
 * Example output:
 * string1 palindrome?: Yes
 * string2 palindrome?: No
 */

let str3 = 'racecar';
let str4 = 'Java';

function isPalindrome(str3, str4) {
    
    let allLowerCase1 = str3.toLowerCase();

    let allLowerCase2 = str4.toLowerCase();

    let reversedStr3 = allLowerCase1.split('').reverse().join('');
    //console.log(reversedStr3)
    let reversedStr4 = allLowerCase2.split('').reverse().join('');
    //console.log(reversedStr4)

   if (reversedStr3 === str3) { console.log('Yes') } else {console.log('No')}
   if (reversedStr4 === str4) {consolog('Yes')} else {console.log('No')}    

}
//isPalindrome(str3, str4)


/**
 * EXERCISE 10
 *
 * Write a program that finds the summation of every number from 1 to num.
 * The number will always be a positive integer greater than 0.
 *
 * EXAMPLE:
 * input: 2, 8
 * output: 36
 *
 * 1 + 2 = 3
 * 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36
 */

let num1 = 2;
let num2 = 8;

function sumAllNums(num1, num2) {
  let sum1 = 0, sum2 = 0;
    for(let i = 1; i <= num1; i++) {
        sum1 += i;
    }
    for(let j = 1; j <= num2; j++) {
        sum2 += j;
    }
  console.log(sum1, sum2);
}
//sumAllNums(num1, num2);


/**
 * EXERCISE 11
 *
 * Write a FizzBuzz program that outputs numbers from 1 to 100. But for multiples of 3, print Fizz instead of the number and for the multiples of 5, print Buzz. For numbers which are multiples of both 3 and 5 print, FizzBuzz.
 *
 * EXAMPLE:
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * Fizz
 * 7
 * 8
 * Fizz
 * Buzz
 * 11
 * Fizz
 * 13
 * 14
 * FizzBuzz
 * 16
 * ...
 * 97
 * 98
 * Fizz
 * Buzz
 */

// The first method to solve this problem:
// function fizzBuzz() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 15 === 0) { console.log('FizzBuzz') }
//     else if (i % 3 === 0) { console.log('Fizz') }
//     else if (i % 5 === 0) { console.log('Buzz') }
//     else { console.log(i) }
//   }
// };   
fizzBuzz()

// The second method to solve this problem:
for(let i = 1; i <= 100; i++) {
  let printOut = "";
    if(i % 3 === 0) { printOut += "Fizz" }
    if(i % 5 ===0) { printOut += "Buzz" } 
    console.log(printOut || i)
}
