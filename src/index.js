


function calc (a, b) {

    return function getAction(action){
        switch (action) {
            case 'add' : return actionAdd (a, b);
            case 'subtract' : return actionSubtract (a, b);
            case 'multiply' : return actionMultiply (a, b);
            case 'divide' : return actionDivide (a, b);
            default : return null;
        }
    }

}

console.log(calc (4,6)('add'));

function actionAdd(num1, num2) {
    return num1 + num2;
}
function actionSubtract(num1, num2) {
    return num1 - num2;
}
function actionMultiply(num1, num2) {
    return num1 * num2;
}
function actionDivide(num1, num2) {
    return num1 / num2;
}