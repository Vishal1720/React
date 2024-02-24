import React, { useState } from 'react'
import Form from './Form'

const Gallery = () => {

    const [gallery,setgallery]=useState([{url:"https://www.imgmacchine.it/wp-content/uploads/2023/07/1000x1000px_IMG_slogan-02-1024x1024.png"}])
   const [showgal,setshowgal]=useState(true);
    const settheurl=(src)=>{
        setgallery([...gallery,{url:src}])
        console.log(src)
    }



    
    return (
        <>
       { showgal &&
    <div>
      <h1 id="heading">Gallery</h1>
      <div id="Gallery"><button style={{backgroundColor:'black',width:'70px',height:'70px',color:'white',fontSize:'40px',fontWeight:'bold',borderRadius:'30px',marginBottom:'10px',paddingLeft:'20px'}} onClick={()=>setshowgal(false)}>+</button>
        {
        gallery.map((e)=>{
         return <img key={e.url} style={{objectFit:"cover",margin:'2px'}} height="400px" width='500px' src={e.url} alt="Images"/>

         
        })
        }
      </div>
      </div>
      }
      
        <div>
            {
        !showgal&&
        <>
      <Form fun={(e)=>settheurl(e)} fun2={(e)=>setshowgal(e)} />
      {/* <input type="button" 
     
       onClick={()=>setshowgal(true)} style={{borderRadius:'10px',padding:'0px',minWidth:'60px',minHeight:'60px'}}
        value={'Gallery'}/> */}
       </>
            }


      </div>
    
   
  </>
  )
}

export default Gallery
