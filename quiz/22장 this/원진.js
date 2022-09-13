var test1 = 100;

const obj = {
  test1: 200,
  test() {
    console.log(this.test1); // (1)

    function nestFn() {
      console.log(this.test1); // (2)
    }

    nestFn();
  },
};

obj.test();

/**
 * Question
 *
 * (1), (2)의 값은 ?
 */
