


//------------------------------------

// console.log(v);
// var v=12;

//------------------------------------

//var v = 12;

// function f11() {
//     console.log(v);
//     var v = 13;
// }
// function f12() {
//     var v;
//     console.log(v);
//     v = 13;
// }
// f1();  // f1-context

//------------------------------------

// Quiz

function f1(){
    function f2(){
        console.log(v);
    }
    //f2();  // f2-scope <--- f1-scope
    var v=12;
    //f2();
    return f2;
}

//var f2Func=f1();  // f1-scope  <-- global-scope
//f2Func(); // f2-context  <-- f1-context

//-------------------------------------------------
    // var v=100;
    // var v=200;
//-------------------------------------------------

    // var v=100;

    // if(true){
    //     var v=200;
    // }

    //console.log(v);

//-------------------------------------------------

// var tnr={
//     name:'Nag'
// };
// tnr=null
// tnr.name="Ria";

//-------------------------------------------------


/*

bad-things with 'var' keyword

    ==> variables always get hoisted
    ==> we can re-declare same variable multiples times within context
    ==> no block-scope to variables within context
    ==> we can mutate reference of any variable

solns : using 'let' & const keywords  ( from ES6 )    

*/

//-------------------------------------------------


// adv-1

// console.log(v);
// let v=12;

//-------------------------------------------------

//adv-2

// let v=12;
// let v=13;

//-------------------------------------------------

// adv-3

// let v=100;

// if(true){
//     let v=200;
// }

// console.log(v);

//-------------------------------------------------

// const tnr={
//     name:'Nag'
// };

// // tnr=null; // error

// tnr.name="New Tnr";

//------------------------------------------

// if(true){
//     let v=100;
// }

// console.log(v);

//---------------------------------------


let uiEle={
    font:"12px"
}

console.log(uiEle['font-size']);