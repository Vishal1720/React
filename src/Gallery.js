import React, { useState } from 'react'
import Form from './Form'
import bin from './bins2.png'
const Gallery = () => {

    const [gallery,setgallery]=useState([{url:"https://media.tenor.com/2vzT-8oPXl8AAAAi/tkthao219-bubududu.gif",desc:'Cat'}
  ,{url:"https://media.tenor.com/mNYDqm1QN40AAAAi/cool-swag.gif",desc:'Yo'}])
   const [showgal,setshowgal]=useState(true);
    const settheurl=(src,descr)=>{
        setgallery([...gallery,{url:src,desc:descr}])
        console.log(descr)
    }

    const deleteit=(url,desc)=>{
      setgallery(gallery.filter((item)=>{return (url!==item.url && desc!==item.desc)}))
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
         return <figure style={{width:'fit-content',height:'fit-content'}}><img key={e.url} style={{objectFit:"cover",width:'fit-content',margin:'2px'}} height="400px" width='500px' src={e.url} alt="Images"/>
<figcaption style={{textAlign:'center',fontWeight:'bold',fontSize:'1.5rem'}}>{e.desc}<img onClick={()=>{deleteit(e.url,e.desc)}} style={{width:'3vw',height:'3vw',display:'inline'}}  alt="del icon" src={bin}></img></figcaption>
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
