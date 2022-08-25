

function calc(num1, num2) {

    return function selection(mark) {
        if (num1 === Number(num1) && num2 === Number(num2)) {
            switch (mark) {
                case 'multiply':
                    return num1 * num2;
                case 'add':
                    return num1 + num2;
                case 'subtract':
                    return num1 - num2;
                case 'divide':
                    return num1 / num2;
                default:
                    return null;
            }

        }
        return null;
    }
}
