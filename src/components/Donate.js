import React from "react";
import { HashLink as Link } from "react-router-hash-link";

class Donate extends React.Component {
  render() {
    return (
      <section className="save-the-world-component">
        <div className="grid">
          <div className="x">
            <div className="c t4 hero-level">
              <h3 className="subhead">
                Become a <strong>level 9 Climate Hero</strong>
              </h3>
            </div>
            <div className="c t8">
              <h4 className="headline">Join A Revolutionary Act (ARA)</h4>
              <ul className="meta">
                <li className="difficulty">Difficulty: Easy</li>
                <li className="time">Time: 3 minutes</li>
                <li className="impact">Impact: Significant</li>
              </ul>
              <p>
                I'm searching for people who want to change the world to become
                leaders for A Revolutionary Act (ARA) -- to help me get more
                people to complete the steps on this page.
              </p>
              <p>
                Imagine the difference we could make if we could get a million
                people to complete the steps on this page. To do that we need
                you to join us.
              </p>
              <div className="cta">
                <Link to="./join">Join ARA</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Donate;
