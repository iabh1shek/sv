const express = require('express'); 
const app = express(); 

function calculateSum(n) { 
    let ans = 0 ; 
    for(let i=0; i< n; i++){ 
        ans = ans + i;
    }
    return ans; 
}

app.post()
app.put()
app.delete()

app.get('/', function (req,res) { 
    // logic 
    const n = req.query.n; 
    const ans = calculateSum(n) ; 
    
    res.send(ans.toString()); 
})

app.listen(3000,(req,res)=>{ 
    console.log('server is running ')
}); 
