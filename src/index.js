function calc (a, b) {
    return function doSomething(action) {
        if (Number.isFinite(a) && Number.isFinite(b) && action==action.toLowerCase()){
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
                default: 
                    return null;
            }
        } else {
            return null;
        }
    } 
}

const fn = calc(1,4);
fn('add');