const s1 = Symbol.for("hello");
const s2 = Symbol.for("hello");

console.log(s1 === s2); // (1)

/**
 * Question
 *
 * (1)의 console 에 찍힐 값은?
 */
