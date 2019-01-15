/************************
Challenge Assessment 3
***********************

Using only JS, take an object with various properties.  Then create a new object that switches the keys and values.
Example:
Input:
originalObject = {
 age: 19,
 name: 'Luke Skywalker',
 eyeColor: 'blue',
 isJedi: true
};
Output:
newObject = {
 19: 'age',
 'Luke Skywalker': 'name',
 blue: 'eyeColor',
 true: 'isJedi'
};*/

let person = {
    name: "Nathan Deisler",
    age: 30,
    occupation: "JavaScript",
    max_snatch: 175,
    eyeColor: "green"
}

function swap(obj) {
    let reversePerson = {};
    for (prop in obj) {
        // if (obj.hasOwnProperty(prop)) {
        //     reversePerson[obj[prop]] = prop;
        // }
        //             , becomes property of reversePerson and assigns obj prop to that property, reversing them
        reversePerson[obj[prop]] = prop;
    }
    console.log(reversePerson);
}
swap(person);


//OR

let newPerson = {
    name: "Calli",
    age: 27,
    occupation: "JavaScript",
    born: "Las Vegas",
    eyeColor: "brown"
}
let swapMe = (obj) => {
    let swapPerson = {};
    Object.keys(obj).forEach(i => {
        swapPerson[obj[i]] = i;
    })
    return swapPerson;
}

console.log(swapMe(newPerson));





