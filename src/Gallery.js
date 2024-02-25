import React, { useState } from 'react'
import Form from './Form'

const Gallery = () => {

    const [gallery,setgallery]=useState([{url:"https://www.imgmacchine.it/wp-content/uploads/2023/07/1000x1000px_IMG_slogan-02-1024x1024.png",desc:'New image'}])
   const [showgal,setshowgal]=useState(true);
    const settheurl=(src,descr)=>{
        setgallery([...gallery,{url:src,desc:descr}])
        console.log(descr)
    }



    
    return (
        <>
       { showgal &&
    <div>
      <h1 id="heading">Gallery</h1><button style={{backgroundColor:'black',width:'70px',height:'70px',color:'white',fontSize:'40px',fontWeight:'bold',borderRadius:'30px',marginBottom:'10px',paddingLeft:'20px'}} onClick={()=>setshowgal(false)}>+</button>
      <div id="Gallery">
        {
        gallery.map((e)=>{
         return <figure style={{width:'fit-content',height:'fit-content'}}><img key={e.url} style={{objectFit:"cover",margin:'2px'}} height="400px" width='500px' src={e.url} alt="Images"/>
<figcaption style={{textAlign:'center',fontWeight:'bold',fontSize:'1.5rem'}}>{e.desc}</figcaption>
</figure>
         
        })
        }
      </div>
      </div>
      }
      
        <div>
            {
        !showgal&&
        <>
      <Form fun={(e,f)=>settheurl(e,f)} fun2={(e)=>setshowgal(e)} />
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
