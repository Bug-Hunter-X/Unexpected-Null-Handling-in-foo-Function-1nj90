function foo(a, b) {
  a = a === null ? 0 : a; //Handle null values for a
  b = b === null ? 0 : b; //Handle null values for b
  return a + b;
}

console.log(foo(null, 1)); // 1
console.log(foo(1, null)); // 1
console.log(foo(1, 2)); // 3
console.log(foo(null, null)); // 0