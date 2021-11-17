import React from 'react'
import {useEffect} from 'react'
import LazyLoad from 'react-lazyload';
function FloridaMap() {
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "assets/florida.js";
        script.type="text/javascript";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
          }
        
      }, );
    return (<>   <LazyLoad>
        <div>
         
            <div id="florida_map" style = {{height:'90vh',width:"100%",maxHeight: "120%"}}></div>
           
            <div className="slidecontainerf">
        <input type="range" min="0" max="143.7" step="0.3" value="0" style={{width: "30em"}}  className="slider" id="range"/>
        <p>Year: <span id="demo"></span></p>
      </div>
      <button id="start">start</button><button id="pause">pause</button>
        </div>
            </LazyLoad>
        </>
    )
}

export default FloridaMap
