const mongoose=require("mongoose");
const todoschema=new mongoose.Schema({
    title:String, content:String
})

const a=mongoose.model('kepper',todoschema);
module.exports=a;