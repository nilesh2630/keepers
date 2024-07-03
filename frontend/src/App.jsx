
import React,{useState,useEffect} from "react";
import Header from "./header"
import Createarea from "./CreateArea";
import {getalltodo,addtodo,deletetodo} from "./utils/handleapi";
import Note from "./note";
import Footer from "./footer";
function App(){
const [todo,settodo]=useState([]);
// const [text,settext]=useState([]);
    useEffect(()=>{
        console.log("useeffect");
        getalltodo(settodo);
      
    },[]);

    function addnote(note){
       addtodo(note,settodo);
    }
    

    return <div>
        <Header/>
        <Createarea 
            onadd={addnote}
        />
        {todo.map(function(noteitems,index){
            console.log("index",index);
            return(<Note key={index} id={index} title={noteitems.title} content={noteitems.content} ondelete={()=>deletetodo(noteitems._id,settodo)}/>)
        })}
        
        <Footer/>
    </div>

}

export default App;