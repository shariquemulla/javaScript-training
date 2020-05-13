function Hero(name, role) {
  this.name = name;
  this.role = role;

  this.introduce = function () {
    console.log(`My name is ${this.name} and I am a ${this.role}.`);
  };
}

let taylor = new Hero('Taylor', 'mother');

let riley = new Hero('Riley', 'coach');

taylor.name;
riley.role;

taylor.introduce();
riley.introduce();


////////////////////////////////////////////////////////////////////////////////////////////////////


/*

Now it's your turn to create a constructor function. Declare a
`Sandwich` constructor function that takes three parameters:

1. `bread` (string) - the type of bread for the sandwich (e.g. "Wheat")
2. `meat` (array) - the meats to put on the sandwich
   (e.g. `[]` for a vegetarian sandwich!)
3. `vegetables` (array) - the vegetables to include in the sandwich

*/

function Sandwich(bread, meat, vegetables){
  this.bread = bread;
  this.meat = meat;
  this.vegetables = vegetables;
}

let meatArray = ['meat1', 'meat2']
let veggies = ['lettuce', 'Tomato']
let sandwich = new Sandwich("brown", meatArray, veggies);

console.log(sandwich)


/////////////////////////////////////////////////////////////////////////////////////////////



const cat = {
  name: 'Bailey'
};

function sayHello(message) {
  console.log(`${message}, ${this.name}`);
}

sayHello.call(cat, 'Nice to see you');

sayHello.apply(cat, ['Hello']);


////////////////////////////////////////////////////////////////////////////////////////////////


function invokeTwice(cb) {
  cb();
  cb();
}

const dog = {
 age: 5,
 growOneYear: function () {
   this.age += 1;
 }
};

const myGrow = dog.growOneYear.bind(dog);

invokeTwice(myGrow)
dog.age;
// 7


//////////////////////////////////////////////////////////////////////////////////////////////////


// Inheritance
function Dog(age, weight, name) {
  this.age = age;
  this.weight = weight;
  this.name = name;
}

Dog.prototype.bark = function () {
    console.log(`${this.name} says woof!`);
};

dog1 = new Dog(2, 60, 'Java');

dog2 = new Dog(4, 55, 'Jodi');

dog1.bark();

dog2.bark();


////////////////////////////////////////////////////////////////////////////////////////////


function Hamster() {
  this.hasFur = true;
}

let waffle = new Hamster();
let pancake = new Hamster();

/* First, note that even after we make the new objects, waffle and pancake,
  we can still add properties to Hamster's prototype and
  it will still be able to access those new properties.
*/

Hamster.prototype.eat = function () {
  console.log('Chomp chomp chomp!');
};

waffle.eat();
// 'Chomp chomp chomp!'

pancake.eat();
// 'Chomp chomp chomp!'

// Now, let's replace Hamster's prototype object with something else entirely:

Hamster.prototype = {
  isHungry: false,
  color: 'brown'
};

// The previous objects don't have access to the updated prototype's properties;
// they just retain their secret link to the old prototype:

console.log(waffle.color);
// undefined

waffle.eat();
// 'Chomp chomp chomp!'

console.log(pancake.isHungry);
// undefined

//As it turns out, any new Hamster objects created moving forward will use the updated prototype:

const muffin = new Hamster();

muffin.eat();
// TypeError: muffin.eat is not a function

console.log(muffin.isHungry);
// false

console.log(muffin.color);
// 'brown'


/////////////////////////////////////////////////////////////////////////////////////////
