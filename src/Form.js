import React from 'react'
import { useState } from 'react';
const Form = (props) => {
  const [url,seturl]=useState("");
    const changeurl=(src)=>
    {
     
        seturl(src) 
        
    }
    const handlesubmit=(urloc)=>{if (urloc!=="") props.fun(urloc);props.fun2(true)}
    
  return (
    <div>
   <div>
    <h1 id="heading">Upload</h1>
  
    <section style={{width:"50%",display:'flex',flexDirection:'column',margin:'auto'}}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Description</label>
    <input type="text" className="form-control"   placeholder="Enter description"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Url</label>
    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=>changeurl(e.target.value)} value={url} placeholder="Enter url "/>
  </div>
  
  <button onClick={()=>handlesubmit(url)} className="btn btn-primary">Submit</button>
</section>
   
  </div>
    </div>
  )
}

export default Form
