import React from "react";
import { HashLink } from 'react-router-hash-link';
import SaveTheWorldClimateChange from "../SaveTheWorldClimateChange";

import Aos from 'aos'
import 'aos/dist/aos.css'
const SustainableElectricity = () => {
  React.useEffect(() => {
    Aos.init({duration:1500});
    window.scrollTo(0, 0);
  }, [])
  return (
    
    <main className="article campaign electricity feature-article">
      <header className="entry-header high-impact-viewport x">
        <div className="text c l6" data-aos="fade-up" >
          <h1 className="headline">
            Carbon Neutral Electricity Suppliers: Electricity from 100% Renewables
          </h1>
          <p className="standfirst">
            The first thing you need to do if you want to stop climate change is change your electricity to a supply produced using 100% renewables like wind and solar. As a result you can power your home, heating, air conditioning and car without increasing green house gas emissions.
          </p>
          <p>To get started, select one of the carbon neutral electricity suppliers below.</p>
          <p className='cta with-icon with-pulsing-icon'>
            <HashLink to='#business-rankings'>View the suppliers</HashLink>
          </p>
          <div className='mouse_scroll'>
            <div className='mouse'>
              <div className='wheel'></div>
            </div>
            <div>
              <span className='m_scroll_arrows unu'></span>
              <span className='m_scroll_arrows doi'></span>
              <span className='m_scroll_arrows trei'></span>
            </div>
          </div>
        </div>
      </header>
      <div className="grid">
        <div className="x">
          <div className="c l7 entry-content" id="business-rankings">
            <div className="business-rankings" id="united-states">
              <h2>UNITED STATES</h2>
              <section data-aos="fade-up-right" >
                <h2>1. Dominion Energy</h2>
                <ul className="key-facts">
                  <li><strong>Founded:</strong> Virginia, U.S. (1983)</li>
                  <li><strong>Available In:</strong> Idaho, North Carolina, Ohio, South Carolina, Utah, Virginia, West Virginia, Wyoming</li>
                  <li><strong>Service Name:</strong> Dominion (Electricity, Natural Gas)</li>
                  <li><strong>Energy Sources:</strong> Solar, Wind, Hydroelectric, Biomass</li>
                </ul>
                <p>Dominion Energy, Inc. is carbon-neutral electricity and natural gas supplier to residential, commercial, and wholesale clients. Additionally, it operates a controlled interstate natural gas transmission pipeline and a regulated underground natural gas storage facility.</p>
              </section>
              <section data-aos="fade-up-left" >
                <h2>2. Ecotricity</h2>
                <ul className="key-facts">
                  <li><strong>Founded:</strong> Stroud, U.K. (1996)</li>
                  <li><strong>Available In:</strong> United Kingdom</li>
                  <li><strong>Service Name:</strong> Ecotricity (Green Energy Supplier)</li>
                  <li><strong>Energy Sources:</strong> Wind, Solar, Gas</li>
                </ul>
                <p>Ecotricity is one of the oldest renewable energy companies, having been founded in 1996. They promise 100 percent green power and carbon-neutral green gas as one of the world's first green energy companies.</p>
              </section>
              <section data-aos="fade-up-right" >
                <h2>3. Octopus Energy</h2>
                <ul className="key-facts">
                  <li><strong>Founded:</strong> London, U.K. (2015)</li>
                  <li><strong>Available In:</strong> United Kingdom, Germany, United States</li>
                  <li><strong>Service Name:</strong> Octopus Energy (Gas, Hydrogen, Electricity, Electric Vehicles, Heat Pumps)</li>
                  <li><strong>Energy Sources:</strong> Solar, Wind, Hydro</li>
                </ul>
                <p>Octopus is another significant participant in the renewable energy supply chain, with its strapline, 'doing energy better.' Octopus Energy exclusively uses renewable energy to power its consumers. They began operations in 2016 and currently supply over 1.4 million households in the United Kingdom.</p>
              </section>
              <section data-aos="fade-up-left" >
                <h2>4. EnergyAustralia</h2>
                <ul className="key-facts">
                  <li><strong>Founded:</strong> Melbourne, Australia (1995)</li>
                  <li><strong>Available In:</strong> Victoria, New South Wales and South Australia</li>
                  <li><strong>Service Name:</strong> EnergyAustralia (Electricity and natural gas retail, solar and batteries)</li>
                  <li><strong>Energy Sources:</strong> Thermal coal, Natural gas, hydroelectric, Solar energy, And wind power.</li>
                </ul>
                <p>EnergyAustralia offers 100% carbon neutral electricity to its customers. EnergyAustralia provides electricity and natural gas to over 2.6 million residential and commercial customers throughout Australia.</p>
              </section>
              <section data-aos="fade-up-right" >
                <h2>5. Tata Power Solar</h2>
                <ul className="key-facts">
                  <li><strong>Founded:</strong> Mumbai, India (1989)</li>
                  <li><strong>Service Name:</strong> Tata Power Solar Systems Limited (Solar Energy)</li>
                  <li><strong>Available In:</strong> India</li>
                  <li><strong>Energy Sources:</strong> Solar Energy</li>
                </ul>
                <p>It is a part of the Tata Group and the country's biggest integrated solar power company. It operates in three business segments: solar cell and module manufacturing, solar power project EPC, and other solar services.</p>
              </section>
              <section data-aos="fade-up-left" >
                <h2>6. ReNew Power</h2>
                <ul className="key-facts">
                  <li><strong>Founded:</strong> Gurugram, India (2011)</li>
                  <li><strong>Service Name:</strong> ReNew Energy Global Plc</li>
                  <li><strong>Available In:</strong> India</li>
                  <li><strong>Energy Sources:</strong> Solar And Wind Energy</li>
                </ul>
                <p>ReNew Power Ventures is an independent generator of electricity. Solar and wind power are two non-conventional energy sources used by the company. Power from the plant is sold to Indian state electricity boards and major industrial firms.</p>
              </section>
              <section data-aos="fade-up-right" >
                <h2>7. Ovo Energy</h2>
                <ul className="key-facts">
                  <li><strong>Founded:</strong> Bristol, U.K. (2009)</li>
                  <li><strong>Service Name:</strong> Ovo Energy (Electricity And Gas)</li>
                  <li><strong>Available In:</strong> United Kingdom, Australia</li>
                  <li><strong>Energy Sources:</strong> Wind, Solar, Hydro, Coal, Natural Gas, Nuclear</li>
                </ul>
                <p>Ovo energy offers renewable and carbon-neutral energy, and now through a partnership with Woodland Trust, Ovo has made a commitment to plant a tree in its customer's name every year. Ovo, which uses 100 percent renewable electricity, also provides 100 percent carbon-neutral gas to the Ovo Beyond scheme members.</p>
              </section>
              <section data-aos="fade-up-left" >
                <h2>8. IOGEN Corporation</h2>
                <ul className="key-facts">
                  <li><strong>Founded:</strong> Ontario, Canada (1975)</li>
                  <li><strong>Service Name:</strong> IOGEN Corporation (Biomass, Bioenergy, Biofuels)</li>
                  <li><strong>Available In:</strong> Canada</li>
                  <li><strong>Energy Sources:</strong> Hydro, Biofuel, Biomass</li>
                </ul>
                <p>IOGEN corporation is a prominent Canadian renewable energy company that innovates, creates, develops, implements, and scales up methods for producing cellulosic biofuels as a sustainable transportation fuel. They are a market leader in biofuels and assist their partners in developing the most efficient, dependable, and cost-effective systems for producing advanced biofuels with minimal emissions.</p>
              </section>
              <section data-aos="fade-up-right" >
                <h2>9. Innergex Renewable Energy</h2>
                <ul className="key-facts">
                  <li><strong>Founded:</strong> Quebec, Canada (1990)</li>
                  <li><strong>Service Name:</strong> Innergex Renewable Energy</li>
                  <li><strong>Available In:</strong> Ontario, British Columbia, Idaho, North America</li>
                  <li><strong>Energy Sources:</strong> Hydro, Solar, Wind</li>
                </ul>
                <p>The company operates through four segments: hydroelectric production, wind energy generation, solar energy generation, and site development and management. It sells electricity generated by its operating hydroelectric facilities, wind farms, and solar farms to publicly held companies through its energy production segments.</p>
              </section>
              <section data-aos="fade-up-left" >
                <h2>10.  GEUK</h2>
                <ul className="key-facts">
                  <li><strong>Founded:</strong> Ware, U.K. (2001)</li>
                  <li><strong>Service Name:</strong> Green Energy U.K. (100% Renewable Energy)</li>
                  <li><strong>Available In:</strong> U.K.</li>
                  <li><strong>Energy Sources:</strong> Solar, Wind, Biomass, Hydro</li>
                </ul>
                <p>GEUK provides 100% green gas and 100% green electricity in the United Kingdom, making them the genuinely sustainable option. Unlike the others, which offset their carbon emissions, green energy U.K. generates all of the gas it provides via anaerobic digestion.</p>
              </section>
              <section data-aos="fade-up-right" >
                <h2>11.  AGL</h2>
                <ul className="key-facts">
                  <li><strong>Founded:</strong> Sydney, Australia (1837)</li>
                  <li><strong>Service Name:</strong> AGL (Electricity, Gas, Internet And Mobile)</li>
                  <li><strong>Available In:</strong> Australia</li>
                  <li><strong>Energy Sources:</strong> Thermal, Natural Gas, Wind, Hydro, Solar, Gas Storage And Coal seam gas sources</li>
                </ul>
                <p>AGL Energy Ltd is a publicly-traded carbon neutral company in Australia that is involved in producing and selling electricity and natural gas for residential and commercial usage. The company now has a capacity of 10,984 megawatts.</p>
              </section>
              <section data-aos="fade-up-left" >
                <h2>12.  Momentum Energy</h2>
                <ul className="key-facts">
                  <li><strong>Founded:</strong> Tasmania, Australia (2002)</li>
                  <li><strong>Service Name:</strong> Momentum Energy Pty Ltd (Gas And Electricity Providers)</li>
                  <li><strong>Available In:</strong> Melbourne, Victoria, Tasmania</li>
                  <li><strong>Energy Sources:</strong> Hydroelectricity</li>
                </ul>
                <p>Momentum Energy is an Australian gas and electricity company headquartered in Melbourne with support teams throughout Victoria and Tasmania. The company has satisfied more than 250,000 customers and still going on.</p>
              </section>
              <section data-aos="fade-up-left" >
                <h2>13. Brookfield Renewable Partners</h2>
                <ul className="key-facts">
                  <li><strong>Founded:</strong> Bermuda (2011)</li>
                  <li><strong>Service Name:</strong> Brookfield Renewable</li>
                  <li><strong>Available In:</strong> North and South America, Europe, India and China</li>
                  <li><strong>Energy Sources:</strong> Hydro, Solar, Wind</li>
                </ul>
                <p>Brookfield Renewable U.S. offers cutting-edge renewable energy solutions that move the world closer to a low-carbon, long-term future. Brookfield Renewables is a market leader in renewable energy on a worldwide scale. It is one of the world's biggest hydroelectric power generators, accounting for more than 62% of its portfolio in 2021.</p>
              </section>
              <section data-aos="fade-up-right" >
                <h2>14. Duke Energy</h2>
                <ul className="key-facts">
                  <li><strong>Founded:</strong> Charlotte, North Carolina, United States (1904)</li>
                  <li><strong>Service Name:</strong> Duke Energy (Electric Power And Natural Gas)</li>
                  <li><strong>Available In:</strong> Carolinas, Florida, Ohio, Kentucky and Indiana</li>
                  <li><strong>Energy Sources:</strong> Hydroelectric, Natural Gas and Oil, Nuclear</li>
                </ul>
                <p>Duke's utilities provide 7.7 million customers electricity and 1.6 million natural gas throughout six states. The company aims to become carbon zero by 2050.</p>
              </section>
              <section data-aos="fade-up-left" >
                <h2>15. Clearway Energy</h2>
                <ul className="key-facts">
                  <li><strong>Founded:</strong> New Jersey, United States (2012)</li>
                  <li><strong>Service Name:</strong> Clearway Energy</li>
                  <li><strong>Available In:</strong> United States, Houston, San Francisco, Houston, Princeton, Carlsbad</li>
                  <li><strong>Energy Sources:</strong> Wind, Solar, Natural Gas</li>
                </ul>
                <p>Clearway Energy is one of the biggest renewable energy owners in the United States. It augments its wind and solar energy assets portfolio with highly efficient natural gas power plants and district energy assets. Clearway also sells its electricity via PPAs, which provide the company with a consistent financial flow.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="save-the-world-components">
        <SaveTheWorldClimateChange />
      </div>
    </main>
  );
};

export default SustainableElectricity;
