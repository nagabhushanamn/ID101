

// syntax

// let getPrice=function(){
//     return 100.00;
// }

// let getPrice = () => { return 100.00 };
// let getPrice = () => 100.00;
// let getPrice = () => 100.00 + 200.00;
// let getPrice = (count) => (100.00 + 200.00) * count;
// let getPrice = count => (100.00 + 200.00) * count;
// let getPrice = (count, gst) => (100.00 + 200.00) * count + gst;
// let getPrice = (count, gst) => {
//     let cost = (100.00 + 200.00) * count;
//     let total = cost + gst;
//     return total;
// };

//-----------------------------------------------------

// 1. for compact function-args


let nums = [1, 3, 5, 7, 2, 4, 6, 8, 10];
// nums.sort();

// nums.sort(function (a, b) {
//     return a - b;
// });

// nums.sort((a,b)=>a-b);

//let evens = nums.filter(n => n % 2 === 0);

//-----------------------------------------------------

// 2. to captue 'this' while creating function ( imp )


/*


    problems with regular-function

    ==> by default  bound to global-obj.
    ==> we can bind to any obj dunamically with call/apply/bind


    advantages of arrow-function:

    ==> always bound to creator-obj, we cannot bind to other-obj
    

*/


// let tnr = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");
//         // let askQues = function (q) {
//         //     console.log(`${this.name} answering ${q}`);
//         // }
//         // or
//         let askQues=q=>{console.log(`${this.name} answering ${q}`);}
//         return askQues;
//     }
// }

// let askQues = tnr.doTeach();
// console.log('--------------------');
// askQues("Q1");
// let newTnr = { name: 'Kannan' };
// askQues.call(newTnr, "Q2");

//----------------------------------------------------


// Quiz


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log("invoice-" + this.num + " processed");
//     }
// };

//

// let invoice = {
//     num: 123,
//     process: () => {
//         console.log("invoice-" + this.num + " processed");
//     }
// };

//

let invoice = {
    num: 123,
    process: function () {
        console.dir(this);
        console.log("invoice-" + this.num + " processed partially");
        return ()=>{
            console.dir(this);
            console.log("invoice-" + this.num + " processed completly");
        }
    }
};

let p=invoice.process();
p();

//----------------------------------

function Person(name,age){
    this.name=name;
    this.age=age;
    let ageInc=()=>{
        this.age++;
        console.log(`${this.name} --> ${this.age}`);
    }
    window.setInterval(ageInc,1000);
}

new Person('Ria',0);


//---------------------------------




