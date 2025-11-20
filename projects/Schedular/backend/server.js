import express from 'express'
import cors from 'cors' 
import userRouter from './Routes/userRoutes.js';
import todoRouter from './Routes/todoRoutes.js';
const app = express(); 
app.use(cors());

app.use(express.json());// body-parser 

const port = 3000; 


// user verification routes 
// app.use('/api/v1', verifyRouter) 

// user routes 
app.use('/api/v1/user', userRouter)  

// todo Routes 
app.use('/api/v1', todoRouter)

app.listen(port,(req,res)=>{ 
    console.log(`server is running on port ${port}`)

})
