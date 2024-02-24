import React from 'react'
import Buttons from './Buttons'
import { useState } from 'react'
const TextForm =(props)=>{
    const [text,setText]=useState('I am Vishal Shetty');
    var tarea;
    
    const upper=()=>{
        var newText=text
      setText(newText.toUpperCase())
        props.showAlert("Upper case enabled ","Successful" )
        emptycheck("Karna kya chahte ho ","bro")
    }
    const lower=()=>{
        var newText=text
      setText(newText.toLowerCase())
      props.showAlert("Lower case enabled "," Yo let's go" )
        emptycheck("Kuch Likh to Do"," Bhaisahab")
    }

    const emptycheck=(msg,txt)=>{
      var tarea=document.getElementById('textField');
      if(tarea.value.length === 0)
      props.showAlert(msg,txt)
    }

    const clearit=()=>{
    
      setText("")
      props.showAlert("Mujhe kuch dikhai nahi de raha "," Maa" )
      emptycheck("Saaf thali ko aur saaf nahi kar sakte ","Shreeman")
    }
const [bold,setbold]=useState('normal')
    const boldit=()=>{
    
         tarea=document.getElementById('textField');
        if(bold === 'normal')
        {
        tarea.style.fontWeight="bold";
        
        setbold('bold')
        props.showAlert("Getting dark "," Sshh" )
        }else{
          tarea.style.fontWeight="normal";
          setbold('normal');
          props.showAlert("Lights on "," " )
        }
        emptycheck("Kuch Likh to Dete "," brother")
          
      }

      const copyit=()=>{
         tarea=document.getElementById('textField');
        navigator.clipboard.writeText(tarea.value);
        props.showAlert("Nakal karne ki aadat ab tak gayi nahi kya "," Bhai" )
        emptycheck("Khali Kagaz se Kya Nakal karega ","Bhai")
      }

    const replace=()=>{
        var newText=text
        var old=document.getElementById('oldtext').value;
    var newt=document.getElementById('newtext').value;
      setText(newText.replace(old,newt))
      props.showAlert("Kuch badla badla sa lag raha hai "," " )
      if(newt.value == null || old.value == null)
      {
        props.showAlert("Kya Badalna hai vo to batao ","uncle" )
      }
      emptycheck("Khokli Duniya mai badlav nahi hote ","Dost")
        
    }

    const changeText=(e)=>{
setText(e.target.value)
    }
    
    return(
<>

<textarea id="textField" rows={6} value={text} onChange={changeText}  
style={{fontSize:"1.1rem",width:"32%",padding:"1%",marginLeft:"36%"}}></textarea>
<div className='buttondiv '>
<Buttons textValue="Change to Uppercase" fun={upper}/>
<Buttons textValue="Change to Lowercase" fun={lower}/>
<Buttons textValue="Clear" fun={clearit}/>

<Buttons textValue="Copy" fun={copyit}/>
<Buttons textValue="Bold" fun={boldit}/>
</div>
<input type="text"  id="oldtext"  placeholder="Enter word to replace"/>
<input type="text" id="newtext" placeholder="Enter  new to place"/>
<Buttons textValue="Replace" fun={()=>replace()}/>

<div className='text-center'>
    <h2>Text Summary</h2>
    <p>Number of characters {text.length}</p>
    <p>Number of words {text.split(" ").length}</p>
    <p>Minutes req {0.004  *text.split(" ").length}</p>
    <h2>Preview</h2>
    <p className='para'> {text}</p> 
    
</div>



</>)
}

export default TextForm