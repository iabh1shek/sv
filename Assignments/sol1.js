const ages=[20,9,3,30,32]

for(let i = 0; i < ages.length; i++){ 
    if(ages[i] % 2 == 0) { 
        console.log(ages[i] + ' is even ')
    }else{ 
        console.log(ages[i] + 'not even')
    }
}