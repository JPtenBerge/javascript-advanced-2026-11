"use strict";

// undefined = 'hoi'; // negeert  ES6  IE6
// console.log(undefined);

function test() {
  console.log("wauw!");
}

function test(p1 = 42, p2 = p1) {
  console.log("test met params:", p1, p2);
}

// hoisting
test(undefined, undefined);
test(14, undefined);
window.test(14485987498448, 28);

// undefined en null?
// null = geen waarde, maar bestaat
// undefined = default geen waarde

// function hoi() {}
// console.log(hoi());
// console.log(hoi.sdkjfhsjkdfhsjkldjkf);

// console.log(document.querySelector('#nietbsestnlkaskjjsdlkrellse'));

// console.log(localStorage);

// overloading bestaat niet.

// globale object: global (Node/Deno/bun), window => globalThis

function Customer() {
  // constructor function - but please use classes
  this.id = 42;

  this.buy = function () {
    console.log("kopen kopen kopen");
  };
}
let yurian = new Customer();
yurian.buy();

// functionele taal
const func = (p1, p2, ...args) => {
  console.log("wauw 2", args.slice(2));
};
const getal = 14;

func(4, 8, 15, 16, 23, 42);

// - men noemt het een arrow function / lambda   a->hoi  a.hoi
// - geen new
// - wordt niet gehoist
// - geen arguments

function bla(p1, p2) {
  arguments[0] = 108;
  console.log("blaaaaa", arguments, p1, p2);
}
bla(4, 8, 15, 16, 23, 42);
