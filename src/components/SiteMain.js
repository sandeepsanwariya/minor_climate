import * as React from "react";
import { Switch, Route,useLocation, Link, HashRouter as Router} from "react-router-dom";
import HomePage from "./HomePage";
import ClimateChange from "./ClimateChange";
import ClimateChange2 from "./ClimateChange2";
import SinglePost from "./SinglePost";
import AmazonDeforestation from "./AmazonDeforestation";
import CaliforniaWildfires from "./CaliforniaWildfires";
import HowToStopClimateChange from "./HowToStopClimateChange";
import Contact from "./Contact";
import ElectricCars from "./ElectricCars";
import { withRouter } from 'react-router-dom';
import AmazonDeforestationMap from "./AmazonDeforestationMap";
import BusinessRankings from "./businesses/BusinessRankings";
import EthicalBanks from "./businesses/SustainableBanks";
import Broadband from "./businesses/Broadband";
import SustainableBeers from "./businesses/SustainableBeers";
import DonateToARA from "./DonateToARA";
import {AnimatePresence} from 'framer-motion'
import ReactGA from 'react-ga';
import { process } from 'postcss-preset-env';
import {Component} from "react";

import SustainableElectricity from "./businesses/SustainableElectricity";
const SiteMain =({history})=> {
  history.listen((location, action) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
});
let location = useLocation()
    return (

      <Route>
        <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location}  key={location.pathname}>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/about" exact component={SinglePost}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/donate" exact component={DonateToARA}></Route>
        <Route path="/climate-change/" component={ClimateChange}></Route>
        <Route path="/amazondefmap/" component={AmazonDeforestationMap}></Route>
        <Route path="/climate-change-:fname" component={ClimateChange2}></Route>
        <Route
          path="/how-to-stop-climate-change"
          component={HowToStopClimateChange}
        ></Route>
        <Route
          path="/amazon-deforestation/"
          component={AmazonDeforestation}
        ></Route>
        <Route
          path="/california-wildfires/"
          component={CaliforniaWildfires}
        ></Route>
        <Route
          path="/sustainable-businesses/"
          component={BusinessRankings}
          ></Route>
          <Route path="/carbon-neutral-electricity-suppliers/" component={SustainableElectricity}></Route>
          <Route path="/electric-cars/" component={ElectricCars}></Route>
          <Route path="/sustainable-banks/" component={EthicalBanks}></Route>
          <Route
          path="/sustainable-broadband/"
          component={Broadband}
          ></Route>
          <Route path="/sustainable-beers/" component={SustainableBeers}></Route>
          

        
      </Switch>
      </AnimatePresence>
     
      </Route>
    )
        

    }
export default withRouter(SiteMain);
