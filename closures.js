// functies.
// functie in een functie met een stukje interne state
// functionele class

const counter = () => {
  let tellertje = 0; // private

  return () => {
    console.log("inner arrow function");
    return ++tellertje;
  };
};

let firstCounter = counter(); // init state
console.log(firstCounter()); // 1
console.log(firstCounter()); // 2
console.log(firstCounter()); // 3
let secondCounter = counter(); // init state
console.log(secondCounter()); // 1
console.log(secondCounter()); // 2
console.log(secondCounter()); // 3
// console.log(tellertje);
// console.log(counter.tellertje);

const objCounter = () => {
  let tellertje = 0; // private

  return {
    increment() {
      return ++tellertje;
    },
    decrement() {
      return --tellertje;
    },
  };
};

let firstObjCounter = objCounter();
console.log(firstObjCounter.increment()); // 1
console.log(firstObjCounter.increment()); // 2
console.log(firstObjCounter.decrement()); // 1
console.log(firstObjCounter.increment()); // 2
console.log(firstObjCounter.increment()); // 3
