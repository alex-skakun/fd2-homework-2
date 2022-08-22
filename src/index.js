function calc(numbA, numbB) {
    return function (arithmeticOperation) {
        if (typeof (numbA) !== 'number' || typeof (numbB) !== 'number') {
            return null;
        }

        switch (arithmeticOperation) {
            case 'add':
                return numbA + numbB;
            case 'subtract':
                return numbA - numbB;
            case 'multiply':
                return numbA * numbB;
            case 'divide':
                return numbA / numbB;
            default:
                return null;
        }
    }
}