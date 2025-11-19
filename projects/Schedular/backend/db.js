import mongoose from "mongoose";
import dotenv from 'dotenv'


dotenv.config()

// connect to db 
mongoose.connect(process.env.MONGO_URL) 



// userSchema 
const userSchema = new mongoose.Schema({ 
    username: String, 
    password: String, 
    email: String
})

// todo schema 

const todoSchema = new mongoose.Schema({ 
    title: String, 
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

})



const userModel = mongoose.model('User',userSchema) 
const todoModel=mongoose.model('Todo',todoSchema)


export { userModel, todoModel}