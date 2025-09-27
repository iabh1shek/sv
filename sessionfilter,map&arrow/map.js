// [1,2,3,4]
// [3,6,9,12] 


// regular way 
const arr = [1,2,3,4]
// const newarr = [] 
// for(let i =0; i<arr.length; i++){ 
//     newarr.push(arr[i] * 3)
// }
// console.log(newarr)


// using map 
function transformation(n) { 
    return n* 3
}
const ans = arr.map(transformation); 
console.log(ans) ; 