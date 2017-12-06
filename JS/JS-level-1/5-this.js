

// why we need 'this' keyword ?

//let pName="Global";
// let person = {
//     pName: 'Nag',
//     sayName: function () {
//         let pName = "Local";
//         //console.log('im '+pName); // context's hierarchy data
//         console.log('im ' + person.pName); // obj's data
//         console.log('im ' + this.pName); //  context's owner data
//     }
// };
// // person.sayName();
// let nagPerson = person;
// // person = { pName: 'Sapient' };
// nagPerson.sayName();

//---------------------------------------------


// const p={name:'Nag'};
// p.name="New nag";

//--------------------------------------------------------


/*

    function-binding
    -----------------

    a. static
    b. dynamic

*/


// a. static function-binding

// let p1={name:'Nag',sayName:function(){console.log('im '+this.name)}};
// let p2={name:'Ria',sayName:function(){console.log('im '+this.name)}};

// function sayNameForAll(){
//     console.dir(this);
//     console.log('im '+this.name);
// }

// let p1={name:'Nag',sayName:sayNameForAll};
// let p2={name:'Ria',sayName:sayNameForAll};


// sayNameForAll(); // im ??  // function-invocation  ( this ==> global-obj )
// p1.sayName(); // im Nag    // method-invocation    ( this ==> invoker-obj )
// p2.sayName(); // im Ria

//--------------------------------------------------------


// b. dynamic function-binding

// // from third-party
// let greetLib = {
//     sayName: function (message,from) {
//         console.log(message+ ' im ' + this.name+" : "+from);
//     }
// };
// // greetLib.sayName();  ??



// //way-1  : 'call' method
// let p = { name: 'Nag' };
// // greetLib.sayName.call(p,"Hi","Chennai");


// //way-2  : 'apply' method
// let e = { name: 'Sapient' };
// // greetLib.sayName.call(e,"Hey","Delhi");
// // greetLib.sayName.apply(e,["dude","delhi"]);


// //way-3: 'bind' method
// let nagPersonSayName=greetLib.sayName.bind(p,"Hi","chennai");
// nagPersonSayName();
// nagPersonSayName();


// let sapientEmpSayName=greetLib.sayName.bind(e);
// sapientEmpSayName('A',"delhi");
// sapientEmpSayName('B',"pondy");

//----------------------------------------------------------------



// self reference to child-context
//----------------------------------

// let trainer = {
//     name: 'Nag',
//     doTeach: function () {
//         console.dir(this);
//         console.log(this.name + " teaching .js");
//         let notes = ".js-notes";
//         let self=this;
//         let doLearn = function () {
//             console.dir(this);
//             console.log(
//                 this.name +' learning '+notes + ' from ' + self.name
//             );
//         }
//         //doLearn();
//         let emp={name:'sapient'};
//         doLearn.call(emp);
//     }
// };
// trainer.doTeach();
// let newTrainer={name:'subbu'};
// trainer.doTeach.call(newTrainer);

//-----------------------------------------------------



// Constructor-Function / Class   ( Es5 )


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayName = function () {
//         console.log('im ' + this.name);
//     }
//     this.sayAge = function () {
//         console.log('im ' + this.age + " old");
//     }
// }

// let p1=new Person('Nag',33);  // constructor-invocation ( this ==> new-obj)
// let p2=new Person('Ria',2);


//-------------------------------------------------



// in .js-lang , we can invoke func in 4 ways

/*

    a. function-invocation  ( this ==> global-obj )
    b. static function-binding / method-invocation  ( this ==> invoker-obj )
    c. dynamic function-binding / call/apply/bind invocation ( this ==> arg-obj)
    d. constructor invocation ( this ==> new-obj)

*/


//----------------------------------------------------------

// final Ex

function sessionStart() {
    function Employee(name) {
        this.name = name;
    }
    function Trainer(name) {
        this.name = name;
        this.doTeach = function () {
            console.log(this.name + " teaching ");
            let notes = "sub-notes";
            let self=this;
            let doLearn = function () {
                console.log(this.name+' learning with ' + notes + " from "+self.name);
            }
            return doLearn;
        }
    }
    let e1 = new Employee('A');
    let e2 = new Employee('B');
    let tnr = new Trainer('Nag');  // constructor-invocation
    let doLearn = tnr.doTeach();   // method-invocation
    doLearn.call(e1);   // call/apply/bind invocation
    doLearn.call(e2);
}
sessionStart();  // function-invocation