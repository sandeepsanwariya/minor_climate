import React from "react";

class BoycottSoy extends React.Component {
  render() {
    return (
      <section className="save-the-world-component">
        <div className="grid">
          <div className="x">
            <div className="c t4 hero-level">
              <h3 className="subhead">
                Become a <strong>level 1 Amazon Hero</strong>
              </h3>
            </div>
            <div className="c t8">
              <h4 className="headline">Boycott soy products</h4>
              <ul className="meta">
                <li className="difficulty">Difficulty: Easy</li>
                <li className="time">Extra time: None</li>
                <li className="impact">Impact: Significant</li>
              </ul>
              <p>Livestock</p>
              <div className="cta">
                <a href="https://allplants.com/choose-allplants">
                  Sign-up to AllPlants.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default BoycottSoy;
