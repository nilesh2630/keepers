import React, { useState } from "react";
function Createarea(props){

    const [note,setNote]=useState({
        title:"",
        content:""
    });
    function handlechange(event){
        console.log(event.target);
     const {name,value}=event.target;
     setNote(prevNote=>{
        return{
         ...prevNote,
         [name]:value
     
        }; 
    });
 }
    function submitnote(event){
        props.onadd(note);
        setNote({
            title:"",
            content:""
        });
        event.preventDefault();
    }

   

    return <div>
        <form className="create-note">
        <input name="title" type="text" placeholder="title" onChange={handlechange}  />
        <textarea name="content" placeholder="take a note"  onChange={handlechange} rows="3"/>
        <button onClick={submitnote}>add</button>

        </form>
    </div>
}
export default Createarea;