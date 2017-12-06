
// 1. // string-interpolation ( from Es6 )
let comp = "sapient";
let tnr = {
    name: 'Nag',
    sub: '.js'
}
//let dynamicString="The trainer "+tnr.name +" killing "+tnr.sub +" in "+comp;
let dynamicString = `The trainer ${tnr.name} teaching ${tnr.sub} in ${comp}`;

// let htmlTeplate='<div>'+
//                     '<ul></ul>'+
//                 '</div>'
let htmlTemplate = `

    <div>
        <ul>
            <li>${comp}</li>
        </ul>
    </div>

`;

//---------------------------------------------------------------

// 2. object-literal enhancements( from Es6 )


let name = "Nag";
let age = 33;


// es5
let personEs5 = {
    name: name,
    age: age,
    'home-address': 'chennai',
    sayName: function () {
        //..
    }
};
// or
let dynamicField = "vacation";  // home | office | vacation
let personEs6 = {
    name,
    age,
    [dynamicField + "-address"]: 'chennai',
    sayName() {
        //..
    },
    ['my Method']() {
        //..
    }
};
personEs6['my Method']();

//---------------------------------------------------------------


// 3. destructuring

// a. array destructuring

let salaries = [100, 200, 300];

// -> manual destructuring

// let min=salaries[0];
// let avg=salaries[1];
// let max=salaries[2];

// -> destructuring

// let [min,avg,max]=salaries;
// let [min,,max]=salaries;
// let [min,avg,max,v]=salaries;
// let [min, avg, max, v = 400] = salaries;

// let min, avg, max;
// [min, avg, max] = salaries;

//------------------------------------------------

// b. object destructuring

let person = {
    pName: 'Nag',
    pAge: 33
};

// -> manual destructuring

// let pName=person.pName;
// let pAge=person.pAge;

// -> destructuring

// let {pName:pName,pAge:pAge}=person;
// let {pName,pAge}=person;

// let {pName:myName,pAge:myAge}=person;

// let myName;
// let myAge;

// ({pName:myName,pAge:myAge}=person);


//------------------------------------------------



// 4. spread operator



    function func(a,b,c,d){
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
    }

    let nums=[10,20,30,40];

    // func(nums[0],nums[1],nums[2],nums[3]); // naive
    func(...nums); // naive

    //------------------------------------

    let a=[1,2,3];
    let b=[7,8,9];
    let str='nag';
    let c=[...a,4,5,6,...b,...str];


    //--------------------------------------
