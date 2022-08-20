function calc(a, b) {

    function fn(action) {

        if (typeof a === 'number' && typeof b === 'number') { 
            switch (action) {
                case 'add':
                    return a + b
                case 'subtract':
                    return a - b || null
                case 'multiply':
                    return a * b || null
                case 'divide':
                    return a / b || null
                default:
                    return null
            }
        } else return null
    }
    return fn
}