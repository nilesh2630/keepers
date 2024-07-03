const express=require('express')
const mongoose=require('mongoose')
const routes=require('./routes/todorouter');
const cors=require('cors')
const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/todolistmern").then(()=>console.log("connected to mongodb")).catch((err)=>console.log(err));

app.use(routes);
app.listen(5000,()=>console.log("server started"));

