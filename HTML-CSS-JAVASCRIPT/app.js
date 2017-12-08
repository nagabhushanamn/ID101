


// Using plain-JS
// //-------------------

// document.addEventListener('DOMContentLoaded', function (e) {

//     // using DOM API

//     // step-1:Query DOM elements ( by default ,  DOM element is an EventEmitter)

//     let hideBtn = document.querySelector('.btn-danger');
//     let showBtn = document.querySelector('.btn-primary');
//     let greetBtn = document.querySelector('.greet');
//     let box = document.querySelector('.well');

//     // step-2:bind Event-Listeners

//     hideBtn.addEventListener('click', function (e) {
//         box.style.display = 'none';
//     });

//     showBtn.addEventListener('click', function (e) {
//         box.style.display = '';
//     });
//     greetBtn.addEventListener('click', function (e) {
//         let date = new Date();
//         let hour = date.getHours();
//         if (hour < 12) {
//             box.innerText = "Good Morning";
//         } else {
//             box.innerText = "Go eat";
//         }
//     });

//     //------------------------------------------------------
//     let catBtnStart = document.querySelector('.cat-btn-start');
//     let catBtnStop = document.querySelector('.cat-btn-stop');
//     let catImage = document.querySelector('#catImg');
//     let cats = ['images/cat-1.jpg', 'images/cat-2.jpg', 'images/cat-3.jpg'];
//     let interval;
//     catBtnStart.addEventListener('click', function (e) {
//         let idx = 0;
//         interval=setInterval(function (e) {
//             if (idx < cats.length) {
//                 catImage.src = cats[idx];
//                 idx++;
//                 if (idx === cats.length) {
//                     idx = 0;
//                 }
//             }
//         }, 1000);
//     })
//     catBtnStop.addEventListener('click',function(){
//         clearInterval(interval);
//     });

// })



//------------------------------------------------------------------

// syntax to use jQuery

/*
    $(selector).action1().action2()
*/


$(document).ready(function () {
    let box = $('.well');
    $('.btn-danger').click(function (e) {
        box.hide();
    });
    $('.btn-primary').click(function (e) {
        box.show();
    });
    $('.greet').click(function (e) {
        let date = new Date();
        let hour = date.getHours();
        console.log(hour);
        if (hour < 12) {
            box.text('come office');
        }
        if (hour >= 17) {
            box.text('go home');
        }
    });
});

//----------------------------------------------