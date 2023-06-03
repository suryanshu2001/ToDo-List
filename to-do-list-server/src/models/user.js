import mongoose from "mongoose";
const schema=mongoose.Schema;
 const userSchema = new schema({
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now(),
    },
    todos:[{
        type:schema.Types.ObjectId,
        ref:"todoList"
    }]

},{timestamps:true})
export const muserModel=mongoose.model('appUsers',userSchema);