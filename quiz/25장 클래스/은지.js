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

class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Derived extends Base {
  constructor(a, b, c) {
    this.c = c;
  }
}

const derived = new Derived(1, 2, 3);
console.log(derived); // quiz 2
