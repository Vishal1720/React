import React from 'react';
import './App.css';
import About from './About';
 import TextForm from './TextForm';
import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Alert from './Alert';
import Contact from './Contact';
import Gallery from './Gallery';
function App() {
 
  const [dark,setdark]=useState(true);
  const [alert,setalert]=useState({msg:'',typ:''});

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      typ:type
    })
    setTimeout(()=>{setalert({msg:'',typ:''})},2000)
  }
  const [mystyle1,setmystyle1]=useState({
    backgroundColor:'black'
})
const [mystyle2,setmystyle2]=useState({
  backgroundColor:'#222227'
})
const [bodystyle,setbodystyle]=useState({
  backgroundColor:'#8d8585'
})



const togglemystyle1=()=>{
  if(dark){
    setmystyle1({
      backgroundColor:'rgb(28,28,119)',
      color:'white'
    })
  }else{
      setmystyle1({
        backgroundColor:'black',
        color:'white'
      })
    }
  }
    const togglemystyle2=()=>{
      if(dark){
        setmystyle2({
          backgroundColor:'#3636be',
          color:'white'
        })
      }else{
          setmystyle2({
            backgroundColor:'rgb(34, 34, 39)',
            color:'white'
          })
        }
      }
  
      const togglebodystyle=()=>{
        if(dark){
          setbodystyle({
            backgroundColor:'rgb(76,76,191)',
            color:'white'
          })
        }else{
            setbodystyle({
              backgroundColor:'#8d8585',
              color:'white'
            })
          }
        }

  const togglemode=()=>{
    setdark(!dark)
    togglemystyle1()
    togglemystyle2()
    togglebodystyle()
    if(dark)
    {
      showAlert("Lightmode enabled ","success")
    }
    else{
      showAlert(" Darkmode enabled ","success")
    }
  }

  
  return (
    
    <div id='main' style={bodystyle} >
      <BrowserRouter>
      <Header mystyle={mystyle1} />
      <Nav mystyle={mystyle2} btnfun={togglemode}/>
         <Alert alert={alert}/>
      <Routes>
      <Route path='about' element={<About mystyle={mystyle1} mystyle1={mystyle2}/>}/>
      <Route path='/' element={<TextForm showAlert={showAlert}/>}/>
      <Route path='/gallery' element={<Gallery/>}></Route>
      <Route path='/contact' element={<Contact mystyle={mystyle1}/>}/>
      <Route path='index.html' element={<TextForm showAlert={showAlert}/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
