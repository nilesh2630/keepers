import axios from 'axios';
const baseurl="https://keepers.onrender.com"

const getalltodo=(settodo)=>{
    axios.get(baseurl).then(({data})=>{
        console.log("data",data);
        settodo(data);
    }) //doubt
}
const addtodo=(text,settodo)=>{
    axios.post(`${baseurl}/save`,text).then((data)=>{
        console.log(data);
        getalltodo(settodo);
    }).catch((err)=>console.log(err));
}

const deletetodo=(_id,settodo)=>{
    axios.post(`${baseurl}/delete`,{_id}).then((data)=>{
        getalltodo(settodo);
    }).catch((err)=> console.log(err))
};

export {getalltodo,addtodo,deletetodo};
