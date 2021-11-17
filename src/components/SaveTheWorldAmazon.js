import React from "react";
import PlantATree from "./climate-change/PlantATree";
import RemoveCO2 from "./climate-change/RemoveCO2";
import ChangeElectricity from "./climate-change/ChangeElectricity";
import TellTwoFriends from "./TellTwoFriends";
import UpVote from "./UpVote";
import SwitchBank from "./climate-change/SwitchBank";
import SellCar from "./climate-change/SellCar";
import Ecologi from "./climate-change/Ecologi";
import AdoptAnAnimal from "./climate-change/AdoptAnAnimal";
import RunForAMillionTrees from "./climate-change/RunForAMillionTrees";
import Donate from "./Donate";
//import Greenpeace from "./Greenpeace";
import BecomeVegan from "./BecomeVegan";
import BoycottSoy from "./BoycottSoy";

class SaveTheWorldAmazon extends React.Component {
  render() {
    return (
      <section className="save-the-world-components">
        <BecomeVegan />
        <BoycottSoy />
        <TellTwoFriends />
        <UpVote />

        <Donate />
      </section>
    );
  }
}
export default SaveTheWorldAmazon;
