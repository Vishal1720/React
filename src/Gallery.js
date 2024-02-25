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
      {<> <h1 id="heading">Gallery</h1><button onClick={()=>setshowgal(false)} class="cssbuttons-io-button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
  <span>Add</span>
</button></>
}
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
      
       </>
            }


      </div>
    
   
  </>
  )
}

export default Gallery
