import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Switch from "react-switch";

var stylingObject = {
  st: {
    marginLeft: "9%",

    display: "flex",
  },
  tx: {
    fontSize: "30px",
    marginTop: "0%",
    marginRight: "2%",
  },
};

function All_country(params) {
  console.log(params);

  const { fname } = useParams();
  var country = fname;
  country = country.replace(/-/g, " ");
  console.log("all con", fname);
  useEffect(() => {
    
    const script = document.createElement("script");
    script.src = "assets/mapping2.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (checked) => {
    console.log("chek", document.getElementById("switch2").checked);
    if (checked === true) {
      document.getElementById("switch").click();
      console.log("chekT", checked);
      console.log("ckekS", inputValue);
    }
    if (checked === false) {
      document.getElementById("switch").click();
      console.log("chekF", document.getElementById("switch2").checked);
      console.log("ckekS", inputValue);
    }
    setInputValue(checked);
  };

  return (
    <>  
      <div hidden>
        <h1 id="c_name">{fname}</h1>
        <input id="loc_change" defaultValue={fname} />
      </div>
      <div className="slidecontainer play-animation" id="play-animation">
        <h2 className="headline">
          See how Sea Level Rise Will Devastate Coastal Parts of{" "}
          <span id="con_name">{country}</span>
        </h2>
        <p>
          Press play to see how the global sea level will rise causing coastal
          flooding around the <span id="con_name">{country}</span>
        </p>
        <div hidden>
          {" "}
          <button id="switch">
            <h1>{inputValue}</h1>
          </button>{" "}
        </div>
        <div className="x">
          <div className="c t2 buttons">
            <button id="start">Play</button>
            <button id="pause">Pause</button>
          </div>
          <div className="c t7 range-slider">
            <input
              type="range"
              min="0"
              max="143.7"
              defaultChecked="0"
              step="0.3"
              style={{ width: "100%" }}
              className="slider"
              id="range"
            />
            <p>
              Year: <span id="demo"></span>
            </p>
          </div>
          <div class="c t2">
            <p>Show all floods:</p>
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
              onChange={onChangeHandler}
              checked={inputValue}
            />
          </div>
        </div>
      </div>

      <div>
      
        <div id="map" style={{ height: "600px", width: "100%" }}></div>
      </div>
    </>
  );
}

export default All_country;
