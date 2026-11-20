// Proxy
// Reflect
// encapsulation

// Proxy = iemand die je voor je laat praten
// - representatief
// reverse proxy
// forward proxy
// tusseninstantie/tussenpersoon/doorgeefluik

let target = { x: 24, y: "hoi" };
let proxy = new Proxy(target, {
  // handlers
  get(obj, prop) {
    console.log("get op", prop);
    return obj[prop];
  },
  set(obj, prop, value) {
    console.log("set op", prop, value);
    obj[prop] = value;
    return true;
  },
});

console.log(proxy.x);
console.log(proxy.y);
proxy.x = 108;
console.log(proxy.x);

console.log("target:", target);

// waar gebruiken we dit voor?
// - debugging / state management   redux zustand ngrx
// - reactive programming - soort van signals
// - validatie
// - unittesten - mocken
//   - jest vitest mocha sinon chai jasmine karma

// change detection
// - React: setState()  expliciet
// - Angular: complex algoritme   topdown dirty checking  (click) (mouseover) signals
// - Svelte 4: assignment detection
//     getal = 14   getal = 28
//     products = products
// - Svelte 5: runes (signals)
// - Vuuuueeeeeeeeee!!!

// reflection
// Reflect
