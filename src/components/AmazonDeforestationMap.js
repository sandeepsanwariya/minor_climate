import React,{useEffect} from "react";
import { HashLink } from "react-router-hash-link";
import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  useParams,
  useHistory,
} from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'
import LazyLoad from "react-lazyload";
import mapboxgl from 'mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

 mapboxgl.accessToken = 'pk.eyJ1IjoiZmFyaGFuMzIiLCJhIjoiY2tzejAxbnA0Mm91ZTJ5bjEzaTU2cGswYiJ9.6uR1oXCY089BjFo38KCY7g';
 var map;
 const bounds = {
"type": "FeatureCollection",
"name": "bound",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
]
}

const AmazonDeforestationMap = () => {
  const { path, url } = useRouteMatch();
useEffect(() => {
  Aos.init({duration:1500});
    map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/farhan32/cktrc5fwr41b917jqea2h7q93?optimize=true',
            center: [-58.79273399223996, -6.4115490603875],
            maxZoom : 6.9,
            minZoom:4.5,
            zoom: 4.59251512510783
        });
        var years = 2016
        var nav = new mapboxgl.NavigationControl()
        map.addControl(nav);
        map.on('style.load', () => {
            var mag1 = ['<', ['get', 'd'], 1];
                    
                map.setFilter('280-14529l', mag1);
            map.addSource('bounds',{
                          type:'geojson',
                data:bounds
                          })
            map.addLayer({
                id:'bound',
                source:'bounds',
                type:'fill',
                paint:{
                    'fill-color':'lightgreen'
                }
            },'water')

           
        var inc = 1
        var interval
        
         document
            .getElementById('slider')
            .addEventListener('input', ({
                target
            }) => {

                const hour = parseInt(target.value);
             inc = parseInt(target.value)
             document.getElementById('year').innerHTML = years + parseInt(inc)
           
                 var mag1 = ['<', ['get', 'd'], hour];
            
                map.setFilter('280-14529l', mag1);

            });
        
        document.getElementById('stop').addEventListener('click',function stopFunction() {
  clearInterval(interval);
             document.getElementById('start').style["background-color"] = "gainsboro";
})
 document.getElementById('start').addEventListener('click',function startprop(){
  document.getElementById('start').style["background-color"] = "yellow";
    interval=setInterval(function(e){
        
        var slider = document.getElementById('slider')
        var val = slider.value
        
        var mag = ['==', ['get', 'd'], 0];
                 var mag1 = ['<', ['get', 'd'], parseInt(val)];
            
                
                map.setFilter('280-14529l', mag1);
        
        inc=inc+1
        slider.value = inc
        document.getElementById('year').innerHTML = years + parseInt(val)
        if(inc == 284){
            inc = 1
            clearInterval(interval);
            document.getElementById('start').style["background-color"] = "gainsboro";
        }
        
    },250)
})
        

        })
}, []);
  return (
   <>
   
       <div style={{backgroundColor:'#050031'}} className="slidecontainer play-animation" id="play-animation">
        <h2 data-aos="fade-up" className="headline">
        This animation shows when the Amazon Rainforest will be completely gone, based on the current rate of deforestation
        </h2>
        <p data-aos="fade-up">Approximately 11,000 square kilometers of the rainforest are lost every year*. The map below shows us that area turn from green to red each year, where one year is represented by 0.2 seconds.</p>
        <p data-aos="fade-up">Unless we drastically slow down deforestation, the rainforest will soon exist only in our memories, resulting in the loss of billions of plants and animals.</p>
        <p data-aos="fade-up">We don't know the full repurcussions of this historic change to the planet. The humans of the 20th and 21st centuries are gambling with their future.</p>

        <div hidden>
          {" "}
          <button id="switch">
            <h1>{'inputValue'}</h1>
          </button>{" "}
        </div>

        <div data-aos="fade-up" className="x">
          <div className="c t2 buttons">
            <button id="start">Play</button>
            <button id="stop">Pause</button>
          </div>
          <div className="c t7 range-slider">
            <input
              
              type="range" min="1" max="284" step="1" value="1"
              style={{ width: "100%" }}
              className="slider"
              id="slider"
            />
            <p>
            Year : <span id='year'>2016</span>
            </p>
          </div>
          <div class="c t3 show-all-toggle">
          <div className="session">
            <div className="colors"></div>
            <div className="labels">
                <div style={{backgroundColor:'#e31a1c',color:'whitesmoke'}} className="label def">Deforestation Region</div>
                <div style={{backgroundColor:'lightgreen'}} className="label for">Forest Region</div>
                <div style={{backgroundColor:'#fed976'}} className="label bare">Barren Land</div>
                <div style={{backgroundColor:'green',color: 'whitesmoke'}} className="label">Protected Regions</div>
            </div>
        </div>
            <Switch
              id="switch2"
              checkedIcon={
                <p style={{ paddingTop: "10%", paddingLeft: "14%" }}>2500</p>
              }
              uncheckedIcon={
                <p style={{ paddingTop: "7%", paddingLeft: "9%" }}>now</p>
              }
              width={95}
              height={35}
              onColor="#FF0000"
              onHandleColor="#808080"
              onChange={'onChangeHandler'}
              checked={'inputValue'}
            />
          </div>
        </div>
      </div>
      <div id="map" style={{width:"100%",height:"500px"}}></div>
    
    </>
  );
};

export default AmazonDeforestationMap;