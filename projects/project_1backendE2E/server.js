import express from 'express'
import userRouter from './routes/userRoutes.js';

const app =express(); 
app.use(express.json()); 
const port = 3000

// user routes 
app.use('/api/v1/user', userRouter)



app.listen(port,(req,res)=>{ 
    console.log(`server is running on ${port}`)
})

