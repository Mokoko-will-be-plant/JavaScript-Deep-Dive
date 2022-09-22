const x = 100;

function outer() {
  const x = 10;
  inner();
}

function inner() {
  console.log(x);
}

outer(); // Q. result = ?
