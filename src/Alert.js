import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:'50px'}}>
    {props.alert.msg&&
    <div >
    
<div className="alert alert-warning alert-dismissible fade show text-center" role="alert">
  <strong>{props.alert.msg}</strong>{props.alert.typ} 
</div>

    </div>}

    </div>
  )
}
