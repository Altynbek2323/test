/*let n1 = 10;
let n2 = 5;
function res(x,y) {
    if(x % y ===0) {
        console.log(true);
    } else console.log(false);
}
res(n1,n2);*/




/*var Vehicle = function (x, y) {
    this.x = x;
    this.y = y;
    this.move = function(){
        this.x = x +1;
        this.y = y +1;
    }
};
var nissan = new Vehicle(10,20);

console.log([nissan.x, nissan.y]);
nissan.move();
console.log([nissan.x, nissan.y]);*/




/*task 1

var Person = function(name,age){
    this.name = name;
    this.age = age;
    this.describe = function(){
        console.log("My name is " + this.name + " i am " + this.age +" years old")
    }
}
var john = new Person("John",19);
john.describe();*/


/*//Nicks task1
var Vehicle = function (x, y) {
    this.x = x;
    this.y = y;
    this.move = function(){
        this.x = x +1;
        this.y = y +1;
    }
};
var Tank = function(){
    Vehicle.call(this);
    this.armory = 100;
    this.fire = function(){
        this.armory--;
        console.log(`Огонь! \nзапас патронов: ${this.armory}`)
    }
}

let t34 = new Tank(0,0)
t34.fire();
t34.fire();*/


/*//task 3
var Person = function(name){
    this.name = name;
}
var teacher = new Person('Tati')

teacher.teach = function(subject){
    console.log(this.name + " teach " + subject);
}

teacher.teach();*/