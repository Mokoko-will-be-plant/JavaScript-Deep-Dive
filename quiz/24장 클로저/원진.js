const x = 1;

function test() {
  const x = 10;

  const closure1 = function () {
    console.log(x);
  };

  return closure1();
}

function test2() {
  const x = "test";

  const closure2 = function () {
    return x.toUpperCase();
  };
  closure2();

  return x;
}

test(); // (1)
const a = test2();
console.log(a); // (2)
