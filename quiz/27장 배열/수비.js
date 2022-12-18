const arr = [1, 2, 3, 4];

const result = arr.splice(1, 2, 20, 30);

console.log(result); // (1)
console.log(arr); // (2)

arr.slice(0, 1);
arr.slice(1, 2);

console.log(arr); // (3)

/**
 * Question
 *
 * (1), (2), (3)의 console 에 찍힐 값은 ?
 */
