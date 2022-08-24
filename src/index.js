function calc (a, b) {
  return function (action){
  if (typeof a == 'number' && typeof b == 'number') {
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
 } return null
}
};

console.log(calc(4, 'l')('add'));
   
    