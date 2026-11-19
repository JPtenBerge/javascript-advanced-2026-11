'use strict';

// zonder new:
// - this wijst standaard naar de eigenaar van jouw globale functie - window/globalThis
//   - met strict mode wordt hij undefined
// - met arrow function "blijft hij wijzen waar hij al naar wees"
//   - NIET MUTEERBAAR
//   - veel voorspelbaarder en fijner. best practice.

function Customer(name) {
  console.log("customer:", this);
  this.name = name;

  this.buy = () => {
    console.log('this in buy:', this);
    console.log(`ik ${this.name} ga wederom kopen kopen kopen`)
  };
}
let dion = new Customer("Dion");
dion.name = 'Yurian';
dion.buy();

dion.buy.call({ name: 'JP' }, 42, 18, 29);
dion.buy.apply({ name: 'Roald' }, [42, 18, 29]);

let gebindeBuy = dion.buy.bind({ name: 'Frank' });
gebindeBuy();
gebindeBuy();
gebindeBuy();
gebindeBuy();


// let buy = dion.buy; // trekt 'm uit z'n context
// buy();





function test() {

}
test`14` // tagged template literal





