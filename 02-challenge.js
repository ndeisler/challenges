// ***********************
// Challenge Assessment 2
// ***********************

// Using JS only, take an array of numbers (i.e. an array that lists numbers between 1 and 10).  
// Create two arrays from this original one, where one array list all of the even numbers, and 
// the second lists all of the odd.
// Example:
// Input:
// originalArray = [1,2,3,4];
// Output:
// evenArray = [2,4];
// oddArray = [1,3];

let numbers = [4, 6, 5, 8, 6, 2, 7, 3, 9, 4, 7, 10, 2, 1, 1];
let oddNumbers = [];
let evenNumbers = [];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    } 
    else if ((numbers[i] - 1) % 2 === 0) {
        oddNumbers.push(numbers[i]);
    }
}
console.log(numbers);
console.log(evenNumbers);
console.log(oddNumbers);
