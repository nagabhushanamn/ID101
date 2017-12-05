
// closure
//----------------

// function teach(sub) {
//     console.log('teaching ' + sub);
//     let notes = sub + "-notes";
//     let funStory="............";
//     function learn() {
//         console.log('learning with ' + notes);
//     }
//     //learn();
//     console.log('teaching ends');
//     return learn;
// }
// let learnFunc=teach('.js');  // teach-context created with args(sub) & local(notes)
// learnFunc();
// learnFunc();
// learnFunc();

// learnFunc=teach('.java');


/*
    
why we need closure ?

    --> to abstract public behav of any module
    --> while executing func async, to  access parent's scopes data
*/


// #1

/*

    e.g counter module

        count

        doCount()
        getCount()

*/


const counter=(function() {
    var count = 0; // private
    function doCount() {
        count += 1;
    }
    function getCount() {
        return count;
    }
    var o={
        inc:doCount,
        get:getCount
    };
    return o;
})();

