const ages=[20,9,3,30,32]
let biggest = 0 

for(let i = 0; i < ages.length; i++){ 
    if(ages[i] > biggest) { 
        biggest = ages[i]
    }
}

console.log("biggest value is : " + biggest)
