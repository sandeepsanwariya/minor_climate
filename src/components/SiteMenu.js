import React from "react"
import {
  Link
} from "react-router-dom";

const SiteMenu =(prop)=> {
  
    return (
      <>
        <nav>
          
          
 
        <div style={{
            position:'fixed',
            backgroundColor:'whitesmoke',
            top:'0px',
            right:prop.sideBarState,
            bottom:'0px',
            width:'350px',
            padding:'25px',
            
            transition:'.25s',
        }}
        onClick={()=>{
            
            prop.setSideBarState('-400px')
            var element= document.createElement('div')
           
        }}
        > 
        
          <ul>
             {prop.menu.map((menuItem,index) => (
               <li key={index}><Link to={menuItem.link}>{menuItem.title}</Link></li>
            ))} 
          </ul>
        </div>
          
        </nav>
        {prop.sideBarState=='-400px'?(
          <>
           
          </>
        ):(
          <>
           <div style={{width:'100vw',height:'100vh',position:'fixed',backgroundColor:'dimgrey',opacity:'0.4'}} onClick={()=>{prop.setSideBarState('-400px')}}></div>
          </>
        )}
        </>
    )
  
}
export default SiteMenu