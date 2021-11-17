import React from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'
export default function RemoveCO2() {
  React.useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  return (
    <section className="save-the-world-component">
      <div className="grid">
        <div data-aos="fade-up" className="x">
          <div className="c t4 hero-level">
            <h3 className="subhead">
              Become a <strong>level 4 Climate Hero</strong>
            </h3>
          </div>
          <div data-aos="fade-up-left" className="c t8">
            <h4 className="headline">
              Remove 85kg of CO2 from the atmosphere and become carbon neutral
            </h4>
            <ul className="meta">
              <li className="difficulty">Difficulty: Easy</li>
              <li className="time">Time: 5 minutes</li>
              <li className="impact">Impact: Significant</li>
            </ul>
            <p>If you've completed the above three steps, you've already made amazing progress. Unfortunately there are still many things in your life that produce greenhouse gas emissions -- from the manufacture of the clothes you wear to the dinner you ate last night. We'll try to  eliminate each of those problems later.</p>
            <p>For now, you can take another great step forward by paying Climeworks $7 to remove carbon from the atmosphere.</p>
            <p>
              If everyone in the world signed up online to become a Climeworks
              Explorer, we'd remove{" "}
              <strong> 
                663 billion kilograms of carbon from the atmosphere every year. 
              </strong>
               {" "}That sounds like a lot but it's actually only 1.3% of the 51 trillion kilograms we collectively emmit per year. It's a small step, but it could be very important.
            </p>
            <p>The more people invest in carbon extraction technologies, the more efficient they'll become. And we need them to be more efficient. So making this tiny investment of £6 per month is a big step in the right direction -- providing we can get enough people to do it. That's where the next steps come in.</p>
            <p>
              Become a climate hero and remove 85kg of carbon dioxide right now for
              just &pound;6:
            </p>
            <div className="cta">
              <a href="https://climeworks.com/subscriptions">Remove CO2</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


