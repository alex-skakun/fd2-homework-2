function testOperation(a, b, action) {
  let array = ["add", "subtract", "multiply", "divide"];

  let testNumber;
  let testWorld;

  if (typeof a === "number" && typeof b === "number") {
    testNumber = true;
  }

  for (let prop of array) {
    if (action === prop) {
      testWorld = true;
    }
  }

  if (testNumber === true && testWorld === true) {
    return false;
  }

  return true;
}

function calc(a, b) {
  function action(action) {
    if (testOperation(a, b, action)) {
      return null;
    }

    if (action === "add") {
      return a + b;
    }
    if (action === "subtract") {
      return a - b;
    }
    if (action === "multiply") {
      return a * b;
    }
    if (action === "divide") {
      return a / b;
    }
  }

  return action;
}
