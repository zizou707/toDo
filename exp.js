/* class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){return `hello my name is ${this.name}`;}
}

var person1=new Person('zied',55);
console.log(person1.greet()); */

/* class Calcul {
    static add(a,b){return a+b} // static method
           subtract(a,b){ return a-b} // instance method
}
console.log(Calcul.add(5,8));
 var c1=new Calcul();
 console.log(c1.subtract(1,1)); */

/*  class Plants {
    constructor(name){
        this.name=name;
    }
    color(){return `${this.name} is green`}
    
 }
 class Olive extends Plants {
    constructor(name,type){
        super(name);
        this.type=type;
        
    }
   x(){return `${this.name} is black`}
   
 }
 var c = new Olive('name1','type1') ;
 console.log(c.x()); */

 class Animal {constructor(name, color, isWild, sound) {
    this.name = name;
    this.color = color;
    this.isWild = isWild;
    this.sound = sound;
}}



Animal.prototype.aboutAnimal = function(){
	return `the ${this.color} colored ${this.name} ${this.sound}`;
}
const dog = new Animal("dog", "black", false, "barks");
console.log(dog);
console.log(dog.aboutAnimal());