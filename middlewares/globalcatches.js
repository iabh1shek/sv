const express = require('express')
const app = express(); 
app.use(express.json()); 


app.post('/checkup',function(req,res){ 
    const kidneys = req.body.kidneys; 
    const kidneysLength = kidneys.length; 
    res.send("your kidneys are : " + kidneysLength)
})

// global catches 
app.use((err,req,res,next)=>{ 
    res.send("something went wrong")
})

app.listen(3000,(req,res)=>{ 
    console.log("server is up and running ")
}); 