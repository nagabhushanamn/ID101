
// es6

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("Person::constructor");
    }
    sayName() {
        console.log('im ' + this.name);
    }
    sayAge() {
        console.log('im ' + this.age)
    }
}

// let p1 = new Person("Nag", 33);
// let p2 = new Person("Ria", 2);

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        console.log("Employee::constructor");
    }
    saySalary() {
        console.log('i get ' + this.salary + " only..");
    }
    getBonus() {
        return this.salary * 0.02;
    }
}

// let emp = new Employee('EMP', 25, 1000);


class Boss extends Employee {
    getBonus() {
        return (this.salary * 0.2)+ super.getBonus();
    }
}

let boss = new Boss('BOSS', 33, 1000);


//---------------------------------------

class Abc{
    static staMethod(){
        //...
    }
}
Abc.staVar=123;  // static variables



//---------------------------------------