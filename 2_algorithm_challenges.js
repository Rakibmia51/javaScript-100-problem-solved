
// 1. write a function that returns the sum of two numbers.
// 2. wirte a funtion that returns the sum of all numbers regardless of # of params.

    //Example 
        // For param1 = 1, param2 = 2, the output should be add(param1, param2) = 3.

    //Input / output
        // [input]integer param1

    // Hints = (Arithmetic Operators, Rest Operators, forEach())

    function sumParam(...numbers){
        
        let totalPara = 0;
        numbers.forEach(element => {
        
         totalPara += element;
        
        });

        return totalPara;
    }
    // console.log(totalPara)
    console.log(sumParam(10,20,10,20));



