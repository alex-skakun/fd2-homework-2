function calcNumbers (first, second)     {
    return  (operator) => {
        if (Number.isNaN(first) || Number.isNaN(second)){
            return null;
        };
        
        switch (operator) {
            case 'add':
                return first + second;
            case 'subtract':
                return first - second;n
            case 'multiply':
                return first * second;
            case 'divide':
                return first / second;
            default:
                return null;

                
                
        }
    }
            }; 
            

            const first = Number(prompt('первое число '));
            const second = Number(prompt('второе число'));
            const operator = prompt('оператор (add,subtract,multiply,divide)');
            alert (calcNumbers (first,second)(operator));
