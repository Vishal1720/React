import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => {
  return (
    <>
    <div className='navbar' style={props.mystyle}>
      <Link to="./">Home</Link>
      <Link to="./reg">Registration</Link>
      <Link to="./about">About</Link>
      <Link to="./contact">TempContact-Book</Link>
    
      
      <div className="form-check form-switch mx-4 overflow-visible">
      <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Light Mode</label>
  <input style={props.mystyle} className="form-check-input" type="checkbox" onChange={props.btnfun} role="switch" id="flexSwitchCheckDefault"/>
  
</div>
    </div>
    </>
  )
}

export default Nav
