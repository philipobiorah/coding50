function fac3(n){
    let result = 1;
      if(n <= 0){
         return 1;
      }else{
       for(let i = n; i > 0; i--){
          result = result * i; 
         
       }
      }
      return result;
    }
    function factorial(num){
        if(num <= 1){
            return 1;
        }else{
            return num  * factorial(num -1);
        }
    }