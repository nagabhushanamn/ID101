"use strict"

// let person={
//     name:'Nag',
//     age:32
// };
// Object.defineProperty(person,'name',
//                       {
//                         configurable:false,
//                         writable:false,
//                         enumerable:false}
//                     );


// delete person.name;
// person.name="pagal";
// for(let p in person){
//     console.log(person[p]);
// }

//------------------------------------------------


// let person = {
//     name: 'Nag',
//     age: 32
// };


//Object.preventExtensions(person);
//Object.seal(person);
// Object.freeze(person);

// person.newProp="bla bla";
// delete person.name;
// person.name = "";


//------------------------------------------------



let person = {
    _name: 'Nag',  // data property
    _age: 32,
    set name(name) {  // accessor property
        if (name) {
            this._name = name;
        } else {
            console.log('invalid Name');
        }
    },
    get name() {
        return this._name;
    },
    set age(age) {
        if (age > 0) {
            this._age = age;
        }
    },
    get age() {
        return this._age;
    }
};


person.name = "New Nag"; // write / set
console.log(person.name); // read / get
