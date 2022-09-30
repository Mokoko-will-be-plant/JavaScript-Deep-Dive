function makeCounter(predicate) {
  let counter = 0;

  return function () {
    counter = predicate(counter);
    return counter;
  };
}

function increase(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}

const increaser = makeCounter(increase);
console.log(increaser()); // (1)
console.log(increaser()); // (2)

const decreaser = makeCounter(decrease);
console.log(decreaser()); // (3)
console.log(decreaser()); // (4)

/**
 * Question 1.
 *
 * (1), (2), (3), (4) 의 console 에 찍힐 값은 ?
 *
 */
