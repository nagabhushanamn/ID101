


// 1. simple / primitive types
//===============================

//--------------------------------------------

// a. string

var name = "Nag";
var selection = 'abc';

//--------------------------------------------

// b. number

var count = 10;
var cost = 12.12;

//--------------------------------------------

// c. boolean

var isFound = false;


//--------------------------------------------

// d. undefined

var v;

//---------------------------------------------




// 1. complex / reference types
//===============================

//---------------------------------------------
var config = new Object();

/*
    imp-note:
    by default, .js-object 
    
        - extensible(i.e can add more props dynamically) 
        - configurable ( i.e delete props if not required)


*/

config.url = "http://";
config.method = "GET";
config.myProp = "my-value";
config.success = function () {
    console.log('print result...');
};
delete config.myProp;

//---------------------------------------------

// Literal-style objects

//---------------------------------------------

//#1

// var newConfig=new Object();  // create obj-wrapper
// newConfig.url="http://";
// newConfig.method="GET";
// newConfig.myProp="my-value";
// newConfig.success=function(){
//     console.log('print result...');
// };

// or

// var newConfig={
//     url:"htp://",
//     method:'GET',
//     myProp:'my-valye',
//     success:function(){
//          console.log('print result...');
//     }
// };

//---------------------------------------------

// #2

// var menu=new Array("veg","non-veg");
// menu.push('birynai');

// or

var menu = ["veg", "non-veg", "biryani"];

//---------------------------------------------

// #3

var re = new RegExp('\\d{10}');
// var ssn=new RegExp('\\d{3}-\\d{2}-\\d{4}');   // 231-23-23123


// or

var ssn = /\d{3}-\d{2}-\d{4}/;


//---------------------------------------------

// #4

/*
    imp-note : by default , every function is an object
*/


// var add=new Function('n1','n2','var r=n1+n2;return r;');

// or

// function add(n1,n2){
//     var r=n1+n2;
//     return r;
// }

//---------------------------------------------------------

// how to access obj's properties ?

/*
    2 ways

    '.' notation  if valid identifier property
    '[]' notation if invalid identifier property i.e if propertyhas '-'

*/

var person = {
    name: 'Nag',
    age: 33,
    'home-address': 'chennai'
};

// person.name="Nag N";  // write
// console.log(person.name); // read

// person['name']="Nag N";
// console.log(person['name']);


// person['home-address']="delhi";
// console.log(person['home-address']);

var propName = 'age';
console.log(person[propName]);


//----------------------------------------------------