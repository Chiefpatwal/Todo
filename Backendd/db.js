const mongoose =require("mongoose")
mongoose.connect("mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos")

const todoschema=mongoose.Schema({
    title:String,
    description:String,
    complete:Boolean


})

const todo=mongoose.model('todos',todoschema);
module.exports={
    todo
}