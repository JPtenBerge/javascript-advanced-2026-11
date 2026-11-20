// @ts-check



// intellisense
let obj: { [prop: string]: unknown } = { x: 24, y: 'hoi'};
delete obj.y;
obj.z = [1,2,3];
// obj.


// typesafety
function bla(param) { // annyyyyyyyyyy geen idee

}
fetch('api/fdgjdfklg').json();


// refactoring
let prop = 'x';
console.log(obj.x);
console.log(obj['x']);
console.log(obj[prop]);