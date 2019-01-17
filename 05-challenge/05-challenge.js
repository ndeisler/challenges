// ***********************
// Challenge Assessment 5
// ***********************

// Here, you will be using HTML, CSS, and JS, where you will build a calculator that can take in two values and,
// based on the button click, you would be able to display the results below.




function add() {
    let numOne = document.getElementById("input1").value;
    let numTwo = document.getElementById("input2").value;
    let p = document.getElementById("result");

    let sum = Number(numOne) + Number(numTwo);

    p.innerHTML = sum;
    // h2.appendChild(p);
}

function sub() {
    let numOne = document.getElementById("input1").value;
    let numTwo = document.getElementById("input2").value;
    let p = document.getElementById("result");

    let sub = Number(numOne) - Number(numTwo);

    p.innerHTML = sub;
}

function mult() {
    let numOne = document.getElementById("input1").value;
    let numTwo = document.getElementById("input2").value;
    let p = document.getElementById("result");

    let mult = Number(numOne) * Number(numTwo);

    p.innerHTML = mult;

}

function divide() {
    let numOne = document.getElementById("input1").value;
    let numTwo = document.getElementById("input2").value;
    let p = document.getElementById("result");

    let divide = Number(numOne) / Number(numTwo);

    p.innerHTML = divide;
}

function remainder() {
    let numOne = document.getElementById("input1").value;
    let numTwo = document.getElementById("input2").value;
    let p = document.getElementById("result");

    let remainder = Number(numOne) % Number(numTwo);

    p.innerHTML = remainder;
}

// var add = document.getElementById("add");
// var v1 = document.getElementById("#input1").value;
// var v2 = document.getElementById("#input2").value;
// let p = document.getElementById("result");
// function displayResults() {
//     p.innerHTML = performOperation();
// }

// function performOperation() {
//     if (add.clicked === true) {
//         return Number(v1) + Number(v2);
//     }
// }

// add.addEventListener("click", performOperation());

