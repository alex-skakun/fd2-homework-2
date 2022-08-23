function calc(a,b) {

    return function (action) {

        if (a === Number(a) && b === Number(b)) {
             switch(action) {
                
                case 'add':
                    return a+b;
                    break;
                
                case 'subtract':
                    return a-b;
                    break;

                case 'multiply':
                    return a*b;
                    break;

                case 'divide':
                    return a/b;
                    break;
                    
            }
        } 

        return null;
    }
    
    
}
    
    calc( 4, 6)('add');
    calc( 4, 6)('subtract');
    calc( 4, 6)('multiply');
    calc( 4, 0)('divide');

    
    
    