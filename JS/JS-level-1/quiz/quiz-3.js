
let i = 100; // context data
this.i = 200; // obj data

function func() {
    console.log(i);
    console.log(this.i);
}
func();