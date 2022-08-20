function calc(a, b) {
  return (action) => {
    if (isValidNumber(a) && isValidNumber(b)) {
      switch (action) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return a / b;
      default:
        return null;
      }
    }

    return null;
  };
}

function isValidNumber(testNumber) {
  return Number.isFinite(testNumber);
}
