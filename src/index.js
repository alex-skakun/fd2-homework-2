let number1;
let number2;
let order; 


function calc(number1,number2) {
   
    if (!isNaN(number1)&&!isNaN(number2)) {  
        
     
        return function (order) {
       
            if  (order === 'add') {
                  return number1+number2;
                }
            
             else if (order === 'deduct') {
             return number1-number2;
            
             }
      
             else if (order === 'multyply') {
            return number1*number2;
        
             }
             else if (order === 'devide') {
             return number1/number2;
       
              }
               else {
             return null;
         }
    }
    }
else {
    return null;
}

}
   console.log (calc(4,6) ('add')); 
   console.log (calc(4,6) ('deduct')); 
   console.log (calc(4,6) ('multyply')); 
   console.log (calc(4,6) ('devide')); 
    