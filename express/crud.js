const express = require('express')
const app = express(); 

app.use(express.json()); 

const users = [{
    username: "abhishek",
    trees: [{
        healthy: true
    }]
}]

app.get("/",function(req,res) { 
    const abhishektrees = users[0].trees 
    const numberoftrees = abhishektrees.length; 


    let numberofhealthytrees = 0; 
    for(let i =0; i < numberoftrees; i++){ 

        if(abhishektrees[i].healthy) { 
            numberofhealthytrees = numberofhealthytrees + 1; 
        }
    }

    const numberofunhealthytrees = numberoftrees - numberofhealthytrees; 

    // 200 -> successful response 
    res.status(200).json({ 
        numberoftrees, 
        numberofhealthytrees, 
        numberofunhealthytrees
    })
})

// post method 
app.post("/", function(req,res) { 

    const ishealthy = req.body.ishealthy; 
    users[0].trees.push({
        healthy: ishealthy
    })

    res.status(201).json({ 
        message: "done"
    })
})


// put method 
app.put ("/", function(req,res) { 

    for(let i =0; i<users[0].trees.length; i++) { 

        users[0].trees[i].healthy = false; 
    }

    res.json({ 
        message: "trees status changed tounhealthy "
    })
})


app.delete("/",function(req,res){ 
    // remove healthy trees 
    const newtrees = [] 
    for(let i =0; i < users[0].trees.length; i++){ 
        if(users[0].trees[i].healthy) { 
            
            newtrees.push({ 
                healthy: false
            })

        }
    }
     
    users[0].trees = newtrees; 


    res.json({ 
        msg:  " done "
    })
})


app.listen(3000,function(req,res) { 
    console.log(`server is running on port ${3000}`);
})
