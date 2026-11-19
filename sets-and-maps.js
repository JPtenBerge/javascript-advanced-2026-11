

let setje = new Set();
setje.add(5);
setje.add(5);
setje.add('5');
setje.add(4);
setje.add(5);
console.log(setje);


let mapje = new Map();
mapje.set([], 'value');
mapje.set([], 'value2');
mapje.set(78, 'value2');
mapje.set({}, 'value3');
mapje.set(Temporal.PlainDate.from('2026-05-11'), 'value4');
console.log(mapje);

let obj = {
    key: 'value'
};
Object.keys(obj).length;

// JS engines
// - V8 (Chromium, Node, Deno)
// - JavaScriptCore (Safari, Bun)
// - SpiderMonkey (Firefox)
// - Chakra/ChakraCore (IE/oud Edge)

// WeakSet
// - DOM-elementen
// WeakMap