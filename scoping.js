// 5 manieren variabele aanmaken:
// - let bla = 14
// - const bla = 14
// - var bla = 14
// - window.bla = 14
// - bla = 14

function test() {
  x = 14; // <p><a href="...">...</p></a>
  console.log(x);
}
test();
console.log(x);

// console.log('i voor de for:', i);
for (let i = 0; i < 5; i++) { // ~~lexical~~ block scope
  console.log("i:", i);
}
// console.log('i na de for:', i);
