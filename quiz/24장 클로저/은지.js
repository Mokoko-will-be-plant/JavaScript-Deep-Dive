function counter(calc) {
  let counter = 0;

  return function () {
    result = calc(counter);
    return result;
  };
}

function increase(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}

const increaseCount = counter(increase);
console.log(increaseCount()); // Q1
console.log(increaseCount()); // Q2

const decreaseCount = counter(decrease);
console.log(decreaseCount()); // Q3
console.log(decreaseCount()); // Q4
