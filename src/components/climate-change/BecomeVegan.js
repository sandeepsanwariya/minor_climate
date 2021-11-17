import React from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function BecomeVegan() {
  React.useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  return (
    <section className="save-the-world-component">
      <div className="grid">
        <div className="x">
          <div data-aos="fade-up"  className="c t4 hero-level">
            <h3 className="subhead">
              Become a <strong>level 8 Climate Hero</strong>
            </h3>
          </div>
          <div data-aos="fade-up-right"  className="c t8">
            <h4 className="headline">Go vegan 5 days a week</h4>
            <ul className="meta">
              <li className="difficulty">Difficulty: Moderate</li>
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
