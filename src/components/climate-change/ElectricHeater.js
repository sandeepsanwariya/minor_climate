import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function ElectricHeater() {
  React.useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  return (
    <section className="save-the-world-component">
      <div className="grid">
        <div data-aos="fade-up" className="x">
          <div className="c t4 hero-level">
            <h3 className="subhead">
              Become a <strong>level 3 Climate Hero</strong>
            </h3>
          </div>
          <div data-aos="fade-up-left" className="c t8">
            <h4 className="headline">
              Change your home's gas furnace (gas boiler) to an electric water
              heater
            </h4>
            <ul className="meta">
              <li className="difficulty">Difficulty: Hard</li>
              <li className="time">Time: 2 days</li>
              <li className="impact">Impact: Significant</li>
            </ul>
            <p>
              Most homes in the West are heated using a furnace (which we call
              a gas boiler in the UK). In order to stop climate change we're
              going to need to change all the gas powered water heaters to
              electric.
            </p>
            <p>Once you've switched your furnace to an electric heater for your home heating, you'll now be using renewable energy sources like solar and wind to power your home, your car and your heating. It's a huge step forward.</p>
            <p>Electric heaters are actually cheaper to run, but
              installing one is expensive. You may end up saving money in the long run but the initial cost is high.</p>
            <div className="cta">
              <a href="https://www.trilliontreecampaign.org/" target="_blank">
                Switch to an electric water heater
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

