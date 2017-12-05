
function Person(name,age){
    this.name=name;
    this.age=age;
    let self=this;
    window.setInterval(function(){
        self.age++;
        console.log(self.age);
    },1000)
}

new Person("Ria",0);