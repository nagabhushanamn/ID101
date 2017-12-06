

// how to create function in .js?

/*

    2 ways
    -------
    1. function declaration

        --> Named function
        --> Function-obj created at context-creation phase
        --> Also hoisted with func-obj.

        when to use?
        --> by default, if that context require function at any condition

    2. function expression

        --> Anonmous function
        --> Function-obj created at context-execution phase
        --> we can invoke after expression

        when to use?
        --> on condition/input , to create function dynamically

*/

//--------------------------------------------

// 1. function declaration

// console.log(add(12,13));

// function add(n1,n2){
//     return n1+n2;
// }

//console.log(add(12,13));

//-----------------------------------------------

// 2. function expression
// console.log(add(12,13)); // error
// var add=function(n1,n2){return n1+n2};
// console.log(add(12,13));

//-------------------------------------------------

// e.g

let isAdmin;
function login() {
    isAdmin = true
}
// login();
let action;
if (isAdmin) {
    action = function () { console.log('Admin action..') }
} else {
    action = function () { console.log('Guest action..') }
}

// action();

//--------------------------------------------------------


// a. function is an object

// function sayHello(){
//     console.log('Hello...');
// }

// let sayHello=function(){console.log('Hello')};

// let greet=sayHello;
// greet();

//--------------------------------------------------------

// b. function as argument

// function greet(f){
//     if(f){
//         f();return;
//     }
//     console.log('Hello..');
// }
// greet();
// greet(function(){console.log('Ola...')});

//e.g


// let nums=[1,3,5,7,9,2,4,6,8,10];
// //nums.sort();
// nums.sort(function(a,b){
//     return a-b;
// });


//-------------------------------------------


/*

    falsy values

    ==> false,0,"",undefined,null,NAN

    ref :https://dorey.github.io/JavaScript-Equality-Table/

*/

//-------------------------------------------

// c. function as return-value

// function teach(){
//     console.log('teaching...');
//     let learn=function(){console.log('learning...')};
//     //learn();
//     return learn;
// }

// let learnFunc=teach();
// learnFunc();
// learnFunc();

//-------------------------------------------

// d. partial-function  / function currying


// function makeAdder(n1){
//     return function(n2){
//         return n1+n2;
//     }
// }

// let add10=makeAdder(10);
// console.log(add10(30));
// console.log(add10(40));

//-------------------------------------------

// advanced syntax on function


// function reflect(){
//     console.dir(arguments);
//     return arguments[0];
// }
// console.log(reflect(12,13));


// e.g

// function sum(){
//     let r=0,
//         len=arguments.length,
//         i=0;
//     while(i<len){
//         r+=arguments[i];
//         i++;
//     }    
//     return r;
// }

//--------------------------------

// Quiz
// function getParty(){
//     return "No Party";
// }

// function getParty(pay) {
//     if (arguments.length === 0) {
//         return "No Party";
//     }
//     return "Sat.. Party";
// }
// console.log(getParty(1000));

//--------------------------------


//

// function f1(a, b) {

//     //if (!a) a = 1;
//     //if (!b) b = 2;

//     a = a || 1;
//     b = b || 2;

//     console.log(a);
//     console.log(b);
// }

// f1(undefined, 20);

//-------------------------------------


// Es6

// function with default-params

// function f1(a = 1, c, b = 2) {
//     console.log(a);
//     console.log(b);
// }

// f1(undefined, 20);

//-------------------------------------

// Function with Rest param

function f1(a,b,...rest){
    console.log(a);
    console.log(b);
    console.log(rest);
    console.log(Array.isArray(rest));
}

f1(1,2,3,4,5,6,7,8,9);

//-------------------------------------


