import React from 'react'
import LazyLoad from 'react-lazyload';
export default function ForestfireMap() {
    const position = [51.505, -0.09]
    React.useEffect(() => {
      const script = document.createElement("script");
  
      script.src = "assets/fire.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
      return () => {
  
        document.body.removeChild(script);
      };
    }, []);
    return (
      <LazyLoad>
      <div>
      <div id="map" style={{ height: "600px", width: "100%" }}></div>
    </div></LazyLoad>
    )
}
