// iterator next

let jp = {
  name: "JP",
  favorieteDranken: ["Sprite", "Cocktail"],
  favorieteChipsen: ["Nibbit rings", "Wokkels Paprika", "Heart breakers"],
  [Symbol.iterator]() {
    // iterator pattern
    let alles = [...this.favorieteDranken, ...this.favorieteChipsen];
    let index = 0;

    return {
      next() {
        return {
          value: alles[index++],
          done: index > alles.length,
        };
      },
    };
  },
};

for (let i = 0; i < 5; i++) {}

for (let q in jp) {
  // reflection   alle props  liever niet meer gebruiken
  console.log("in:", q);
}

for (let q of jp) {
  // iterable  .next()
  console.log("of:", q);
}

// generator yield

function* gen() {
    console.log('eerste');
    yield 4;
    console.log('tweede');
    yield 8;
    console.log('derde');
    yield 15;
    console.log('vierde');
    yield 16;
    console.log('vijfde');
    yield 23;
    console.log('zesde/laatste');
    yield 42;
}


let source = gen();
source.next();
source.next();
let curr = source.next();
console.log(source.next());
console.log(source.next());
console.log(source.next());
console.log(source.next());
console.log(source.next());
console.log(source.next());
console.log(source.next());
console.log(source.next());
console.log(source.next());
console.log(source.next());
console.log(source.next());
console.log(source.next());


// for (let item of gen()) {
//     console.log('gen:', item);
// }


function* traverseNode(node) {
    yield* node.left;
    yield node.value;
    yield* node.right;
}


// Deno web server
// for await (let conn of server.connections) {

// }
// Node
// Deno
// DONE