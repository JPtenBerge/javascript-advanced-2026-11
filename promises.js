// belofte dat je iets krijgt
// - of een resultaat (resolved)
// - of een error (rejected)
// wrapper om een async proces.
// zijn eager.

// snackbar
let prom = new Promise((resolve, reject) => {
  // async werk
  console.log("async werk doen");
  setTimeout(() => {
    resolve({ getal: 42 });
    console.log("kom ik hier nog??");
    reject("qqqqqqqq");
  }, 1500); // hier je nuggets
  // reject('frituurpan explodeert');
});
prom
  .then((value) => (value.getal *= 10)) // don't do this.
  .then((result) => console.log("Prom result:", result))
  .catch((err) => console.error("oh nee!", err));

// Immediately Invoked Function Expression
let obj = { x: 24, y: "hoi" };
delete obj.x;
console.log(obj);

(() => {
  console.log("yay werkt 2");
})(); // function declaration

let func = (function () {})(); // function expression

// (async () => {
let result = await prom;
console.log("awaited result:", result);
// })();

// fetch('api/products').then(x => x.json()).then(products => {

// });

setTimeout(() => {
  console.log("nu op prom thennen");
  prom.then((result) => console.log("Prom result na allang klaar:", result));
}, 5000);

/////////

let prom1 = new Promise((res, rej) => setTimeout(() => rej("eerste"), 1000));
let prom2 = new Promise((res, rej) => setTimeout(() => res("tweede"), 700));
let prom3 = new Promise((res, rej) => setTimeout(() => res("derde"), 2000));

let results = await Promise.allSettled([prom1, prom2, prom3]);
console.log("results:", results);

// Promises
// - ideaal voor HTTP

// Observables
// - lazy
// - stream van results
// - ideaal voor WebSocket/SSE
// - worden niet automagisch opgeruimd. clean that shit up yo.

// hypes frontend - SIGNALS
// - Angular heeft ze v16 (v22) - 2023
// - Svelte heeft ze (runes) $state $derived sinds Svelte 5
// - Solid
// - Vue   ref()   .update()
// - "to reify something"

// bla = signal(14);
// bla.update(28);
// doubleBla = computed(() => bla() * 2)

let products = await fetch("api/products").then((x) => x.json());
