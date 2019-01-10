/*
***********************
Challenge Assessment 1
***********************

What is a palindrome?  A palindrome is a word that is spelled the same way, 
both forwards and backwards (i.e. bob, level, tacocat, racecar, etc.).  
Notice that each of these words have the same spelling if you reversed the word.
Using only JavaScript, create a prompt telling the user, "Enter a word to see if it is a palindrome", 
then create a way to check if the word is in fact a palindrome.  
If it is, have JavaScript console.log that their word is a palindrome; if it is not, have JavaScript console.log the opposite.
*/

// let response = "race car race car";
// let responseLower = response.toLowerCase().replace(/ /g, "");
// let reverseResponse = responseLower.split("").reverse().join("");

// if (responseLower === reverseResponse) {
//     console.log("Your word is a palindrome");
// } else {
//     console.log("Not a Palindrome");
// }



//With one less variable**************

// let response = "race bar";
// let responseLower = response.toLowerCase().replace(/ /g, "").split("").reverse().join("");

// if (response.replace(/ /g, "") === responseLower) {
//     console.log("Your word is a palindrome");

// } else {
//     console.log("Not a Palindrome");
// }



//prompts and Alerts from HTML document*********

// let response = prompt("Enter a word to check if it is a palindrom");
// let responseLower = response.toLowerCase().replace(/ /g, "");
// let reverseResponse = responseLower.split("").reverse().join("");

// if (responseLower === reverseResponse) {
//     alert(`${response} : is palindrome`);
// } else {
//     alert(`${response} : is !Palindrome`);
// }


////////Function that prompts the user onClick.

function myFunction() {
    let re = /[\W_]/g; // Will take car of spaces and puncuation
    let answer = prompt("Enter a word to check if it is a palindrome"); //promts the user, saves the repsonse to a variable
    let answerLower = answer.toLowerCase().replace(re, "");//takes the response and lower cases it
    let reverseAnswer = answerLower.split("").reverse().join(""); //takes lowercase respoinse and turns it into an array, reverses the array, and joins it back together into a string

    let el = document.getElementById("answer"); //targest element with an id of answer

    if (answerLower === reverseAnswer) {    // checks to see if answerLower is the same as reverseAnswer
        el.textContent = `${answer} : Palindrome!`; //changes text content to show that user response was a palindrome
    } else {
        el.textContent = `${answer} : Is !Palindrome`; //changes text content to show that user response is not a palindrome
    }
} 

// console.log("it");


//Prompts and changes text on WebPage**************

// var answer = prompt("Enter a word to check if it is a palindrome");
// let answerLower = answer.toLowerCase().replace(/ /g, "");
// let reverseAnswer = answerLower.split("").reverse().join("");

// let el = document.getElementById("answer");

// if (answerLower === reverseAnswer) {
//     el.textContent = `${answer} : Is a palindrome!`;
// } else {
//     el.textContent = `${answer} : Is  !Palindrome`;
// }





// //Using a function**************

// let answer = prompt("Enter a word to check if it is a palindrome");
// let el = document.getElementById("answer");
// function reverseString(ans) {
//     let answerLower = answer.toLowerCase().replace(/ /g, "");
//     let reverseAnswer = answerLower.split("").reverse().join("");
//     if (answerLower === reverseAnswer) {
//         el.textContent = `${answer} : Is a palindrome!`
//         return el;
//     } else {
//         el.textContent = `${answer} : Is  !Palindrome`
//         return el;
//     }
// }
// reverseString(answer);


//USING A FOR LOOP TO REVERSE STRING???

// let key = "racecar";
// let reversedKey = reverseKey(key);
// function reverseKey(response) {
//     let newStr = "";
//     for (i = key.length - 1; i >= 0; i--) {
//         newStr += response[i];  
//     }
//     return newStr;
// }
// if (key === reversedKey) {
//     console.log("Is palindrome");
// } else {
//     console.log("Is !Palindrom");
// }

/****************************** 
Palindrome as a parameter
*******************************/
// var string = "race car race car";

// function isPalindrome(str) {
//     let re = /[\W_]/g;
//     let stringLower = str.toLowerCase().replace(re, "");
//     let reverseString = stringLower.split("").reverse().join("");

//     // console.log(stringLower);
//     // console.log(reverseString);

//     if (stringLower === reverseString) {
//         console.log("Palindrome");
//     } else {
//         console.log("!Palindrome");
//     }
// }
// isPalindrome(string);










