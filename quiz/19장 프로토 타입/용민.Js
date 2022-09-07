// Q1.
const Person = (name, gender) => {
  this.name = name;
  this.gender = gender;
  this.sayHello = function () {
    return this.name;
  };
};

// 인스턴스 1 생성
const person1 = new Person('smith', 'male');

// 인스턴스 2 생성
const person2 = new Person('neo', 'male');

console.log(person1.constructor === Object); // true or false
