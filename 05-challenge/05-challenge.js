// ***********************
// Challenge Assessment 5
// ***********************

// Here, you will be using HTML, CSS, and JS, where you will build a calculator that can take in two values and,
// based on the button click, you would be able to display the results below.



let answer = document.getElementById("answer");

function add() {
    let numberOne = document.getElementById("input1").value;
    let numberTwo = document.getElementById("input2").value;
    let sum = Number(numberOne) + Number(numberTwo);
    let answer = document.getElementById("answer");
    answer.innerHTML = sum;
    return answer;
    
}

