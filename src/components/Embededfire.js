import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {CopyToClipboard} from "react-copy-to-clipboard"
export default function Embededfire(props) {
    const [state,setState]=useState("Copy")
    const [state2,setState2]=useState("Copy")
    const head=`<link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
  />
  <script src="https://unpkg.com/leaflet@1.0.1/dist/leaflet-src.js"></script>

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css"
    integrity="sha512-07I2e+7D8p6he1SIM+1twR5TIrhUQn9+I6yjqD53JQjFiMf8EtC93ty0/5vJTZGF8aAocvHYNEDJajGdNx1IsQ=="
    crossorigin=""
  />
  <script
    src="https://unpkg.com/leaflet@1.0.3/dist/leaflet-src.js"
    integrity="sha512-WXoSHqw/t26DszhdMhOXOkI7qCiv5QWXhH9R7CgvgZMHz1ImlkVQ3uNsiQKu5wwbbxtPzFXd1hK4tzno2VqhpA=="
    crossorigin=""
  ></script>
  <script src="https://unpkg.com/leaflet.tilelayer.gl@latest/src/Leaflet.TileLayer.GL"></script>
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css"
  />
  <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>

  <link rel="stylesheet" type="text/css" href="https://arevolutionaryact.com/assets/charts.css" />
  `
    const body=`
    <div id="root"></div>
    
    <script src="https://arevolutionaryact.com/embed/bundle_fire.js" type="text/javascript"></script>
    <script src="https://arevolutionaryact.com/assets/fire.js" type="text/javascript"></script>`
    
    return (props.trigger)?(
    <div className="popup" style={{ height:"150%",width:"150%",backgroundColor:"white",zIndex:2,borderRadius:10}}>
        <div className="popup-inner">
            <button className="close-button" style={{color:"white"}}  onClick={()=>props.setTrigger(false)}> close</button>
        </div>
            {props.children}
            <div style={{display:"flex"}}>
                <div>
                    <h3>copy this content into head of you html</h3>
                <CopyToClipboard text={head}>
                    <button style={{ width:"60px",height:"30px",fontSize:"10px"}} onClick={ ()=> setState("Copied")}>{state}</button>
                </CopyToClipboard>
                <textarea
                style={{width:"100%",height:"150%"}}
            value={head} />
                </div>
                <div>
                <h3>copy this content into body of you html</h3>
                <CopyToClipboard text={body}>
                    <button style={{ width:"60px",height:"30px",fontSize:"10px"}} onClick={()=> setState2("Copied")}>{state2}</button>
                </CopyToClipboard>
                <textarea style={{width:"100%",height:"150%"}}
            value={body}  />
                </div>
            
            
              </div>
              


    </div>
       
    ):"";
}



