function calc(a, b) {
  function solve(event) {
    if (a === Number(a) && b === Number(b)) {
      switch (event) {
        case 'add':
          return a + b;
        case 'subtract':
          return a - b;
        case 'multiply':
          return a * b;
        case 'divide':
          return a / b;
        default:
          return null
      }
    } else {
      return null;
    }
  }
  return solve;
}