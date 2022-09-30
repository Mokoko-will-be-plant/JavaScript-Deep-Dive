class Parent {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Children extends Parent {
  d = 10;
}

const baby = new Children(1, 2, 3);
console.log(baby); // quiz 1
// Children {a: 1, b: 2, d: 10}

class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Derived extends Base {
  constructor(a, b, c) {
    // super(a, b);
    this.c = c;
  }
}

const derived = new Derived(1, 2, 3);
console.log(derived); // quiz 2 // error // super()를 사용하지 x
//
