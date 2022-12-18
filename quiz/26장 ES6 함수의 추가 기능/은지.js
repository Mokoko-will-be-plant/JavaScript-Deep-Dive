const person = {
  name: "Lee",
  sayHi: () => console.log(`Hi ${this.name}`),
};

person.sayHi(); // quiz

// 'Hi'
// 화살표 함수는 전역 객체의 window를 가리키게 된다.
