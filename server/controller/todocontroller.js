const todomodel=require('../model/todomodel')
module.exports.gettodo=async(req,res)=>{
    const todo=await todomodel.find();
    res.send(todo);
}

module.exports.savetodo=async(req,res)=>{
    const {title:tit,content:cont}=req.body;
    console.log("ye hau",tit,cont);
    const ittem = new todomodel({ title:tit, content:cont });
    await ittem.save();
    res.status(201).json(ittem)
}

module.exports.deletetodo=async(req,res)=>{
    const {_id}=req.body;
    await todomodel.findByIdAndRemove(_id);
    res.redirect('/');
}