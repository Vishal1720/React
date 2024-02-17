import React from 'react'

const Buttons = (props) => {
    
    return (
    
    <>
      <button style={{backgroundColor:"blue",color:"white",marginTop:"4px",padding:'10px',fontSize:'1rem'}} onClick={props.fun}>{props.textValue}</button>
    </>
  )
}

export default Buttons
