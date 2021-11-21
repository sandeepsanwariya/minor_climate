import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import SaveTheWorldClimateChange from "../SaveTheWorldClimateChange";
import Aos from 'aos'
import 'aos/dist/aos.css'
import {motion} from  'framer-motion'
const BusinessRankings = () => {
  React.useEffect(() => {
    Aos.init({duration:1500});
    window.scrollTo(0, 0);

  }, [])
  return (
    <motion.div
    initial={{x:"50vw",y:'0vh', opacity:0.0}} 
    animate={{x:"0vw",y:"0vh", opacity:1}}
    exit={{opacity:0}}
    transition={{type:"spring",stiffness:'120'}}
    >
    <main className="category">
      <header className="category-header">
        <div data-aos="fade-up" class="grid">
          <div className="x">
            <div className="c l7">
              <h1 data-aos="fade-up" className="headline">Sustainable Business Rankings</h1>
              <p data-aos="fade-up" className="standfirst">
                If you want to stop climate change you need to vote for
                businesses that are doing the least damage to the environment by
                choosing their products and services. If you keep giving money
                to businesses that are causing climate change, we'll never stop
                climate change. You have the power to make the choice to change
                the world.
              </p>
              <p data-aos="fade-up">
                This page features brands that are doing the least damage to the
                environment.
              </p>
            </div>
          </div>
        </div>
      </header>
      <ul className="grid article-list vertical-list">
        <li className="x">
          <div className="c t4 image">
            <Link to="/carbon-neutral-electricity-suppliers/">
              <img src="./assets/img/businesses/electricity/renewable-energy-wind-turbines-thumb.jpg" alt="Sustainable energy" />
            </Link>
          </div>
          <div data-aos="fade-up" className="c t8">
            <h2>
              <Link to="/carbon-neutral-electricity-suppliers/">
                Carbon Neutral Electricity Suppliers
              </Link>
            </h2>
            <p>
              Switching your property's electricity supply to a renewable energy supplier is the first step you need to take to stop climate change. Pick a supplier from this list frequently updated full list of carbon neitral suppliers and make the switch today.
            </p>
          </div>
        </li>
        <li data-aos="fade-up" className="x">
          <div className="c t4 image">
            <Link to="/carbon-neutral-electricity-suppliers/">
              <img src="./assets/img/businesses/electric_cars_header_thumb.jpg" alt="Electric car charging" />
            </Link>
          </div>
          <div className="c t8">
            <h2>
              <Link to="/electric-cars/">
                Longest Range Electric Cars
              </Link>
            </h2>
            <p>
              Full and updated list of all electric cars ordered by range, with process in US dollars and British pounds.
            </p>
          </div>
        </li>
        <li  data-aos="fade-up" className="x">
          <div className="c t4 image">
            <Link to="/sustainable-banks/">
              <img src="./assets/img/businesses/sustainable_banks_header_thumb.jpg" alt="Ethical bank" />
            </Link>
          </div>
          <div className="c t8">
            <h2>
              <Link to="/sustainable-banks/">
                Fossil Fuel Free Bank Accounts
              </Link>
            </h2>
            <p data-aos="fade-up">
              You may not realise this but banks invest your money in fossil
              fuel businesses. By simply closing your bank account and opening
              one of these fossil fuel free bank accounts you are reducing
              demand for the fossil fuels that most banks invest in. If
              everyone did this, eventually fossil fuel businesses would cease
              to exist and we'd stop burning fossil fuels.
            </p>
          </div>
        </li>
        <li className="x">
          <div className="c t4 image">
            <Link to="/sustainable-beers/">
              <img src="./assets/img/businesses/beer-thumb.jpg" alt="Beer" />
            </Link>
          </div>
          <div data-aos="fade-up" className="c t8">
            <h2>
              <Link to="/sustainable-beers/">Fossil Fuel Free Beers</Link>
            </h2>
            <p>
              You may not realise this but banks invest your money in fossil
              fuel businesses. By simply closing your bank account and opening
              one of these fossil fuel free bank accounts you are reducing
              demand for the fossil fuels that most banks invest in. If
              everyone did this, eventually fossil fuel businesses would cease
              to exist and we'd stop burning fossil fuels.
            </p>
          </div>
        </li>
        <li className="x">
          <div className="c t4 image">
            <Link to="/sustainable-broadband/">
              <img src="./assets/img/businesses/broadband_header_thumb.jpg" alt="Broadband" />
            </Link>
          </div>
          <div data-aos="fade-up" className="c t8">
            <h2>
              <Link to="/sustainable-broadband/">
                Broadband Packages Ranked by Carbon Emissions
              </Link>
            </h2>
            <p>
              You may not realise this but banks invest your money in fossil
              fuel businesses. By simply closing your bank account and opening
              one of these fossil fuel free bank accounts you are reducing
              demand for the fossil fuels that most banks invest in. If
              everyone did this, eventually fossil fuel businesses would cease
              to exist and we'd stop burning fossil fuels.
            </p>
          </div>
        </li>
      </ul>
      <SaveTheWorldClimateChange />
    </main>
    </motion.div>
  );
};

export default BusinessRankings;
