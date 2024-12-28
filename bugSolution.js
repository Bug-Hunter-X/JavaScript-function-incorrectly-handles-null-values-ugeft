function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); // Or return NaN
  }
  return a + b;
}

console.log(foo(5, 5)); // Outputs 10
console.log(foo(null, 5)); // Throws an error
console.log(foo(5, null)); // Throws an error