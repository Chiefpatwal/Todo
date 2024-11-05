import express from 'express';
import { createTodo, update_todo } from '../backend/types'; 
import mongoose from 'mongoose';

const app = express();
app.use(express.json());


const todo = mongoose.model('todo', new mongoose.Schema({
    name: String,
    desc: String,
    completed: Boolean
}));


app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {  
        res.status(400).json({  
            msg: "Invalid input types",
        });
        return;
    }
        await todo.create({
            name: createPayload.name,
            desc: createPayload.description, 
            completed: false
        });
        res.json({
            msg: "Todo created"
        });
    
});


app.get("/todos", async function(req, res) {
    const todos = await todo.find({});
    res.json({
        todos
    });
});


app.put("/completed", async function(req, res) { 
    const updatePayload = req.body; 
    const parsedPayload = update_todo.safeParse(updatePayload); 
    if (!parsedPayload.success) {  

        res.status(411).json({  
            msg: "Invalid input types",
        });
        return;
    }
        await todo.updateOne({  
            _id: req.body.id
        }, {
            completed: true
        });
       
   
});
 

app.listen(3001, () => {
    console.log('Server running on port 3000');
});
