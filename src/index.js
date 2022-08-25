
function calc (firstNumber, secondNumber){

return (action) => {
 
    if (firstNumber === Number(firstNumber) && secondNumber === Number(secondNumber)) {

 switch(action){
    case 'add':
        return firstNumber + secondNumber;

    case 'subtract':
        return firstNumber - secondNumber;
    
    case 'multiply':
        return firstNumber * secondNumber;

    case 'divide':
        return firstNumber / secondNumber;
default:
    return null}

        
} else {
    return null;
}}
}


