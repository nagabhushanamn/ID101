


// function foo(b) {
//   var a = 10;
//   return a + b + 11;
// }

// function bar(x) {
//   var y = 3;
//   return foo(x * y);
// }

// console.log(bar(7)); //returns 42

//-------------------------------------------------------

function foo() { }
function bar() { foo(); }
function baz() { bar() }
baz();

//---------------------------------------------------------


// function foo(){throw new Error('oops')}
// function bar(){foo();}
// function baz(){bar()}
// baz();

//---------------------------------------------------------

// function foo(){
//     foo();
// }
// foo();

//---------------------------------------------------------

// function longRunning(){
//     var i=0;
//     while(i<5){
//         console.log('long.............');
//         i++;
//     }
// }
// function shortRunning(){
//     console.log('short...');
// }

// longRunning();
// shortRunning();


//---------------------------------------------------------



// // on event , how .js functions are running ?

// console.log('start...');

// // document.querySelector('.btn-success')
// // .addEventListener('click',function vegHandler(e){
// //     console.log('handling event on .veg elements');
// // });
// // or
// $.on('.btn-success', 'click', function vegHandler(e) {
//     console.log('handling event on .veg elements');
// });


// // document.querySelector('.btn-danger')
// // .addEventListener('click',function nonVegHandler(e){
// //     console.log('handling event on .nonveg elements');
// // });
// // or
// $.on('.btn-danger', 'click', function nonVegHandler(e) {
//     console.log('handling event on .non-veg elements');
// });

// console.log('cont.. with other work..');

// function longRunning(){
//     var i=0;
//     while(i<5){
//         console.log('long.............');
//         i++;
//     }
// }
// longRunning();


//---------------------------------------------------------


// console.log('start...');

// setTimeout(function timeout(){
//     console.log('after timeout....');
// },1000);

// console.log('cont with other work.');
// function longRunning(){
//     var i=0;
//     while(i<5){
//         console.log('long.............');
//         i++;
//     }
// }
// longRunning();


//------------------------------------------


function doTraining() {
    console.log('tng...');
    setTimeout(function () {
        console.log('TOD...');
    }, 5000);
    var i = 0;
    while (i < 5) {
        console.log('long.............');
        i++;
    }
}

doTraining();
