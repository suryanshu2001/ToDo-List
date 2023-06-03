import { jsonGenerate } from "../utils/helper.js";
import { statusCode } from "../utils/statusCodes.js";
import { todoModel } from "../models/todo.js";
import { muserModel } from "../models/user.js";
import { validationResult } from "express-validator";


const removeTodo=async(req,res)=>{
    const error =validationResult(req);
    if(!error.isEmpty()){
        return res.json(jsonGenerate(statusCode.VALIDATION_ERROR,"TODO_id is required",error.mapped()))
    }
    try {
        const result=await todoModel.findByIdAndDelete({
            _id: req.body.todo_id,
            userId: req.userId,
        });
        if(result){
            const user=muserModel.findOneAndUpdate({
                _id:req.userId,
            },
            {$pull:{todos:req.body.todo_id}}
            )
            return res.json(jsonGenerate(statusCode.SUCCESS,"todo item is deleted",null))
        }
    } catch (error) {
        console.log(error)
        return res.json(jsonGenerate(statusCode.UNPROCESSABLE_ENTITY,"Something went wrong",null))
    }
}
export default removeTodo;