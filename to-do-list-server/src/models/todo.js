import mongoose from "mongoose";
const schema=mongoose.Schema;
 const todoSchema = new schema({
    userId:{
        type:schema.Types.ObjectId,
        ref:"muserModel",
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    isCompleted:{
        type:Boolean,
        default:false,
        require:true
    },
    date:{
        type:Date,
        default:Date.now(),
        require:true
    },


},{timestamps:true})
export const todoModel=mongoose.model('todoList',todoSchema);