function calc(firstAmount, secondAmount) {
    let flag = true;
    let error = null;
    if (typeof (firstAmount) !== "number" || typeof (secondAmount) !== "number") {
        flag = false;
    }
    return function test(action) {
        switch (action) {
            case 'add': {
                if (flag === true) {
                    return firstAmount + secondAmount;
                } else return error;

            }
            case 'subtract': {
                if (flag === true) {
                    return firstAmount - secondAmount;
                } else return error;
            }
            case 'multiply': {
                if (flag === true) {
                    return firstAmount * secondAmount;
                } else return error;
            }
            case 'divide': {
                if (flag === true) {
                    return firstAmount / secondAmount;
                } else return error;
            }
            default: return error;
        }
    }
}

