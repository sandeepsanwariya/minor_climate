import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import Aos from 'aos'
import 'aos/dist/aos.css'
export default function SellCar() {
  React.useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  return (
    <section className="save-the-world-component">
      <div className="grid">
        <div data-aos="fade-up" className="x">
          <div className="c t4 hero-level">
            <h3 className="subhead">
              Become a <strong>level 2 Climate Hero</strong>
            </h3>
          </div>
          <div data-aos="fade-up-left" className="c t8">
            <h4 className="headline">Sell your gas powered car and switch to electric</h4>
            <ul className="meta">
              <li className="difficulty">Difficulty: High</li>
              <li className="time">Time: 60+ minutes</li>
              <li className="impact">Impact: Significant</li>
            </ul>
            <p>Next you're going to need to sell your gas powered car, if you own one. Do this as soon as possible because the value of gas powered cars is going to reduce dramatically year after year from now on.</p>
            <p>If you need a car, you'll have to buy an electric car. It's not exactly ideal in terms of reducing emmissions because producing cars (even electric cars) causes a lot of carbon emissions in order to produce the steel and manufacture the car. But if people must use cars, this is a sensible and logical step.</p>
            <p>We can't expect everyone to dump their gas cars and never drive again. It's not realistic. Instead we all need to switch to electric cars.</p>
            <p>
              If you need a car, switch to an electric car and charge it at home using your renewable energy. 
            </p>
            <div className="cta">
              <Link to="electric-cars">
                Browse electric cars, ordered by range
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

