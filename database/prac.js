// callback 
function sumandsub(num1,num2,type, argument) { 
    if (type =="sum") { 
        argument(num1 + num2)
    }
    if(type =='sub'
    ) { 
        argument( num1 - num2 ) 
    }
}

function displayresult(value) { 
    console.log('the ans is ' + value); 
}



const ans = sumandsub(1,2,'sum', displayresult)




