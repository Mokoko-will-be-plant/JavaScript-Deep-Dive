class Person {
  constructor(name) {
    console.log(this); // (1)
    console.log(Object.getPrototypeOf(this) === Person.prototype); // (2)

    this.name;
  }
}

const me = new Person("subi");

/**
 * Question
 *
 * 클래스의 인스턴스의 생성과정에서
 * (1), (2)의 console 에 찍힐 값은 ?
 */
