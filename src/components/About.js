import React from "react";
import PlantATree from "./PlantATree";
import RemoveCO2 from "./RemoveCO2";
import ChangeElectricity from "./ChangeElectricity";
import TellTwoFriends from "./TellTwoFriends";
import UpVote from "./UpVote";
import SwitchBank from "./SwitchBank";
import SellCar from "./SellCar";

class About extends React.Component {
  render() {
    return (
      <main className="grid article single">
        <article className="x">
          <div className="c l7">
            <header className="entry-header">
              <h1>About</h1>
              <p>
                Scroll down to see how the world is going to change for the next
                generation.
              </p>
            </header>
            <div className="entry-content">
              <p></p>
            </div>
            <PlantATree />
            <RemoveCO2 />
            <ChangeElectricity />
            <TellTwoFriends />
            <UpVote />
            <SwitchBank />
            <SellCar />
          </div>
        </article>
      </main>
    );
  }
}
export default About;
