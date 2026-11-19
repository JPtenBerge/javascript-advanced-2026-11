

// browser's symbol registry

let sym = Symbol.for('jkdsvjksdvjkl sdjlkdsjlk jfdbla'); // primitief type om iets uniek te adresseren.
// GUID/UUID   get or create

let sym2 = Symbol.for('bla'); 

console.log(sym === sym2);
console.log(sym);
console.log(sym2);

let suffix = 'name';
let obj = {
    x: 'hoi',
    y: 24,
    ['first'+ suffix]: 'JP',
    ['last'+ suffix]: 'tB',
    [sym]: 42,
    [sym2]: 'hoi'
};
console.log(obj);
console.log(obj[sym]);
console.log(obj[sym2]);

