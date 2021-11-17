import React from "react";

import ChangeElectricity from "./climate-change/ChangeElectricity";
import SellCar from "./climate-change/SellCar";
import ElectricHeater from "./climate-change/ElectricHeater";
import RemoveCO2 from "./climate-change/RemoveCO2";
import TellTwoFriends from "./climate-change/TellTwoFriends";
import UpVote from "./climate-change/UpVote";
import SwitchBank from "./climate-change/SwitchBank";
import BecomeVegan from "./climate-change/BecomeVegan";
import Ecologi from "./climate-change/Ecologi";
import AdoptAnAnimal from "./climate-change/AdoptAnAnimal";
import RunForAMillionTrees from "./climate-change/RunForAMillionTrees";
import GreenConcrete from "./climate-change/GreenConcrete";
import Aos from 'aos'
import 'aos/dist/aos.css'



export default function SaveTheWorldClimateChange() {
  React.useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  return (
      
    <div className="save-the-world-components">
      <div className="grid">
        <header className="x">
          <div className="c l2"></div>
          <div data-aos="fade-up-left" className="c l6">
            <h2 class="mega-headline">How to stop climate change</h2>
            <p>In Bill Gates' excellent book <em>How to Avoid a Climate Disaster</em>, he demonstrates with facts that we need to reduce our annual greenhouse gas emmissions by 51 billion tons.</p>
            <p>That's a collossal figure. But it is possible. In order to do it, we need to stop using fossil fuels. To do that, everyone needs to make the switch in every part of their lives. If you really care about climate change and you really want to stop it, you need to do these things. </p>
            <h3 className="headline">Start here...</h3>
          </div>
          <div className="c l4">
            <img src="../assets/img/climate-change/books/bill-gates-how-to-stop-a-climate-disaster.jpg" alt="Bill Gates: How to Avoid a Climate Disaster" />
          </div>
        </header>
      </div>
      <section className="save-the-world-components">
        <ChangeElectricity data-aos="fade-up-right"/>
        <SellCar data-aos="fade-up-right"/>
        <ElectricHeater data-aos="fade-up-left"/>
        <RemoveCO2 data-aos="fade-up-right"/>
        <TellTwoFriends data-aos="fade-up-left"/>
        <UpVote data-aos="fade-up-right"/>
        <SwitchBank data-aos="fade-up-left"/>
        <BecomeVegan data-aos="fade-up-right"/>
        <AdoptAnAnimal data-aos="fade-up-left"/>
        <Ecologi data-aos="fade-up-right"/>
        <RunForAMillionTrees data-aos="fade-up-left"/>
        <GreenConcrete data-aos="fade-up-right"/>
      </section>
    </div>
    );
}


