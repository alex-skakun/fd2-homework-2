function calc(a, b) {

    function fn(action) {

        if (typeof a === 'number' && typeof b === 'number') { 

            switch (action) {
                case 'add':
                    return a + b
                case 'subtract':
                    return a - b
                case 'multiply':
                    return a * b
                case 'divide':
                    return a / b
                default:
                    return null
            }
        } else return null
    }
    return fn
}
