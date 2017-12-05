

var myFunctions = [];
function init() {
    function make(i) {
        return function () { return i; };
    }
    for (var i = 0; i < 2; i++) {
        var func = make(i);  // make(i)   ==> func
        myFunctions.push(func);
    }
}
init();
//-------------------------------------

console.log(myFunctions[0]()); // 
console.log(myFunctions[1]()); // 