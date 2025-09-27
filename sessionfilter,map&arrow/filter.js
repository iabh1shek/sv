// filter out only the even values from the given array 
const arr = [2,3,44,1,0]
// regular way 
// const newarr = []
// for(let i =0; i< arr.length; i++){ 
//     if(arr[i] % 2 ==0) { 
//         newarr.push(arr[i]); 
//     }
// }
// console.log(newarr);


// filter method 
function filterfunction(value) { 
    if (value % 2 == 0) { 
        return true ;
    }
    else { 
        return false; 
    }
}

// filter global js function 
const ans = arr.filter(filterfunction); 
console.log(ans); 

