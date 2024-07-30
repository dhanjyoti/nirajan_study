// Operators

// Assignment Operator "="
// let a = 200;

// Addition Operator "+"
// Multiplication Operator "*"

// Comparison Operator ">"

// let b = 30 >20;
// let b = 30 < 20;

// == 	equal to    -   let c = 30 == 30;  let c = 30 == "30"
// === 	equal value and equal type      let c = 30 === "30"
// != 	not equal                   let c = 30 != "20"
// !== 	not equal value or not equal type   let c = 30 !== "30"
// > 	greater than
// < 	less than
// >= 	greater than or equal to
// <= 	less than or equal to
// ? 	ternary operator
// !    not

// Conditional Operator (if or else or else if)

// let a = 20;
// let b = "20";

// if(a === b){
//     console.log("true")
// } else {
//     console.log("false")
// }

function percentage(a, b, c){
    let total = a+b+c;
    return (total*100)/300;
}
let nirajan = percentage(89, 79, 97);
let sweta = percentage(76, 92, 81)

if(nirajan > sweta){
    console.log("nirajan percentage is higher");
} else {
    console.log("sweta percentage is higher")
}
