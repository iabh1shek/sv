import express from 'express'
import zod from 'zod' 
import { todoModel } from '../db.js'
import authMiddleware from '../middlewares/auth.js'
const todoRouter = express.Router() 

todoRouter.get('/alltodos',authMiddleware, async(req,res)=>{ 
    const getalltodos = await todoModel.find({
        userid: req.userid
    })
    


    
    
    res.status(200).json({ 
        message: "todos fetched successfully", 
        getalltodos
    })
})



const todoSchema = zod.object({ 
    title: zod.string()
})

todoRouter.post('/tood', authMiddleware, async(req,res)=>{ 
    const {success} = todoSchema.safeParse(req.body)

    if(!success){ 
        return res.status(403).json({ 
            message: "enter correct format for todos"
        })
    }


    const createtodo = await todoModel.create({ 
        title: req.body.title, 
        userid: req.userid
    })


    return res.status(200).json({ 
        message: "todo created successfully", 
        createtodo
    })
})


    // update and delete 



export default todoRouter;