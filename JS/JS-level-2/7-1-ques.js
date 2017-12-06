class A {
    constructor() {
        console.log('A-constructor');
    }
    m1() {

    }
}
class B extends A {
    constructor() {
        super();
        console.log('B-constructor');
        this.prop1="";
    }
    m2() {

    }
}
let b = new B();