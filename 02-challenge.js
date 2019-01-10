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

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
randomNumbers = [12, 5, 756, 234, 74, 23, 7, 30, 1, 43 , 232, 4];
function splitEvenOdd(arr) {
    let oddNumbers = [];
    let evenNumbers = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        } 
        else if ((arr[i] - 1) % 2 === 0) {
            oddNumbers.push(arr[i]);
        }
    }
    console.log(numbers);
    console.log(evenNumbers);
    console.log(oddNumbers);
}
splitEvenOdd(numbers);
splitEvenOdd(randomNumbers);


// let oddNumbers = [];
// let evenNumbers = [];
// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         evenNumbers.push(numbers[i]);
//     } 
//     else if ((numbers[i] - 1) % 2 === 0) {
//         oddNumbers.push(numbers[i]);
//     }
// }
// console.log(numbers);
// console.log(evenNumbers);
// console.log(oddNumbers);
