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

todoRouter.post('/todo', authMiddleware, async(req,res)=>{ 
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


const updatetodoschema = zod.object({ 
    title: zod.string()
})
    // update and delete 
todoRouter.put('/updatetodo/:id', authMiddleware, async(req,res)=>{ 
    const{success} = updatetodoschema.safeParse(req.body)
    if(!success) { 
        return res.status(400).json({ 
            message:"invalid inputs" 
        })
    }


    // get the todo id via params .. 

    const todoid = req.params.id 
    // console.log(todoid) 

    // console.log(req.userid)


    const todoupdate = await todoModel.findOneAndUpdate({ 
        _id: todoid, 
        userid: new mongoose.Types.objectId(string(req.userid))
    })


    if(!todoupdate) { 
        return res.status(400).json({ 
            message: "todo not found or unauthorized"
        })
    }


    res.status(200).json({ 
        message: "todo updated successfully" , 
        todo: todoupdate
    })


})


export default todoRouter;