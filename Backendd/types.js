const { create } = require("domain");
const zod = require("zod");


const create_todo=zod.obj({
    name:zod.string(),
    desc:zod.string()
});

const update_todo=zod.obj({
    id:zod.string(),
   
});


module.exports={
    createTodo: create_todo,
    update_todo:update_todo
}