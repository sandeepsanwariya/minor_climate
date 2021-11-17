import React,{useEffect,useState} from "react";
import SiteMenu from "./SiteMenu";
import {
  Link
} from "react-router-dom";

const SiteHeader = () => {


  const [sideBarState,setSideBarState] = useState('-400px')
  const [state, setstate] = useState({
  
  menu: [
    {
      id: 1,
      title: "How to stop climate change",
      link: "/how-to-stop-climate-change",
      },
    {
      id: 2,
      title: "Sea level rise map",
      link: "/climate-change"
    },
    {
      id: 3,
      title: "Amazonian rainforest deforestation map",
      link: "/amazon-deforestation",
    },
    {
      id: 4,
      title: "California wildfires map",
      link: "/california-wildfires",
    },
    {
      id: 5,
      title: "Electric cars ranked by range",
      link: "/electric-cars",
    },
  ],
});
  

 
    return (
      <header className="site-header">
        <div className="site-logo">
          <a href="/">
            <img
              src="/assets/img/a_revolutionary_act_black.png"
              alt="A Revolutionary Act"
            />
          </a>
        </div>
        <div className={"menu-toggle "} id="menuToggle" onClick={()=>{
          setSideBarState('0px')
        }}> 
         
        </div>
        <SiteMenu menu={state.menu} sideBarState={sideBarState} setSideBarState={setSideBarState}/>
        
      </header>
    );
  
}
export default SiteHeader;
