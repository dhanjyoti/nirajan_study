// Normal Function

function myFunc(a, b){
    const multi = a * b 
    return multi
}

// console.log(myFunc(30, 40))


// Arrow Function
let newFunc = (c, d) => {
    return c > d
}
// console.log(newFunc(50,80));

// Constructor Function : First letter of the function is capital
function MyFunc(e, d, f){
    return (e+d)*f;
}
let theFunction = MyFunc(3, 5, 4);
// console.log(theFunction)

// JavaScript has 8 Datatypes
// String
// Number
// Bigint 
// Boolean
// Undefined
// Null
// Symbol
// Object

// restricted naming convention in javascript
let nam = "nirajan";
// console.log(typeof nam)

let age = 49;
// console.log(typeof age)

let num = 0 > 1; // <, >, ==, ===
// console.log(typeof num)

let human = null;
// console.log(human)

let classroom = {           // always in curly brackets, it has key & value pair
    teacher: 5,
    students: 50,
    classes: 3
}
console.log(classroom)  // all
console.log(classroom.students)
console.log(classroom.teacher)
console.log(classroom.classes)

