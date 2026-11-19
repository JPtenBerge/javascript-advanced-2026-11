'use strict';

// prototyping: inheritance.

function LivingBeing() {
  this.say = function () {
    console.log("wwwwwwoooooooooooaaaaaa", this.name);
  };
}
function Mammal() {}
Mammal.prototype = new LivingBeing();

function Human(name) {
    this.name = name;
//   this.say = function () {
//     Object.getPrototypeOf(this).say();
//     console.log("hoi");
//   };
}
Human.prototype = new Mammal();

let jp = new Human('JP');
jp.say();

// class Iets {
//     constructor() {
//         console.log('hallo vanaf iets');
//     }
// }
function Iets() {
    console.log('hallo iets function');
}
class Ding extends Iets {}
console.log(new Ding());
let ding = new Ding();
Object.setPrototypeOf(ding, {});


// export class HomeComponent extends destroyMixin() {

// }

// function destroyMixin() {
//     return class {

//     };
// }

// extension methods.
Date.prototype.toPrettyString = function() {
    return `${this.getDate()}-${this.getMonth() + 1}-${this.getFullYear()}`;
};



let nu = new Date();
console.log(nu.toPrettyString());


function Customer() {
    
}
Customer.prototype.buy = function() {

};

new Customer(); // 10.000x
