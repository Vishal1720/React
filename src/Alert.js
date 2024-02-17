import React from 'react'

export default function Alert(props) {
  return (
    props.alert.msg&&
    <div>
    
<div class="alert alert-warning alert-dismissible fade show text-center" role="alert">
  <strong>{props.alert.msg}</strong>{props.alert.typ} 
  
</div>
    </div>
  )
}
