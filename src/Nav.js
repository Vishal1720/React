import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => {
  return (
    <>
    <div className='navbar' style={props.mystyle}>
      <Link to="./">Home</Link>
      <Link to="./gallery">Gallery</Link>
      <Link to="./about">About</Link>
      <Link to="./contact">TempContact-Book</Link>
    
      
      <div className="form-check form-switch mx-4 overflow-visible">
      <input id="checkboxInput" type="checkbox" onChange={props.btnfun}/>
    <label class="toggleSwitch" for="checkboxInput">
    </label>
     
  
  
</div>
    </div>
    </>
  )
}

export default Nav
