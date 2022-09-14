var value = 1;

const obj = {
  value: 100,
  hello() {
    console.log("hello's this: ", this); // (1)
    console.log("hello's this.value: ", this.value); // (2)

    function hi() {
      console.log("hi's this: ", this); // (3)
      console.log("hi's this.value: ", this.value); // (4)
    }

    hi();
  },
};

obj.foo();

/**
 * Question
 * 다음 코드를 실행시켰을때,
 * (1), (2), (3), (4)의 콘솔에 찍힐 답은?
 */
