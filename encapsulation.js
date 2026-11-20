// encapsulation
// - wie wel of niet en hoe bij jouw data mag.
// - toegangsbeheer

// manieren in JS:
// - closures ✅
// - private binnen classes ✅
// - modules ✅
// - Proxy ✅
// - configuratie ✅
// - conventie ✅
// - getters/setters ✅

let obj = {
  get bla() {},
  set bla(value) {},
};

class Hoi {
  product$;
  #heulBelangrijk = 14;
  _heulBelangrijk = 14;

  get heulBelangrijk() {
    return this.#heulBelangrijk;
  }
  set heulBelangrijk(value) {
    if (value > 500) {
      throw new Error("fuck no");
    }
    this.#heulBelangrijk = value;
  }

  geef() {
    return this.#heulBelangrijk;
  }
}
let inst = new Hoi();
console.log(inst);
console.log(inst.heulBelangrijk);
inst.heulBelangrijk = 200;
console.log(inst.heulBelangrijk);

let dinges = {
  x: { getal: 24 },
  y: "hoi",
  get hoi() {
    return "wow";
  },
  set hoi(value) {
    // this.x.getal = 12345;
  },
};
// Reflect.preventExtensions(dinges);
// Object.freeze(dinges);
// Object.freeze(dinges.x);
// Object.seal()

Reflect.defineProperty(dinges, "hoi", {
  // get() { return 243457}
  value: 23456,
});

// dinges.x = 36474;
// dinges.z = [1,2,3];
console.log(dinges);
console.log(dinges.hoi);
// dinges.hoi = 123456;
// console.log(dinges.x.getal);
