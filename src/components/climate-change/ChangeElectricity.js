import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function ChangeElectricity() {
  React.useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  return (
    <section className="save-the-world-component">
      <div className="grid">
        <div className="x" data-aos="fade-up">
          <div className="c t4 hero-level">
            <h3 className="subhead">
              Become a <strong>level 1 Climate Hero</strong>
            </h3>
          </div>
          <div data-aos="fade-up-left" className="c t8">
            <h4 className="headline">
              Change your home electricity to renewable energy
            </h4>
            <ul className="meta">
              <li className="difficulty">Difficulty: Easy</li>
              <li className="time">Time: 15 minutes</li>
              <li className="impact">Impact: Critical</li>
            </ul>
            <p>First of all everyone needs to switch their home electricity supply to renewable energy. This alone will reduce emmissions. But it also enables us to switch our heating and cars to renewable energy in the next steps.</p>
            <p>
              In the UK it's very easy to switch your home electricity to 100% renewable. I switched our home to SO Energy and I actually ended up reducing my energy bill.
            </p>
            <p>In the United States I believe access to renewable energy can vary from state to state. But a quick Google search should return results for renewable suppliers that you can switch to online in minutes. It's extremely easy and you might actually end up reducing your bill.</p>
            <p>
              If every home in the United States switched their electricity
              supply to renewables, we'd reduce atmospheric carbon
              by approximately 270 million tonnes per year. That's about 0.5% of the total global annual emmissions, which won't make a huge impact, but it will enable the next key steps, which is extremely important. In fact, <strong>it's critical that every household and every business makes this switch if we want to stop climate change</strong>.
            </p>
            <div className="cta">
              <Link to="/carbon-neutral-electricity-suppliers/">
                Choose a carbon neutral electricity supplier
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

