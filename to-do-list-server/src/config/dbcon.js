import mongoose from "mongoose";
export const dbConn=async()=>{
   try{
    let dbURL="mongodb+srv://suryanshu:bedi12xz@cluster0.509j3yi.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(dbURL);
    console.log("Database is connected");
}
catch(err){
    console.log("Database not connected");
    console.log(err);
}

}