var x = 1;
const y = 2;

function context(a) {
  var x = 3;
  const y = 4;

  function innerContext(b) {
    const z = 5;
    console.log(a + b + x + y + z);
  }

  innerContext(10);
}

context(20);

/**
 * Q1. 정답은 ?
 * => 책에 있는 문제이므로 추가 질문!
 *
 * Q2. y의 값과 그 이유는?
 */
