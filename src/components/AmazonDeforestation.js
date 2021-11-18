import React,{useEffect,useState} from "react";
import AmazonDeforestationMap from "./AmazonDeforestationMap";


import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  useParams,
  useHistory,
} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import LazyLoad from "react-lazyload";

import Aos from 'aos'
import 'aos/dist/aos.css'

const AmazonDeforestation = () => {
  const { path, url } = useRouteMatch();
const [copText,setCopyText] = useState('<iframe src="https://arevolutionaryact.com/#/amazondefmap" width="100%" height="500px"></iframe>')
const [embedRegion,setEmbedRegion] = useState(false)  
React.useEffect(() => {
  Aos.init({duration:1500});
  window.scrollTo(0, 0);
}, [])
return (

    <main data-aos="fade-up-left" className="article campaign amazon-deforestation">
      <header data-aos="fade-up-left" className="entry-header high-impact-viewport x">
        <div data-aos="fade-up" className="text c l6">
          <h1 data-aos="fade-up">
            Amazon Rainforest Deforestation Map: How Long Does It Have Left?
          </h1>
          <p data-aos="fade-up">
            Scroll down to see how the rainforest will dissappear based on the
            current rate of deforestation.
          </p>
          <p class="cta with-icon with-pulsing-icon">
            <HashLink to="#play-animation">Play the animation</HashLink>
          </p>
          <div data-aos="fade-up" className="mouse_scroll">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div>
              <span className="m_scroll_arrows unu"></span>
              <span className="m_scroll_arrows doi"></span>
              <span className="m_scroll_arrows trei"></span>
            </div>
          </div>
        </div>
      </header>
      <div></div>
      <AmazonDeforestationMap data-aos="fade-up"/>
      <div className="feature-chart" id="play">
        <div className="chart">
          <div className="x chart-actions">
            <div className="c t6 l6 country-selector">
              <p data-aos="fade-up-left" ></p>
            </div>
            <div className="c t4 l4 embed-chart">
              <button className="button with-icon toggle-embed" onClick={()=>{
                if(embedRegion){
                  setEmbedRegion(true)
                }else{
                  setEmbedRegion(true)
                }
              }}>
                Embed map
              </button>
            {
              embedRegion?(
                <div style={{width:'100%'}}>
                <p data-aos="fade-up-left" >Paste this code into your web page.</p>
                <textarea placeholder="Embed code here" value={copText}></textarea>
                <button>Copy</button>
                <div className="close" onClick={()=>{
                     
                  navigator.clipboard.writeText(copText);
                  alert("Copied the text: " + copText);

                }}>Close</div>
              </div>
              ):(
                <></>
              )
            }
             
            </div>
            <div className="c t2 l2 logo">
              <a href="https://arevolutionaryact.com/">
                <img
                  src="../assets/img/a_revolutionary_act.png"
                  alt="A Revolutionary Act"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="share" data-aos="fade-up-left">
          <h3>Share this page:</h3>
          <ul>
            <li className="reddit">
              <a href="">Reddit</a>
            </li>
            <li className="twitter">
              <a href="">Twitter</a>
            </li>
            <li className="facebook">
              <a href="">Facebook</a>
            </li>
            <li className="linkedin">
              <a href="">Linkedin</a>
            </li>
          </ul>
        </div>
      </div>
      <section className="methodology">
        <div data-aos="fade-up-left" className="x">
          <div className="c l6">
            <h2 class="subhead">How is it calculated?</h2>
            <p data-aos="fade-up-left" >The current rate of deforestation is approximately 11,000 square kilometers per year*. That's approximately 2 million football fields of forest lost per year.</p>
            <p data-aos="fade-up-left" >The map identifies all the areas of forest that are connected to previously destroyed forest and divides 11,000 square kilometers of area between all of those areas.</p>
            <p data-aos="fade-up-left" >A year is represented by 0.2 seconds. Every 0.2 seconds 11,000km of green forest directly connected to previously destroyed forest is turned red. As a result it appears as though the deforestation areas are growing and the remaining forest is shrinking, showing us approximetely how quickly the forest will be lost based on current levels of deforestation.</p>
            <p className="note">*A satalite based forest clearing detection survey by PRODES (Projeto de Monitoramento do Desmatamento na Amazônia Legal por Satélite) determined that 11,000 square kilometers of forest was lost in 2020. (<Link to="https://www.nature.com/articles/s41467-021-22840-7">nature.com</Link>)</p>
          </div>
          
        </div>
      </section>
    </main>
  );
};

export default AmazonDeforestation;
