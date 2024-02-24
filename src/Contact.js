import React from 'react'
import {useState} from 'react'
import Buttons from './Buttons'
import bin from './bins.png'
const Contact = (props) => {
    const [cont,setcontact]=useState([{id:'John',contact:'9145377915'}])

const [name1,setname1]=useState('')
const [con,setcon]=useState('')
const setname=(nam)=>{
    setname1(nam)
}
const setcont=(c)=>{
    setcon(c)
}
const deletecontact=(username,contactname)=>{
  const newcontact=cont.filter((e)=>{ return e.name!==username && e.contact!==contactname})
setcontact(newcontact)
}
    function setit(name,con)
    {
        
        if(name === ''|| con === '') {return}
        else{
        setcontact([...cont,{id:name,contact:con}])
        setcont('')
        setname('')

    }
    }
  return (
    
    <div className='container hc'>
        <input type="text" id="naam" value={name1} onKeyDown={(e)=>{if(e.key === 'Enter'){document.getElementById('contact').focus()}}} onChange={(e)=>{setname(e.target.value)}} placeholder='Enter name '/>

        <input type="text" id="contact" value={con} onKeyDown={(e)=>{if(e.key === 'Enter'){setit(name1,con)}}} onChange={(e)=>{setcont(e.target.value)}} placeholder='Enter contact '/>
        <Buttons fun={()=>setit(name1,con)} mystyle={props.mystyle1} textValue="Submit contact"/>
        <h1 className='text-center'>Contacts </h1>
      {cont.map((obj)=>(
        <div style={{display:'flex',flexWrap:'wrap',marginLeft:'33%',flexDirection:'row'}}> 
       <strong key={obj.id} className='text-center' style={{fontSize:'2rem'}}> <ul key={obj.id}>
        {obj.id}    -    {obj.contact}
        </ul> </strong><img style={{marginLeft:'10px'}} width="35vw" height="35vw" src={bin} alt="Del"  onClick={()=>deletecontact(obj.id,obj.contact)} />
        
        </div>
      ))}
     

    </div>
  )
}


 export default Contact
