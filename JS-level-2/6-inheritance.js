
// Es5
function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.sayName=function(){
    //     console.log('im '+this.name);
    // }
    //  this.sayAge=function(){
    //     console.log('im '+this.age +" yrs old");
    // }
}
Person.prototype.sayName = function () {
    console.log('im ' + this.name);
}
Person.prototype.sayAge = function () {
    console.log('im ' + this.age + " yrs old");
}
// let p1 = new Person("Nag", 33);
// let p2 = new Person("Ria", 2);


//-------------------------------------------------

function Employee(name, age, salary) {
    //this.name=name;
    //this.age=age;
    Person.call(this,name,age);
    this.salary = salary;
}
Employee.prototype = new Person(); // worst
// Employee.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }
// Employee.prototype.sayAge = function () {
//     console.log('im ' + this.age + " yrs old");
// }
Employee.prototype.saySalary = function () {
    console.log('i get ' + this.salary + " only");
}

//-------------------------------------------------

let emp = new Employee('Nag', 33, 1000)

//-------------------------------------------------